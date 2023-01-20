import React from 'react';
import { Link } from 'react-router-dom';

const BreakingNews = ({news}) => {
  console.log(news);
  return (
    <div className="mt-[80px]" style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 mx-5 md:border-b-8 my-2 md:my-8 border-black">
        <div className="col-span-3 md:grid-cols-1 mx-5 md:border-r-4">
          <h1 className=" text-xl md:text-4xl md:mb-10  w-full ">BREAKING NEWS</h1>
          <hr className="md:border-b-8 mb-8" />
          <img
            className="w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOasSJt4tnq6Tvl_rIcG40kZ0GSvGi_NGQwQ&usqp=CAU"
            alt=""
          />

          <div className="my-5">
            {
              news.slice(0,2).map(n=><Link to={`/newsDetails/${n._id}`}>
            <span className="text-gray-500">{n?.date} / by </span>
            <span className="text-red-400"> Digital Village Authority</span>
            <h1 className="md:text-3xl text-sm font-bolder text-blue-800 my-3">
              {n?.title}
            </h1>
            <p>
              {n?.description.slice(0,80)}
            </p>
            <hr className="my-8" />

              </Link>)
            }
          </div>

        </div>

        <div>
          <h1 className="my-2 md:text-4xl text-2xl  mx-auto text-center  md:mb-8">
            DAILY FEED
          </h1>
          <hr className="md:border-b-8 md:mb-8" />
          <ul>
         
            
            {
              news.map(n=><li className="border rounded-lg my-6 px-2 hover:bg-gray-100 hover:opacity-80 hover:dark:bg-dark_primary 
              ">
                
                    <Link to={`/newsDetails/${n._id}`}>
                    <h5 className="font-bolder text-base md:text-xl text-left mb-2 hover:text-blue-600
  dark:text-dark_text">
                    {n?.title.slice(0,35)}...
                  </h5>
                  <span className='dark:text-dark_text'>
                  {n?.description.slice(0,30)}.
                  </span>
                    </Link>
              </li>
  
              )
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
