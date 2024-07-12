// Header.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = ({ children }) => {
  return (
    <View style={styles.header}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    height: 72,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row'
  },
});

export default Header;
