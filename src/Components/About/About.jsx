import React from 'react'
import './About.css'
import profile_img from '../../assets/faravi prof.png'
import profile_img2 from '../../assets/faravi prof (1).png'
import theme1 from '../../assets/—Pngtree—infinity logo and symbol template_3626130.png'
import skills from '../../assets/skill.png'
import project from '../../assets/Projects .png'
import collaboration from '../../assets/Collaborations.png'

const About = () => {
  return (
<div id='about' className="about">
  <div className="about-title">
    <h1>About Me</h1>
    <img src={theme1} alt="Theme" />
  </div>

  <div className="about-sections">
    <div className="about-left">
      <img src={profile_img2} alt="Profile" />
    </div>

    <div className="about-right">
      <div className="about-para">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id doloremque dolor quos fugiat repudiandae? Amet quae quis tenetur totam hic?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quidem deserunt est deleniti accusamus facilis!</p>
      </div>

      <div className="about-skills">
        <div className="about-skill">
          <p>HTML & CSS</p><hr style={{ width: "70%" }} />
          <p>React JS</p><hr style={{ width: "50%" }} />
          <p>JavaScript</p><hr style={{ width: "60%" }} />
          <p>Next JS</p><hr style={{ width: "50%" }} />
          <p>Machine Learning and Deep Learning</p><hr style={{ width: "70%" }} />
          <p>Python</p><hr style={{ width: "65%" }} />
        </div>
      </div>
    </div>
  </div>

  <div className="about-achievement">
  <div className="achievement-item">
    <div className="achievement-icon">
      <img src={skills} alt="Skills" />
    </div>
    <h2>Skills Acquired</h2>
    <p>
      Focused on continuous learning in various fields including Machine Learning, Web Development, Python Programming, and more.
    </p>
  </div>

  <div className="achievement-item">
    <div className="achievement-icon">
      <img src={project} alt="Projects" />
    </div>
    <h2>Projects Completed</h2>
    <p>
      Worked on several personal and academic projects including AI-powered applications and web development projects.
    </p>
  </div>

  <div className="achievement-item">
    <div className="achievement-icon">
      <img src={collaboration} alt="Collaborations" />
    </div>
    <h2>Collaborations</h2>
    <p>
      Collaborated on team projects that enhanced my skills in teamwork and problem-solving.
    </p>
  </div>
</div>
</div>
  )
}

export default About
