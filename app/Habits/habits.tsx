// Suggested code may be subject to a license. Learn more: ~LicenseLog:1589857330.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2019444264.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1329446611.
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import "./habits.css"

export interface Habit {
  id: string;
  name: string;
  completed: boolean;
}

const HabitsScreen: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

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

  const saveHabits = async () => {
    try {
      await AsyncStorage.setItem('habits', JSON.stringify(habits));
    } catch (error) {
      console.error('Error saving habits:', error);
    }
  };


  const toggleHabitCompletion = (id: string) => {
    setHabits(prevHabits =>
      prevHabits.map(habit =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
    saveHabits();
  };

  const renderHabit = ({ item }: { item: Habit }) => (
    <TouchableOpacity onPress={() => toggleHabitCompletion(item.id)}>
      <View style={styles.habitItem}>
        <Text style={[styles.habitText, item.completed && styles.completedHabit]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={habits}
        renderItem={renderHabit}
        keyExtractor={item => item.id}
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
});

export default HabitsScreen;
