import { Stack } from 'expo-router';
import React from 'react';


export default function TabLayout() {

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        
      }}>

      <Stack.Screen
        name="Launch_A"
        options={{
          title: 'Home',
        }}
      />

      <Stack.Screen
        name="Launch_B"
        options={{
        }}
      />
      <Stack.Screen 
      name='OnBourding_A'
          options={{
          }}
      />
        <Stack.Screen 
      name='OnBourding_B'
          options={{
          }}
      />
          <Stack.Screen 
      name='Login'
          options={{
          }}
      />
    </Stack>
  );
}
