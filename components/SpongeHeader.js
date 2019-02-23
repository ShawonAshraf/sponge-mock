import React from 'react';
import { Header } from 'react-native-elements';

const SpongeHeader = () => (
  <Header
    backgroundColor='#fcf644'
    centerComponent={{
      text: 'SpongeMock',
      style: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
      }
    }}
  />
);

export default SpongeHeader;
