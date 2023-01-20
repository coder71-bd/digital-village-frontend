import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import img from '../../../assets/events/message.png';
import ActionProvider from './ActionProvider';
import config from './config';
import MessageParser from './MessageParser';

const ChatBot = () => {
  return (
    <>
      <div className="mx-auto py-5">
        <h1 className="text-center text-2xl md:text-5xl md:py-4 text-blue-600">Conversation With us </h1>
        <p className="text-center px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem
          distinctio <br />
          aspernatur tenetur natus consequatur hic impedit voluptatibus nobis
          possimus!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 bg-white md:mx-10">
        <div className='md:col-span-3'>
          <img className="md:h-[500px] w-full  " src={img} alt="" />
        </div>
        
          <div className="bg-white w-[250px] mx-auto md:ml-24  ">
            <Chatbot
              className=""
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          </div>
        </div>
      
    </>
  );
};

export default ChatBot;
