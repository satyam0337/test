import React from "react";


import ScreenHeading from "./screenHeading";

import "../css/About.css";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import Chakra from "../assets/Chakra.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import redux from "../assets/redux.png";
import dataS from "../assets/dataS.png";
import softS from "../assets/softS.png";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: Chakra,
      title: "Chakra",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 13,
      src: dataS,
      title: "Data Structure",
      style: "shadow-red-500",
    },
    {
      id: 14,
      src: softS,
      title: "Soft skills",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      // style={{ marginTop: "10px" }}
      name="Skills"
      className=" w-full h-100  bg-white text-black ptop"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        <ScreenHeading title={"Skillset"} subHeading={"These are the technologies I've worked with and used them in my projects."} />

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-black ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
