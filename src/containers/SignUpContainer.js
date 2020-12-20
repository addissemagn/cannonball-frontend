import React, { useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";

import SignUpForm from '../components/SignUpForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

// Handles all sign up and returns form
const SignUpContainer = () => {
  const userFieldsDefault = {
    firstName: '',
    lastName: '',
    emailuoft: '',
    email: '',
    gift: '',
    raffle: '',
  };

  const [userParams, setUserParams] = useState({
    ...userFieldsDefault,
    raffle: {},
    paymentSuccess: false,
  });
  const [fieldErrors, setFieldErrors] = useState(userFieldsDefault);

  const isEmpty = (value) => value === '';
  const required = (value) => isEmpty(value) ? 'Required field.' : '';


  const emailFormatValidator = (type, email) => {
    const validators = {
      email: /\S+@\S+\.\S+/,
      emailuoft: /^[^@\s]+@mail.utoronto.ca$/i,
    }

    const valid = validators[type].test(email);

    if(valid) {
      return '';
    }

    switch (type) {
      case 'email': return 'Invalid email format.';
      case 'emailuoft': return 'Invalid uToronto email format (@mail.utoronto.ca).';
      default: return '';
    }
  }

  const emailExistsError = async (type, email) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/${type}/${email}`, {
        method: "GET",
      });

      const exists = (await res.json()).exists;
      return exists ? 'Ticket with this email exists. Only one ticket per person.' : '';
    } catch (err) {
      console.log(err);
    }
  }

  const validateUserParams = async (params) => {
    const errs = userFieldsDefault;
    errs.firstName = required(params.firstName);
    errs.lastName = required(params.lastName);
    errs.emailuoft =
      required(params.emailuoft) ||
      emailFormatValidator("emailuoft", params.emailuoft) ||
      (await emailExistsError("emailuoft", params.emailuoft));
    errs.email =
      required(params.email) ||
      emailFormatValidator("email", params.email) ||
      (await emailExistsError("email", params.email));
    errs.gift = required(params.gift);
    let countRaffle = 0
    Object.keys(params.raffle).forEach((key) => {
      if (params.raffle[key] === true) { countRaffle += 1 }
    })
    errs.raffle = countRaffle !== 3 ? 'Must choose 3 items.' : '';

    let noErrs = true;
    Object.keys(errs).forEach((key) => {
      if(errs[key] !== '') {
        noErrs = false;
      }
    })

    return noErrs ? null : errs;
  };

  const handleInputChange = (event) => {
    let { name, value, checked } = event.target;
    const checkboxFields = ['agreeMedia'];

    if (checkboxFields.includes(name)) { value = checked; }

    // update field
    const updatedParams = { ...userParams, [name]: value };
    setUserParams(updatedParams);

    // // update errors for this field
    // const errs = validateUserParams(updatedParams);
    // setFieldErrors({...fieldErrors, [name]: errs[name] });
  };

  const paymentHandler = async() => {
    // STRIPE
    const stripe = await stripePromise;
    const response = await fetch(`${process.env.REACT_APP_API_URL}/create-checkout-session`, {
        method: "POST",
        body: JSON.stringify(userParams),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const session = await response.json();
    console.log(session);

    await registrationHandler(userParams);

    // redirect user to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error.message);
    }
  }

  const registrationHandler = async(user) => {
    // REGISTER
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status >= 200 && res.status < 300) {
        console.log(res);
        // window.location.reload();
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errs = await validateUserParams(userParams);
    console.log(userParams);
    console.log(errs);

    if (errs) {
      setFieldErrors(errs);
    } else {
      await paymentHandler();
    }
  }

  // to add a prize, just need to add it to this list
  const rafflePrizes = [
    { label: "$200 Donation to Your Choice of Charity", name: "donation" },
    { label: "2 Tickets to the Illusionarium Exhibit", name: "illusionarium" },
    { label: "Bike Share Toronto Annual Membership", name: "bikeshare" },
    { label: "Engineering Stores Mystery Box of $140 value", name: "stores" },
    { label: "$100 Steam Gift Card", name: "steam" },
    { label: "$100 Amazon Gift Card", name: "etsy" },
    { label: "$100 Etsy Gift Card", name: "amazon" },
    { label: "$100 Indigo Gift Card", name: "indigo" },
    { label: "$100 Tim Hortons Gift Card", name: "timhortons" },
    { label: "$100 UofT Bookstore Gift Card", name: "bookstore" },
  ];

  const raffleInitialState = {};
  rafflePrizes.forEach((prize) => (raffleInitialState[prize.name] = false));

  const [raffleParams, setRaffleParams] = useState(raffleInitialState);

  const handleRaffleChange = (event) => {
    const updateRaffle = {
      ...raffleParams,
      [event.target.name]: event.target.checked,
    };
    setRaffleParams(updateRaffle);
    handleInputChange({ target: { name: "raffle", value: updateRaffle } });
  };

  return (
    <SignUpForm
      user={userParams}
      raffleParams={raffleParams}
      rafflePrizes={rafflePrizes}
      fieldErrors={fieldErrors}
      handleInputChange={handleInputChange}
      handleRaffleChange={handleRaffleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
