import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class App extends React.Component {
  // define state
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={styles.container}>
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
