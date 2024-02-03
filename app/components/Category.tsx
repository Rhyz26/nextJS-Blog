'use client';
import React, { useContext } from 'react'
import { CategoryContext } from "@/context/CategoryContext"; 

const Category = ({ cat }: any) => {
  const { category, changeCategory} = useContext(CategoryContext);
  return (
    <div 
    onClick={() => changeCategory(cat.attributes.Title)}
    className={`${
      cat.attributes.Title === category
      ? "bg-[#ffffff text-black"
      : "bg-[#af8533"
    } p-4 rounded-lg shadow-md cursor-pointer`}
    >
      {cat.attributes.Title}
      
      
        </div>
  );
};

export default Category;