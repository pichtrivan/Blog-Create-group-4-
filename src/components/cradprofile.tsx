import React from 'react';
import './CardProfile.css';

interface CardProfileProps {
  images: string[]; // An array of image URLs
}

const CardProfile: React.FC<CardProfileProps> = ({ images }) => {
  // If no images are provided, you might want a fallback or to render nothing
  if (!images || images.length === 0) {
    return (
      <div className="text-center text-gray-500 py-5">
        No images available for this author's history.
      </div>
    );
  }

  return (
    <div className="card-profile-container">
      {images.map((imageUrl, index) => (
        <div className="card" key={index}> {/* Use index as key if URLs can be duplicates, or a unique ID if available */}
          <img
            src={imageUrl}
            alt={`Author history image ${index + 1}`}
            className="card-image"
          />
        </div>
      ))}
    </div>
  );
};

export default CardProfile;