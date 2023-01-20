import React from 'react';
import { CgMathPercent } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';
import { MdAgriculture } from 'react-icons/md';
import CategoryCard from './CategoryCard/CategoryCard';
const categories = [
  {
    _id: 1,
    name: 'Technology',
    icon: <FaReact size={40} className="text-cyan-400" />,
  },
  {
    _id: 2,
    name: 'Agriculutre',
    icon: <MdAgriculture size={40} className="text-cyan-400" />,
  },
  {
    _id: 3,
    name: 'Mathematics',
    icon: <CgMathPercent size={40} className="text-cyan-400" />,
  },
  {
    _id: 4,
    name: 'Chemistry',
    icon: <GiChemicalDrop size={40} className="text-cyan-400" />,
  },
];
const Categories = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
