import { createAppContainer , createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {TouchableOpacity ,Text, View } from 'react-native';
import React from 'react';
import Blogs from './Blogs';
import Edit from './Edit';
import Post from './Post';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoadingScreen from '../screens/LoadingScreen';
import * as firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome'



const NavStack =  createStackNavigator({
    Blogs: {
        screen : Blogs,
        navigationOptions: () => ({
            headerTitle:"My Blogs",
            headerRight: (
                <TouchableOpacity style={{paddingRight:10 }} onPress= {()=> {firebase.auth().signOut();}}>
                    <Text style={{color : 'red' , fontWeight: 'bold'}} >Logout</Text>                
                </TouchableOpacity>
            ),
            
          }),
        
    },
    Edit: {
        screen: Edit,
        navigationOptions : () => ({
            headerTitle:"Edit Blog"
        })
    }
},{
    headerLayoutPreset: "center",
});


  
  const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register : RegisterScreen
  
  });

const BottomTab = createBottomTabNavigator({
    NavStack: {
        screen: NavStack,
        navigationOptions : () => ({
            tabBarLabel:"Blogs",
            tabBarIcon: ({tintColor}) => (
                <Icon name='home' size={25} color={tintColor} />
              )
        })
    },
    Post: {
        screen: Post,
        navigationOptions : () => ({
            tabBarLabel:"Add Post",
            tabBarIcon: ({tintColor}) => (
                <Icon name='plus' size={25} color={tintColor} />
              )
        })
    }
    
});

export default createAppContainer(
    createSwitchNavigator(
      {
        Loading: LoadingScreen,
        App: BottomTab,
        Auth: AuthStack,
        
      },
      {
        initialRouterName: 'Loading',
  
      }
    ) 
  );