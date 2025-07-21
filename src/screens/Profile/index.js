import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

import styles from './styles';

const Options = [
  { 
    text: 'Cursada Actual', 
    route: 'ActualSubjects',
    description: 'Gestiona las materias que estás cursando actualmente',
    icon: 'book-open-variant'
  },
  { 
    text: 'Materias Aprobadas', 
    route: 'CareerFollower',
    description: 'Revisa tu progreso en la carrera',
    icon: 'check-circle'
  },
  { 
    text: 'Horarios Laborales', 
    route: 'WorkTime',
    description: 'Configura tus horarios de trabajo',
    icon: 'clock'
  }
];

function Profile({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {Options.map(option => (
          <Card
            key={option.route}
            style={styles.card}
            onPress={() => {
              navigation.navigate(option.route);
            }}
          >
            <Card.Content>
              <Title>{option.text}</Title>
              <Paragraph>{option.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button 
                mode="contained"
                buttonColor="#AE1131"
                onPress={() => {
                  navigation.navigate(option.route);
                }}
              >
                Ir
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}

export default Profile;
