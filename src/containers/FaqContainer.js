import React from 'react';
import Faq from '../components/Faq';
import faq from '../data/faq.json';

// through refactoring, this has turned into a redundant component
const FaqContainer = () => {
  // to add a faq, just need to add it to this list
  document.getElementById('html').className='grey-bg-extend';

  return (
    <Faq faqList={faq} />
  );
};

export default FaqContainer;
