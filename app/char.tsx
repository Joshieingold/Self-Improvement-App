// Suggested code may be subject to a license. Learn more: ~LicenseLog:2672837338.
import React from 'react';
import './char.css';


export interface CharacterProps {
  name: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  charIcon: string;
}

const defaultCharacter: CharacterProps = {
    name: "Josh",
    strength: 5,
    dexterity: 12,
    constitution: 10,
    intelligence: 10,
    wisdom: 7,
    charisma: 5,
    charIcon: "assets/images/char.png"
    
}

const CharacterDisplay: React.FC<CharacterProps> = ({ name, strength, dexterity, constitution, intelligence, wisdom, charisma, charIcon }) => {
  return (
    <div className="character-display">
      <div className="character-info">
        <h2 className='char-name'>{name}</h2>
        <img className='char-image' src={charIcon}></img>
      </div>
      <div className="stats">
        <div className="stat">
          <span className="stat-name">Strength:</span>
          <span className="stat-value">{strength}</span>
        </div>
        <div className="stat">
          <span className="stat-name">Dexterity:</span>
          <span className="stat-value">{dexterity}</span>
        </div>
        <div className="stat">
          <span className="stat-name">Constitution:</span>
          <span className="stat-value">{constitution}</span>
        </div>
        <div className="stat">
          <span className="stat-name">Intelligence:</span>
          <span className="stat-value">{intelligence}</span>
        </div>
        <div className="stat">
          <span className="stat-name">Wisdom:</span>
          <span className="stat-value">{wisdom}</span>
        </div>
        <div className="stat">
          <span className="stat-name">Charisma:</span>
          <span className="stat-value">{charisma}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterDisplay;
