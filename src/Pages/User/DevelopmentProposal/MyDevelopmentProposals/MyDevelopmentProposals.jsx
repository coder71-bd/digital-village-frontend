import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios, { BASE_URI } from '../../../../api/axios';
import { fetchMyDevelopmentProposals } from '../../../../redux/slices/DevelopmetProposal/DevelopmentProposalSlice';

const MyDevelopmentProposals = () => {
  const [showModal, setShowModal] = useState(false);
  const [proposalDescription, setProposalDescription] = useState('');

  const myDevelopmentProposals = useSelector(
    (state) => state.developmentProposals.myDevelopmentProposals
  );
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleShowDetail = (id) => {
    const proposal = myDevelopmentProposals.find(
      (proposal) => proposal._id === id
    );
    setProposalDescription(proposal.description);
    setShowModal(true);
  };

  const handleDeleteDevelopmentProposal = (id) => {
    Swal.fire({
      title: 'Are you sure? you want to delete this development Proposal',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/developmentProposal/remove/?id=${id}`)
          .then((response) => {
            if (response?.data?.deletedCount) {
              Swal.fire({
                icon: 'success',
                title: 'Your Development Proposal has been deleted!',
                confirmButtonText: 'Okay',
              });
              dispatch(fetchMyDevelopmentProposals(user.email));
            } else {
              Swal.fire({
                title: 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'Okay',
              });
            }
          });
      }
    });
  };

  useEffect(() => {
    dispatch(fetchMyDevelopmentProposals(user.email));
  }, []);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full sm:w-1/2 my-6 mx-auto  max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue Gray-200 rounded-t">
                  <h3 className="text-2xl font-semibold ">
                    Details of! <span>The development proposal</span>
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
                  <p>{proposalDescription}</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="flex flex-col justify-center my-3">
        <div>
          <h3 className="text-center text-gray-800 text-sm md:text-lg lg:text-2xl">
            All Development Proposals
          </h3>
          <p className="text-center text-gray-600 font-normal text-sm lg:text-lg">
            manage all the villagers development proposal here
          </p>
        </div>

        <div className="flex flex-col w-[768px] lg:w-full">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overlfow-hidden">
                <table className="min-w-full">
                  <thead className="bg-indigo-500 font-primary">
                    <tr>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase"
                      >
                        Upvotes
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase"
                      >
                        DownVotes
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase"
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myDevelopmentProposals &&
                      myDevelopmentProposals.map((proposal) => (
                        <tr
                          key={proposal._id}
                          className="border-b font-primary text-sm "
                        >
                          {/* image */}
                          <td className="px-5 py-5 border-b border-gray-200 text-sm">
                            <div className="flex-shrink-0 w-16 h-16">
                              <img
                                className="w-full h-full rounded-full"
                                src={
                                  proposal?.image?.path
                                    ? `${BASE_URI}/${proposal?.image?.path}`
                                    : 'https://png.pngtree.com/png-vector/20200706/ourlarge/pngtree-businessman-user-character-vector-illustration-png-image_2298565.jpg'
                                }
                                alt={proposal?.title}
                              />
                            </div>
                          </td>

                          {/* title */}
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <p className="text-sm text-gray-500 break-all">
                              {proposal?.title && proposal?.title?.slice(0, 10)}
                              ...
                            </p>
                            <button
                              onClick={() => handleShowDetail(proposal._id)}
                              className="px-6 py-2 font-primary rounded-lg text-sm ring-blue-300 focus:ring-4 transition duration-300 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent"
                            >
                              Details
                            </button>
                          </td>

                          {/* upvotes */}
                          <td className="text-sm text-gray-600 px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-1">
                              <TiArrowSortedUp
                                size={30}
                                className="text-green-500"
                              />
                              <p>{proposal.upvotes || 0}</p>
                            </div>
                          </td>

                          {/* downvotes */}
                          <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-1">
                              <TiArrowSortedDown
                                size={30}
                                className="text-red-500"
                              />
                              <p>{proposal.downvotes || 0}</p>
                            </div>
                          </td>

                          {/* status */}
                          <td className="text-sm px-6 py-4 whitespace-nowrap">
                            {proposal.isAccepted ? (
                              <span className="bg-green-500 p-2 text-white rounded-full font-primary">
                                accepted
                              </span>
                            ) : proposal.isRejected ? (
                              <span className="bg-red-500 p-2 text-white rounded-full font-primary">
                                Rejected
                              </span>
                            ) : (
                              <span className="bg-yellow-500 p-2 text-white rounded-full font-primary">
                                Pending
                              </span>
                            )}
                          </td>

                          {/* delete */}
                          <td className="text-sm px-6 py-4 whitespace-nowrap">
                            <FaTrashAlt
                              size={30}
                              className="text-red-600 cursor-pointer"
                              onClick={() =>
                                handleDeleteDevelopmentProposal(proposal._id)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDevelopmentProposals;
