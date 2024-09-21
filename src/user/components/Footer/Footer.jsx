import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#313638] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Artish Isha</h2>
            <p className="text-gray-400">Explore the world of exquisite resin art and handcrafted beauty.</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
  {[
    { name: 'All Products', link: '/products' }, 
    { name: 'Gallery', link: '/gallery' }, 
    { name: 'Workshops', link: '/workshop' },
    { name: 'About Us', link: '/about-us' },
    { name: 'Contact Us', link: '/contact-us' },
   
  ].map((item) => (
    <li key={item.name} className="mb-2">
      <Link to={item.link} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 relative group">
        {item.name}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  ))}
</ul>

          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <a href="https://www.google.com/maps/dir//223,+Artish_Isha's+Resin+Art+Studio,+Lotus+Elite,+Gotri+-+Sevasi+Rd,+near+Collabera,+New+Alkapuri,+Chandramauleshwar+Nagar,+Gotri,+Vadodara,+Gujarat+390021/@22.316283,73.130009,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395fc933ad095567:0xf08f50e967d73000!2m2!1d73.1300194!2d22.3161492?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D" className="text-gray-400 hover:text-blue-300 mb-2">223, Lotus Elite, Gotri - Sevasi Rd, near Collabera, New Alkapuri, Chandramauleshwar Nagar, Gotri, Vadodara, Khanpur, Gujarat 390021, India, 390021 Vadodara, Gujarat, India</a>
            <p className="text-gray-400 mb-2">Phone: 94293 50252</p>
            <p className="text-gray-400">Email: artishisha1@gmail.com</p>
          </div>
          
          <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
    <div className="flex space-x-4">
      {[ 
        { Icon: FaFacebookF, link: "https://www.facebook.com/Artishisha?mibextid=ZbWKwL" }, 
        { Icon: FaInstagram, link: "https://www.instagram.com/artish_isha?igsh=MXdkb2p3d3lraWM4dA==" }, 
        { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/isha-shah-a51a4851/" }
      ].map(({ Icon, link }, index) => (
        <a key={index} href={link} className="text-gray-400 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
          <Icon size={24} />
        </a>
      ))}
    </div>
</div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Websome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





