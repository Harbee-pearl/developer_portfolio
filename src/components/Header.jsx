import React from "react";

const Header = () => {
  return (
    <div
      id="home"
      className="bg-hero bg-no-repeat bg-center h-[80vh] max-h-[120rem] bg-black/5 min-h-fit flex flex-col justify-center items-center relative"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-offwhite/60"></div>
      <div className="my-12 py-8 z-30 px-4">
        <div className="w-fit ">
          <h3 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[72px] font-extrabold uppercase text-center z-30 mb-3">
            HEY, I'M RUQAYAT AJIBADE
          </h3>
          <h5 className=" text-center text-lg sm:text-xl md:text-xl mb-4">
            A Frontend Web developer focused on building the client-facing side
            <br /> of websites and web applications
          </h5>

          <div className="text-center">
            <a className="blue-button" href='#projects'>PROJECTS</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
