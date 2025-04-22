// VVTSApp.tsx - Expo React Native scaffold (TypeScript)
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, useColorScheme, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VVTSApp() {
  const colorScheme = useColorScheme();
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState('');
  const [candidate, setCandidate] = useState('');

  const next = () => setStep(step + 1);
  const back = () => setStep(step > 0 ? step - 1 : 0);

  const steps = [
    <View key="welcome" style={styles.card}>
      <Text style={styles.title}>My Vote, My Verified Voice</Text>
      <Text>Verify your vote and track the results for transparency</Text>
      <Button title="Get Started" onPress={next} />
    </View>,
    <View key="verify" style={styles.card}>
      <Text style={styles.title}>User Verification</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
      />
      <Button title="Verify Me" onPress={next} />
    </View>,
    <View key="polling" style={styles.card}>
      <Text style={styles.title}>Select Polling Unit</Text>
      <TextInput placeholder="LGA - Example Ward" style={styles.input} />
      <TextInput placeholder="Polling Unit" style={styles.input} />
      <Button title="Continue" onPress={next} />
    </View>,
    <View key="vote" style={styles.card}>
      <Text style={styles.title}>Cast Your Vote</Text>
      {['Candidate A', 'Candidate B', 'Candidate C'].map((name) => (
        <Button key={name} title={name} onPress={() => setCandidate(name)} />
      ))}
      <Button title="Submit Vote" onPress={next} />
    </View>,
    <View key="upload" style={styles.card}>
      <Text style={styles.title}>Upload Polling Unit Result</Text>
      <Text>Feature placeholder for image upload</Text>
      <Button title="Confirm Upload" onPress={next} />
    </View>,
    <View key="compare" style={styles.card}>
      <Text style={styles.title}>Compare Results</Text>
      <Text>Your vote: {candidate}</Text>
      <Text>Verification Ticket ID: ABC123</Text>
      <Button title="Restart" onPress={() => setStep(0)} />
    </View>
  ];

  return (
    <SafeAreaView style={[styles.container, colorScheme === 'dark' ? styles.dark : styles.light]}>
      <ScrollView contentContainerStyle={styles.scroll}>{steps[step]}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dark: {
    backgroundColor: '#121212',
  },
  light: {
    backgroundColor: '#ffffff',
  },
});
