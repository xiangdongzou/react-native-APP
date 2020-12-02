import {Dimensions} from 'react-native';
import {NavigationState} from '@react-navigation/native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
// 根据百分比获取参数
function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
function hp(percentage: number) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}

function getActiveRouteName(state: NavigationState) {
  let route;
  route = state.routes[state.index];
  while (route.state && route.state.index) {
    route = route.state.routes[route.state.index];
  }
  return route.name;
}

export {viewportWidth, viewportHeight, wp, hp, getActiveRouteName};