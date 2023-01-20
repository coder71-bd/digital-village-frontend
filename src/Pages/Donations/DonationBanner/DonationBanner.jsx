import React from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'react-lottie';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from '../../../api/axios';
import banner from '../../../assets/donation/donatebanner.jpg';
import useMediaQuery from '../../../hooks/useMediaQuery';
import animationData from '../../../lotties/donate.json';
import { addAHelpRequest } from '../../../redux/slices/Donations/donationSlice';
const DonationBanner = () => {
  const isTablet = useMediaQuery('(min-width: 655px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const user = useSelector((state) => state.user.user);
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const helpRequestApply = async (data) => {
    console.log(data);
    const requestData=  {
          ...data,
          requesterName: user?.name,
          requesterEmail: user?.email,
          date: new Date().toLocaleDateString(),
          pay: false,
        };
    const response = await axios.post('/donationRequest/helprequest', requestData);
console.log(response?.data, "data ");
    if (response?.data && response?.data[0].requesterEmail) {
      swal({
        text: `You request sumbit successfully`,
        icon: 'success',
        confirm: 'Go and Explore',
        closeOnClickOutside: false,
      }).then(() => {
        setShowModal(false);
        navigate('/userdashboard/myHelpRequests');
        reset();
      });
    }
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto  max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue Gray-200 rounded-t">
                  <h3 className="text-2xl font-semibold text-green-400">
                    Donate! <span>Help Request</span>
                  </h3>
                  <button
                    className="p-2 ml-auto bg-transparent border-0 text-pink-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-80 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={handleSubmit(helpRequestApply)}
                    className="grid grid-cols-1 lg:grid-cols-1 gap-5 w-full"
                  >
                    <div className="flex flex-col space-y-2">
                      {/* name  */}
                      <input
                        className="appearance-none rounded-none relative block w-full px-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                        defaultValue={user.name}
                        placeholder="Your Name"
                        {...register('name', {
                          required: 'Your Name is required',
                          maxLength: {
                            value: 30,
                            message: "Your Name shouldn't exceed 30 words",
                          },
                        })}
                        onKeyUp={() => {
                          trigger('name');
                        }}
                      />

                      {errors.name && (
                        <p className="text-danger">{errors.name.message}</p>
                      )}

                      <textarea
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                        placeholder="Your Help Message"
                        {...register('description', {
                          required: 'Message is Required',
                          minLength: {
                            value: 15,
                            message: 'Minimum Required length is 15',
                          },
                          maxLength: {
                            value: 500,
                            message: 'Maximum allowed length is 500 ',
                          },
                        })}
                        onKeyUp={() => {
                          trigger('description');
                        }}
                      />
                      {errors.description && (
                        <p className="text-danger">{errors.description.message}</p>
                      )}
                      {/* <input
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                        defaultValue={new Date().toLocaleString()}
                        placeholder="date"
                        {...register('date', { required: true })}
                      /> */}
                      {/* category */}
                      <select
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      {...register('category', {
                      required: 'this is required',
                      })}
                      >
                      <option className="bg-green-500 text-pink-500" defaultValue="choose one">choose one</option>
                      <option value="Education">Education</option>
                      <option value="Health">Health</option>
                      <option value="Water">Water</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Food">Food</option>
                      <option value="Development">Development</option>
                      <option value="Others">others</option>
                      </select>
                      {errors.category && (
                      <small className="text-danger">{errors.category.message}</small>
                      )}
                      <input
                        type="number"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                        placeholder="Your Phone Number"
                        {...register('phone', {
                          required: 'Phone no is Required',
                          pattern: {
                            value:
                              /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                            message: 'Invalid phone no',
                          },
                        })}
                        onKeyUp={() => {
                          trigger('phone');
                        }}
                      />
                      {errors.phone && (
                        <p className="text-danger">{errors.phone.message}</p>
                      )}
                      {/* price  */}
                      <input
                        type="number"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                        {...register('amount', {
                          required: 'Amount is Required',
                          min: {
                            value: 50,
                            message: 'Minimum Required amount is 50',
                          },
                          max: {
                            value: 500,
                            message: 'Maximum allowed amount is 500',
                          },
                          pattern: {
                            value: /^[0-9]*$/,
                            message: 'Only numbers price allowed',
                          },
                        })}
                        onKeyUp={() => {
                          trigger('amount');
                        }}
                        placeholder="Please Your Amount"
                      />
                      {errors.amount && (
                        <p className="text-danger">{errors.amount.message}</p>
                      )}
                    </div>
                    {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="bg-pink-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Request Doante
                  </button>
                </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div
        className="w-full bg-cover bg-center mt-[64px]"
        style={{
          width: '100%',
          // backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          height: 'calc(105vh - 64px)',
          position: 'relative',
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="flex flex-wrap md:space-y-0">
          {/* banner description */}
          <div className="w-full md:w-1/2 place-self-center space-y-3 md:space-y-6 text-center md:text-left md:pl-24 pt-12 mb-3">
            <h1 className="text-[#ffffff] text-sm md:text-2xl lg:text-4xl">
              Donate for helpless
            </h1>
            <p className="text-[#3f5a46] text-sm md:text-xl lg:text-2xl mx-auto md:mx-0 md:w-[420px] capitalize pb-3">
              Charitable giving is the act of giving money,Help to those in
              need, as a humanitarian act
            </p>
            <div className="items-center justify-between pt-2 gap-1 mx-auto space-y-6 sm:flex sm:items-center sm:py-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => setShowModal(true, user._id)}
                className="btn bg-gradient-to-r from-primary to-secondary hover:from-primary hover:to-primary shadow-xl"
              >
                Get Help Request
              </button>
            </div>
          </div>
          {/* banner svg */}
          <div className="w-full md:w-1/2 px-3 sm:px-0 sm:w-2/1 hidden lg:block">
            <Lottie
              options={defaultOptions}
              width={340}
              isClickToPauseDisabled={true}
              height={isDesktop ? 390 : isTablet ? 390 : 280}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationBanner;
