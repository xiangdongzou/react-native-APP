/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconHomeSelect from './IconHomeSelect';
import IconYemianCopyCopy from './IconYemianCopyCopy';
import IconShouye1 from './IconShouye1';
import IconVolumeUp from './IconVolumeUp';
import IconFavoritesFill from './IconFavoritesFill';
import IconVolumeOff from './IconVolumeOff';
import IconPause from './IconPause';
import IconPlayArrow from './IconPlayArrow';
import IconFullscreen from './IconFullscreen';
import IconLijitingke from './IconLijitingke';
import IconBofang3 from './IconBofang3';
import IconWeibiaoti519 from './IconWeibiaoti519';
import IconShangyishou from './IconShangyishou';
import IconXiayishou from './IconXiayishou';
import IconWeibiaoti35 from './IconWeibiaoti35';
import IconFanhui from './IconFanhui';
import IconFanhui1 from './IconFanhui1';
import IconHuanyipi from './IconHuanyipi';
import IconQunfengcainixihuanxian from './IconQunfengcainixihuanxian';
import IconTubiao from './IconTubiao';
import IconShengyin from './IconShengyin';
import IconShengyin1 from './IconShengyin1';
import IconV from './IconV';
import IconAddSelect from './IconAddSelect';
import IconUser from './IconUser';
import IconBofang from './IconBofang';
import IconBofangsanjiaoxing from './IconBofangsanjiaoxing';
import IconTimeIcon from './IconTimeIcon';
import IconMessage from './IconMessage';
import IconBofang1 from './IconBofang1';
import IconBofang2 from './IconBofang2';
import IconFaxian from './IconFaxian';
import IconShijian from './IconShijian';
import IconShouye from './IconShouye';
import IconShoucang from './IconShoucang';

export type IconNames = 'icon-home-select' | 'icon-yemian-copy-copy' | 'icon-shouye1' | 'icon-volume-up' | 'icon-favorites-fill' | 'icon-volume-off' | 'icon-pause' | 'icon-play-arrow' | 'icon-fullscreen' | 'icon-lijitingke' | 'icon-bofang3' | 'icon-weibiaoti519' | 'icon-shangyishou' | 'icon-xiayishou' | 'icon-weibiaoti35' | 'icon-fanhui' | 'icon-fanhui1' | 'icon-huanyipi' | 'icon-qunfengcainixihuanxian' | 'icon-tubiao-' | 'icon-shengyin' | 'icon-shengyin1' | 'icon-V' | 'icon-add-select' | 'icon-user' | 'icon-bofang' | 'icon-bofangsanjiaoxing' | 'icon-time_icon' | 'icon-message' | 'icon-bofang1' | 'icon-bofang2' | 'icon-faxian' | 'icon-shijian' | 'icon-shouye' | 'icon-shoucang';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-home-select':
      return <IconHomeSelect key="1" {...rest} />;
    case 'icon-yemian-copy-copy':
      return <IconYemianCopyCopy key="2" {...rest} />;
    case 'icon-shouye1':
      return <IconShouye1 key="3" {...rest} />;
    case 'icon-volume-up':
      return <IconVolumeUp key="4" {...rest} />;
    case 'icon-favorites-fill':
      return <IconFavoritesFill key="5" {...rest} />;
    case 'icon-volume-off':
      return <IconVolumeOff key="6" {...rest} />;
    case 'icon-pause':
      return <IconPause key="7" {...rest} />;
    case 'icon-play-arrow':
      return <IconPlayArrow key="8" {...rest} />;
    case 'icon-fullscreen':
      return <IconFullscreen key="9" {...rest} />;
    case 'icon-lijitingke':
      return <IconLijitingke key="10" {...rest} />;
    case 'icon-bofang3':
      return <IconBofang3 key="11" {...rest} />;
    case 'icon-weibiaoti519':
      return <IconWeibiaoti519 key="12" {...rest} />;
    case 'icon-shangyishou':
      return <IconShangyishou key="13" {...rest} />;
    case 'icon-xiayishou':
      return <IconXiayishou key="14" {...rest} />;
    case 'icon-weibiaoti35':
      return <IconWeibiaoti35 key="15" {...rest} />;
    case 'icon-fanhui':
      return <IconFanhui key="16" {...rest} />;
    case 'icon-fanhui1':
      return <IconFanhui1 key="17" {...rest} />;
    case 'icon-huanyipi':
      return <IconHuanyipi key="18" {...rest} />;
    case 'icon-qunfengcainixihuanxian':
      return <IconQunfengcainixihuanxian key="19" {...rest} />;
    case 'icon-tubiao-':
      return <IconTubiao key="20" {...rest} />;
    case 'icon-shengyin':
      return <IconShengyin key="21" {...rest} />;
    case 'icon-shengyin1':
      return <IconShengyin1 key="22" {...rest} />;
    case 'icon-V':
      return <IconV key="23" {...rest} />;
    case 'icon-add-select':
      return <IconAddSelect key="24" {...rest} />;
    case 'icon-user':
      return <IconUser key="25" {...rest} />;
    case 'icon-bofang':
      return <IconBofang key="26" {...rest} />;
    case 'icon-bofangsanjiaoxing':
      return <IconBofangsanjiaoxing key="27" {...rest} />;
    case 'icon-time_icon':
      return <IconTimeIcon key="28" {...rest} />;
    case 'icon-message':
      return <IconMessage key="29" {...rest} />;
    case 'icon-bofang1':
      return <IconBofang1 key="30" {...rest} />;
    case 'icon-bofang2':
      return <IconBofang2 key="31" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="32" {...rest} />;
    case 'icon-shijian':
      return <IconShijian key="33" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="34" {...rest} />;
    case 'icon-shoucang':
      return <IconShoucang key="35" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
