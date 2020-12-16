import React from 'react';
import Faq from '../components/Faq';

const FaqContainer = () => {
  // to add a faq, just need to add it to this list
  const faqList = [
    {
      q: "What the heck is this?",
      a: "Idk, you tell me.",
    },
    {
      q: "What the heck is this?",
      a: "Idk, you tell me.",
    },
  ]

  return (
    <Faq faqList={faqList} />
  );
};

export default FaqContainer;
