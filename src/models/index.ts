import home from './home';
import {DvaLoadingState} from 'dva-loading-ts';
import category from './category';
import album from './album';
import user from './user';
import player from './player';
import found from './found';

const models = [home, category, album, user, player, found];

export type RootState = {
  home: typeof home.state;
  category: typeof category.state;
  album: typeof album.state;
  player: typeof player.state;
  user: typeof user.state;
  loading: DvaLoadingState;
} & {
  [key: string]: typeof home.state;
};

export default models;
