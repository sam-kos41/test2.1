"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { FaFileAlt } from 'react-icons/fa'; 

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Use useEffect to inject the ClustrMaps script when the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'clustrmaps';
    script.src = '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=tt&d=6x990Sq4KN-2HIkbEshZK88GBdjibt2WZMBVfkOwIRY&cmo=3f403f&ct=3f403f&co=9fb8ad&cmn=e5d8b2';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script if the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen font-serif">
      {/* Navigation, Hero, and Other Sections */}

      {/* Add ClustrMaps Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Website Traffic Map</h2>
          <div id="clustrmaps-widget" className="w-full flex justify-center">
            {/* ClustrMaps widget will load here */}
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

export default HomePage;
