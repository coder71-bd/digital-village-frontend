import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../Components/Pagination';
import {
  fetchUserSpecificNotification,
  setNotificationCurrPage,
} from '../../redux/slices/notification/notificationSlice';
import note from './../../assets/notification/notification.png';
import DetailNotification from './DetailNotification/DetailNotification';
import SingleNotification from './SingleNotification/SingleNotification';

const Notification = () => {
  const pageCount = useSelector((state) => state.notifications.pageCount);
  const currPage = useSelector((state) => state.notifications.currPage);
  const user = useSelector((state) => state.user.user);
  const [selectedNotification, setSelectedNotification] = useState({});
  const size = 4;

  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  const handleSetSelectedNotification = (id) => {
    const [selected] = notifications.filter(
      (notification) => notification._id === id
    );
    setSelectedNotification(selected);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchUserSpecificNotification({
        email: user.email,
        pageCount,
        currPage,
        size,
      })
    );
  }, [user.email, pageCount, currPage, size]);

  return (
    <div className="mt-[80px] " style={{ minHeight: 'calc(100vh - 700px)' }}>
      <div className="flex flex-wrap justify-center p-4 ">
        {/* notification cards */}
        <div className="w-full md:w-1/2 space-y-4 flex-1">
          {notifications && notifications.length >= 1 ? (
            notifications.map((notification) => (
              <SingleNotification
                key={notification._id}
                notification={notification}
                active={selectedNotification._id}
                handleSetSelectedNotification={handleSetSelectedNotification}
              />
            ))
          ) : (
            <p className="text-center">No notifications available</p>
          )}
        </div>

        {/* notification details */}
        <div className="w-full md:w-1/2 p-2">
          {Object.keys(selectedNotification).length === 0 ? (
            <div>
              <img
                className="w-full"
                src={note}
                alt="notification not selected"
              />
            </div>
          ) : (
            <DetailNotification
              selectedNotification={selectedNotification}
            ></DetailNotification>
          )}
        </div>
      </div>

      {/* pagination */}
      <Pagination
        currPage={currPage}
        setCurrPage={setNotificationCurrPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Notification;
