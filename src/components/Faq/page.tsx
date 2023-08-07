import React, { useState } from 'react';
import PlusIcon from '@/public/svgs/PlusIcon';
import MinusIcon from '@/public/svgs/MinusIcon';
import Reveal from '../utils/Reveal';

const faqs:{tag: number, title: string, description: string}[] = [
  { tag: 1, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 2, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 3, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 4, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 5, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 6, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
  { tag: 7, title: "What to double down on accuracy, efficiency, and time management", description: "Laoreet conubia parturient lacinia pulvinar senectus vel posuere proin nec montes dapibus, elementum blandit sem et massa ornare habitasse cursus." },
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