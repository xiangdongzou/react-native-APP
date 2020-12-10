import {create, Model} from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '@/models/index';
import modelExtend from 'dva-model-extend';
import homeModel from '@/models/home';
import Toast from 'react-native-root-toast';

const app = create({
  onError: (e) => {
    Toast.show('网络异常！', {
      position: Toast.positions.CENTER,
      duration: Toast.durations.LONG,
      shadow: true,
      animation: true,
    });
  },
});

models.forEach((model) => {
  app.model(model);
});

app.use(createLoading());

app.start();

export default app._store;

interface Cached {
  [key: string]: boolean;
}

const cached: Cached = {
  home: true,
};

function registerModel(model: Model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = true;
  }
}

export function createHomeModel(namespace: string) {
  const model = modelExtend(homeModel, {namespace});
  registerModel(model);
}
