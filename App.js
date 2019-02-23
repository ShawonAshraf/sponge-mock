import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// spongemockify lib
import { spongemockify } from 'spongemockify/lib';

// components
import SpongeHeader from './components/SpongeHeader';

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
        <SpongeHeader />
        {/* avatar */}
        <Avatar
          size='xlarge'
          rounded
          source={require('./assets/spongebob.png')}
          containerStyle={styles.avatar}
        />


        <Text style={styles.mockedTextStyle}>{this.state.mockedText}</Text>

        {/* for input */}
        <View
          style={styles.viewContainer}
        >
          <TextInput
            value={this.state.text}
            style={styles.textInput}
            placeholder='Enter text to mock'
            autoCorrect={false}
            clearButtonMode='always'
            accessibilityLabel='Enter text to mockify here!'
            onChangeText={(text) => {
              this.setState({ text });
            }}
          />
        </View>


        {/* View for buttons */}
        <View style={styles.actionButtonView}>
          <Button
            type='solid'
            buttonStyle={{
              backgroundColor: '#fcf644',
            }}
            textStyle={{
              fontFamily: 'Avenir',
              textAlign: 'center',
            }}
            title='Mock!'
            onPress={() => this.mock()}
          />

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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    width: '90%'
  },
  textInput: {
    height: 40,
    borderWidth: 2,
    borderColor: '#fcf644',
    paddingLeft: 20,
    margin: 10,
    borderRadius: 20,
    fontFamily: 'Avenir'
  },
  mockedTextStyle: {
    fontFamily: 'Avenir',
    marginTop: 25,
    fontSize: 25,
  },
  actionButtonView: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  avatar: {
    marginTop: 60,
    marginBottom: 25,
  }
});
