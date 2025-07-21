import { configureStore } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import labourDaysReducer from './LabourDays/reducer';

const firebaseConfig = {
  apiKey: 'AIzaSyAkYzhiVhiabd9e9ffTlKvgvtwPJ9rIvi8',
  authDomain: 'planificador-de-carrera.firebaseapp.com',
  databaseURL: 'https://planificador-de-carrera.firebaseio.com',
  projectId: 'planificador-de-carrera',
  storageBucket: 'planificador-de-carrera.appspot.com',
  messagingSenderId: '585575633102'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const store = configureStore({
  reducer: {
    labourDays: labourDaysReducer,
    firebase: (state = { app, db, auth }) => state
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;
