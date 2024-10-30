
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native'; // Import necessary components

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Habit {
  id: string;
  name: string;
  completed: boolean;
}

interface HabitsProps {} // No specific props needed for now

const Habits: React.FC<HabitsProps> = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabitName, setNewHabitName] = useState('');


  const addHabit = async () => {
    if (newHabitName.trim() !== '') { 
      const newHabit: Habit = {
        id: Date.now().toString(), // Generate a unique ID
        name: newHabitName,
        completed: false,
      };

      setHabits([...habits, newHabit]); // Update habits state
      setNewHabitName(''); // Clear input field

      try {
        await AsyncStorage.setItem('habits', JSON.stringify([...habits, newHabit])); // Store updated habits
      } catch (error) {
        console.error('Error storing habits:', error);
      }
    }
  };


  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = async () => {
    try {
      const storedHabits = await AsyncStorage.getItem('habits');
      if (storedHabits !== null) {
        setHabits(JSON.parse(storedHabits));
      }
    } catch (error) {
      console.error('Error loading habits:', error);
    }
  };

  const renderHabit = ({ item }: { item: Habit }) => (
    <View style={styles.habitItem}>
      <Text style={[styles.habitText, item.completed && styles.completedHabit]}>
        {item.name}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}> 
        <TextInput
          style={styles.input}
          placeholder="Enter new habit"
          value={newHabitName}
          onChangeText={setNewHabitName}
        />
        <Button title="Add Habit" onPress={addHabit} /> 
      </View>
      <FlatList
        data={habits}
        renderItem={renderHabit}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  habitItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  habitText: {
    fontSize: 16,
  },
  completedHabit: {
    textDecorationLine: 'line-through',
  },
  inputContainer: {
    flexDirection: 'row', 
    marginBottom: 10,  
  },
  input: {
    flex: 1, 
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10, 
  },
});

export default Habits;
