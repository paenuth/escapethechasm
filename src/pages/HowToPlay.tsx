const HowToPlay = () => {
  return (
    <div className="how-to-play-container">
      <h1>How to Play</h1>
      <div className="how-to-play-content">
        <section className="section">
          <h2 className="subtitle">Getting Started</h2>
          <div className="description">
            <p>
              To get started with Para Modal, follow these simple steps:
            </p>
            <ol>
              <li>Click the "Open Para Modal" button on the homepage</li>
              <li>Choose your preferred authentication method</li>
              <li>Complete the authentication process</li>
              <li>Explore the features available after authentication</li>
            </ol>
          </div>
        </section>
        
        <section className="section">
          <h2 className="subtitle">Game Mechanics</h2>
          <div className="description">
            <p>
              A hypercasual arcade game where the player will defend their
              platform against enemies that try to push the player off and drag
              the platform down.
            </p>
            <p>
              The player has to shoot the enemies and avoid their projectiles.
            </p>
          </div>
        </section>
        
        <section className="section">
          <h2 className="subtitle">Game Progression</h2>
          <div className="description">
            <p>The game consists only of players, enemies, and the platform.</p>
            <p>
              Over time, the challenges become harder and enemies become more
              aggressive.
            </p>
            <p>
              The player can collect coins by killing enemies, which increases
              the player's EXP and score.
            </p>
          </div>
        </section>
        
        <section className="section">
          <h2 className="subtitle">NFT Integration and Para Wallet</h2>
          <div className="description">
            <p>
              The player has a set of achievements to be earned, which will be
              minted as NFT badges and added to their pre-generated wallets on
              Para, integrating with EVM L2 Blockchain (L2 is optional).
            </p>
          </div>
        </section>
        
        <section className="section">
          <h2 className="subtitle">Game Win/Lose</h2>
          <div className="description">
            <p>- Player must survive by dodging attacks from enemies, earn coins as much as possible, and reach the top</p>
            <p>- Player will lose if HP is 0, and/or fell from the platform(elevator)</p>
          </div>
        </section>
        
        <section className="section">
          <h2 className="subtitle">Powerups</h2>
          <div className="description">
            <ul>
              <li>Fast Reload</li>
              <li>Increased damage</li>
              <li>Higher jump</li>
              <li>Healing pot</li>
              <li>Coin magnet within a certain radius</li>
            </ul>
          </div>
        </section>
        
        <section className="section">
          <h2 className="subtitle">Authentication Methods</h2>
          <div className="description">
            <p>Para supports multiple authentication methods:</p>
            <ul>
              <li>Email and password</li>
              <li>OAuth providers (Google, Facebook, etc.)</li>
              <li>Others...</li>
            </ul>
          </div>
        </section>
        
        <section className="section">
          <h2 className="subtitle">User Interfaces</h2>
          <div className="description">
            <ul>
              <li>Main Menu</li>
              <li>Tutorial</li>
              <li>Settings</li>
              <li>Inventory</li>
              <li>Achievements</li>
              <li>Levels</li>
              <li>Game Win/Over</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowToPlay;