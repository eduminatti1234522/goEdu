import React from "react";
import styles from "styled-components";
import SideBar from "../components/topLeftSideBar";
import Search from "../components/searchCont";
import Socials from "../components/socialLinks";
import Testimonial from "../components/testimonial";

function AboutUs() {
  const features = [
    {
      img: "/setting.png",
      text: "All you need to start",
      para: "Get access to all resources from school listings to admission guidance and consultancy.",
    },
    {
      img: "/tool.png",
      text: "Costumize and Extend",
      para: "Customize and expand your education as well as career plan with clear guidance.",
    },
    {
      img: "/setting.png",
      text: "Active Community",
      para: "Get introduced to the big community of the educational and the industrial sector.",
    },
  ];
  return (
    <div>
      <section className="h-[80vh] w-[100%] relative min-h-[400px] max-h-[550px]">
        <div className="sideBar bg">
          <SideBar />
        </div>
        <div className="z-10 absolute top-[87%] left-1/2 -translate-y-1/2 -translate-x-1/2 min-w-[370px] sm:top-1/2">
          <div className="justify-center flex gap-[20px] mb-4 sm:hidden">
            <span className="text-sm justify-center rounded-[8px] text-white bg-[#2F3F93] block px-7 py-3">FIND SCHOOLS</span>
            <span className="text-sm justify-center rounded-[8px] text-[#2F3F93] bg-white block px-7 py-3 border-2 border-[#2F3F93]">SCHOLASHIPS</span>
          </div>
          <div className="z-10">
            <Search />
          </div>
        </div>
        <div className="socials sm">
          <Socials />
        </div>
        <img className="inset-0	 absolute h-[100%] w-[100%] object-cover" src="/mainTopImg.png" alt="" />
      </section>
      <div className="justify-between hidden gap-[20px] mb-4 sm:flex p-5">
        <span className="text-sm justify-center rounded-[8px] text-white bg-[#2F3F93] block px-7 py-3">FIND SCHOOLS</span>
        <span className="text-sm justify-center rounded-[8px] text-[#2F3F93] bg-white block px-7 py-3  border-2 border-[#2F3F93]">SCHOLASHIPS</span>
      </div>
      <img className="mainImgg" src="/aboutImg.jpg" alt="" />
      <section className="section2">
        <p className="para">
          In this time and era, education has become a valuable commodity. It is
          impossible to imagine a fruitful and satisfying life without
          schooling. However, with so many choices, resources, and facilities
          offered, choosing the best choice has become a huge challenge. <br />
          <br />
          Educational Consultancy has a major impact to simplify this hunt. With
          the help of a team of knowledgeable Education Consultants, we at Edu
          My Nation aspire to make education affordable, advantageous,
          intelligent, successful, enjoyable, and life-changing to everyone. We
          collaborate with our experts to solve educational issues and problems
          faced by the students, parents/ guardian, educators, and even
          institutions, easing the way for a better and more prosperous future.
        </p>
      </section>
      <section className="section3">
        {features.map((val, index) => (
          <div className="sing" key={index}>
            <img src={val.img} alt="" />
            <h3>{val.text}</h3>
            <p>{val.para}</p>
          </div>
        ))}
      </section>
      <section className="section4">
        <div className="block1">
          <img src="/mainTopImg.png" alt="" />
          <div className="Text">
            <h4 className="title">A brief description about EduMyNation</h4>
            <p className="para">
              We are a listing website for various educational institutions
              including schools & colleges from all over India. We also provide
              the child-concerned parents of India with admission guidance and
              consultancy services.
            </p>
          </div>
        </div>
        <div className="block2">
          <img src="/mainTopImg.png" alt="" />
          <div className="Text">
            <h4 className="title">A brief description about EduMyNation</h4>
            <p className="para">
              We are a listing website for various educational institutions
              including schools & colleges from all over India. We also provide
              the child-concerned parents of India with admission guidance and
              consultancy services.
            </p>
          </div>
        </div>
      </section>
      <Testimonial/>
    </div>
  );
}

export default AboutUs;
