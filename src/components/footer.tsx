import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center mt-10 ">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        {["Home", "About", "Services", "Media", "Gallery", "Contact"].map(
          (item) => (
            <a key={item} href="#" className="hover:text-gray-900">
              {item}
            </a>
          )
        )}
      </nav>

      <div className="flex justify-center space-x-5">
        {[
          { href: "https://facebook.com", icon: "facebook-new" },
          { href: "https://linkedin.com", icon: "linkedin-2" },
          { href: "https://instagram.com", icon: "instagram-new" },
          { href: "https://messenger.com", icon: "facebook-messenger--v2" },
          { href: "https://twitter.com", icon: "twitter" },
        ].map(({ href, icon }) => (
          <a key={icon} href={href} target="_blank" rel="noopener noreferrer">
            <img
              src={`https://img.icons8.com/fluent/30/000000/${icon}.png`}
              alt={icon}
            />
          </a>
        ))}
      </div>

      <p className="text-center text-gray-700 font-medium">
        &copy; 2022 Company Ltd. All rights reserved.
      </p>
    </footer>
    </div>
    
  );
};

export default Footer;
