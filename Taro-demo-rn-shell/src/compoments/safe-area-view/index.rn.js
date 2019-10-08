import React from 'react';
import { SafeAreaView } from 'react-native';
import { Component } from "react";
import { styleAssign } from "../../utils/datatool";
import { bgColor, commonStyles, hRatio, wRatio } from "../../utils/style";
import { View } from "@tarojs/components-rn";
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
      this.setState({ showSignAlert: false });
    };

    this.state = {
      showSignAlert: false
    };
  }
  render() {
    let { style, children, notNeedSafe } = this.props;
    let { showSignAlert } = this.state;
    if (notNeedSafe) {
      return <View style={styleAssign([wRatio(100), hRatio(100), bgColor(commonStyles.whiteColor), style])}>
          {children}
          {showSignAlert && <SignAlert closeCallback={() => {
          this.hideSignAlert();
        }} />}
        </View>;
    }
    return <SafeAreaView style={styleAssign([wRatio(100), hRatio(100), bgColor(commonStyles.whiteColor), style])}>
        {children}
        {showSignAlert && <SignAlert closeCallback={() => {
        this.hideSignAlert();
      }} />}
      </SafeAreaView>;
  }
};
export { CustomSafeAreaView as default };