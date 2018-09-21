import React from 'react';
import HotelList from './HotelList';
import { createStackNavigator } from 'react-navigation';
import ReservationForm from './ReservationForm';
import ReservationList from './ReservationList'


var a = require('react-native-scripts/build/bin/crna-entry')


const App = createStackNavigator({
  List: {
    screen: HotelList
  },
  ReservationForm: {
    screen: ReservationForm
  },
  Bookings:{
    screen: ReservationList
  }
});

export default App;
