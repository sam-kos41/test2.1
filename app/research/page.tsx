'use client';
import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image'; 

const ResearchPage = () => {
  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen font-serif">
      {/* Sticky Navigation with Name and Links */}
      <nav className="bg-white py-4 shadow-md fixed top-0 left-0 w-full z-50 text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Samuel N. Koscelny</h1>
          <div className="mt-4 space-x-8 font-sans text-lg flex justify-center">
            <Link href="/" passHref>
              <a className="hover:text-[#2541B2] hover:underline">Home</a>
            </Link>
            <Link href="/research" passHref>
              <a className="hover:text-[#2541B2] hover:underline underline">Research</a>
            </Link>
            <Link href="/publications" passHref>
              <a className="hover:text-[#2541B2] hover:underline">Publications</a>
            </Link>
            <Link href="/about" passHref>
              <a className="hover:text-[#2541B2] hover:underline">About</a>
            </Link>
            <Link href="/cv" passHref>
              <a className="hover:text-[#2541B2] hover:underline">CV</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section className="pt-32 py-16 px-4 lg:px-24 bg-[#F5F5F5]">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-left">Research Projects</h1>

          {/* EASt Lab Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-left">
              Ergonomics and Applied Statistics (EASt) Lab: Recent Projects -{' '}
              <a href="https://cecas.clemson.edu/east/" className="text-[#EA8F1F] underline hover:text-[#FF8800]">Visit Lab</a>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> 
              {/* Project 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <Image
                  src="/bayesian_project.png"
                  alt="Bayesian Approach to User Behavior Modeling"
                  width={300}
                  height={400} // Proportions for this image
                  className="w-full h-auto object-cover rounded-md"
                />
                <h3 className="text-xl font-bold mb-2">Bayesian Approach to User Behavior Modeling</h3>
                <p className="text-base">
                  Evaluated healthcare chatbot information presentation styles through Bayesian hierarchical regression. 
                </p>
              </div>

              {/* Project 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <Image
                  src="/pfb_figure.png"
                  alt="Thematic Analysis in Human-AI Interaction"
                  width={510}  // 8.5 width
                  height={384}  // 6.39 height
                  className="w-full h-auto object-contain rounded-md mb-6"  // Added margin-bottom to create space
                  />
                <h3 className="text-xl font-bold mt-4 mb-2">Thematic Analysis in Human-AI Interaction</h3>
                <p className="text-base">
                  Explored user experience and perceptions through thematic analysis of chatbot interactions. 
                </p>
              </div>

              {/* Project 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <Image
                  src="/ED_infographic.png"
                  alt="Big Data Healthcare Analytics"
                  width={459}  // 7.66 width
                  height={339}  // 5.66 height
                  className="w-full h-auto object-contain rounded-md"
                />
                <h3 className="text-xl font-bold mt-4 mb-2">Big Data Healthcare Analytics</h3> {/* Added margin-top to push down the text */}
                <p className="text-base">
                  Investigated pediatric patient characteristics and outcomes using big data analytics.
                </p>
              </div>
            </div>
          </div>

          {/* HSEAS Lab Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-left">
              Human-Systems Engineering and Applied Statistics (HSEAS) Lab: Past Project -{' '}
              <a href="https://sites.google.com/view/hseas-lab/" className="text-[#EA8F1F] underline hover:text-[#FF8800]">Visit Lab</a>
            </h2>

            <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-2xl">
              <Image
                src="/Gesture_picture.png"
                alt="Gesture Study Research"
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mb-2">Gesture Study Research</h3>
              <p className="text-base">
                Natural gesture elicitation across different linguistic and cultural groups was explored, focusing on intuitive gestures in 3D systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#A8AB9B] text-black py-4 text-center">
        <p>&copy; Created & designed by Sam Koscelny</p>
      </footer>
    </div>
  );
};

export default ResearchPage;
