import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/Conference_Collaboration_Meeting.jpg'
import img2 from'../images/training.png'
import img3 from'../images/untitled-design-3.jpg'
export const Home = () => {
  return (
    <>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
  
    <div style={{ textAlign: 'center',marginLeft:'80px', marginTop:'20px' }}>
     <h4>About Trainer Engagement System</h4>
     </div>
      <p>
      Trainer Engagement System (TES) is an innovative platform designed to revolutionize the way trainers and
      learners interact, collaborate, and grow together. Founded with a vision to bridge the gap between
      traditional training methodologies and modern learning needs, TES strives to empower trainers to deliver
      impactful sessions and learners to achieve their learning goals effectively.    
     </p> 

     <div style={{ textAlign: 'center',marginLeft:'80px', marginTop:'20px' }}>
      <h4>Our Mission</h4>
    </div>
      <p>
        At Trainer Engagement System, our mission is to create a dynamic learning ecosystem where trainers and
        learners can thrive. We are committed to providing trainers with the tools and resources they need to
        engage, inspire, and empower learners, ultimately driving positive outcomes and fostering continuous
        learning and development.
      </p>
  
      <div style={{ textAlign: 'center',marginLeft:'80px', marginTop:'20px' }}>
      <h4>Our Approach</h4>
      </div>
      <p>
        TES takes a learner-centric approach to training, focusing on personalized learning experiences tailored
         to individual needs and preferences. Through our platform, trainers can create customized training
         programs, curate relevant content, and leverage interactive tools to deliver engaging sessions that
         resonate with learners.
       </p>

       <div style={{ textAlign: 'center',marginLeft:'80px', marginTop:'20px' }}>
      <h4>Key Features</h4>
      </div>
      <p>

      <i>Interactive Learning Environment:</i> TES offers an interactive learning environment where trainers can
        facilitate discussions, conduct assessments, and provide feedback in real-time, fostering active
        participation and collaboration among learners.<br></br>

      <i>Content Repository:</i> Our platform boasts a vast repository of training resources, including videos,
      presentations, quizzes, and more, enabling trainers to access and share relevant content seamlessly.<br></br>

      <i>Progress Tracking:</i> TES provides comprehensive progress tracking and analytics capabilities, allowing
       trainers to monitor learner progress, identify areas for improvement, and measure the impact of training
       programs effectively.<br></br>

      <i> Community Engagement:</i> We believe in the power of community-driven learning. TES features a vibrant
       community where trainers and learners can connect, share insights, and collaborate on projects, creating
       a supportive learning environment.

       </p>

       <div style={{ textAlign: 'center' ,marginLeft:'80px', marginTop:'20px' }}>
      <h4>Our Team</h4>
      </div>
      <p>
        The TES team comprises passionate individuals dedicated to transforming the future of learning. From
        software engineers and instructional designers to training specialists and customer success managers,
        our team brings together diverse expertise and perspectives to drive innovation and excellence in
        everything we do
      </p>

      <div style={{ textAlign: 'center' ,marginLeft:'80px', marginTop:'20px' }}>
      <h4>Our Commitment To Excellence</h4>
      </div>
        <p>   
         At Trainer Engagement System, we are committed to excellence in all aspects of our work. We continuously
         strive to enhance our platform, incorporating the latest technologies and best practices to deliver a
         superior learning experience. We value feedback from our users and are committed to addressing their
          needs and exceeding their expectations.
        </p> 


        <div style={{ textAlign: 'center' ,marginLeft:'80px', marginTop:'20px' }}>
      <h4>Join Us on Our Journey</h4>
      </div>

      <p>
         Whether you're a trainer looking to enhance your training delivery or a learner seeking to expand your
         knowledge and skills, Trainer Engagement System welcomes you to join us on our journey. Together, we can
         unlock the full potential of learning and empower individuals and organizations to thrive in a rapidly
         evolving world.
      </p>
 
      <div style={{ textAlign: 'center',marginLeft:'80px', marginTop:'20px' }}>
      <p>  Join Trainer Engagement System today and embark on a transformative learning experience!</p>
     </div>

     <div style={{ textAlign: 'center', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h4>Contact Us</h4>
      <p>Email: contact@trainerengagement.com</p>
      <p>Phone: +1234567890</p>
    </div>

    <footer style={{ textAlign: 'center',   backgroundColor: '#0a0a0a', color: '#fff',padding: '20px 0', position: 'fixed',bottom: '0',width: '100%'}}>
      <p>&copy; 2024 Trainer Engagement. All rights reserved.</p>
    </footer>

    </>
 
  );
};



export default Home;
