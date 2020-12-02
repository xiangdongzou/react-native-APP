import React, {Component} from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Album from '@/pages/Album';
import Category from '@/pages/Category';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import Animated from 'react-native';

export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
  Category: undefined;
  Album: {
    item: {
      id: string;
      title: string;
      image: string;
    };
  };
};
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

function getAlbumOptions({
  route,
}: {
  route: RouteProp<RootStackParamList, 'Album'>;
}) {
  return {
    headerTitle: route.params.item.title,
    headerTransparent: true,
    headerTitleStyle: {
      opacity: 0,
    },
    headerBackground: () => {
      return <Animated.View style={styles.headerBackground} />;
    },
  };
}
const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: '#fff',
    opacity: 0,
  },
  headerBackImage: {
    marginHorizontal: Platform.OS === 'android' ? 0 : 8,
  },
});

export default class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStatusBarHeight: StatusBar.currentHeight,
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
              }),
            },
          }}
          headerMode="float">
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{headerTitle: '首页'}}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{headerTitle: '分类'}}
          />
          <Stack.Screen
            name="Album"
            component={Album}
            options={getAlbumOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
