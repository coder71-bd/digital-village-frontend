import React from 'react';
import img1 from '../../../assets/events/e-g-1.jpg';
import img2 from '../../../assets/events/e-g-2.webp';
import img3 from '../../../assets/events/e-g-3.jpg';
import img4 from '../../../assets/events/e-g-4.png';
import img5 from '../../../assets/events/e-g-5.jpg';
import img from '../../../assets/events/e-g.png';
const EventPhotoGallary = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        <h4 className="text-3xl dark:text-white">
          Our Photo gallery of Events
        </h4>
        <p className="px-300px">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ipsa!
          Quis ex sapiente possimus quisquam atque fuga aliquid beatae quos?
        </p>
      </div>
      <section class="overflow-hidden text-gray-700">
        <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={img}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={img5}
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={img1}
                />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={img2}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={img3}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src={img4}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventPhotoGallary;
