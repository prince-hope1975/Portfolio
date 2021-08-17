import React, { Fragment } from "react";
import "./styles/tailwind.css";
import "./styles/sectionTwo.css";
const About = () => (
  <Fragment>
    <section class="first">
      <div class="section1">
        <h1 class="text-center pt-4 font-bold text-4xl mt-6">
          I build beautiful websites
        </h1>
      </div>
      <div class="mainContainer">
        <div class="head flex items-center justify-between px-3 py-1">
          <div class="flex gap-1">
            <div class="circle red"></div>
            <div class="circle yellow"></div>
            <div class="circle green"></div>
          </div>
          <a href="#">Contact</a>
        </div>
        <div class="content">
          <div class="wrapper">
            <div class="img">
              <img src="./download (3).jpeg" alt="" />
            </div>
            <h5>Personalize theme</h5>
            <div class="w-full h-4  flex gap-3 items-center justify-center pt-6">
              <div class="circle themebtn white"></div>
              <div class="circle themebtn blue"></div>
              <div class="circle themebtn purple"></div>
              <div class="circle themebtn darkgreen"></div>
            </div>
            <div class="para text-center p-5 pt-10">
              <p class="italic">
                *These settings will be saved for your next visit
              </p>
            </div>
          </div>
          <div class="wrap">
            <div>
              <div class="about px-3">
                <div class="abs"></div>
                <div class="abs"></div>
                <div class="abs"></div>
                <div class="abs"></div>
                <h1 class="font-bold text-3xl mt-5">What I Do</h1>
                <p class="mt-3">
                  I was a lead Engineer in a past Life, now i enjoy teaching
                  courses
                </p>
              </div>
              <div class="previewShadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="aboutSection p-14 gap-4">
      <div class="more flex flex-col gap-3">
        <h1 class="text-2xl font-extrabold">More About Me</h1>
        <p>
          I build new Projects just to tickle my brain and i love teaching
          others how they're made.
        </p>
        <p>
          While i keep busy teaching courses, I still take interviews in search
          of a great team and project that interests me
        </p>
        <hr />
        <h1 class={"text-2xl font-extrabold"}>TOP EXPERTISE</h1>
        <p class="mt-2">
          Fullstack Developer with primary focus on Node and React:{" "}
          <a class="text-blue-400" href="#">
            Download Resume
          </a>
        </p>
        <div class="skills flex gap-3 justify-around">
          <ul>
            <li>JavaScript</li>
            <li>Node </li>
            <li>React.js</li>
            <li>HTML</li>
            <li>Css</li>
          </ul>
          <ul>
            <li>Express</li>
            <li>FireBase</li>
            <li>Scss</li>
            <li>Python</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
      <div class="links flex flex-col gap- ml-4 items-center tracking-tight leading-l">
        <div class="mt-4">
          <img
            class="image "
            src="./raimond-klavins-bSSjxQzrlNA-unsplash.jpg"
            alt=""
          />
        </div>
        <h1 class="font-bold text-2xl mt-3 ">Find me on Twitter and Youtube</h1>
        <a href="" class="text-blue-400 text-lg m-0">
          Youtube:@PrinceCharles
        </a>
        <a href="" class="text-blue-400 text-lg m-0">
          Twitter @princeCharles
        </a>
      </div>
    </section>
  </Fragment>
);
export default About;
