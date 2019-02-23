import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ActionIconButton = (props) => {
  return (
    <Button
      type={props.buttonType}
      icon={
        <Icon
          name={props.buttonName}
          color={props.color}
          size={props.size} />
      }
      onPress={props.handler}
    />
  );
};

export default ActionIconButton;
