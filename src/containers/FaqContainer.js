import React from 'react';
import Faq from '../components/Faq';

const FaqContainer = () => {
  // to add a faq, just need to add it to this list
  document.getElementById('html').className='grey-bg-extend';
  const faqList = [
    {
      q: "Wait, is this literally just free stuff?",
      a: "With your $25 Cannonball Ticket, you get a gift card of equal value AND the chance to win awesome raffle prizes (over $3,000 worth of prizes to be won) and/or the Cannonball Photo Contest cash prize (up to $500)! So really, it isn’t costing you any money.",
    },
    {
      q: "Do I have to go to the Cannonball 2T1 call?",
      a: "No! The whole idea of Cannonball 2T1 is that it can be whatever you want! There will be games, good vibes and music, but we understand that zoom fatigue is real. If you don’t attend the call, you can still win raffle prizes/the Cannonball Photo Contest. Winners will be contacted by email, regardless of if they attend the call.",
    },
    {
      q: "Should I dress up for the Cannonball 2T1 call?",
      a: "Up to you! To fit with the choose your own adventure theme, feel free to come dressed however you wish! Whether it be in your finest outfit, your warmest PJs, or that halloween costume that you want to show off a bit more, everything is welcome! Don’t forget to submit a photo to the Cannonball Photo contest for a chance to win a $500 visa gift card!",
    },
    {
      q: "How will the photo contest be judged?",
      a: "Photo submission to the Cannonball Photo Contest will be open from noon to 10pm EST on January 16th. Photos will be judged by Skule’s very own: Mario Baker, Chief and Bnad. The photos will be judged on creativity and should showcase how you are spending your Cannonball 2T1 adventure. Winners will be announced at 10:30pm on the Cannonball Discord call. Winners will also be notified by email.",
    },
    {
      q: "If I win the Engineering Stores Mystery Box, how will I get it?",
      a: "You will have the option to have it shipped to you (which we will cover the cost of) or arrange a time to pick it up from campus.",
    },
  ]

  return (
    <Faq faqList={faqList} />
  );
};

export default FaqContainer;
