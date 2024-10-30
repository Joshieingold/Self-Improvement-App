import { Text, View } from "react-native";
import { CharacterProps } from './char';
import CharacterDisplay from './char';
import Habits from './Habits/habits';


const Josh: CharacterProps = {
  name: 'Josh',
  strength: 5,
  dexterity: 12,
  constitution: 10,
  intelligence: 10,
  wisdom: 7,
  charisma: 5,
  charIcon: "assets/images/char.png"
}

export default function Home() {
  return (
    <div>
      <Habits/>
      <CharacterDisplay {...Josh} />
    </div>
  );
}
