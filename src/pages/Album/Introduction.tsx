import React from 'react';
import {View, Text} from 'react-native';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';

const mapStateToProps = ({album}: RootState) => {
  return {
    introduction: album.introduction,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

class Introduction extends React.Component<ModelState> {
  render() {
    const {introduction} = this.props;
    return (
      <View style={{padding: 10}}>
        <Text>{introduction}</Text>
      </View>
    );
  }
}

export default connector(Introduction);
