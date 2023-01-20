import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

const developments = [
  {
    id: 1,
    title: 'Village development project',
    description:
      'The project does not itself provide fund to disburse as credit to the members of the society. Societies generate their fund from their own contribution and invest jointly their collected fund in various profitable sectors like, operation of deep and shallow tube-well, tractor, power-tiller, grinding mills for wheat and rice, decoration materials, hiring of milk, leasing of shop, pisciculture, plantation of trees on the road-side, business of stocked materials',
    img: 'http://lightwire.webps.info/assets/themes/lightwire/images/hd-5.jpg',
    date: '20 September 2022',
  },
  {
    id: 2,
    title: 'Skill development project',
    description:
      'The project arranged a number of skill development training courses for the beneficiaries. These training include Poultry and Cattle rearing, Pisciculture, Vegetables and Fruits Production, Health and Sanitation, Irrigation and Fertilizer Management, Maize cultivation, Mush-room cultivation and so on. The project has provided management and skill training to 135209 cooperators so far of which 39% are female',
    img: 'http://lightwire.webps.info/assets/themes/lightwire/images/hd-7.jpg',
    date: '21 September 2022',
  },
  {
    id: 3,
    title: 'Development Worker project',
    description:
      'To run and manage the various development activities , a number of village representatives act as Village Development Worker. They are usually the manager, the model farmer, the women organizer, the health and nutrition worker, the livestock and fisheries development worker, the family planning worker, the pump operator etc, provided with training to enhance the skill and to equip in manner that they can successfully carry out their assigned work,',
    img: 'http://lightwire.webps.info/assets/themes/lightwire/images/hd-15.jpg',
    date: '22 September 2022',
  },
  {
    id: 4,
    title: 'Employment project',
    description:
      'Level of employment and income are important indicators of development. Keeping this in view, endeavored to create employment and generate income for the cooperators through credit and training programmes. The project has been able to create a huge self-employment for co-operators. Total number of beneficiaries are 63450. The credit programme of  societies has exerted positive impact on the socio-economic aspects of life of the co-operators.',
    img: 'http://lightwire.webps.info/assets/components/phpthumbof/cache/image-17.6f48a82beff109794692619590fda6592.jpg',
    date: '23 September 2022',
  },
  {
    id: 5,
    title: 'Preoject ooperative society',
    description:
      'Formation of one comprehensive village development cooperative society in a village and spontaneous participation of all persons irrespective of profession and class of the village.Comparatively poor members of the society borrow from the collected fund of the society individually and avail the opportunity to increase their income . The members of the society get various facilities at a cheaper price including personal dividend on proportionate basis from the earned profit at the end of the year through investment and business',
    img: 'http://lightwire.webps.info/assets/components/phpthumbof/cache/image-11.6f48a82beff109794692619590fda6592.jpg',
    date: '24 September 2022',
  },
];

