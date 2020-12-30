import React from 'react';
import { TouchableOpacity,View, Text} from 'react-native';
import {Header} from 'react-native-elements'
import {TextInput} from 'react-native-gesture-handler'
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Components{
  constructor(props){
    super(props);
    this.state = {4
      story: ' ',
      title: ' ',
      author: ' '
    }
  }

  submitStory=()=>{
    db.collection("Stories").add({
      title: this.state.title,
      author: this.state.author,
      story: this.state.story

    })
    this.setState({
      title: ' ',
      author: ' ',
      story: ' '
    })
  }
  submitStory = () =>{}

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
          <TouchableOpacity style = {styles.buttonText}
           onPress = {()=>{
             this.submitStory()
           }}
          >
          
          <Text style = {styles.buttonText}>  Submit  </Text>
          </TouchableOpacity>

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
