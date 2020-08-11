import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from "./loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "2ab4483cca36c8430712a93c72634c19";
export default class extends React.Component{
  state = {
    isloading : true
  };
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data);
  };
  getLocation = async() => { 
    try {
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync(); 
      this.getWeather(latitude, longitude);
      this.setState({isLoading : false});
      console.log(coords.latitude, coords.longitude);
    }catch (error) {
      Alert.alert("Cannot Find your Location :(", "So Sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render(){
    const { isLoading } = this.state;
    return(
      isLoading ? <Loading /> : null
    )
  }
}
 
