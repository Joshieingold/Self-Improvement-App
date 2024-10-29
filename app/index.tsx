import { Text, View } from "react-native";
import { CharacterProps } from './char';
import CharacterDisplay from './char';
import HabitsScreen from './Habits/habits';
import { Habit } from './Habits/habits';


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

const food: Habit  = {
  id: "thisoneisfood",
  name: "food",
  completed: false,
}

export default function Home() {
  return (
    <div>
      <HabitsScreen id={food.id} name={food.name} completed={food.completed} />
      <CharacterDisplay {...Josh} />
    </div>
  );
}
