import React, { useEffect, useState } from 'react';
import axios from '../../../../api/axios';
import useSocialMedia from '../../utilities/useSocialMedia';
import SingleFeed from './SingleFeed';

const Feeds = () => {
  const { deletePost, updatePost, loading } = useSocialMedia();
  const [feeds, setFeeds] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/social/usersofMedia').then((res) => setUsers(res.data));
  }, []);
  useEffect(() => {
    axios.get('/social/allPost').then((res) => setFeeds(res.data));
  }, [loading]);

  return (
    <div className="space-y-4">
      {/* users post */}
      {feeds.map((feed) => (
        <SingleFeed
          feed={feed}
          key={feed._id}
          users={users}
          deletePost={deletePost}
          updatePost={updatePost}
        />
      ))}
    </div>
  );
};

export default Feeds;
