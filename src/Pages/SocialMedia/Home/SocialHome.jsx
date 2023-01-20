import React, { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { io } from 'socket.io-client';
import useMediaQuery from "../../../hooks/useMediaQuery";
import { allSocialUser } from "../../../redux/slices/socialSlice/socialSlice";
import Feeds from "./Feeds/Feeds";
import LeftSideMenu from "./LeftSideMenu/LeftSideMenu";
import PublishFeed from "./PublishFeed/PublishFeed";
import RightSide from "./RightSide/RightSide";

const SocialHome = () => {
  const user = useSelector((state) => state.user.user);
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allSocialUser(user?.email));
  }, [user]);
  const [menuopen, setMenuOpen] = useState(false);

  // var socket;
  // useEffect(() => {
  //   socket = io(BASE_URI);
  // }, []);
  return (
    <div
      className="mt-[80px] mb-36 md:mb-24"
      style={{
        minHeight: isDesktop ? "calc(100vh - 88px)" : "fit-content",
      }}
    >
      <div className="relative grid grid-cols-7 md:gap-6">
        {/* Left Side */}
        <div className="hidden md:block md:col-span-2">
          <LeftSideMenu />
        </div>
        {/* small Screen */}
        <div className="ml-1 mt-2 cursor-pointer grid-cols-7 block md:hidden absolute top-1 left-1 z-50">
          <CgMenuGridO onClick={() => setMenuOpen(!menuopen)} size={27} />
          <div
            className={`${
              menuopen ? "absolute" : "hidden"
            } bg-slate-300 px-2 py-3 space-y-2`}
          >
            <Link className="block" to="/userdashboard/profile">
              Profile
            </Link>
            <Link className="block" to="/connection">
              Connections
            </Link>
          </div>
        </div>
        {/* Middle of the Home */}
        <div className="col-span-7 px-1 md:py-0 md:col-span-3">
          <PublishFeed />
          <Feeds />
        </div>
        {/* Right Side */}
        <div className="hidden md:block md:col-span-2 relative">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default SocialHome;
