import React, { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import AdventurePrompt from '../components/adventure/AdventurePrompt';
import AdventureEndScreen from '../components/adventure/AdventureEndScreen';
import AdventureError from '../components/adventure/AdventureError';
import adventure from '../data/adventure.json';

const AdventureContainer = () => {
  document.getElementById('html').className='green-bg-extend'
  const { width, height } = useWindowSize()

  const [steps, setSteps] = useState({
      curr: '0',
      all: ['0']
  })
  const [error, setError] = useState({})

  const goBack = () => {
    if (steps.all.length > 1) {
      setSteps({
          curr: steps.all[steps.all.length - 2],
          all: steps.all.slice(0, -1)
      })
    }
  }

  const startOver = () => {
    setSteps({
      curr: '0',
      all: ['0']
    })
    setError({})
  }

  const goToSuccess = () => {
    setSteps({
      curr: 'success',
      all: [...steps.all, 'success']
    })
    setError({})
  }

  const addStep = (step) => {
    if(step in adventure){
      setSteps({
          curr: step,
          all: [...steps.all, step]
      })
    } else {
      setError({
        prevStep: steps.all[steps.all.length - 1],
        currStep: step,
      })
    }
  }

  const [completed, setCompleted] = useState(false)

  const [user, setUser] = useState({
    emailuoft: '',
  })

  const [fieldErrors, setFieldErrors] = useState({
    emailuoft: '',
  })

  const handleInputChange = (event) => {
    let { name, value } = event.target;

    // update field
    const updatedParams = { ...user, [name]: value };
    setUser(updatedParams);
  };

  const registerEmailHandler = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/raffle`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status >= 200 && res.status < 300) {
          console.log(res);
          setCompleted(true)
        } else {
          console.log("Something went wrong");
        }
      } catch (err) {
        console.log(err);
      }
  }

  const emailExistsError = async (emailuoft) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/raffle/email/${emailuoft}`, {
        method: "GET",
      });

      const exists = (await res.json()).exists;
      return exists ? 'Email exists, only one extra entry per person!' : '';
    } catch (err) {
      console.log(err);
      return '';
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errs = {
      emailuoft: '',
    }

    const validFormat = (/^[^@\s]+@mail.utoronto.ca$/i).test(user.emailuoft)
    if(!validFormat) {
      errs.emailuoft = 'Invalid University of Toronto student email'
    } else {
      errs.emailuoft = await emailExistsError(user.emailuoft) || ''
    }

    if (errs.emailuoft) {
      setFieldErrors(errs);
    } else {
      setFieldErrors({
        emailuoft: ''
      });
      await registerEmailHandler();

      setCompleted(true);
    }
  }

  if (completed) {
    return (<AdventureEndScreen email={user.emailuoft} />)
  }

  if (Object.keys(error).length !== 0) {
    return (
      <AdventureError
        error={error}
        goToStart={startOver}
        goToSuccess={goToSuccess}
      />
    );
  }

  return (
    <>
      {adventure[steps.curr].status === "success" && (
        <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />
      )}
      <AdventurePrompt
        adventureList={adventure}
        step={steps.curr}
        changeStep={addStep}
        goBack={goBack}
        user={user}
        fieldErrors={fieldErrors}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleStartOver={startOver}
      />
    </>
  );
};

export default AdventureContainer;
