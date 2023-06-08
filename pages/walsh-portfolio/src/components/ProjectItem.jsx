import React from "react";

const ProjectItem = ({ title, imgUrl, stack, link }) => {
  return (
    <a className="flex text-white hover:scale-105 transition duration-300 ease-in-out" href={link}>
      <div className="flex flex-col items-center justify-center w-72 h-72 bg-zinc-900 m-auto rounded-xl border-2">
        {/* 1) Picture, 2) Title, 3) Relavant Tags */}
        <img
          className="h-3/5 shadow-lg  rounded-t-xl"
          src={imgUrl}
          alt="project"
        ></img>

        <div className="flex-col p-4 text-lg w-full h-2/5 shadow-lg mt-auto rounded-b-xl flex items-center justify-center text-left">
          <h1 className="w-full h-auto mb-2">{title}</h1>
          <span className="w-full h-auto flex flex-wrap gap-2 text-center align-middle text-sm">
            {stack.map((item) => (
              <span
                className="rounded-md border-2 px-2 py-1 bg-zinc-700"
                key={stack.key}
              >
                {item}
              </span>
            ))}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
