import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {IGuess} from '@/models/home';
import Touchable from '@/components/Touchable';
import IconFont from '@/assets/iconfont';

const mapStateToProps = ({home}: RootState) => {
  return {
    guess: home.guess,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  namespace: string;
  goAlbum: (item: IGuess) => void;
}

class Guess extends Component<IProps> {
  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    const {dispatch, namespace} = this.props;
    dispatch({
      type: namespace + '/fetchGuess',
    });
  };

  renderItem = ({item}: {item: IGuess}) => {
    const {goAlbum} = this.props;
    return (
      <Touchable
        style={styles.item}
        onPress={() => {
          goAlbum(item);
        }}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={1} style={{textAlign: 'center'}}>
          {item.title}
        </Text>
      </Touchable>
    );
  };

  render() {
    const {guess} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRight}>
            <IconFont name="icon-xihuan" />
            <Text style={styles.headerTitle}>猜你喜欢</Text>
          </View>
          <View style={styles.headerLeft}>
            <Text style={styles.moreText}>更多</Text>
            <IconFont name="icon-more" />
          </View>
        </View>
        <FlatList
          style={styles.list}
          numColumns={3}
          data={guess}
          renderItem={this.renderItem}
        />
        <Touchable style={styles.changeGuess} onPress={this.fetch}>
          <IconFont name="icon-huanyipi" color="red" />
          <Text style={styles.changeGuessText}>换一批</Text>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
  },
  item: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  image: {
    height: 80,
    width: '100%',
    borderRadius: 8,
    marginBottom: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#efefef',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    marginLeft: 5,
    color: '#333',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreText: {
    color: '#6f6f6f',
  },
  changeGuess: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  changeGuessText: {
    marginLeft: 5,
  },
  list: {
    padding: 10,
  },
});

export default connector(Guess);
