export default function About() {
    return (
      <div id="about-container" className="about-container">

        <h1 id="about-title" className="about-title">About</h1>
  
        <img 
          id="profile-image"
          className="profile-image"
          src="./imgs/ProfilePhoto2.0.jpg"
          alt="Profile Photo"
        />
  
        <p id="intro-text" className="intro-text">
          Hello,I am a passionate full-stack software developer. With a strong foundation
          in both front-end and back-end technologies, I bring a holistic approach to creating robust and scalable software
          solutions.
        </p>
  
        <section id="technical-expertise" className="about-section">
          <h2>Technical Expertise</h2>
          <p>
          My venture into software development started with a fascination for creating smooth user interfaces. Skilled in contemporary JavaScript frameworks like React.js, I focus on developing responsive and engaging UIs for an enhanced user experience. On the server side, my extensive experience involves utilizing technologies like Node.js and Express.js. Employing these tools, I architect and deploy scalable APIs and backend systems, forming the core of resilient applications.
          </p>
        </section>
  
        <section>
          <h2>Database Management</h2>
          <p>
            
            Efficient database architecture plays a vital role in determining the performance of any application, and I specialize in crafting and enhancing databases. Whether working with SQL databases such as MySQL or NoSQL databases like MongoDB, I possess the expertise to organize data in alignment with the distinctive needs of each project.
          </p>
        </section>
  
        <section>
          <h2>Continuous Learning</h2>
          <p>
          In the dynamic realm of technology, I emphasize the significance of perpetual learning. I remain abreast of the most recent industry trends and technologies, guaranteeing that the solutions I create are not only at the forefront but also constructed on established best practices.
          </p>
        </section>
  
        <section>
          <h2>Collaboration and Communication</h2>
          <p>
            Recognizing the importance of collaborative teamwork, I bring strong communication skills and a knack for working seamlessly with cross-functional teams. This contributes to fostering a positive and productive work environment. If you seek a full-stack developer who blends technical proficiency with a drive for innovative solutions, I am eager to join your next project. WE should create something extraordinary together!
          </p>
        </section>
      </div>
    );
  }