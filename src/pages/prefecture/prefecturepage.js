var _class, _temp;

import React from 'react';
import { __decorate } from "tslib";
import { Component } from "@tarojs/taro-rn";
import { Text, View } from "@tarojs/components-rn";
import { connect } from "@tarojs/taro-redux-rn";
import { add, asyncAdd, minus } from "../../actions/counter";
import CustomSafeAreaView from "../../compoments/safe-area-view/index.rn";
let Prefecturepage = (_temp = _class = class Prefecturepage extends Component {
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <CustomSafeAreaView>
        <View><Text>Prefectur</Text></View>
      </CustomSafeAreaView>;
  }
}, _class.config = {
  navigationBarTitleText: '首页',
  disableScroll: true
}, _temp);
Prefecturepage = __decorate([connect(({ counter }) => ({
  counter
}), dispatch => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    dispatch(asyncAdd());
  }
}))], Prefecturepage);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion
export default Prefecturepage;