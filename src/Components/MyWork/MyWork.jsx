import React, { useState } from 'react';
import './MyWork.css';
import theme1 from '../../assets/—Pngtree—infinity logo and symbol template_3626130.png';
import chestXrayImage1 from '../../assets/chestXrayImage1.JPG';
import chestXrayImage2 from '../../assets/chestXrayImage2.JPG';
import chestXrayImage3 from '../../assets/chestXrayImage3.JPG';
import chestXrayImage4 from '../../assets/chestXrayImage4.JPG';
import groupChatImage1 from '../../assets/groupChatImage1.png';
import groupChatImage2 from '../../assets/groupChatImage2.png';
import brainTumorImage1 from '../../assets/brainTumorImage1.png';
import brainTumorImage2 from '../../assets/brainTumorImage2.png';
import brainTumorImage3 from '../../assets/brainTumorImage3.png';

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      name: "Chest X-ray Classification Using CNN",
      description: "Developed a web application using Flask to classify chest X-ray images into six disease categories with 96.92% accuracy.",
      images: [chestXrayImage1, chestXrayImage2, chestXrayImage3, chestXrayImage4],
      githubLink: "https://github.com/Al-Faravi/Chest-X-ray-Classification-with-Deep-Learning",
    },
    {
      name: "Group Chat App",
      description: "Built a networking-based application for real-time group communication using Java Swing and Socket Programming.",
      images: [groupChatImage1, groupChatImage2],
      githubLink: "https://github.com/Al-Faravi/Chest-X-ray-Classification-with-Deep-Learning",
    },
    {
      name: "Brain Tumor Classification Web",
      description: "Developed a web application using Flask to classify brain MRI images into four tumor categories with 98.37% accuracy.",
      images: [brainTumorImage1, brainTumorImage2, brainTumorImage3],
      githubLink: "https://github.com/Al-Faravi/Brain_Tumor_Classification",
    },
    // Additional projects can go here
  ];

  const handleBoxClick = (project) => {
    setCurrentProject(project);
    setCurrentImageIndex(0); // Reset to the first image when opening the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentProject.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + currentProject.images.length) % currentProject.images.length
    );
  };

  return (
    <div id='work' className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme1} alt="" />
      </div>
      
      <div className="mywork-container">
        {projects.slice(0, 3).map((project, index) => (
          <div className="work-item" key={index} onClick={() => handleBoxClick(project)}>
            <img src={project.images[0]} alt={project.name} className="work-image" />
            <div className="work-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.githubLink} className="learn-more">Go to GitHub</a>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="show-more-container">
        <a href="https://github.com/your-github-link" target="_blank" rel="noopener noreferrer">
          <button className="show-more-btn">
            Show More...
          </button>
        </a>
      </div>

      {/* Modal for Slideshow */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>X</button>
            <div className="slideshow">
              <img
                src={currentProject.images[currentImageIndex]}
                alt={currentProject.name}
                className="modal-image"
              />
            </div>
            <div className="modal-controls">
              <button className="prev-btn" onClick={handlePrevImage}>&lt;</button>
              <button className="next-btn" onClick={handleNextImage}>&gt;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
