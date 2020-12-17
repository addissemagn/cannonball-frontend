import React from 'react';
import Success from '../components/Success';

const PaymentSuccessContainer = () => {
  // to add a faq, just need to add it to this list
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
