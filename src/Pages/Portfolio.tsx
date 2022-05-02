import React from 'react'
import './Portfolio.css'
import Next from '../components/Next'
import Prev from '../components/Prev'
import { imgdata, portfolioheading} from '../files/Data' 
import { useNavigate  } from 'react-router-dom'
import { motion } from 'framer-motion'
import Tags from '../components/Tags'


const pVariants= {
  hidden: {
    x: 100
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 290,
    }
  }
}




const Portfolio = () => {
  const navigate = useNavigate() 
  const handlenextClick = () => navigate('/Contact')
  const handleprevClick = () => navigate('/')

    return (
        <motion.div className="portfolio-container"
          variants={pVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="portfolio-center">
        <div className="header">
          {portfolioheading.map((texts, index) => {
            const {header, bodytext} = texts;
            return(
              <div key={index} className="content">
                <div className='content-center'>
                  <h2>{header}</h2>
                    <hr/>
                  <h4>{bodytext}</h4>
                </div>
              </div>
            )
          })}
          
        </div>
        <div className='tags-section'>
          <Tags/>
        </div>
        <div className='portfolio-section'>
            {
                imgdata.map((imdata,index) => {
                    const {pimg, title, info} = imdata
                    return(
                        <div className='ui-card' key={index}>
                            <img src={pimg} alt="" />
                            <div className='information'>
                                <h2>{title}</h2>
                                <p>{info}</p>
                                <div className="prjtbtn">
                                  <button>Learn More</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>

            <div className="ps-icon" onClick={handlenextClick}>
              <Next/>
            </div>
            <div className='ps-icon' onClick={handleprevClick}>
              <Prev/>
            </div>
          </div>
        </motion.div>
    )
}

export default Portfolio
