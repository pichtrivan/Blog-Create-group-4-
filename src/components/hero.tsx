import React from 'react';

interface HeroProps {
  title: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, backgroundImage }) => {
  return (
    <div
      className="h-72 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {title}
    </div>
  );
};

export default Hero;

