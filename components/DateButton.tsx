import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const DateButton = ({ date, onPress }: { date: string; onPress: () => void }) => (
  <View style={styles.button}>
    <Button title={date} onPress={onPress} />
  </View>
);

const styles = StyleSheet.create({
  button: { marginVertical: 5, width: '80%' },
});

export default DateButton;
