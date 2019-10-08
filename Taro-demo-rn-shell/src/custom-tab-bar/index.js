import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { Image, Text, View } from "@tarojs/components-rn";
import { styleAssign } from "../utils/datatool";
import TouchableButton from "../compoments/touchable-button/index.rn";
//@ts-ignore
//@ts-ignore
//@ts-ignore
//@ts-ignore
//@ts-ignore
import iconTabarHomeNormal from '../assets/ico_tabar_home_normal.png';
//@ts-ignore
import iconTabarHomePressed from '../assets/ico_tabar_home_pressed.png';
//@ts-ignore
import iconTabarClassNormal from '../assets/ico_tabar_class_normal.png';
//@ts-ignore
import iconTabarClassPressed from '../assets/ico_tabar_class_pressed.png';
//@ts-ignore
import iconTabarPrefectureNormal from '../assets/ico_tabar_prefecture_normal.png';
//@ts-ignore
import iconTabarPrefecturePressed from '../assets/ico_tabar_prefecture_pressed.png';
//@ts-ignore
import iconTabarMineNormal from '../assets/ico_tabar_mine_normal.png';
//@ts-ignore
import iconTabarMinePressed from '../assets/ico_tabar_mine_pressed.png';
import { absB, absL, bgColor, color, default as styles, fSize, h, iphoneX, mb, mt, screenWidth, w, wRatio } from "../utils/style";
let CustomTabBar = class CustomTabBar extends Component {
  constructor(props) {
    super(props);
    /**
     * @author 何晏波
     * @QQ 1054539528
     * @date 2019/9/18
     * @function: 签到
     */

    this.singIn = async () => {
      // let res = (await this.props.singIn()).data;
      //
      // if (res.code === Api.NetworkState.SUCCESS) {
      //   Toast.message('签到成功');
      //   this.getSignInPage();
      // }
    };

    console.log('构造函数');
    this.state = {
      signInPageDetail: { dateIntegrals: [], signInCount: 0 },
      currentIndex: 0
    };
  }
  render() {
    let { onPress } = this.props;
    let { signInPageDetail, currentIndex } = this.state;
    console.log('更新了', currentIndex);
    if (typeof signInPageDetail.signInCount === 'undefined') {
      signInPageDetail.signInCount = 0;
    }
    return <View style={styleAssign([styles.udr, styles.upa, absL(0), absB(0), wRatio(100), h(60), bgColor('#fafafa'), styles.uac, styles.uac, mb(iphoneX ? 34 : 0)])}>
        <TouchableButton customStyle={styleAssign([w(screenWidth / 4), h(60), styles.uac, styles.ujc])} onClick={() => {
        console.log('首页');
        onPress(0);
        this.setState({ currentIndex: 0 });
      }}>
          <View style={styleAssign([styles.uac])}>
            <Image src={currentIndex === 0 ? iconTabarHomePressed : iconTabarHomeNormal} style={styleAssign([w(22), h(22), mt(4)])} />
            <Text style={styleAssign([fSize(12), mt(2), color(currentIndex === 0 ? '#34b0b0' : '#9b9b9b')])}>首页</Text>
          </View>
        </TouchableButton>
        <TouchableButton customStyle={styleAssign([w(screenWidth / 4), h(60), styles.uac, styles.ujc])} onClick={() => {
        console.log('课程');
        onPress(1);
        this.setState({ currentIndex: 1 });
      }}>
          <View style={styleAssign([styles.uac])}>
            <Image src={currentIndex === 1 ? iconTabarClassPressed : iconTabarClassNormal} style={styleAssign([w(22), h(22), mt(4)])} />
            <Text style={styleAssign([fSize(12), mt(2), color(currentIndex === 1 ? '#34b0b0' : '#9b9b9b')])}>课程</Text>
          </View>
        </TouchableButton>
        <TouchableButton customStyle={styleAssign([w(screenWidth / 4), h(60), styles.uac, styles.ujc])} onClick={() => {
        console.log('专区');
        onPress(2);
        this.setState({ currentIndex: 2 });
      }}>
          <View style={styleAssign([styles.uac])}>
            <Image src={currentIndex === 2 ? iconTabarPrefecturePressed : iconTabarPrefectureNormal} style={styleAssign([w(22), h(22), mt(4)])} />
            <Text style={styleAssign([fSize(12), mt(2), color(currentIndex === 2 ? '#34b0b0' : '#9b9b9b')])}>专区</Text>
          </View>
        </TouchableButton>
        <TouchableButton customStyle={styleAssign([w(screenWidth / 4), h(60), styles.uac, styles.ujc])} onClick={() => {
        console.log('我的');
        onPress(3);
        this.setState({ currentIndex: 3 });
      }}>
          <View style={styleAssign([styles.uac])}>
            <Image src={currentIndex === 3 ? iconTabarMinePressed : iconTabarMineNormal} style={styleAssign([w(22), h(22), mt(4)])} />
            <Text style={styleAssign([fSize(12), mt(2), color(currentIndex === 3 ? '#34b0b0' : '#9b9b9b')])}>我的</Text>
          </View>
        </TouchableButton>
      </View>;
  }
};
export { CustomTabBar as default };