import * as React from 'react';
import {View, Text} from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import {createBottomNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator, createswitchNavigator} from 'react-navigation';

export default class App extends React.Component{
    render(){
        return(

          <View style = {styles.container}>
              <AppContainer/>
              <Text>
                  
              </Text>
              <Image
              source = {require("./assets/something.png")}
              />
          </View>
        )
      
       }
      
      }
      
      const AppContainer = createSwitchNavigator({
        ReadScreen:{screens: ReadStoryScreen},
        TabNavigator:{screen: TabNavigator},
        WriteScreen:{screens: WriteStoryScreen}
      })

      const AppContainer = createAppContainer(switchNavigator)

      const TabNavigator = createBottomTabNavigator({
        Read: ReadStoryScreen,
        Write: WriteStoryScreen
      }, 
      {
        defaultNavigationOptions:({navigation})=>{
          tabBarIcon:()=>{
            const routeName = navigation.state.routeName;
            if(routeName === 'Write'){
              return(
                <Image
                source = {require('./assets/write.png')}
                style = {{width: 40, hight: 40}}
                />
              )
            }
            else if(routeName === Read){
              return(
                <Image
                source = {require('./assets/read.png')}
                style = {{width:40, height:40}}
                />
              )
            }
          }
        }

      }
      )

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
      

