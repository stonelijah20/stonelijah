import React from 'react'
import './Home.css'
import Socials from '../components/Socials'
import Homeinfo from '../components/Homeinfo'
import Next from '../components/Next'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handlenextClick = () => navigate('./Portfolio')

  return <div className='home'>
            <div className="typetext">
              <Homeinfo/>
            </div>
            <div className="socials">
              <Socials/>
            </div>
            <div className="switch-icons" onClick={handlenextClick}>
              <Next/>
            </div>
        </div>;
};

export default Home;
