import React, { useState } from 'react';
import PlusIcon from '@/public/svgs/PlusIcon';
import MinusIcon from '@/public/svgs/MinusIcon';
import { Reveal } from '../utils/Reveal';

const faqs:{tag: number, title: string, description: string}[] = [
  { tag: 1, title: "How long does it take for you to deliver after payment?", description: "12-16 weeks" },
  { tag: 2, title: "What products do you import?", description: "Turkish, Japanese, German, American and generally European products of high quality." },
  { tag: 3, title: "Do you import from China?", description: "No" },
  { tag: 4, title: "How much do you sell a lift or an elevator or escalator?", description: "It depends of the size and height of the elevator. We will give quotation on demand. Our quotation usually comes after our inspection of the site." },
  { tag: 5, title: "Do you have elevators that are already available in Nigeria?", description: "We don’t usually manufacture and keep. When we receive your order, we pass across to the manufacturers in Europe and America." },
  { tag: 6, title: "How long does it take to install an elevator?", description: "About three weeks to one month" },
  { tag: 7, title: "Do I need to provide anything for your installation?", description: "Yes – you are to provide power and scaffolder" },
  { tag: 8, title: "Can I visit the previous work that you have done?", description: "Yes. Contact our office for an appointment.  On appointment, we will take you to our recent sites " },
  { tag: 9, title: "Can I see and interact with your past customers?", description: "Yes. For your verifications below are the list of customers we recently worked for." },
];


const Faq = () => {

  const [showFaq, setShowFaq] = useState<boolean>(false);
  const [activeTag, setActiveTag] = useState<number>(0);

  return (
    <div className='py-20 mt-36 bg-white w-[90%] mx-auto'>
      <Reveal>
        <div className='text-center font-tillitium text-primaryblack w-[90%] leading-loose mx-auto'><span className='lg:text-[32px] sm:text-2xl text-lg font-bold'>WE MAY HAVE THE <span className='text-primarypink leading-loose'>SOLUTION</span> TO </span> <br /> <span className='lg:text-[64px] sm:text-4xl text-3xl font-bold'>YOUR <span className='text-primarypink'>ELEVATOR</span> NEEDS.</span></div>
      </Reveal>
      <div className='mt-14 lg:w-[60%] mx-auto'>
        <div className='flex gap-10'>
          <div className='w-full'>
            {faqs.map((faq, index) => (
              <Reveal key={index}>
                <React.Fragment key={index}>
                <div onClick={() => {
                  setShowFaq(!showFaq)
                  setActiveTag(faq.tag)
                }} className="border-t w-full h-[87px] cursor-pointer px-5 items-center flex justify-between">
                  <p className={`lg:text-xl md:text-sm text-xs font-semibold font-tillitium w-[85%] ${activeTag === index + 1 && showFaq === true ? "text-primarypink" : "text-black"}`}>{faq.title}</p>
                  <span>{activeTag === index + 1 && showFaq === true ? <MinusIcon /> : <PlusIcon />}</span>
                </div>
                {(showFaq && activeTag === index + 1) && <p className="lg:text-base text-sm pb-6 px-6 font-tillitium text-primaryblack">{faq.description}</p>}
              </React.Fragment>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;