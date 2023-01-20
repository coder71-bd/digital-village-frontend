import React, { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { MdQuestionAnswer } from 'react-icons/md';
import Lottie from 'react-lottie';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import animationData from '../../../../lotties/faq.json';

const datas = [
  {
    id: '1',
    title:
      'What to do if you do not get OTP at the last stage of registration?',
    description:
      'You can resend OTP. If you accidentally close the OTP payment screen, you can re-register.',
  },

  {
    id: '2',
    title: 'How to register for vaccine online?',
    description:
      'You can register by accessing the web portal or by downloading the "Security" app from the Google Play Store. See "Help" on the detailed web portal.',
  },
  {
    id: '3',
    title: 'I have registered for the vaccine online, what should I do next?',
    description:
      'Collect vaccine cards from web portals. Later, the date and center of the vaccine will be informed via SMS on the mobile phone.',
  },
  {
    id: '4',
    title: 'How to verify post-registration status for vaccine online?',
    description:
      'You can find out the status of registration by verifying the national identity card and mobile number from the "Registration Status" menu on the web portal.',
  },
  {
    id: '5',
    title: 'How do I get a vaccine card for vaccination?',
    description:
      'You can collect the vaccine card by verifying the national identity card and mobile number from the Vaccine Card Collection menu on the web portal.',
  },
  {
    id: '6',
    title: 'How do I know the center and date for receiving the vaccine?',
    description:
      'After the successful registration for the vaccine, the date and center of the vaccine will be informed via SMS on the mobile phone at a later time..',
  },
];

const FrequentlyAsked = () => {
  const [active, setActive] = useState('');
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6  px-0 ">
      <h2 className=" font-bolder text-xl md:text-3xl  lg:text-4xl text-blue-700  lg:leading-9 md:leading-7 leading-9  dark:text-dark_text">
        Frequently Asked Questions
      </h2>
      <div className=" flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
        <div className=" ">
          <p className=" font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 pt-4 ">
            Here are few of the most frequently asked questions by our valueable
            users
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center  md:flex-row md:space-x-8 md:mt-16 mt-8 ">
        <div className="w-fit mx-0 md:mx-auto">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
            width={isDesktop ? 500 : isTablet ? 400 : 250}
          />
        </div>
        <div className=" md:w-1/2  w-full md:mt-0 sm:mt-14 mt-10">
          {/* <!-- Digital Section --> */}

          {datas.map((data) => (
            <div>
              <div>
                <div className=" cursor-pointer">
                  {active && data.id === active ? (
                    <div
                      onClick={() => setActive('')}
                      className="flex justify-between items-center "
                    >
                      <h3 className=" w-4/5 font-semibold text-xl leading-5 text-gray-800">
                        {data.title}
                      </h3>
                      <MdQuestionAnswer
                        className=" transition duration-700 ease-in-out text-blue-700"
                        custome
                        size={30}
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => setActive(data?.id)}
                      className="flex justify-between items-center "
                    >
                      <h3 className=" w-4/5 font-semibold text-xl leading-5 text-gray-800">
                        {data.title}
                      </h3>
                      <FaQuestion
                        className=" transition duration-700 ease-in-out text-blue-700"
                        custome
                        size={30}
                      />
                    </div>
                  )}
                </div>
                <p
                  className={
                    'font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 ' +
                    (data.id === active ? 'block' : 'hidden')
                  }
                >
                  {data?.description}
                </p>
              </div>
              <hr className=" my-7 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