const DevelopmentSlider = ({ n }) => {
  return (
    <div className="mt-5 md:-mt-24">
      <div className="grid grid-cols-2 md:grid-cols-3 mx-0 md:mx-80 ">
        <div className="col-span-2  ">
          <Swiper
            // slidesPerView={2}
            slidesPerGroup={1}
            autoplay={{
              delay: 2500,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
            loop={true}
            loopFillGroupWithBlank={false}
            modules={[Autoplay]}
            className="swiper"
          >
            {developments?.map((n) => (
              <SwiperSlide key={n.id}>
                <div className=" w-full md:w-100 shadow-2xl">
                  <div className="  cursor-pointer ">
                    <div className="">
                      <img className="w-full h-64 " src={n?.img} alt="" />
                    </div>
                  </div>
                  <div className="space-y-4 p-4">
                    <p>{n.description.slice(0, 100)} ...</p>
                    <Link to={`/newsDetails/${n.id}`}>
                      <button className="text-primary text-lg hover:text-white hover:rounded-xl transition-all duration-500 border-0 p-2 bg-gray-200 my-2  hover:bg-primary hover:border-0  ">
                        View Service...
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <div className="mb-10 border w-auto md:w-96 ml-0 md:ml-5 p- ">
            <div className="  cursor-pointer  "></div>
            <div className="space-y-4 p-4 mt-2 md:mt-0 text-white bg-gray-800 h-full py-10 shadow-2xl ">
              <h3 className="text-yellow-400 text-xl md:text-2xl  flex items-center  space-x-4 md:px-5">
                FEATURED WEEK PROJECTS
              </h3>

              <p className=" text-justify">
                The project aims to develop and design community based
                integrated sustainable development program for villages , with
                improved health,nutrition, sanitation and livelihood. It
                includes income generating activities,safe drinking water, and
                protection of the village environment.{' '}
              </p>

              <div className="grid grid-cols-2 ">
                <div className="flex">
                  <img
                    className="w-10 h-10  my-auto mr-5"
                    src="https://icon2.cleanpng.com/20180426/rvq/kisspng-computer-icons-download-setting-icon-5ae152c8c78b41.3187121115247162328173.jpg"
                    alt=""
                  />

                  <div>
                    <h3>
                      110 <br />
                      <span className="text-sm text-yellow-400">
                        Project
                      </span>{' '}
                    </h3>
                  </div>
                </div>
                <div className="flex">
                  <img
                    className="w-10 h-10 mr-5 my-auto"
                    src="https://www.pinclipart.com/picdir/middle/542-5427453_client-icon-clipart-clipart-royalty-free-library-client.png"
                    alt=""
                  />

                  <div>
                    <h3>
                      90 <br />
                      <span className="text-sm text-yellow-400 ">
                        Clients
                      </span>{' '}
                    </h3>
                  </div>
                </div>
              </div>

              <button className="text-yellow-400 text-lg mt-24 px-5 mx-0 md:mx-5 hover:text-white hover:rounded-xl transition-all duration-500 border-2  p-2 border-white hover:bg-primary hover:border-  ">
                More Project ...
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto md:mx-80 my-10">
        <div className="md:col-span-2 md:mr-5 mx-0">
          <h3 className="my-2">DEVELOPMENT TRANSFORMATIONS</h3>
          <p className="py-5">
            A large improvement in rural connectivity such as through
            technological infrastructure has contributed to increased mobility
            dynamics from, to and within the regions. Migration cannot be
            considered a unidirectional movement from rural areas to cities. It
            has instead been shaped by a chain of connections in which rural and
            urban livelihoods interact on a movement.
          </p>
        </div>

        <div className="md:ml-5 mx:0  md:mx-2 ">
          <ul>
            <li>Development of leadership </li>
            <li>intensification of farm and non-farm activities</li>
            <li>Annual comprehensive development plan</li>
            <li>Development of rural industries</li>
            <li>Test drive</li>
            <li>Undertaking community based health</li>
            <li>education , motivation and training </li>
          </ul>
        </div>
      </div>

      <div className="md:mx-80 grid grid-cols-1 md:grid-cols-2 my-auto md:my-24 ">
        <h3>LAST PROJECTS</h3>
        <p className="md:border-l-4 md:pl-5">
          Large-scale construction to organize the villagers into a broad-based
          village cooperative with a number of functional groups (landless and
          small, medium and large farmers, women, youth and other occupational
          group) and involve them in credit and marketing programme.
        </p>
      </div>

      {/* Project Slider */}

      <div className="grid grid-cols-1 md:grid-cols-3 md:mx-80">
        <div className="md:col-span-3">
          <Swiper
            // slidesPerView={2}
            slidesPerGroup={1}
            autoplay={{
              delay: 2500,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            loop={true}
            loopFillGroupWithBlank={false}
            modules={[Autoplay]}
            className="swiper"
          >
            {developments.map((n) => (
              <SwiperSlide key={n.id}>
                <div className="  rounded">
                  <div className="  cursor-pointer ">
                    <div className="">
                      <img className="w-full md:h-64 " src={n?.img} alt="" />
                    </div>
                  </div>
                  <div className="space-y-4 p-4">
                    <h3>{n?.title}</h3>
                    <p className="py-5">{n.description.slice(0, 150)} ...</p>
                    <Link to={`/newsDetails/${n.id}`}>
                      <button className="text-black text-lg hover:text-white hover:rounded-xl transition-all duration-500 border-0 bg-gray-200 p-2 border-blue-600 hover:bg-primary hover:border-0  ">
                        View Project...
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSlider;
