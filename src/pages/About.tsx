const CreatorProfile = ({ name, role, description }: { name: string; role: string; description: string }) => {

  return (
    <div className="profileCard">
      <div className="profileInfo">
        <h3 className="profileName">{name}</h3>
        <p className="profileRole">{role}</p>
        <p className="profileDescription">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        
        <h2>The Creators</h2>
        <div className="profileList">
          <CreatorProfile 
            name="Llyod" 
            role="Game Artist & Front-end Developer" 
            description="Designed front-end components and artworks, assets and animations" 
          />
          
          <CreatorProfile 
            name="Jhos" 
            role="Game Developer & UI/UX" 
            description="Game Programmer - Handled User Interface and Experience" 
          />
          <CreatorProfile 
            name="Hane" 
            role="Front-end & Back-end Developer" 
            description="Frontend design & Integration of ParaWallet" 
          />
          <CreatorProfile 
            name="Adrean" 
            role="Game Developer" 
            description="Game Programmer - Design - Mechanics - Physics of the game" 
          />
        </div>
        
        <h2>Background of the Game</h2>
        <div className="description">
          <p>
            This website was made to incorporate ParaWallet with a Classic Shooter Arcade Game!
          </p>
        </div>
        
        <h2>Features</h2>
        <ul>
          <li>Easy authentication with multiple methods</li>
          <li>OAuth integration</li>
          <li>Clean, responsive UI</li>
        </ul>
      </div>
    </div>
  );
};

export default About;