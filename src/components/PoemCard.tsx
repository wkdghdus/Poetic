// src/components/PoemCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type PoemCardProps = {
  title: string;
  author: string;
  content: string;
};

const PoemCard: React.FC<PoemCardProps> = ({ title, author, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>by {author}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default PoemCard;