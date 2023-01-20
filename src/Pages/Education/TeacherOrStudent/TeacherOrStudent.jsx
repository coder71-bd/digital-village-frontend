import React, { useEffect, useState } from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import study from '../../../assets/education/study.png';
import DecidingCard from './DecidingCard/DecidingCard';

const TeacherOrStudent = () => {
  const [isTeacher, setIsTeacher] = useState(false);

  const roles = useSelector((state) => state.user.roles);

  useEffect(() => {
    console.log(roles);
    const rolesArray = roles
      ? roles.map((role) => Object.values(role)).flat()
      : [];
    setIsTeacher(rolesArray?.includes(3000));
  }, [roles]);

  return (
    <div className="lg:h-[100vh] lg:py-10">
      <h1 className="text-center text-2xl md:text-6xl lg:text-6xl text-blue-600 py-5">
        Choose Your Path
      </h1>
      <div className="md:flex justify-center items-center  flex-wrap">
        <div className="flex flex-col justify-center px-3 items-center md:w-1/3 flex-wrap space-y-6 order-last md:order-first">
          <Link to={isTeacher ? '/teacher/publishBlog' : '/registerTeacher'}>
            <DecidingCard icon={<GiTeacher />} name="Teach" />
          </Link>
          <Link to="/student">
            <DecidingCard icon={<FaChalkboardTeacher />} name="Learn" />
          </Link>
        </div>
        <div className="flex justify-center items-center md:w-2/3 order-first md:order-last">
          <img src={study} alt="study" />
        </div>
      </div>
    </div>
  );
};

export default TeacherOrStudent;
