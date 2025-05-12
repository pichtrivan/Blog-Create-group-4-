import React from 'react';

interface Props {
  images: string[];
}

const ImageGallery: React.FC<Props> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`gallery-${idx}`} className="rounded-md" />
      ))}
    </div>
  );
};

export default ImageGallery;

