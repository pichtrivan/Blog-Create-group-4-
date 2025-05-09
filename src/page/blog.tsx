// pages/blog.tsx

import React from "react";
import Hero from "../components/hero";
import ImageGallery from "../components/image-gallery";
import RelatedBlogs from "../components/related-blogs";

const Blog: React.FC = () => {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
  ];

  return (
    <>
      <div className="bg-green-600 ">
        <Hero title="Koh Kong Krao" backgroundImage="/images/hero.jpg" />
        <div className=" max-w-4xl mx-auto px-4 py-8">
          <p className="text-sm text-justify  mt-20">
            កោះកុងក្រៅកាន់តែស្អាត Most stunning island
            ទេសភាពនៃធម្មជាតិស្រស់ស្អាតហើយ តែបើមានអ្នកពូកែថតទៀត
            កាន់តែធ្វើអោយយើងមានអារម្មណ៍ថាទីនោះកាន់ស្អាតទ្វេរដង។
            សូមអរគុណក្រុមចុងក្រោយនៃចុងរដូវប្រាំងនេះ ជួបគ្នាម្តងទៀតនៅចុងឆ្នាំនេះ
            ។ The​ nature scenery is more beautiful because great capturing to
            fulfill more attractive.Thank you, the last group of the beginning
            of this rainy season, see you again at the end of this year.
          </p>
          <ImageGallery images={images} />
          <RelatedBlogs />
        </div>
      </div>
    </>
  );
};

export default Blog;
