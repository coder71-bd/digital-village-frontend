// import React from 'react';
// import { BsFillTreeFill } from 'react-icons/bs';
// import { FaHandHoldingWater, FaHandsHelping, FaHospital } from 'react-icons/fa';
// import { FcHome, FcReading } from 'react-icons/fc';
// const AboutDonation = () => {
//   return (
//     <section class="relative pt-8 bg-blueGray-50">
//       <div class="container mx-auto">
//         <h3 className="text-gray-800 text-center text-sm md:text-2xl lg:text-3xl mt-2">
//           ACHIEVED WITH YOU
//         </h3>
//         <p className="text-gray-600 text-center text-sm md:text-xl lg:text-2xl mt-2 py-6">
//           About Us
//         </p>
//         <div class="flex flex-wrap items-center">
//           <div class="w-full lg:w-2/5 md:w-1/2 px-8 md:px-4 mr-auto ml-auto -mt-78">
//             <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-500 bg-gradient-to-r from-lime-300 bg-gradient-to-t from-blue-300 to-green-600">
//               <img
//                 src="http://nasarna-react.wpocean.com/static/media/about3.9af31693.png"
//                 class="w-full align-middle rounded-t-lg"
//                 alt="donatabout"
//               />
//               <blockquote class="relative p-8 mb-4">
//                 <h4 class="text-lg md:text-xl lg:text-2xl font-bold text-white">
//                   We Are In A Mission To Help The Helpless
//                 </h4>
//                 <p class="text-sm md:text-lg font-light text-gray-200 mt-2 ">
//                   Your gift helps villagers lift themselves out of poverty
//                   through clean water, healthcare, business training, and
//                   education. Every gift makes a difference.Your gift is a sacred
//                   trust. We promise to honor your generosity and use your
//                   donation in the most effective way to serve the villages.
//                   Donations will be used where they are needed most.
//                 </p>
//               </blockquote>
//             </div>
//           </div>

//           <div class="w-full lg:w-3/5 md:w-1/2 px-4">
//             <h1 className="text-gray-800 text-center text-sm md:text-lg mt-2">
//               What We Do?
//             </h1>
//             <div class="flex flex-wrap">
//               <div class="w-full md:w-6/12 sm:px-4 md:px-0 lg:px-1">
//                 <div class="relative flex flex-col mt-4">
//                   <div class="px-4 py-5 flex-auto">
//                     <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-50  hover:bg-violet-200">
//                       <FcReading className="text-blue-500 text-4xl" />
//                     </div>
//                     <h6 class="text-xl sm:text-lg mb-1 font-semibold">
//                       {' '}
//                       Education Help
//                     </h6>
//                     <p class="mb-4 text-sm md:text-lg font-light text-gray-600">
//                       Education Help.What we do for the poor people and the
//                       children
//                     </p>
//                   </div>
//                   <div class="px-4 py-5 flex-auto">
//                     <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-50">
//                       <FcHome className="text-blue-500 text-4xl" />
//                     </div>
//                     <h6 class="text-xl mb-1 font-semibold">Homeless help</h6>
//                     <p class="mb-4 text-sm md:text-lg font-light text-gray-600">
//                       Helping homeless people to build houses
//                     </p>
//                   </div>
//                 </div>
//                 <div class="relative flex flex-col min-w-0">
//                   <div class="px-4 py-5 flex-auto">
//                     <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-50">
//                       <FaHospital className="text-blue-500 text-4xl" />
//                     </div>
//                     <h6 class="text-xl mb-1 font-semibold">
//                       Madical Treatment Help
//                     </h6>
//                     <p class="mb-4 text-sm md:text-lg font-light text-gray-600">
//                       Madical Treatment Help To provide financial assistance for
//                       the well-being of poor people
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div class="w-full md:w-6/12 px-4">
//                 <div class="relative flex flex-col min-w-0 mt-4">
//                   <div class="px-4 py-5 flex-auto">
//                     <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-50">
//                       <FaHandHoldingWater className="text-green-500 text-4xl" />
//                     </div>
//                     <h6 class="text-xl mb-1 font-semibold">Water</h6>
//                     <p class="mb-4 text-sm md:text-lg font-light text-gray-600">
//                       Provide financial assistance for the provision of tubes
//                       for pure water
//                     </p>
//                   </div>
//                   <div class="px-4 py-5 flex-auto">
//                     <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-50">
//                       <BsFillTreeFill className="text-secondary text-4xl" />
//                     </div>
//                     <h6 class="text-xl mb-1 font-semibold">AGRICULTURE</h6>
//                     <p class="mb-4 text-sm md:text-lg font-light text-gray-600">
//                       Provide financial support for agricultural systems.
//                     </p>
//                   </div>
//                 </div>
//                 <div class="relative flex flex-col min-w-0">
//                   <div class="px-4 py-5 flex-auto">
//                     <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-50">
//                       <FaHandsHelping className="text-red-500 text-4xl" />
//                     </div>
//                     <h6 class="text-xl mb-1 font-semibold">Donation</h6>
//                     <p class="mb-4 text-sm md:text-lg font-light text-gray-600">
//                       Concern About Our Mission Donation help.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutDonation;
