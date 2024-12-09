import React from "react";
import Image from "next/image";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="header">
        <h1>My Portfolio</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="image-container">
          <Image
            src="/OIP.jpg"
            alt="Portfolio Hero Image"
            width={200}
            height={200}
            className="hero-image"
            priority // โหลดรูปนี้ก่อน (สำหรับ performance)
          />
        </div>
        <h2>Welcome to My Portfolio</h2>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          ชื่อ นนท์ อายุ 20 ปี เรียนอยู่ปี 2 คณะ ICT อนาคตอยากมีเงินใช่เยอะๆ
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>WebFoodHouse</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>cinima</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
