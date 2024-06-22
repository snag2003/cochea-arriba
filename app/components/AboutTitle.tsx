import React from 'react';
import Image from 'next/image';
import backgroundImage from '../../public/aboutImg.png';

export default function AboutTitle() {
  return (
    <div className="relative text-black text-center flex flex-col items-center justify-center pt-[200px]">
       <div className="absolute inset-0 z-0 bg-black opacity-90"></div>
       <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
          className="opacity-80" // Adjust opacity if needed
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-semibold text-white">Nosotros</h2>
        </div>
      </div>
    </div>
  );
}
