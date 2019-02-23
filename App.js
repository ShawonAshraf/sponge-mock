import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Header, Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { spongemockify } from 'spongemockify/lib';

export default class App extends React.Component {
  // define state
  constructor(props) {
    super(props);
    this.state = { text: '', mockedText: '' };
    // bind to state
    this.mock = this.mock.bind(this);
  }

  mock() {
    let text = this.state.text;

    try {
      let mockedText = spongemockify(text);
      this.setState({ mockedText });
    } catch (e) {
      this.setState({ mockedText: e.toString() });
    }
  }

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


        <TextInput
          placeholder='What you want sponge to mock with?'
          clearButtonMode='always'
          autoCorrect={false}
          onChangeText={(text) => {
            this.setState({ text });
            this.mock();
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
            <Icon name='cut' color='#fcf644' size={40} />
          }
          onPress={() => {
            this.setState({
              text: '',
              mockedText: ''
            });
          }}
        />

        <Text>{this.state.mockedText}</Text>
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
});
