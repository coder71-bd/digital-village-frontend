import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios, { BASE_URI } from '../../../api/axios';

const MyDonations = () => {
  const [myDonations, setMyDonations] = useState([]);

  const user = useSelector((state) => state.user.user);

  const uId = useSelector((state) => state.user.uId);

  useEffect(() => {
    axios
      .get(`/donationCause//specificUserDonationInfo/?uId=${uId}`)
      .then((response) => setMyDonations(response.data));
  }, [uId]);

  const downloadCertificate = (info) => {
    if (!info.donars[0]?.isPaid) {
      Swal.fire({
        title: "You haven't paid yet for your donation",
        icon: 'error',
      });
      return;
    }
    // initialize jsPDF

    const doc = new jsPDF();

    // // define the columns we want and their titles

    const data = [user?.name, info.donars[0]?.amount, info?.category];

    const date = Date().split(' ');

    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

    doc.text(20, 30, `Certificate Of Donation`);

    doc.text(
      20,
      50,
      `This is to certify that ${data[0]} have donated $ ${data[1]} in ${info.category} category.`
    );
    doc.text(
      20,
      60,
      ` We are very fortunate that we have a villager like him.`
    );
    doc.text(20, 100, `Digital Village Administration`);

    doc.save(`report_${dateStr}.pdf`); // name of the pdf file
  };

  return (
    <section>
      <h3 className="text-center font-semibold text-gray-800 text-lg md:text-2xl lg:text-3xl mx-auto">
        Your donation Information
      </h3>
      <p className="text-center text-gray-600 font-normal text-sm lg:text-lg  mx-auto">
        See how much you have donated to the village people
      </p>
      <div className="col-span-3 flex flex-col space-y-2 lg:ml-10 md:ml-20 py-4 mx-3">
        {myDonations &&
          myDonations.map((myDonation) => (
            <div
              key={myDonation._id}
              className="grid grid-cols-1 lg:grid-cols-4 gap-3 bg-white rounded-lg shadow-xl p-3 box-border dark:bg-dark_primary"
            >
              {/* cause image */}
              <div className="col-span-1">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                  className="w-full h-full rounded-lg"
                  src={`${BASE_URI}/${myDonation?.image?.path}`}
                  alt={myDonation?.image?.name}
                />
              </div>

              <div className="col-span-2">
                <p className="text-gray-500 text-sm break-all">
                  Category: {myDonation?.category}
                </p>
                <h1 className="text-gray-700 text-sm md:text-lg lg:text-2xl font-primary break-all">
                  {myDonation?.title}
                </h1>
                <p className="text-gray-500 text-sm">
                  date: {myDonation?.date}
                </p>

                {/* {/_ others info _/} */}
                <div className="flex flex-col lg:flex-row items-start lg:space-x-12 py-4 space-y-4 lg:items-center sm:justify-between">
                  {/* description */}
                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col">
                      <p className="text-sm font-primary text-gray-700 break-all">
                        {myDonation?.description &&
                        myDonation?.description.length >= 150
                          ? myDonation?.description?.slice(0, 150)
                          : myDonation?.description}
                      </p>
                    </div>
                  </div>

                  {/* amount */}
                  <div>
                    <h1 className="font-primary font-semibold text-gray-900 text-2xl">
                      $ {myDonation.donars[0] && myDonation.donars[0]?.amount}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col-span-1 flex lg:flex-col flex-wrap items-center justify-evenly gap-2 md:space-x-0">
                {myDonation.donars[0]?.isPaid ? (
                  <span className="w-36 mt-4 bg-green-400 border border-transparent rounded-md py-2 px-1 flex items-center justify-center text-base font-medium text-white hover:bg-green-600">
                    paid
                  </span>
                ) : (
                  <span className="w-36 mt-4 bg-red-600 border border-transparent rounded-md py-2 px-1 flex items-center justify-center text-base font-medium text-white hover:bg-red-400">
                    unpaid
                  </span>
                )}
                <button
                  className="w-36 flex-shrink-0 mt-4 bg-yellow-400 border border-transparent rounded-md py-2 px-1 flex items-center justify-center text-base font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500"
                  onClick={() => downloadCertificate(myDonation)}
                >
                  <FaFilePdf className="text-white text-2xl" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MyDonations;
