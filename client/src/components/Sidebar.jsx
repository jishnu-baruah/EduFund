import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div 
    className={`w-[48px] h-[48px] rounded-[10px] ${isActive === name ? 'bg-[#2c2f32]' : ''} flex justify-center items-center ${!disabled ? 'cursor-pointer' : 'cursor-not-allowed'} ${styles}`} 
    onClick={handleClick}
  >
    <img src={imgUrl} alt={`${name}_icon`} className={`w-1/2 h-1/2 ${isActive !== name ? 'grayscale' : ''}`} />
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex flex-col items-center sticky top-5 h-[93vh] bg-[#1c1c24] rounded-[20px] py-4">
      <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} name="logo" />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <Icon 
          styles="w-[48px] h-[48px] bg-[#2c2f32] shadow-secondary mt-4" 
          imgUrl={sun} 
          name="sun" 
          handleClick={() => {/* Handle theme toggle or other actions */}}
        />
      </div>
    </div>
  );
}

export default Sidebar;
