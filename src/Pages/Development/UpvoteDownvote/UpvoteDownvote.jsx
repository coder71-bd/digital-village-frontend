import React, { useEffect, useState } from 'react';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import Swal from 'sweetalert2';
import axios from '../../../api/axios';

const UpvoteDownvote = ({ developmentProposalId, uId, proposal }) => {
  const [Upvotes, setUpvotes] = useState(0);
  const [Downvotes, setDownvotes] = useState(0);
  const [UpvoteAction, setUpvoteAction] = useState(null);
  const [DownVoteAction, setDownVoteAction] = useState(null);

  console.log('hello');

  useEffect(() => {
    let necessaryData = { developmentProposalId, uId };
    axios.post('/upvote/all', necessaryData).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        // set the number of upvotes for this development proposal
        setUpvotes(response.data.upvotes.length);

        // change upvote action
        response.data.upvotes.map((upvote) => {
          if (upvote.uId === uId) {
            setUpvoteAction('upvoted');
          }
        });
      } else {
        console.log('failed to get all upvotes');
      }
    });

    axios.post('/downvote/all', necessaryData).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        // set the number of downvotes for this development proposal
        setDownvotes(response.data.downvotes.length);

        //if I already clicked the upvote button or not
        response.data.downvotes.map((downvote) => {
          if (downvote.uId === uId) {
            setDownVoteAction('downvoted');
          }
        });
      } else {
        console.log('Failed to get all downvotes');
      }
    });
  }, [uId, developmentProposalId]);

  let data = { developmentProposalId, uId };

  const onUpvote = () => {
    if (UpvoteAction === null) {
      axios.post('/upvote/add', data).then((response) => {
        if (response.data.success) {
          setUpvotes(Upvotes + 1);
          setUpvoteAction('upvoted');

          //If upvote button is already clicked
          if (DownVoteAction !== null) {
            setDownVoteAction(null);
            setDownvotes(Downvotes - 1);
          }
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    } else {
      axios.post('/upvote/remove', data).then((response) => {
        if (response.data.success) {
          setUpvotes(Upvotes - 1);
          setUpvoteAction(null);
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    }
  };

  const onDownvote = () => {
    if (DownVoteAction === null) {
      axios.post('/downvote/add', data).then((response) => {
        console.log('this is downvote adding', response.data);
        if (response.data.success) {
          setDownvotes(Downvotes + 1);
          setDownVoteAction('downvoted');

          // if upvote button is allready clicked
          if (UpvoteAction !== null) {
            setUpvoteAction(null);
            setUpvotes(Upvotes - 1);
          }
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    } else {
      axios.post('/downvote/remove', data).then((response) => {
        if (response.data.success) {
          setDownvotes(Downvotes - 1);
          setDownVoteAction(null);
        } else {
          Swal.fire({
            title: 'Something went wrong',
            confirmButtonText: 'Try again',
          });
        }
      });
    }
  };

  const handleShowDetail = () => {
    Swal.fire({
      title: 'Detail of the development proposal',
      html: proposal?.description,
      confirmButtonText: 'Close',
    });
  };

  return (
    <>
      {/* upvote and downvote buttons */}
      <div className="flex items-center justify-between">
        {/* upvote button */}
        {UpvoteAction === 'upvoted' ? (
          <button
            className="btn px-6 py-2 bg-success flex items-center space-x-1"
            onClick={onUpvote}
          >
            <span>{Upvotes}</span> <BiUpvote size={30} />
          </button>
        ) : (
          <button
            className="btn px-6 py-2 bg-success flex items-center space-x-1"
            onClick={onUpvote}
          >
            <span>{Upvotes}</span> <BiUpvote size={30} />
          </button>
        )}

        {/* detail button */}
        <button
          className="btn px-12 py-2 bg-rose-600 flex items-center space-x-1"
          onClick={handleShowDetail}
        >
          Details
        </button>

        {/* downvote button */}
        {DownVoteAction === 'downvoted' ? (
          <button
            className="btn px-6 py-2 bg-danger flex items-center space-x-1"
            onClick={onDownvote}
          >
            <span>{Downvotes}</span> <BiDownvote size={30} />
          </button>
        ) : (
          <button
            className="btn px-6 py-2 bg-danger flex items-center space-x-1"
            onClick={onDownvote}
          >
            <span>{Downvotes}</span> <BiDownvote size={30} />
          </button>
        )}
      </div>
    </>
  );
};

export default UpvoteDownvote;
