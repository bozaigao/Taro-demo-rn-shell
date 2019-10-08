var _class, _temp;

import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { Image, ScrollView, View } from "@tarojs/components-rn";
import HomeSearchTop from "./home-search-top/index";
//@ts-ignore
import swiperImage from '../../assets/ico_swiper.png';
import CustomSafeAreaView from "../../compoments/safe-area-view/index.rn";
//@ts-ignore
import RNSwiper from 'react-native-swiper-fix-viewpager';
import JiFenAndQianDao from "./jifen-and-qiandao/index";
import { styleAssign } from "../../utils/datatool";
import { bgColor, default as styles, h, hRatio, wRatio } from "../../utils/style";
let Homepage = (_temp = _class = class Homepage extends Component {
  constructor(props) {
    super(props);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    this.getSignInPage = async () => {
      // let res = (await this.props.getSignInPage()).data;
      //
      // if (res.code === Api.NetworkState.SUCCESS) {
      //   this.setState({
      //     signInPageDetail: res.data
      //   });
      // }
    };

    this.state = {
      signInPageDetail: { dateIntegrals: [], signInCount: 0 }
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentDidMount() {
    console.log('componentDidMount');
    // 监听一个事件，接受参数
    Taro.eventCenter.on('showJiFenModal', () => {
      console.log('显示对话框');
      this.viewRef && this.viewRef.showSignAlert();
    });
  }
  componentWillUnmount() {
    Taro.eventCenter.off('showJiFenModal');
    console.log('componentWillUnmount');
  }
  render() {
    let { signInPageDetail } = this.state;
    if (typeof signInPageDetail.signInCount === 'undefined') {
      signInPageDetail.signInCount = 0;
    }
    return <CustomSafeAreaView ref={ref => {
      this.viewRef = ref;
    }}>
        
        <HomeSearchTop leftClick={() => {
        Taro.showToast({ title: '开发中' });
      }} rightClick={() => {
        Taro.showToast({ title: '开发中' });
      }} />
        <ScrollView style={styleAssign([styles.uf1])}>
          {
        //这里针对rn端 swiper android底层需要依赖ViewPager,而不是android和iOS通用官方ScrollView，主要是解决
        //android端在ScrollView里面包含Swiper时，由于外层捕捉到并消费用户的左右滑动事件会导致Swiper无法滑动
        //详情请见：https://github.com/bozaigao/react-native-swiper-fix-viewpager
        <View style={styleAssign([wRatio(100), h(150)])}>
                <RNSwiper loop showsPagination={false}>
                  <Image mode="scaleToFill" src={swiperImage} style={styleAssign([wRatio(100), hRatio(100)])} />
                  <Image mode="scaleToFill" src={swiperImage} style={styleAssign([wRatio(100), hRatio(100)])} />
                  <Image mode="scaleToFill" src={swiperImage} style={styleAssign([wRatio(100), hRatio(100)])} />
                </RNSwiper>
              </View>}
          
          <JiFenAndQianDao />
          <View style={styleAssign([wRatio(100), h(10), bgColor('#f8f8f8')])} />
        </ScrollView>
      </CustomSafeAreaView>;
  }
}, _class.config = {
  navigationBarTitleText: '首页',
  disableScroll: true
}, _temp);
// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Homepage;