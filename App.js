import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';

import store from './src/redux/store';
import { theme } from './src/theme';
import HomeScreen from './src/screens/Home';
import Login from './src/screens/Login';
import ProfileScreen from './src/screens/Profile';
import ActualSubjects from './src/screens/ActualSubjects';
import Planner from './src/screens/Planner';
import PlannerQuarter from './src/screens/PlannerQuarter';
import CareerFollower from './src/screens/CareerFollower';
import WishedSubjects from './src/screens/WishedSubjects';
import WorkTime from './src/screens/WorkTime';
import SavedAlternatives from './src/screens/SavedAlternatives';

const Stack = createStackNavigator();

const screenOptions = {
  headerTintColor: '#FFF',
  headerStyle: {
    backgroundColor: '#AE1131'
  },
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};

function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={screenOptions}
          >
            <Stack.Screen 
              name="Login" 
              component={Login}
              options={{ title: 'Iniciar Sesión' }}
            />
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{ 
                title: 'Inicio',
                headerLeft: null
              }}
            />
            <Stack.Screen 
              name="Profile" 
              component={ProfileScreen}
              options={{ title: 'Mi Perfil' }}
            />
            <Stack.Screen 
              name="ActualSubjects" 
              component={ActualSubjects}
              options={{ title: 'Mi Cursada' }}
            />
            <Stack.Screen 
              name="Planner" 
              component={Planner}
              options={{ title: 'Planificador' }}
            />
            <Stack.Screen 
              name="CareerFollower" 
              component={CareerFollower}
              options={{ title: 'Seguidor de Carrera' }}
            />
            <Stack.Screen 
              name="SavedAlternatives" 
              component={SavedAlternatives}
              options={{ title: 'Alternativas Guardadas' }}
            />
            <Stack.Screen 
              name="WishedSubjects" 
              component={WishedSubjects}
              options={{ title: 'Materias Deseadas' }}
            />
            <Stack.Screen 
              name="WorkTime" 
              component={WorkTime}
              options={{ title: 'Horarios Ocupados' }}
            />
            <Stack.Screen 
              name="PlannerQuarter" 
              component={PlannerQuarter}
              options={{ title: 'Alternativas Generadas' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
