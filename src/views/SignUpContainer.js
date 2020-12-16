import React, { useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";

import SignUpForm from './SignUpForm';

const stripePromise = loadStripe("pk_test_51Hy2Q4CnQUzeeHwZsET84TUMgurCpxC1X3DyiruYj3RhEC8Se1HORNI5E8jbOGaJXsULXTW8OnOUNRV4k9xDPNj300kucZsGJ9");

// Handles all sign up and returns form
const SignUpContainer = () => {
  const userFieldsDefault = {
    firstName: '',
    lastName: '',
    emailuoft: '',
    email: '',
    gift: '',
    raffle: '',
    agreeMedia: ''
  };

  const [userParams, setUserParams] = useState({
    ...userFieldsDefault,
    raffle: {},
    agreeMedia: false
  });
  const [fieldErrors, setFieldErrors] = useState(userFieldsDefault);

  const isEmpty = (value) => value === '';
  const required = (value) => isEmpty(value) ? 'Required field.' : '';

  const validateUserParams = (params) => {
    const errs = userFieldsDefault;
    errs.firstName = required(params.firstName);
    errs.lastName = required(params.lastName);
    errs.emailuoft = required(params.emailuoft);
    errs.email = required(params.email);
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

  const stripeHandler = async() => {
    // STRIPE
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:5000/create-stripe-session", {
        method: "POST",
      }
    );
    const session = await response.json();
    // redirect user to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error.message);
    }
  }

  const registrationHandler = async() => {
    // REGISTER
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(userParams),
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
    const errs = validateUserParams(userParams);
    console.log(userParams);

    if (errs) {
      setFieldErrors(errs);
    } else {
      await stripeHandler();
      await registrationHandler();
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
    <SignUpForm user={userParams} raffleParams={raffleParams} rafflePrizes={rafflePrizes} fieldErrors={fieldErrors} handleInputChange={handleInputChange} handleRaffleChange={handleRaffleChange} handleSubmit={handleSubmit} />
  );
};

export default SignUpContainer;
