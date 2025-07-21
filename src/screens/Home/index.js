import React from 'react';
import { View, Linking, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

import styles from './styles';

const Options = [
  { 
    text: 'Planificar Cursada', 
    route: 'Planner',
    description: 'Organiza tu cursada de manera eficiente',
    icon: 'calendar'
  },
  { 
    text: 'Personalizar Alternativas', 
    route: 'WishedSubjects',
    description: 'Configura tus materias preferidas',
    icon: 'star'
  },
  { 
    text: 'Mi Perfil', 
    route: 'Profile',
    description: 'Gestiona tu información personal',
    icon: 'account'
  },
  {
    text: 'Siga',
    route: 'Siga',
    description: 'Accede al sistema de gestión académica',
    icon: 'web',
    onClick: () => {
      Linking.openURL('http://siga.frba.utn.edu.ar/');
    }
  }
];

function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {Options.map(option => (
          <Card
            key={option.route}
            style={styles.card}
            onPress={
              option.onClick ||
              (() => {
                navigation.navigate(option.route);
              })
            }
          >
            <Card.Content>
              <Title>{option.text}</Title>
              <Paragraph>{option.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button 
                mode="contained"
                buttonColor="#AE1131"
                onPress={
                  option.onClick ||
                  (() => {
                    navigation.navigate(option.route);
                  })
                }
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

export default Home;
