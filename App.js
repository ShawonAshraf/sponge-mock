import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Header } from 'react-native-elements';
export default class App extends React.Component {
  // define state
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor='#fcf644'
          centerComponent={{
            text: 'SpongeMock',
            style: {
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
            }
          }}
        />
        <Image source={require('./assets/spongebob.png')} style={styles.image} />
        <Text>{this.state.text}</Text>
        <TextInput
          style={styles.input}
          placeholder='What you want sponge to mock with?'
          onChangeText={(text) => this.setState({ text })} />
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
