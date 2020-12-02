import React, {Component} from 'react';
import {RouteProp, TabNavigationState} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import {RootStackNavigation, RootStackParamList} from '.';
import IconFont from '@/assets/iconfont';
import HomeTabs from './HomeTabs';

export type BottomTabParamList = {
  HomeTabs: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState<BottomTabParamList>;
};

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

function getHeaderTitle(routeName: string) {
  switch (routeName) {
    case 'HomeTabs':
      return '首页';
    case 'Listen':
      return '聆听';
    case 'Found':
      return '发现';
    case 'Account':
      return '我的';
    default:
      return '首页';
  }
}

class BottomTabs extends Component<IProps> {
  componentDidMount() {
    this.setOptions();
  }

  componentDidUpdate() {
    this.setOptions();
  }

  setOptions = () => {
    const {navigation, route} = this.props;
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'HomeTabs';
    if (routeName === 'HomeTabs') {
      navigation.setOptions({
        headerTransparent: true,
        headerTitle: '',
      });
    } else {
      navigation.setOptions({
        headerTransparent: false,
        headerTitle: getHeaderTitle(routeName),
      });
    }
  };
  render() {
    return (
      <Tab.Navigator tabBarOptions={{activeTintColor: '#f86442'}}>
        <Tab.Screen
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-shouye" color={color} size={size} />
            ),
          }}
          name="HomeTabs"
          component={HomeTabs}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '聆听',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-shoucang" color={color} size={size} />
            ),
          }}
          name="Listen"
          component={Listen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-faxian" color={color} size={size} />
            ),
          }}
          name="Found"
          component={Found}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <IconFont name="icon-user" color={color} size={size} />
            ),
          }}
          name="Account"
          component={Account}
        />
      </Tab.Navigator>
    );
  }
}
export default BottomTabs;
