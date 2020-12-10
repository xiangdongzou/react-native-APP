import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from 'react-native-slider-x';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';
import {formatTime} from '@/utils/index';

const mapStateToProps = ({player}: RootState) => {
  return {
    currentTime: player.currentTime,
    duration: player.duration,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {}

class PlaySlider extends React.Component<IProps> {
  render() {
    const {currentTime, duration} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.Text}>{formatTime(currentTime)}</Text>
        <Slider
          value={currentTime}
          maximumValue={duration}
          maximumTrackTintColor="rgba(255, 255, 255, 0.3)"
          minimumTrackTintColor="white"
          thumbStyle={styles.thumb}
          style={styles.Slider}
        />
        <Text style={styles.Text}>{formatTime(duration)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
  },
  Slider: {
    flex: 5,
  },
  thumb: {
    backgroundColor: '#fff',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connector(PlaySlider);
