import './App.css';

function App() {
  return (
    <div className = "bodyDiv">
   <div classname = "MainDiv">
      <div className = "image" ></div>
      <div className ="contentDiv">
        <p>Muhammad Hassan</p>
        <p>Frontend Developer</p>
        <p>www.developers/ hassan</p>
        <div className="contact-link">
                <a href="mailto:hassan992255@gmail.com" target="_blank" rel="noopener noreferrer" className="email">
                    <img src="../images/email-logo.png" alt = "img" />
                    <p>Email</p> 
                </a>
                <a href="https://www.linkedin.com/in/muhammad-hassan-796b52318/" target="_blank" rel="noopener noreferrer" className="linkedin" >
                    <img src="../images/linkedin-logo.png" alt = "img" />
                    <p>Linkedin</p>            
                </a>
        </div>
        <div className ="about-div">
          <p className='about-h'>About</p>
          <p className='about-text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <p className='interest-h'>Interests</p>
          <p className='interest-text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>
      <footer>
          <a href="https://github.com/hassan13502" target="_blank" rel="noopener noreferrer">
              <img src="../images/twitter-logo.png" alt = "img" />
          </a>
          <a href="https://github.com/hassan13502" target="_blank" rel="noopener noreferrer">
              <img src="../images/facebook-logo.png" alt = "img" />
          </a>
          <a href="https://github.com/hassan13502" target="_blank" rel="noopener noreferrer">
              <img src="../images/instagram-logo.png" alt = "img" />
          </a>
          <a href="https://github.com/hassan13502" target="_blank" rel="noopener noreferrer">
              <img src="../images/github-logo.png" alt = "img" />
          </a>
      </footer>
   </div>
   </div>
  );
}

export default App;

