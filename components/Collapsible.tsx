import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function Collapsible({ children, title, onLocationChange }: PropsWithChildren & { title: string, onLocationChange: (location: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('');
  const theme = useColorScheme() ?? 'light';

  const handleLocationChange = (text) => {
    setLocation(text);
    onLocationChange(text);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <ThemedText type="defaultSemiBold" style={styles.title}>{title}</ThemedText>
        <Ionicons
          name={'chevron-forward-outline'}
          size={18}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          style={styles.icon}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.absoluteContent}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua localização"
            value={location}
            onChangeText={handleLocationChange}
          />
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 10,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    justifyContent: 'space-between', // This moves the icon to the right
  },
  title: {
    flex: 1,
  },
  icon: {
    transform: [{ rotate: '90deg' }], // Rotate the icon 90 degrees to point it downwards
  },
  absoluteContent: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    zIndex: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginTop: 10,
  },
});
