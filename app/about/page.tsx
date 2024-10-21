import React from 'react';
import Link from 'next/link'; // Import Next.js Link component
import HeroSection from './HeroSection';

const AboutMePage = () => {
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
              <a className="hover:text-[#2541B2] hover:underline">Research</a>
            </Link>
            <Link href="/publications" passHref>
              <a className="hover:text-[#2541B2] hover:underline">Publications</a>
            </Link>
            <Link href="/about" passHref>
              <a className="hover:text-[#2541B2] hover:underline underline">About</a>
            </Link>
            <Link href="/cv" passHref>
              <a className="hover:text-[#2541B2] hover:underline">CV</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Footer */}
      <footer className="bg-[#A8AB9B] text-black py-4 text-center">
        <p>&copy; Created & designed by Sam Koscelny</p>
      </footer>
    </div>
  );
};

export default AboutMePage;
