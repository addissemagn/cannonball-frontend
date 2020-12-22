import React, { useEffect } from 'react';
import Success from '../components/Success';

const PaymentSuccessContainer = ({ params }) => {
  const email = new URLSearchParams(params).get("email")

  useEffect(() => {
    const sendEmail = async (email) => {
      await fetch(`${process.env.REACT_APP_API_URL}/send/${email}`, {
          method: "POST",
        }
      );
    }
    sendEmail(email);
  }, [email]);

  const faqList = [
    {
      q: "What happens next?",
      a: "Idk, you tell me.",
    },
  ]

  return (
    <Success faqList={faqList} />
  );
};

export default PaymentSuccessContainer;
