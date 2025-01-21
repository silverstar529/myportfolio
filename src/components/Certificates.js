import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import CertificatesData from "../data/certificates";

const Certificates = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center sm:mx-6 md:mx-12 md:pt-5 md:mt-5 xl:mx-40">
        <div
          id="certificates"
          className="flex flex-wrap w-full flex-col items-center text-center"
        >
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-3 text-gray-900">
            Certificates
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            My Professional Certificates
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-3 md:gap-x-5 lg:gap-x-2 lg:gap-y-5 xl:gap-y-10 xl:gap-x-5 mt-4 md:mt-8 ">
          {CertificatesData.reverse().map((project) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="false"
              key={project.id}
              className="group relative flex flex-col flex-wrap h-80 w-[95%] mx-auto shadow-md md:shadow-lg rounded-xl "
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-80 rounded-xl"
              />
              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-darkblue rounded-xl">
                <h3 className="text-2xl font-medium text-white my-2">
                  {project.name}
                </h3>
                <p className="px-2 text-lg text-white">{project.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
