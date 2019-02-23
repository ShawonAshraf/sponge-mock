import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Header, Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  // define state
  constructor(props) {
    super(props);
    this.state = { text: '', mockedText: '' };
    // bind to state
    this.mockify = this.mockify.bind(this);
  }

  mockify() {
    let mockedText = this.state.text;
    this.setState({ mockedText });
  }

  // event handlers

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor='#fcf644'
          centerComponent={{
            text: 'SpongeMock',
            style: {
              color: 'white',
              fontSize: 35,
              fontWeight: 'bold',
            }
          }}
        />

        <Avatar
          size='xlarge'
          rounded
          source={require('./assets/spongebob.png')}
        />

        <Text>{this.state.mockedText}</Text>
        <TextInput
          style={styles.input}
          placeholder='What you want sponge to mock with?'
          onChangeText={(text) => {
            this.setState({ text });
            this.mockify();
          }} />

        <Button
          type='clear'
          icon={
            <Icon name='copy' color='#fcf644' size={50} />
          }
        />

        <Button
          type='clear'
          icon={
            <Icon name='cut' color='#fcf644' size={50} />
          }
          onPress={() => {
            this.setState({
              text: '',
              mockedText: ''
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
  },
  input: {
    height: 40,
  },
});
