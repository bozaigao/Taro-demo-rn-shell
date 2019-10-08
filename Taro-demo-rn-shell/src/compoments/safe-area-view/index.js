import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View } from "@tarojs/components-rn";
import { styleAssign } from "../../utils/datatool";
import { bgColor, commonStyles, hRatio, pt, wRatio } from "../../utils/style";
import SignAlert from "../../pages/home/sign-alert/index.rn";
let CustomSafeAreaView = class CustomSafeAreaView extends Component {
  constructor(props) {
    super(props);
    /**
     * @author 何晏波
     * @QQ 1054539528
     * @date 2019/9/23
     * @function: 显示每日签到对话框
     */

    this.showSignAlert = () => {
      console.log('显示每日签到对话框');
      this.setState({ showSignAlert: true });
    };

    this.hideSignAlert = () => {
      console.log('隐藏每日签到对话框');
      this.setState({ showSignAlert: false });
    };

    this.state = {
      paddingHeight: 0,
      showSignAlert: false
    };
  }
  render() {
    let { customStyle, children, notNeedSafe } = this.props;
    let { paddingHeight, showSignAlert } = this.state;
    console.log('距离顶部', paddingHeight);
    return <View style={styleAssign([wRatio(100), hRatio(100), bgColor(commonStyles.whiteColor), pt(notNeedSafe ? 0 : paddingHeight), customStyle])}>
        {children}
        {showSignAlert && <SignAlert closeCallback={() => {
        this.hideSignAlert();
      }} />}
      </View>;
  }
};
export { CustomSafeAreaView as default };