import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../assets/events/events.png';

const NewsDetails = () => {
  return (
    <>
      <div className="py-48 px-5 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
          {/* left side */}
          <div className="lg:col-span-2">
            <div>
              <img src={img} alt="" />
              <h1 className="mt-20">Music Talent Show</h1>
            </div>
            <div className="mt-20">
              <h4 className="mb-7">Next Upcoming date</h4>
              <div className="bg-gray-100 p-7 border-l-4 flex items-center gap-6 lg:gap-20 px-5 lg:px-32">
                <div>
                  <p>Dtae</p>
                  <h3 className="text-xl">April 16,2022</h3>
                </div>
                <div>
                  <p>Time</p>
                  <p className="text-sm">6:00 pm - 10:00 pm</p>
                </div>
                <div>
                  {' '}
                  <h5>Community Center</h5>
                  <p className="text-sm py-1">1301 Shoal Creek Blvd,</p>
                  <p className="text-sm">Austin, TX 78701</p>
                </div>
              </div>
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam omnis sapiente et accusantium voluptas ab dolore,
                laudantium doloremque quaerat fugit, saepe eaque voluptatibus
                dolor similique numquam commodi fuga labore aliquam. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Impedit, deleniti?
              </p>

              {/* map */}
            </div>
          </div>
          {/* Right side */}
          <div className="right-main ">
            <div className="lg:ml-36"></div>

            <div className="upcoming events lg:ml-36">
              <div className="mt-14">
                <h4 className="mb-7 text-xl font-bold">More News</h4>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                  <Link to="/news-Details">
                    {' '}
                    <div className="  rounded-xl">
                      <img src={img} alt="" />
                      <div className="  py-10 ">
                        <div className="">
                          <h3 className="text-lg pb-4 border-y-2">
                            <Link to="">Local Artists Showcase </Link>{' '}
                          </h3>
                          <h4>16 february</h4>
                        </div>
                        <div className=" ">
                          <p>2:00 pm - 9:00 pm</p>
                          <p>
                            at <span>Art Gallery</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/news-Details">
                    {' '}
                    <div className="  rounded-xl">
                      <img src={img} alt="" />
                      <div className="  py-10 ">
                        <div className="">
                          <h3 className="text-lg pb-4 border-y-2">
                            <Link to="">Local Artists Showcase </Link>{' '}
                          </h3>
                          <h4>16 february</h4>
                        </div>
                        <div className=" ">
                          <p>2:00 pm - 9:00 pm</p>
                          <p>
                            at <span>Art Gallery</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
