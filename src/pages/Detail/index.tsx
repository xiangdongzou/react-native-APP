import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {ModalStackParamList, ModalStackNavigation} from '@/navigator/index';
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';
import Touchable from '@/components/Touchable';

import PlaySlider from './PlaySlider';
import {viewportWidth} from '@/utils/index';
import LinearGradient from 'react-native-linear-gradient';
import Barrage, {Message} from '@/components/Barrage';
import IconFont from '@/assets/iconfont';

const data: string[] = [
  '最灵繁的人也看不见自己的背脊',
  '朝闻道，夕死可矣',
  '阅读是人类进步的阶梯',
  '内外相应，言行相称',
  '人的一生是短的',
  '抛弃时间的人，时间也抛弃他',
  '自信在于沉稳',
  '过犹不及',
  '开卷有益',
  '有志者事竟成',
  '合理安排时间，就等于节约时间',
  '成功源于不懈的努力',
  '过了很久终于我愿抬头看',
  '你就在对面走的好慢',
  '任由我独自在假寐与现实之间两难',
  '夜已沉默,心事向谁说',
  '那些你很冒险的梦,我陪你去疯',
  '折纸飞机碰到雨天终究会坠落',
  '穿越红尘的悲欢惆怅',
  '刺透遍野的红尘和荒凉',
  '有你的梦伴着花香飞翔',
  '今生因你痴狂,此爱天下无双',
  '枯萎了容颜难辞忘',
];

function randomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

function getText() {
  return data[randomIndex(data.length)];
}

const mapStateToProps = ({player}: RootState) => {
  return {
    id: player.id,
    soundUrl: player.soundUrl,
    playState: player.playState,
    title: player.title,
    thumbnailUrl: player.thumbnailUrl,
    previousId: player.previousId,
    nextId: player.nextId,
  };
};

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: ModalStackNavigation;
  route: RouteProp<ModalStackParamList, 'Detail'>;
}

interface IState {
  barrage: boolean;
  barrageData: Message[];
}

const IMAGE_WIDTH = 180;

const SCALE = viewportWidth / IMAGE_WIDTH;

class Detail extends React.Component<IProps, IState> {
  state = {
    barrage: false,
    barrageData: [],
  };
  anim = new Animated.Value(1);
  componentDidMount() {
    const {dispatch, route, navigation, title, id} = this.props;
    if (route.params && route.params.id !== id) {
      dispatch({
        type: 'player/fetchShow',
        payload: {
          id: route.params.id,
        },
      });
    } else {
      dispatch({
        type: 'player/play',
      });
    }

    navigation.setOptions({
      headerTitle: title,
    });
    this.addBarrage();
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.title !== prevProps.title) {
      this.props.navigation.setOptions({
        headerTitle: this.props.title,
      });
    }
  }

  addBarrage = () => {
    setInterval(() => {
      const {barrage} = this.state;
      if (barrage) {
        const id = Date.now();
        const title = getText();
        this.setState({
          barrageData: [{id, title}],
        });
      }
    }, 900);
  };

  toggle = () => {
    const {dispatch, playState} = this.props;
    dispatch({
      type: playState === 'playing' ? 'player/pause' : 'player/play',
    });
  };

  previous = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'player/previous',
    });
  };

  next = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'player/next',
    });
  };

  barrage = () => {
    this.setState({
      barrage: !this.state.barrage,
    });
    Animated.timing(this.anim, {
      toValue: this.state.barrage ? 1 : SCALE,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {barrage, barrageData} = this.state;
    const {playState, previousId, nextId, thumbnailUrl} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Animated.Image
            source={{uri: thumbnailUrl}}
            style={[
              styles.image,
              {borderRadius: barrage ? 0 : 8, transform: [{scale: this.anim}]},
            ]}
          />
        </View>
        {barrage && (
          <>
            <LinearGradient
              colors={['rgba(128,104,102,0.5)', '#807c66']}
              style={styles.linear}
            />
            <Barrage
              data={barrageData}
              maxTrack={5}
              style={{top: PADDING_TOP}}
            />
          </>
        )}
        <Touchable style={styles.barrageBtn} onPress={this.barrage}>
          <Text style={styles.barrageText}>弹幕</Text>
        </Touchable>
        <PlaySlider />
        <View style={styles.control}>
          <Touchable
            disabled={!previousId}
            onPress={this.previous}
            style={styles.button}>
            <IconFont name="icon-shangyishou" size={30} color="#fff" />
          </Touchable>
          <Touchable onPress={this.toggle} style={styles.button}>
            <IconFont
              name={playState === 'playing' ? 'icon-bofang2' : 'icon-bofang'}
              size={40}
              color="#fff"
            />
          </Touchable>
          <Touchable
            disabled={!nextId}
            onPress={this.next}
            style={styles.button}>
            <IconFont name="icon-xiayishou" size={30} color="#fff" />
          </Touchable>
        </View>
      </View>
    );
  }
}

const PADDING_TOP = (viewportWidth - IMAGE_WIDTH) / 2;

const styles = StyleSheet.create({
  container: {
    paddingTop: PADDING_TOP,
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 90,
  },
  button: {
    marginHorizontal: 10,
  },
  imageView: {
    alignItems: 'center',
    height: IMAGE_WIDTH,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  barrageBtn: {
    height: 20,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft: 10,
  },
  barrageText: {
    color: '#fff',
  },
  linear: {
    position: 'absolute',
    top: 0,
    height: viewportWidth,
    width: viewportWidth,
  },
});

export default connector(Detail);
