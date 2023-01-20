import React from 'react';
import studentBanner from '../../../../../assets/education/StudentFooter.png'

// will modify it later
const Footer = () => {
  return (
    <div className="   rounded-lg ">
      <div className="flex flex-wrap bg-slate-900 pb-10 ">
        <div className="mx-auto w-96">
          <img
            className="rounded-lg"
            src={studentBanner}
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-3 md:space-y-6 text-center md:text-left">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 align-items-center md:mt-16">
            <div>
              <div className="flex md:mb-10 hover:opacity-50 cursor-pointer">
                <div className="bg-blue-200 justify-center w-20 h-20 flex items-center rounded-full">
                  <img
                    className="w-10 "
                    src="https://cdn-icons-png.flaticon.com/128/991/991922.png"
                    alt=""
                  />
                </div>
                <div className="ml-3 text-white md:pt-2 ">
                  <h2 className="text-3xl  font-bold">50+</h2>
                  <h5>Teachers</h5>
                </div>
              </div>
            </div>
            <div className="flex items-center md:mb-10 hover:opacity-50 cursor-pointer ">
              <img
                src="https://10minuteschool.com/assets/icons/home-page/amader-orjon/student.png"
                alt=""
              />
              <div className="ml-3 text-white ">
                <h2 className="text-3xl  font-bold">950+</h2>
                <h5>Student</h5>
              </div>
            </div>
            <div className="flex items-center hover:opacity-50 cursor-pointer">
              <img
                src="https://10minuteschool.com/assets/icons/home-page/amader-orjon/content.png"
                alt=""
              />
              <div className="ml-3 text-white ">
                <h2 className="text-3xl  font-bold">450+</h2>
                <h5>Blogs Videos</h5>
              </div>
            </div>
            <div className="flex items-center hover:opacity-50 cursor-pointer  ">
              <img
                src="https://10minuteschool.com/assets/icons/home-page/amader-orjon/user.png"
                alt=""
              />
              <div className="ml-3 text-white">
                <h2 className="text-3xl font-bold">500+</h2>
                <h4>Blog Post</h4>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* <div className="bg-gray-200 px-10 py-5 mb-10 opacity-75 rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" space-y-3 md:space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 align-items-center mt-16">
              <div>
                <div className="md:flex ml-7 md:ml-5">
                  <div className="bg-blue-200  justify-center md:w-20 md:h-20 hover:opacity-50 flex items-center rounded-full">
                    <img
                      className="md:w-10 "
                      src="https://www.freeiconspng.com/uploads/downloads-icon-15.png"
                      alt=""
                    />
                  </div>
                  <div className="md:ml-3">
                    <h5 className=" pt-6 ">Download Blog Video</h5>
                  </div>
                </div>
              </div>
              <div className="md:flex items-center mb-10 ml-7  md:ml-10 hover:opacity-50">
                <img
                  src="https://10minuteschool.com/assets/icons/home-page/amader-orjon/student.png"
                  alt=""
                />
                <div className="md:ml-3">
                  <h5 className="">See All Blogs</h5>
                </div>
              </div>
              <div className="md:flex items-center ml-7 md:ml-5 hover:opacity-50 ">
                <img
                  src="https://10minuteschool.com/assets/icons/home-page/amader-orjon/content.png"
                  alt=""
                />
                <div className="md:ml-3">
                  <h5 className="">Favourite Blogs</h5>
                </div>
              </div>
              <div className="md:flex items-center ml-7 my-10 hover:opacity-50 md:ml-10 ">
                <img
                  src="https://10minuteschool.com/assets/icons/home-page/amader-orjon/user.png"
                  alt=""
                />
                <div className="md:ml-3">
                  <h5 className="">Course Notification</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="pr-12 md:mt-10 md:ml-10 w-[180px] md:w-96 ">
            <img
              className="rounded-lg "
              src="https://10minuteschool.com/assets/icons/home-page/app-download.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
