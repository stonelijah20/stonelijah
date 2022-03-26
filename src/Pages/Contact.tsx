import React, { useState, useEffect } from 'react';
import './Contact.css'
import { contactdata } from '../files/Data'
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import Prev from '../components/Prev';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, } from 'framer-motion'

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
const buttonsVariants={
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1.5
    }
  },
  hover: {
    scale: 1.05
  }
}
const inputVariants = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.5
    }
  }
}


const Contact = () => {
  useEffect(() => {
    const textarea = document.querySelector('textarea')
    textarea?.addEventListener('keyup', e => {
      textarea.style.height = "61px"
      let sh = textarea.scrollHeight
      textarea.style.height = `${sh}px`
    })
  }, [])
  
  const [change, setChange] = useState(true)
  const [contactdetails, setContactdetails] = useState({cname:"", cemail:""})
  const [cmessage, setCmessage] = useState("")


  const clickHandler = (e:any) => {
    e.preventDefault()
    if(contactdetails.cname === "" || contactdetails.cemail === ""){
      setChange(true)
      alert("Both fields are required")
    }else {
      setChange(!change)
    }
    
  }
  const backHandler = (e:any) => {
    e.preventDefault()
    setChange(!change)
  }
  const submitHandler = (e:any) => {
    e.preventDefault()
    if(contactdetails.cname === "" || contactdetails.cemail === ""){
      setChange(true)
    }
  }
  const submitAll = (e:any) => {
    e.preventDefault()
    if (cmessage === ""){
      setChange(false)
      alert('The field is required')
    }else{
      setChange(true)
    fetch('https://contact-form-7541d-default-rtdb.firebaseio.com/Contact.json', {
      method: 'POST',
      body: JSON.stringify([contactdetails, cmessage]),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      alert("Message Sent")
    })
    }
    

    if(contactdetails.cname === "" || contactdetails.cemail === ""){
      setChange(true)
    }
    if(cmessage !== "" && contactdetails.cname !== "" && contactdetails.cemail !== ""){
      setContactdetails({cname:'', cemail:''})
      setCmessage("")
    }
    
  }

  const navigate = useNavigate() 
  const handleprevClick = () => navigate('/Portfolio')
  return <motion.div 
    variants={pVariants}
    initial="hidden"
    animate="visible"
  >
      <div className="contact">
        <div className="section1">
          {contactdata.map((section1data,index) => {
            const {heading, body, email} = section1data
            return(
              <div key={index} className="section1style">
                <h1>{heading}</h1>
                <h3>{body} <span className='email' ><a href='mailto:msontop.me@gmail.com'>{email}</a></span></h3>
              </div>
            )
          })}
        </div>
        <div className="section2">
          <AnimatePresence>
          {
            change ?
            <motion.form className='form1'
              exit={{opacity: 0, transition: {duration: 1}}} 
              key="changeform" 
              onSubmit={submitHandler}
            >
              <motion.input name='name' placeholder="Fill with your name" 
                value={contactdetails.cname}
                onChange={(e) => setContactdetails({...contactdetails, cname: e.target.value})}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                exit={{y: 100, opacity: 0, transition: {duration: 1}}}
              ></motion.input >
              <motion.input name='email' placeholder="Fill with your email address" 
                value={contactdetails.cemail}
                onChange={(e) => setContactdetails({...contactdetails, cemail: e.target.value})}
                variants={inputVariants}
                initial={{y: 100, opacity: 0}}
                animate="visible"
                exit={{y: -100, opacity: 0, transition: {duration: 1}}}
              ></motion.input >
              <div className="buttons">
                <motion.button className="button1" id='btn1' onClick={clickHandler}
                  variants={buttonsVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                  exit={{opacity: 0, transition: {duration: 1}}}
                >Next</motion.button>
          </div>
          </motion.form>
           
           :
          
          <motion.form className='form2' key="chnagedform" onSubmit={submitAll}
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 1, delay: 1.5}}
            exit={{opacity: 0, scale: 0, transition:{duration: 1}}}
          >
              <motion.textarea name='message' placeholder="Fill with your message"
                value={cmessage}
                onChange={(e) => setCmessage(e.target.value)}
              ></motion.textarea >
              <div className="buttons">
                <motion.button className="button2" id='btn2'
                  onClick={submitAll}
                  variants={buttonsVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                >Send your message</motion.button>
                <motion.button className="button2" id='btn3' onClick={backHandler}
                  variants={buttonsVariants}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                >Back</motion.button>
              </div>
          </motion.form> }
          </AnimatePresence>
          

          
        </div>
        
        <div className="section3">
          {
            contactdata.map((socials, index) => {
              const {socialheading} =socials
              return(
                <div className="csocials" key={index}>
                  <h2>{socialheading}</h2>
                  <ul>
                    <li className="ctwitter"><a href="https://www.twitter.com/MoyosoreElijah" rel='noreferrer' target="_blank"><FaTwitter size="1.5rem"/></a></li>
                    <li className="clinkedin"><a href="https://www.linkedin.com/in/moyosore-elijah-b09aa218a" rel='noreferrer' target="_blank"><FaLinkedin size="1.5rem"/></a></li>
                    <li className="cinstagram"><a href="https://www.instagram.com/ston.elijah/" rel='noreferrer' target="_blank"><FaInstagram size="1.5rem"/></a></li>
                    <li className="cgithub"><a href="https://github.com/stonelijah01" rel='noreferrer' target="_blank"><FaGithub size="1.5rem"/></a></li>
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='cb-icon' onClick={handleprevClick}>
        <Prev/>
      </div>
  </motion.div>;
};

export default Contact;
