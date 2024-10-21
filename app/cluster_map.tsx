"use client";

import { useEffect } from 'react';

const ClusterMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'clustrmaps';
    script.src = '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=tt&d=6x990Sq4KN-2HIkbEshZK88GBdjibt2WZMBVfkOwIRY&cmo=3f403f&ct=3f403f&co=9fb8ad&cmn=e5d8b2';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when component unmounts
    return () => {
      const existingScript = document.getElementById('clustrmaps');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div id="clustrmaps-widget" className="w-full flex justify-center mt-8">
      {/* The map will render here */}
    </div>
  );
};

export default ClusterMap;
