import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';
import logo from './jcc.png'; // Assuming logo is in local
import chur from './vanagaram.jpg';
import ut from './Uturn.png';
import be from './beth.jpg';
import l1 from './logo1.jpg';
import l2 from './logo2.jpg';
import l3 from './logo3.jpg';
import l4 from './logo4.jpg';
import l5 from './logo5.jpg';

const App: React.FC = () => {
  return (
    <>
      <div className="full-page">
        {/* Video background */}
        <video className="background-video" autoPlay loop muted>
          <source src="jesus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>

        <motion.img
          className="logo"
          src={logo}
          alt="logo"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="centered-text"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          We Exist To Honor God<br />
          And Make Disciples
        </motion.div>

        
        <motion.div 
      className="navbar" 
      initial={{ scale: 0, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      exit={{ scale: 0, opacity: 0 }}  // Optional exit animation
      transition={{ duration: 0.5, delay: 0.5 }} // Shorter duration and different delay
    >
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Today Promise</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
        <a href="#">Blessing Plans</a>
      </div>
    </motion.div>
      </div>

      <div className="container">
        <div className="row">
          {/* Video Column with Framer Motion */}
          <motion.div
            className="column"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <div className="video-wrapper">
              <iframe
                width="560"
                height="315"
                src="https://youtu.be/ivUb1K0B0zE?si=N2kSZi1t-fh5V2SU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Description Column with Framer Motion */}
          <motion.div
            className="column"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
          >
            <h2>Walk with Jesus</h2>
            <p>
              Make it a daily habit to walk with Jesus. This program provides a devotion presented.
            </p>
          </motion.div>
        </div>

        <div className="row">
          <div className="column">
            <h2>October Promise</h2>
            <p>
              Daughter, your faith has made you well. Go in peace, and be healed of your affliction. (NKJV)
              <br />
              <em>Mark 5:34</em>
            </p>
          </div>
          <motion.div
            className="column"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <div className="video-wrapper">
              <iframe
                width="500"
                height="250"
                src="https://youtu.be/KDsWsAesfYs?si=8VDOHKWvAmKu9woC"
                title="October Promise"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="logo-section">
        <h2 className="centered-title">Blessing Plan</h2>
        <div className="logo-container">
          {[l1, l2, l3, l4, l5].map((src, index) => (
            <motion.div
              className="logo-item"
              key={src}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: index % 2 === 0 ? 200 : -200, opacity: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ scale: 1.2 }}
            >
              <img src={src} alt={`Logo ${index + 1}`} className="demo-logo" />
              <motion.p
                className="demo-text"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                {["Family blessing", "Job blessing", "Young partner", "Blessing Plan", "Jesus Calls"][index]}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonies Section */}
      <div className="testimonies-section">
        <motion.h2
          className="centered-title"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Testimonies
        </motion.h2>
        
        <motion.div
          className="testimonies-container"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Testimony Items */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="testimony-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={`https://superstarworksheets.com/wp-content/uploads/2023/03/EasterCrossTemplate.jpg`}
                alt={`Avatar ${i + 1}`}
                className="testimony-avatar"
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.8, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              />
              <div className="testimony-content">
                <h3 className="testimony-name">Testimony {i + 1}</h3>
                <p className="testimony-location">Location {i + 1}</p>
                <motion.h4
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  FROM PRAYERS TO PARENTHOOD
                </motion.h4>
                <p>
                  My husband’s name is Dheeraj Singh. We got married four years ago, but we were unable to have a child...
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h1>Jesus Calls</h1>
            <p>
              Jesus Calls is a global ministry founded by Late Brother D.G.S. Dhinakaran and led by Dr. Paul Dhinakaran. Jesus Calls serves to bring comfort and healing to the broken-hearted without distinction through prayer offered 24/7 throughout the year.
            </p>
          </div>
          <div className="footer-right">
            <h2>Want to know more?</h2>
            <div className="contact-info">
              <p>
                <strong>24/7 Prayers</strong><br />
                <span className="phone">8546999000</span>
              </p>
              <p>
                <strong>For Queries, Call</strong><br />
                <span className="phone">04423456677</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;

