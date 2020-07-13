import React, { Component } from 'react';
import { View, Text ,StyleSheet ,TextInput ,TouchableOpacity} from 'react-native';
import {editBlog} from '../actions';
import {connect} from 'react-redux';

class Edit extends Component {
  state={
    title: this.props.navigation.state.params.title ,
    content: this.props.navigation.state.params.content,
    key : this.props.navigation.state.params.key
  }

  submit = () => {
    this.props.editBlog(this.state.title, this.state.content ,this.state.key);
    this.setState({
      title: '',
      content: '',
      key : ''
    });
    this.props.navigation.navigate('Blogs');
  }
  render() {
    return (
      <View style={styles.container} >
        <Text style={{fontSize: 18 , fontWeight: '900' , lineHeight: 30}} > Update Post </Text>
        <TextInput style={{marginTop: 20 , height: 40 , borderColor: 'grey', borderWidth: 1}} placeholder="Title" onChangeText={title => this.setState({title})} value={this.state.title} />
        <TextInput style={{marginTop: 20 , height: 90 , borderColor: 'grey', borderWidth: 1}} placeholder="Content" onChangeText={content => this.setState({content})} value={this.state.content} />
        <TouchableOpacity style={styles.button}  onPress={this.submit} >
          <Text style={{color:'white', justifyContent: 'center'}} >submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 30,
    },
    button :{
      width: '50%',
      height: 35,
      borderRadius: 18 ,
      marginTop: 20,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
    }
});


export default connect(null ,{editBlog})(Edit);
