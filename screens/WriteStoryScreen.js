import React from 'react';
import { TouchableOpacity,View, Text} from 'react-native';
import {Header} from 'react-native-elements'
import {TextInput} from 'react-native-gesture-handler'

export default class WriteStoryScreen extends React.Components{
  constructor(props){
    super(props);
    this.state = {
      header: ' ',
      storyText: ' ',
      title: ' ',
      author: ' '
    }
  }
  render(){
    return(
      
      <View>
        <Header 
        style = {{height: 15, flex:5, backgroundColor:'orange'}}
        />
        <Text style = {styles.container}>
          STORY HUB
        </Text>
       
        <View>
        <TextInput
        style = {{width : 50, height:10, backgroundColor:'blue'}}
        placeholder = "Story Title here"
        onChangeText ={(text)=>{
          this.setState({
           title: text
          })
        }}
        value ={ this.state.title }
        />
        </View>
        
        <View>
         <TextInput
         style = {{flex: 2, backgroundColor:'blue', height:10}}
         placeholder = {'Author'}
         onChangeText ={(text)=>{
           this.setState({
              author: text
         })
         }}
        />
        </View>

        <View>
          <TextInput  
          style = {{flex: 2, backgroundColor: 'blue', margin:2, height:50}}
          placeholder = {'Content here'}
          onChangeText = {(text)=>{
            this.setState({
              storyContent: text
            })
          }}
          />
        </View>

       

      </View>

    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
