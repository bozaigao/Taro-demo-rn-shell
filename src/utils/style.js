import Taro from '@tarojs/taro-rn';

import { scaleSize, setSpText } from "./datatool"; /**
                                                    * @filename style.ts
                                                    * @author 何晏波
                                                    * @QQ 1054539528
                                                    * @date 2019/9/21
                                                    * @Description: 样式工具类
                                                    */

let screenWidth = global.screenWidth;
let screenHeight = global.screenHeight;
let iphoneX = global.iphoneX;
let platform = global.platform;
//盒子
function uf(flexNumber) {
  return { flex: flexNumber };
}
//高度百分比
function hRatio(height) {
  return { height: height + '%' };
}
//高度
function h(height) {
  return { height: scaleSize(height) };
}
//最小高度
function minh(minHeight) {
  return { minHeight: scaleSize(minHeight) };
}
//最大高度
function maxh(maxHeight) {
  return { maxHeight: scaleSize(maxHeight) };
}
//宽度百分比
function wRatio(width) {
  return { width: width + '%' };
}
//宽度
function w(width) {
  return { width: scaleSize(width) };
}
//最小宽度
function minw(minWidth) {
  return { minWidth: scaleSize(minWidth) };
}
//最大宽度
function maxw(maxWidth) {
  return { maxWidth: scaleSize(maxWidth) };
}
//内边距
function pt(paddingTop) {
  return { paddingTop: scaleSize(paddingTop) };
}
function pr(paddingRight) {
  return { paddingRight: scaleSize(paddingRight) };
}
function pl(paddingLeft) {
  return { paddingLeft: scaleSize(paddingLeft) };
}
function pb(paddingBottom) {
  return { paddingBottom: scaleSize(paddingBottom) };
}
function pa(padding) {
  return { padding: scaleSize(padding) };
}
function padding(paddingArr) {
  /*传递的是一个数组*/
  if (paddingArr.constructor === Array) {
    return {
      paddingTop: scaleSize(paddingArr[0]),
      paddingRight: scaleSize(paddingArr[1]),
      paddingBottom: scaleSize(paddingArr[2]),
      paddingLeft: scaleSize(paddingArr[3])
    };
  }
  Taro.showToast({ title: 'padding方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数' });
  return {};
}
//边框
function bt(borderTopWidth) {
  return { borderTopWidth: scaleSize(borderTopWidth) };
}
function bb(borderBottomWidth) {
  return { borderBottomWidth: scaleSize(borderBottomWidth) };
}
function bl(borderLeftWidth) {
  return { borderLeftWidth: scaleSize(borderLeftWidth) };
}
function br(borderRightWidth) {
  return { borderRightWidth: scaleSize(borderRightWidth) };
}
function bo(borderWidth) {
  return { borderWidth: scaleSize(borderWidth) };
}
function border(borderWidthArr) {
  /*传递的是一个数组*/
  if (borderWidthArr.constructor === Array) {
    return {
      borderTopWidth: scaleSize(borderWidthArr[0]),
      borderRightWidth: scaleSize(borderWidthArr[1]),
      borderBottomWidth: scaleSize(borderWidthArr[2]),
      borderLeftWidth: scaleSize(borderWidthArr[3])
    };
  }
  Taro.showToast({ title: 'border方法第一个参数为数组,四个参数的时候分别代表上右下ø左,也可以传递3,2,1个参数' });
  return {};
}
//外边距
function mt(marginTop) {
  return { marginTop: scaleSize(marginTop) };
}
function mb(marginBottom) {
  return { marginBottom: scaleSize(marginBottom) };
}
function ml(marginLeft) {
  return { marginLeft: scaleSize(marginLeft) };
}
function mr(marginRight) {
  return { marginRight: scaleSize(marginRight) };
}
function ma(margin) {
  return { margin: scaleSize(margin) };
}
function margin(marginArr) {
  /*传递的是一个数组*/
  if (marginArr.constructor === Array) {
    return {
      marginTop: scaleSize(marginArr[0]),
      marginRight: scaleSize(marginArr[1]),
      marginBottom: scaleSize(marginArr[2]),
      marginLeft: scaleSize(marginArr[3])
    };
  }
  Taro.showToast({ title: 'radius方法中第一个数组参数必须为四个元素,默认左上为第一个参数,顺时针旋转' });
  return {};
}
//圆角
function radiusA(borderRadius) {
  return { borderRadius: scaleSize(borderRadius) };
}
function radiusTL(borderTopLeftRadius) {
  return { borderTopLeftRadius: scaleSize(borderTopLeftRadius) };
}
function radiusTR(borderTopRightRadius) {
  return { borderTopRightRadius: scaleSize(borderTopRightRadius) };
}
function radiusBL(borderBottomLeftRadius) {
  return { borderBottomLeftRadius: scaleSize(borderBottomLeftRadius) };
}
function radiusBR(borderBottomRightRadius) {
  return { borderBottomRightRadius: scaleSize(borderBottomRightRadius) };
}
function borderRadius(borderRadiusArr) {
  /*传递的是一个数组*/
  if (borderRadiusArr.constructor === Array) {
    return {
      borderTopLeftRadius: scaleSize(borderRadiusArr[0]),
      borderTopRightRadius: scaleSize(borderRadiusArr[1]),
      borderBottomRightRadius: scaleSize(borderRadiusArr[2]),
      borderBottomLeftRadius: scaleSize(borderRadiusArr[3])
    };
  }
  Taro.showToast({ title: 'radius方法中第一个数组参数必须为四个元素,默认左上为第一个参数,顺时针旋转' });
  return {};
}
//位置
function absT(top) {
  return { top: scaleSize(top) };
}
function absB(bottom) {
  return { bottom: scaleSize(bottom) };
}
function absL(left) {
  return { left: scaleSize(left) };
}
function absR(right) {
  return { right: scaleSize(right) };
}
function abs(absolutePositionArr) {
  /*传递的是一个数组*/
  if (absolutePositionArr.constructor === Array) {
    return {
      top: scaleSize(absolutePositionArr[0]),
      right: scaleSize(absolutePositionArr[1]),
      bottom: scaleSize(absolutePositionArr[2]),
      left: scaleSize(absolutePositionArr[3])
    };
  }
  Taro.showToast({ title: 'abs方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数' });
  return {};
}
/*字体大小*/
function fSize(fontSize) {
  return { fontSize: setSpText(fontSize) };
}
/*字体风格*/
function fFamily(fontFamily) {
  return { fontFamily };
}
/*字体weight*/
function fWeight(fontWeight) {
  return { fontWeight: fontWeight };
}
/*字体颜色*/
function color(color) {
  return { color };
}
/*字体行高*/
function lh(lineHeight) {
  return { lineHeight };
}
/*字体行间距*/
function ls(letterSpacing) {
  return { letterSpacing };
}
/*背景色*/
function bgColor(backgroundColor) {
  return { backgroundColor };
}
/*边框色*/
function bdColor(borderColor) {
  return { borderColor };
}
/*透明度*/
function op(opacity) {
  return { opacity };
}
/*透明度*/
function bs(borderStyle) {
  return { borderStyle };
}
/*zIndex*/
function zIndex(index) {
  return { zIndex: index };
}
export { screenWidth, screenHeight, iphoneX, platform, h, w, bo, bs, pt, pr, pl, pb, pa, padding, bt, bb, bl, br, border, mt, mb, mr, ml, ma, margin, radiusTL, radiusTR, radiusBL, radiusBR, absT, absB, absL, absR, abs, color, bgColor, bdColor, fSize, fFamily, op, radiusA, wRatio, hRatio, lh, ls, fWeight, uf, minh, maxh, maxw, minw, borderRadius, zIndex };
export const commonStyles = {
  //紫色
  violetColor: '#7d90f0',
  //阴影色
  shadowColor: '#76befd',
  //编辑框底色
  textAreaBlueColor: '#e9f2ff',
  buheshiColor: 'rgb(190,202,227)',
  //边框色
  borderColor: '#e9eff4',
  lightBlue: '#7d90f0',
  lightThemeColor: '#ecf5ff',
  // 粗体字
  fontWeight: 'bold',
  colorTheme: '#488eff',
  blueColor: '#2F8BE7',
  blueColorTwo: '#153971',
  deepBlueColor: '#4E95FF',
  pinkColor: '#f58062',
  orangeColor: '#f76f1f',
  pinkColorTwo: '#ffdad1',
  greenColor: '#50e3c2',
  greenColorTwo: '#4ebe05',
  bgPinkColor: '#ffe2db',
  yellowBgColor: '#e3be56',
  yellowBgColorTwo: '#cdbd91',
  //按钮不可点击的背景色,
  disabledColor: '#ecf0f9',
  disabledColoraTwo: '#d9dee8',
  //输入框placeholder颜色
  holderColor: '#bccae5',
  //底部菜单字体颜色
  tabBottomTextActiveColor: '#488eff',
  tabBottomTextInActiveColor: '#9B9B9B',
  bgGray: '#e5e5e5',
  yellowColor2: '#fad41b',
  //页面默认底色
  pageDefaultBackgroundColor: '#f6f9fc',
  whiteColor: '#FFFFFF',
  blackColor: '#000000',
  //主题字黑色
  textBlackColor: '#2b3642',
  tagColor: '#f0f6ff',
  //主题字灰色
  textGrayColor: '#979aa0',
  textGrayColorTwo: '#acb7c2',
  textGrayColorThree: '#9caec3',
  textGrayColorFour: '#757575',
  textGrayColorFive: '#9eabc1',
  chatTextColor: '#7b7f7e',
  textYellowColor: '#be8924',
  //主题字金色
  textGoldColor: '#ceb18a',
  textGoldColorTwo: '#deac65',
  //主题字浅蓝色
  textWathetBlueColor: '#b7c6e4',
  //主题字橙色
  textOrangeColor: '#f8832b',
  textOrangeColorTwo: '#fdaf72',
  //主题字绿色
  textGreenColor: '#24c8a5',
  yellowColor: '#fac253',
  //分割线颜色
  dividerColor: '#f6f9fc',
  transparent: 'transparent',
  linearGradientStartColor: '#61c8ff',
  linearGradientEndColor: '#4e95ff',
  ratingStarColor: '#E98269',
  chatBgColor: '#E5E5E5',
  //边距30
  left30: 15,
  right30: 15,
  //每个页面的导航条高度
  headHeight: 44,
  lineHeight: 24,
  letterSpacing: 0.8,
  buttonOpacityBg: 'rgba(118, 190, 253, 0.1)',
  redColor: '#ec1313',
  modalOpacity: 0.3,
  activeOpacity: 0.8,
  sysMsgGrayColor: 'rgb(243,245,242)',
  sysMsgBgColor: 'rgb(243,245,242)',
  sessionItemBg: '#02420B',
  lightRedColor: '#ff7754',
  lightBlackColor: '#4a4a4a',
  //iOS端数字字体风格
  iOSNumStyleFontFamily: 'HelveticaNeue-CondensedBlack',
  //android端数字字体风格
  androidNumStyleFontFamily: 'Roboto'
};
//总则u开头表示样式(ui),c开头表示颜色(color)
const styles = {
  uf1: {
    flex: 1
  },
  h100: {
    height: '100%'
  },
  w100: {
    width: '100%'
  },
  uWrap: {
    flexWrap: 'wrap' //自动换行
  },
  uNoWrap: {
    flexWrap: 'nowrap' //截断
  },
  //主轴的排列方向
  udr: {
    //子项横向排列
    flexDirection: 'row'
  },
  udc: {
    //子项竖向排列
    flexDirection: 'column'
  },
  //次轴排序
  uas: {
    //居前
    alignItems: 'flex-start'
  },
  uac: {
    //居中
    alignItems: 'center'
  },
  udf: {
    //窗体绝对布局
    position: 'fixed'
  },
  uae: {
    //居后
    alignItems: 'flex-end'
  },
  //主轴排序
  ujs: {
    //居前
    justifyContent: 'flex-start'
  },
  ujc: {
    //居中
    justifyContent: 'center'
  },
  uje: {
    //居后
    justifyContent: 'flex-end'
  },
  uja: {
    //平均分布
    justifyContent: 'space-around'
  },
  ujb: {
    //两端
    justifyContent: 'space-between'
  },
  //自身次轴对齐 alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
  uSelfAuto: { alignSelf: 'auto' },
  uSelfStart: { alignSelf: 'flex-start' },
  uSelfEnd: { alignSelf: 'flex-end' },
  uSelfCenter: { alignSelf: 'center' },
  uSelfStretch: { alignSelf: 'stretch' },
  upa: {
    //绝对定位
    position: 'absolute'
  },
  upf: {
    //相对于窗口定位
    position: 'fixed'
  },
  upr: {
    position: 'relative'
  },
  //文字水平居中 enum('auto', 'left', 'right', 'center')
  utxc: {
    textAlign: 'center'
  },
  //水平居左
  utxl: {
    textAlign: 'left'
  },
  //水平居右
  utxr: {
    textAlign: 'right'
  },
  //文字垂直居中 textAlignVertical enum('auto', 'top', 'bottom', 'center') 只支持安卓
  utxvc: {
    textAlignVertical: 'center'
  },
  utxvt: {
    textAlignVertical: 'top'
  },
  //文本横线-底部
  utxdu: {
    textDecorationLine: 'underline'
  },
  //文本横线-中间
  utxdt: {
    textDecorationLine: 'line-through'
  },
  //文本横线-中间和底部
  utxdut: {
    textDecorationLine: 'underline line-through'
  },
  //按键阴影
  uvs: {
    shadowColor: commonStyles.colorTheme,
    shadowOpacity: 0.33,
    shadowRadius: 5
  }
};
export default styles;