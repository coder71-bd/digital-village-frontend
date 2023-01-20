const NewsBanner = () => {
  return (
    <div className="mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:mx-5">
        <div className="  overflow-hidden relative">
          <img
            className=" absolute w-full h-96 hover:scale-150 cursor-pointer transition-all duration-700 ease-in-out "
            src="https://images.unsplash.com/photo-1528726164383-33c4a223b78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGFnZSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />

          <div className="absolute bottom-0">
            <p className=" mb-5 px-2 ml-6 font-bold  text-white text-left bg-green-600 w-36 ">
              Latest News
            </p>
            <p className="  text-white font-bold text-xl md:text-2xl leading-none text-left px-3 ">
              What do decisions made at a summit in Glasgow mean for a woman in
              a village on the front line of climate change?
              <br />
              <span className="text-red-600 text-xl ">1,February,2022</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2">
          {/* image 1 & 2 */}
          <div className="relative md:mx-5">
            <div className="overflow-hidden relative ">
              <img
                className="h-48 w-96 hover:scale-150 cursor-pointer transition-all  duration-500 mb-1 ease-in-out"
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/e_learning_new_0.png?HdQc4PgJXVKd6bGfZsdga3gn0GWvcPMv&size=770:433"
                alt=""
              />

              <div>
                <p className="absolute bottom-16 px-2 ml-6 font-bold  text-white text-center  bg-purple-600">
                  Learning News
                </p>
                <p className="absolute bottom-2 text-white font-bold mx-2  text-left mt-4 ">
                  Lessons for At-Home Learning from MacArthur’s Digital Learning
                </p>
              </div>
            </div>

            <div className="overflow-hidden relative">
              <img
                className="h-48 w-96 hover:scale-150 cursor-pointer transition-all  duration-500 mb-1 ease-in-out"
                src="https://images.indianexpress.com/2021/11/WhatsApp-Image-2021-11-02-at-2.06.21-PM.jpeg"
                alt=""
              />

              <div>
                <p className="absolute bottom-16 px-2 ml-6 font-bold  text-white text-center  bg-purple-600">
                  Learning News
                </p>
                <p className="absolute bottom-2 text-white font-bold mx-2  text-left mt-4 ">
                  Lessons for At-Home Learning from MacArthur's Digital Learning
                </p>
              </div>
            </div>
          </div>

          {/* image 3 & 4 */}
          <div className="relative">
            <div className="overflow-hidden relative">
              <img
                className=" h-48 w-96 hover:scale-150 cursor-pointer transition-all duration-500 mb-1 ease-in-out"
                src="https://www.elmens.com/wp-content/uploads/2020/04/charity.jpg"
                alt=""
              />
              <div>
                <p className="absolute bottom-16 px-2 ml-6 font-bold  text-white text-left  bg-green-800 ">
                  Events News
                </p>
                <p className="absolute bottom-1 text-white font-bold  text-center mt-4 ">
                  ATC Group has a established involvement in the not-for-profit
                  sector
                </p>
              </div>
            </div>

            <div className="overflow-hidden relative ">
              <img
                className=" h-48 w-96 hover:scale-150 cursor-pointer transition-all duration-500 ease-in-out"
                src="https://media.istockphoto.com/photos/gathering-items-to-be-donated-to-charity-items-are-placed-on-a-futon-picture-id1339697803?b=1&k=20&m=1339697803&s=170667a&w=0&h=bYarLvJS8g6GLQcj9WHuCOAFr6ouMjgu7mTktgolsEc="
                alt=""
              />

              <div>
                <p className="absolute bottom-20 px-2 ml-6 font-bold  text-white   bg-blue-600 ">
                  Donation News
                </p>
                <p className="absolute bottom-1 text-white line-height-0 font-bold  text-left p-2 px-3 mt-4 ">
                  In 1978, alumni of the Yale Daily News founded Foundation the
                  Donation
                  <br />
                  <span className="text-red-600">1,February,2022</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
