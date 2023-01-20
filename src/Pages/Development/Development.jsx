import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDevelopmentProposals } from '../../redux/slices/DevelopmetProposal/DevelopmentProposalSlice';
import DevelopmentAbout from './DevelopmentAbout/DevelopmentAbout';
import DevelopmentBanner from './DevelopmentBanner/DevelopmentBanner';
import DevelopmentCard from './DevelopmentCard/DevelopmentCard';
const Development = () => {
  const dispatch = useDispatch();

  const developmentProposals = useSelector(
    (state) => state.developmentProposals.developmentProposals
  );

  useEffect(() => {
    dispatch(fetchAllDevelopmentProposals());
  }, []);

  return (
    <div className="mt-[80px] h-full">
      <DevelopmentBanner />
      <DevelopmentAbout />
      <div className="lg:mx-[100px] lg:mt-36">
        <div className=" text-center mb-32 space-y-5">
          <h3>Propose For Development</h3>
          <p className="lg:px-40 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            inventore qui magni voluptatem dolor, velit mollitia porro pariatur
            minima maxime sed molestias autem eos voluptatum molestiae eaque
            reiciendis repellendus cupiditate!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {developmentProposals?.map((proposal) => (
            <DevelopmentCard
              proposal={proposal}
              key={proposal._id}
              showUpvoteDownVote={true}
            />
          ))}
        </div>

        <div className="text-center space-y-5">
          <h3 className="dark:text-gray-200">Our Latest Developed Projects </h3>
          <p className="lg:px-40 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            recusandae natus repellendus officiis eius saepe ea hic deserunt
            laudantium ducimus!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {developmentProposals?.map((proposal) => (
              <DevelopmentCard
                proposal={proposal}
                key={proposal._id}
                showUpvoteDownVote={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
