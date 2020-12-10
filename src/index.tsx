import React, {Component} from 'react';
import Navigator from './navigator';
import {Provider} from 'react-redux';
import store from '@/config/dva';
import {StatusBar} from 'react-native';
import '@/config/http';
import {RootSiblingParent} from 'react-native-root-siblings';
import {enableScreens} from 'react-native-screens';

enableScreens();

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootSiblingParent>
          <Navigator />
          <StatusBar
            backgroundColor="transparent"
            barStyle="dark-content"
            translucent
          />
        </RootSiblingParent>
      </Provider>
    );
  }
}
