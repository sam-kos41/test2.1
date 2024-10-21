// components/ClusterMap.tsx
"use client"; // Make sure this is a client-side component

import { useEffect } from 'react';

const ClusterMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'clustrmaps';
    script.src = '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=tt&d=6x990Sq4KN-2HIkbEshZK88GBdjibt2WZMBVfkOwIRY&cmo=3f403f&ct=3f403f&co=9fb8ad&cmn=e5d8b2';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  return (
    <div id="clustrmaps-widget" className="w-full flex justify-center mt-8">
      {/* ClustrMaps map will render here */}
    </div>
  );
};

export default ClusterMap;
