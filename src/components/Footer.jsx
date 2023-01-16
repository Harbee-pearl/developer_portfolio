import React from "react";
import { TwitterIcon, LinkedinIcon, InstagramIcon } from "../assets/icons";

const Footer = () => {
  const year = new Date().getFullYear();
  const socialmedia = [
    { icon: TwitterIcon, link: "https://www.linkedin.com/in/ruqayatajibade/" },
    { icon: LinkedinIcon, link: "https://www.linkedin.com/in/ruqayatajibade/" },
    {
      icon: InstagramIcon,
      link: "https://www.linkedin.com/in/ruqayatajibade/",
    },
  ];

  return (
    <div className="w-full bg-blue text-white py-4">
      <div className="w-full sm:w-11/12 md:w-10/12 xl:w-9/12 mx-auto">
        <div className="grid grid-cols-2 gap-5 p-4">
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-2xl mb-4">RUQAYAT AJIBADE</h4>
            <p>
              A Frontend Web developer focused on building the client-facing
              <br /> side of websites and web applications
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 md:justify-self-end">
            <h4 className="font-bold text-2xl mb-4">SOCIALS</h4>
            <ul className="flex items-center">
              {socialmedia.map((sm, i) => (
                <li key={`ter${i}`} className="mr-4">
                  <a href={sm.link} target="_blank" rel="noreferrer">
                    <img src={sm.icon} alt="" className="w-8 h-8" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-t-white pt-4">
          <p className="text-center">
            &copy; {year}. <span className="font-bold">Ruqayat Ajibade</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
