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
        <Text>There goes sponge!</Text>
        <TextInput placeholder='What you want sponge to mock with?' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
  }
});
