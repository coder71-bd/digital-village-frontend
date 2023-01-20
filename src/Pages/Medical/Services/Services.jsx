import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcOvertime } from 'react-icons/fc';
import { ImCheckmark } from 'react-icons/im';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import medicalTimeTable from '../../../assets/medical/medical_time_table.png';
import OurDoctors from '../OurDoctors/OurDoctors';
import mediBanner from './../../../assets/medical/mediBanner.png';

const datas = [
  {
    id: '1',
    title: ' Cardiologists',
    description:
      'For cardiovascular conditions.They’re experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat.',
  },

  {
    id: '2',
    title: 'Family physician',
    description:
      'For people of all ages.They care for the whole family, including children, adults, and the elderly. They do routine checkups and screening tests, give you flu and immunization shots, and manage diabetes and other ongoing medical conditions.',
  },
  {
    id: '3',
    title: 'Ophthalmologists',
    description:
      'An ophthalmologist is a medical or osteopathic doctor who specializes in eye and vision care. Ophthalmologists differ from optometrists and opticians in their levels of training and in what they can diagnose and treat.',
  },
  {
    id: '4',
    title: 'Gynecologists',
    description:
      "disease management for female.Often called OB/GYNs, these doctors focus on women' health, including pregnancy and childbirth. They do Pap smears, pelvic exams, and pregnancy checkups. OB/GYNs are trained in both areas. But some of them may focus on women's reproductive health (gynecologists), and others specialize in caring for pregnant women (obstetricians).",
  },
  {
    id: '5',
    title: 'Dermatologists',
    description:
      ' For diseases of the skin.Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help.',
  },
  {
    id: '6',
    title: 'Neurologists',
    description:
      "For the nerves, spine, and brain.These are specialists in the nervous system, which includes the brain, spinal cord, and nerves. They treat strokes, brain and spinal tumors, epilepsy, Parkinson's disease, and Alzheimer's disease.",
  },
];

const services = [
  {
    name: 'Online Consulatation',
  },
  {
    name: 'Offline Consultation',
  },
  {
    name: 'Online Appointment',
  },
  {
    name: 'Lab Test',
  },
  {
    name: 'Emergency Department',
  },
];

const timeTableData = [
  {
    day: 'Sunday',
    time: '10 am to 8 pm',
  },
  {
    day: 'Monday',
    time: '10 am to 8 pm',
  },
  {
    day: 'Tuesday',
    time: '10 am to 8 pm',
  },
  {
    day: 'wednesday',
    time: '10 am to 8 pm',
  },
  {
    day: 'Thursday',
    time: '12 am to 8 pm',
  },
];

const Services = () => {
  const user = useSelector((state) => state.user.user);
  const email = user.email;
  const name = user.name;
  const [active, setActive] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const sendEmail = (formData) => {
    console.log(formData);

    emailjs
      .send(
        'service_nbv08xi',
        'template_qw32pvu',
        formData,
        'user_NT0NiFlR59zCf04Pr6LZF'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    swal('Successfully!', 'Your message is sent successfully!', 'success');
    reset();
  };

  return (
    <div className="px-4 space-y-6">
      <div className="space-y-6">
        {/* our services section */}
        <div>
          <h3 className=" text-center md:text-5xl text-blue-600">
            Our Services
          </h3>
          <p className="my-5 lg:mx-[300px] text-justify md:text-center  text-lg ">
            Treatment here, truly human experience. You're cared for as a person
            first.The more patients we treat each year prepares us to treat the
            one who matters most—you.Count on our experts to deliver an accurate
            diagnosis and the right plan for you the first time.
          </p>
        </div>

        <div className="flex flex-wrap justify-evenly items-center gap-8">
          <img src={mediBanner} alt="medibanner" />

          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center bg-gray-100 space-x-4 p-2 lg:px-40 lg:py-10"
              >
                <ImCheckmark size={25} className="text-emerald-600" />
                <div className="dark:text-dark_text text-xl">
                  {service.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* our Timetable section */}
        <div>
          <h3 className=" text-center md:text-5xl text-blue-600">
            Our Time Table
          </h3>
          <p className="my-5 lg:mx-[300px] text-justify md:text-center px-2 md:px-5  text-lg ">
            Digital Village Medical center will always be open at this times
          </p>
        </div>

        <div className="flex flex-wrap justify-evenly items-center gap-8">
          <div className="space-y-4">
            {timeTableData.map((ttd) => (
              <div
                key={ttd.day}
                className="flex items-center bg-gray-100 space-x-4 p-2 lg:px-40 lg:py-10"
              >
                <FcOvertime size={30} className="text-emerald-600" />
                <div className="flex space-x-2">
                  {ttd.day} {ttd.time}
                </div>
              </div>
            ))}
          </div>

          <img src={medicalTimeTable} alt="medical time table" />
        </div>
      </div>

      <OurDoctors />

      {/* email send */}
      <div>
        <div className="flex justify-center md:px-8">
          <form class="w-full lg:mx-[200px]" onSubmit={handleSubmit(sendEmail)}>
            <h3 class="text-center pb-4 text-3xl font-bolder text-gray-600">
              We are here to hear from you
            </h3>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div class="w-full">
              <textarea
                className="w-full bg-gray-100 py-8 px-5 outline-none border-2 focus:border-primary"
                {...register('message', {
                  required: 'Message is Required',
                  minLength: {
                    value: 10,
                    message: 'Minimum Required length is 10',
                  },
                  maxLength: {
                    value: 50,
                    message: 'Maximum allowed length is 50 ',
                  },
                })}
                placeholder="Write your message"
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>

            <button
              className="bg-primary  px-6 md:w-2/6   py-2 text-white mx-auto lg:ml-0 rounded-md"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
