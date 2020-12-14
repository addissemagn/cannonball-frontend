import React, { useEffect, useState } from 'react';
import LogoCannonball from './assets/icons/LogoCannonball';
import Countdown from './components/Countdown';
import Header from './components/Header';
import Title from './components/Title';
import SignUp from './views/SignUp';
import "./App.css";
import "./Animations.css";
import Button from './components/Button';

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51Hy2Q4CnQUzeeHwZsET84TUMgurCpxC1X3DyiruYj3RhEC8Se1HORNI5E8jbOGaJXsULXTW8OnOUNRV4k9xDPNj300kucZsGJ9");

const App = () => {
  const [loading, setLoading] = useState(true);
  const [day, setDay] = useState(true);
  const [step, setStep] = useState('landing');

  // Simulates loading for 3s
  setTimeout(function(){
    setLoading(false);
  }, 1500);

  useEffect(()=>{
    const daySteps = ['landing'];
    const nightSteps = ['signUp'];

    if (daySteps.includes(step)) {
      setDay(true);
    } else if (nightSteps.includes(step)){
      setDay(false)
    }
  }, [step])

  if (loading) {
    return (
      <div className="loading-card">
        <LogoCannonball width="120" />
      </div>
    )
  }

  return (
    <div className={day ? "card day" : "card night"}>
      {!day && (
        <>
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="castle"></div>
        </>
      )}
      <div className="background"></div>
      <Header
        onClickSignUp={() => setStep('signUp')}
        onClickHome={() => setStep('landing')}
        day={day}/>
      {step === 'landing' && (
        <div className="content">
          <Title text="Coming Soon" day={day}/>
          <Countdown finalDate="2021-01-16" day={day}/>
          <Button text="Find out more on Instagram" link="https://instagram.com" />
        </div>
      )}
      {step === 'signUp' && (
        <ShowSignUp />
      )}
      <div className="footer">
        <span>Questions? Well, we've got answers at <a className="underlined" href="mailto:cannonball@skule.ca" target="_blank" rel="noopener noreferrer">cannonball@skule.ca</a>.</span>
      </div>
    </div>
  );
}

// Handles all sign up and returns form
const ShowSignUp = () => {
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
    console.log('hello')
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

    if (errs) {
      setFieldErrors(errs);
    } else {
      await stripeHandler();
      await registrationHandler();
    }
  }

  const rafflePrizes = [
    { label: "$200 Donation (your choice of charity)", name: "donation" },
    { label: "$100 Steam Gift Card", name: "steam" },
    { label: "$100 Amazon Gift Card", name: "etsy" },
    { label: "$100 Etsy Gift Card", name: "amazon" },
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
    <SignUp user={userParams} raffleParams={raffleParams} rafflePrizes={rafflePrizes} fieldErrors={fieldErrors} handleInputChange={handleInputChange} handleRaffleChange={handleRaffleChange} handleSubmit={handleSubmit} />
  );
};

export default App;