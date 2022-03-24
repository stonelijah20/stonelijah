import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { homeText } from '../files/Data'
import './Homeinfo.css'
import js  from '../Assets/headericons/langicons/js.svg'
import react  from '../Assets/headericons/langicons/react.svg'
import ts  from '../Assets/headericons/langicons/ts.svg'
import mongo  from '../Assets/headericons/langicons/mongo.svg'
import node  from '../Assets/headericons/langicons/node.svg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';



const textVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2,
        }
    }
}

const buttonVariants = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            duration: 2,
            delay: 3,
        }
    },
    hover: {
        scale: 1.1,
    }
}

const Homeinfo = () => {
    const navigate = useNavigate()
    const handlePortfolioClick = () => navigate('./Portfolio')
    useEffect(() => {
        function addup(num:number) {
            let lang = document.getElementById('lang')
            let calcnum:number = num + 1
            if(calcnum < 5){
                switch (calcnum) {
                    case 0:
                        lang?.children[calcnum].classList.add('img-hov0')
                        lang?.children[1].classList.remove('img-hov1')
                        lang?.children[2].classList.remove('img-hov2')
                        lang?.children[3].classList.remove('img-hov3')
                        lang?.children[4].classList.remove('img-hov4')
                        break;
                    case 1:
                        lang?.children[calcnum].classList.add('img-hov1')
                        lang?.children[0].classList.remove('img-hov0')
                        lang?.children[2].classList.remove('img-hov2')
                        lang?.children[3].classList.remove('img-hov3')
                        lang?.children[4].classList.remove('img-hov4')
                        break;
                    case 2:
                        lang?.children[calcnum].classList.add('img-hov2')
                        lang?.children[0].classList.remove('img-hov0')
                        lang?.children[1].classList.remove('img-hov1')
                        lang?.children[3].classList.remove('img-hov3')
                        lang?.children[4].classList.remove('img-hov4')
                        break;
                    case 3:
                        lang?.children[calcnum].classList.add('img-hov3')
                        lang?.children[0].classList.remove('img-hov0')
                        lang?.children[1].classList.remove('img-hov1')
                        lang?.children[2].classList.remove('img-hov2')
                        lang?.children[4].classList.remove('img-hov4')
                        break;
                    case 4:
                        lang?.children[calcnum].classList.add('img-hov4')
                        lang?.children[0].classList.remove('img-hov0')
                        lang?.children[1].classList.remove('img-hov1')
                        lang?.children[2].classList.remove('img-hov2')
                        lang?.children[3].classList.remove('img-hov3')
                        break;                
                    default:
                        break;
                }
                setTimeout(() => {
                    addup(calcnum)
                }, 5000);
            }
            else {
                repeat(0)
            }
        }
        function repeat(rep:number){
            if(rep < 5){
                addup(-1)
            }
        }
        addup(-1)
    }, [])
  return <div className="header-container"
  >
        {homeText.map((htext, index) => {
                        const {headertext,bodytext} = htext
                        return (
                    <motion.div className='headertext' key={index}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                    >
                        <h1><span className='headertext2'>{headertext}{' '}</span>{<Typewriter
                            words={[bodytext]}
                            loop={1}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                        />}</h1>
                        <div id='lang'>
                            <img className='img-style .img-hov' src={js} alt='javascript'/>
                            <img className='img-style' src={react} alt='react'/>
                            <img className='img-style' src={ts} alt='typescript'/>
                            <img className='img-style' src={mongo} alt='mongo'/>
                            <img className='img-style' src={node} alt='node'/>
                        </div>
                    </motion.div>
                )
            })}
            {
                homeText.map((last,index) => {
                    const {checkportfolio} = last;
                    return(
                        <div key={index} className="position">
                        <motion.div className="checkprojects"
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover" onClick={handlePortfolioClick}
                        >
                            <h4>{checkportfolio}</h4>
                        </motion.div>
                        </div>
                    )
                })
            }
  </div>;
};

export default Homeinfo;


