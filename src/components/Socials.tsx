import React, { useEffect } from 'react';
import './Socials.css'
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'


const Socials = () => {
  useEffect(() => {
    const handles = document.getElementById('social-accts')
    const addup = (a:number) => {
      a++
      switch (a) {
                    case 0:
                        handles?.children[a].classList.add('handlesedit')
                        break;   
                    case 1:
                        handles?.children[a].classList.add('handlesedit')
                        handles?.children[a-1].classList.add('handleseditagain')
                        break;
                    case 2:
                        handles?.children[a].classList.add('handlesedit')
                        handles?.children[a-1].classList.add('handleseditagain')
                        break; 
                    case 3:
                        handles?.children[a].classList.add('handlesedit')
                        handles?.children[a-1].classList.add('handleseditagain')
                        break; 
                    case 4:
                        handles?.children[a-1].classList.add('handleseditagain')
                        break;              
                    default:
                        break;
                }
      if (a < 4){
        setTimeout(() => {
          addup(a)
        }, 300);
      }
    }
    addup(-1)
  }, [])
  

  
  return <div className="social-icons">
  <ul id='social-accts' >
    <li className="twitter"><a href="https://www.twitter.com/MoyosoreElijah" rel='noreferrer' target="_blank"><FaTwitter size="1.5rem"/></a></li>
    <li className="linkedin"><a href="https://www.linkedin.com/in/moyosore-elijah-b09aa218a" rel='noreferrer' target="_blank"><FaLinkedin size="1.5rem"/></a></li>
    <li className="instagram"><a href="https://www.instagram.com/ston.elijah/" rel='noreferrer' target="_blank"><FaInstagram size="1.5rem"/></a></li>
    <li className="github"><a href="https://github.com/stonelijah01" rel='noreferrer' target="_blank"><FaGithub size="1.5rem"/></a></li>
  </ul>
  </div>;
};

export default Socials;
