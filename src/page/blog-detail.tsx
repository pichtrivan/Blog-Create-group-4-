import React from "react";
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
import Image4 from "../assets/4.png";
import Image5 from "../assets/5.png";

const KohKongKraoDetailSection: React.FC = () => {
  const images = [Image1, Image2, Image3, Image4, Image5];

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 text-center ">
      <h1 className="text-2xl font-bold mt-10 ">Koh Kong Krao</h1>
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          <br />
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          កោះកុងក្រៅកាន់តែស្អាត Most stunning island
          ទេសភាពនៃធម្មជាតិស្រស់ស្អាតហើយ តែបើមានអ្នកពូកែថតទៀត
          កាន់តែធ្វើអោយយើងមានអារម្មណ៍ថាទីនោះកាន់ស្អាតទ្វេរដង។
          សូមអរគុណក្រុមចុងក្រោយនៃចុងរដូវប្រាំងនេះ ជួបគ្នាម្តងទៀតនៅចុងឆ្នាំនេះ ។
          The​ nature scenery is more beautiful because great capturing to
          fulfill more attractive.Thank you, the last group of the beginning of
          this rainy season, see you again at the end of this year.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Koh Kong Krao ${index + 1}`}
              className="rounded-lg w-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KohKongKraoDetailSection;
