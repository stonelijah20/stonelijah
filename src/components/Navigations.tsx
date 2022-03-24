import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { navigations } from '../files/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navigations.css' 
import { motion } from 'framer-motion'

const containerVariant = {
  hover: {
    scale: 1.4
  }
}

const Navigations = () => {
  const [Click, setClick] = useState(false);
  const handleClick = () => setClick(!Click)
  
  return <div>
          <div className={Click? "navigation nav-open": "navigation nav-close"}>
               <ul>
                  {navigations.map((navitems, index) => {
                    const {name, nav} = navitems
                    return(
                          <li onClick={handleClick} key={index}>
                        <Link to ={nav}>{name}</Link>
                      </li>
                    )
                  })}  
               </ul>
               <div className={Click? "close-icon": "close-icon menu-dis"} onClick={handleClick}>
                 <FontAwesomeIcon icon={faTimes} className="menu-icon-size" style={{color: "white"}}></FontAwesomeIcon>
               </div>
          </div>
          <motion.div className={Click? "menu-icon menu-dis": "menu-icon"} onClick={handleClick}
                  variants={containerVariant}
                  whileHover="hover"
          >
            <FontAwesomeIcon icon={faBars} className="menu-icon-size" style={{color: "white"}}></FontAwesomeIcon>
          </motion.div>
  </div>;
};

export default Navigations;
