import React from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { BASE_URI } from '../../../api/axios';
import UpvoteDownvote from '../UpvoteDownvote/UpvoteDownvote';

const DevelopmentCard = ({ proposal, showUpvoteDownVote }) => {
  const uId = useSelector((state) => state.user.uId);

  const handleShowDetail = () => {
    Swal.fire({
      title: 'Detail of the development proposal',
      html: proposal?.description,
      confirmButtonText: 'Close',
    });
  };

  return (
    <div className="rounded-2xl w-fit border max-w-[400px] lg:mb-40 dark:bg-dark_primary ">
      <div className="h-[280px] overflow-hidden rounded-t-2xl">
        <img
          className="w-full h-full bg-cover bg-no-repeat hover:scale-125 transition-all duration-300 overflow-hidden rounded-xl"
          src={`${BASE_URI}/${proposal?.image?.path}`}
          alt={proposal?.name}
        ></img>
      </div>
      <div className="space-y-4 p-4">
        <h3 className="text-2xl md:text-3xl dark:text-dark_text">{proposal?.title}</h3>
        <p>{proposal?.description && proposal.description.slice(0, 100)} ...</p>

        {showUpvoteDownVote && (
          <UpvoteDownvote
            developmentProposalId={proposal._id}
            uId={uId}
            proposal={proposal}
          />
        )}

        {/* detail button */}
        {!showUpvoteDownVote && (
          <button
            className="btn w-fit mx-auto px-12 py-2 bg-rose-600"
            onClick={handleShowDetail}
          >
            Details
          </button>
        )}
      </div>
    </div>
  );
};

export default DevelopmentCard;
