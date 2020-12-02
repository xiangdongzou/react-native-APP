import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackNavigation} from '../navigator';

interface IProps {
  navigation: RootStackNavigation;
}

export default class Listen extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  render() {
    return (
      <View>
        <Text>Listen</Text>
        <Button title="skip" onPress={this.onPress} />
      </View>
    );
  }
}
