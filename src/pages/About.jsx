import React from "react";
import { Navbar, Footer, Header, SectionTitle } from "../components";

const About = () => {
  const tags = [
    {
      tag: "Version Control",
      skills: ["Git", " Github", "Gitlab", "Azure"],
    },
    {
      tag: "CSS",
      skills: ["Tailwind CSS", "SASS", "Bootstrap"],
    },
    {
      tag: "Languages and Frameworks",
      skills: ["Javascript", "React", "Next.js"],
    },
  ];
  return (
    <div className="text-black relative flex flex-col justify-between font-montserrat">
      <Navbar />
      <div className="">
        <Header />
        <div>
          <div id="projects" className="my-12 py-6 px-4">
            <div className="mb-5">
              <SectionTitle title="PROJECTS" />
            </div>
            <p className="text-sm md:text-md lg:text-lg mb-4 text-center">
              Here you will find some of the personal and clients projects that
              I have worked on
            </p>
          </div>
          <div id="about" className="my-12 py-6 px-4">
            <div className="mb-5">
              <SectionTitle title="ABOUT ME" />
            </div>
            <div className="grid grid-cols-2  gap-y-8 gap-x-8 xl:gap-x-12 lg:w-10/12 xl:w-9/12 mx-auto">
              <div className="col-span-2 md:col-span-1">
                <h5 className="text-blue font-bold text-3xl mb-4">
                  Get to know me!
                </h5>
                <div className="text-[#666] text-sm md:text-md xl:text-lg">
                  <p>
                    I'm a <strong>Frontend Web Developer</strong> focused on
                    building the client-facing side of websites and web
                    applications. Check out some of my work in the{" "}
                    <strong>Projects</strong> section.
                  </p>
                  <br />
                  <p>
                    I like to share opportunities and content related to the
                    stuff that I have learned over the years in{" "}
                    <strong>Web Development</strong> so it can help other people
                    in the development community. Feel free to Connect or Follow
                    me on my{" "}
                    <a
                      href="https://www.linkedin.com/in/ruqayatajibade/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue font-bold underline"
                    >
                      Linkedin{" "}
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://www.twitter.com/OmoIyaRukkie"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue font-bold underline"
                    >
                      Twitter
                    </a>{" "}
                    where I post useful content related to Web Development and
                    Programming
                  </p>
                  <br />
                  <p>
                    I'm open to Job opportunities where I can contribute, learn
                    and grow. If you have a good opportunity that matches my
                    skills and experience then don't hesitate to contact me.
                  </p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 ">
                <h5 className="text-blue font-bold text-3xl mb-4">Skills</h5>

                <div className="">
                  {tags.map((tag, i) => (
                    <div key={`poi${i}`} className="mb-4">
                      <h6 className="text-[#666] mb-2">{tag.tag}</h6>

                      {tag.skills.map((skill, i) => (
                        <button
                          key={`ch${i}`}
                          className="bg-blue text-white text-sm py-2 px-5 mr-5 mb-3 rounded"
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            id="contact"
            className="bg-hero bg-no-repeat bg-cover bg-center py-8 relative"
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-offwhite/75"></div>
            <div className=" w-full place-content-center relative z-30 px-4">
              <div className="mb-4">
                <SectionTitle title="CONTACT" />
              </div>
              <div className=" w-full md:w-9/12 xl:w-7/12  mx-auto">
                <p className="text-sm md:text-md lg:text-lg mb-4 text-center">
                  Feel free to contact me by submitting the form below and I
                  will get back to you as soon as possible
                </p>

                <div className=" w-full bg-white shadow-customOne px-6 py-12  rounded-lg">
                  <input className="input mb-6" placeholder="Enter your name" />
                  <input
                    className="input mb-6"
                    placeholder="Enter your email address"
                  />
                  <textarea
                    className="input  h-60 resize-none"
                    placeholder="Write your message"
                  ></textarea>

                  <div className="text-end mt-4">
                    <button className="blue-button">SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
