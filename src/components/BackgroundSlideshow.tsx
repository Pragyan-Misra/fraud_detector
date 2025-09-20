import React, { useEffect, useState } from 'react';
import img1 from '@/assets/img1.jpg';
import img2 from '@/assets/img2.jpg';
import img3 from '@/assets/img3.jpg';
import img4 from '@/assets/img4.jpg';

const images = [img1, img2, img3, img4];

const BackgroundSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="background slide"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionProperty: 'opacity' }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" /> {/* Optional: dark overlay for readability */}
    </div>
  );
};

export default BackgroundSlideshow;
