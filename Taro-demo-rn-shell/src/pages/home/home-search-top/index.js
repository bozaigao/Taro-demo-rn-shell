import React from 'react';
/**
 * @filename index.rn.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/16
 * @Description: 首页搜索栏
 */
import { PureComponent } from "@tarojs/taro-rn";
import { Image, Text, View } from "@tarojs/components-rn";
//@ts-ignore
import xinfengIcon from '../../../assets/ico_homepage_xinfeng.png';
//@ts-ignore
import searTopBg from '../../../assets/ico_homepage_search_bg.png';
//@ts-ignore
import searchGrayIcon from '../../../assets/ico_homepage_search_gray.png';
//@ts-ignore
import clockIcon from '../../../assets/ico_homepage_clock.png';
import TouchableButton from "../../../compoments/touchable-button/index.rn";
import { styleAssign } from "../../../utils/datatool";
import styles, { bgColor, color, commonStyles, fSize, h, ml, mr, radiusA, w, wRatio } from "../../../utils/style";
let HomeSearchTop = class HomeSearchTop extends PureComponent {
  render() {
    let { leftClick, rightClick } = this.props;
    return <View style={styleAssign([styles.uac, styles.udr])}>
        
        <View style={styleAssign([bgColor(commonStyles.whiteColor), wRatio(6), h(50), styles.uac, styles.ujc, ml(10)])} onClick={() => {
        console.log('MessagePage');
        leftClick && leftClick();
        // navigation.navigate('MessagePage')
      }}>
          <View style={styleAssign([wRatio(100), h(6), styles.udr, styles.uje])}>
            <View style={styleAssign([bgColor('#ec1313'), w(6), h(6), radiusA(3)])} />
          </View>
          <Image src={xinfengIcon} mode="widthFix" style={styleAssign([w(20), h(18)])} />
        </View>
        
        <View style={styleAssign([styles.uf1, h(52), styles.uac, styles.ujc])}>
          <TouchableButton customStyle={styleAssign([styles.uf1, h(52)])} onClick={() => {
          console.log('SearchPage');
          // navigation.navigate('SearchPage')
        }}>
            <Image mode="scaleToFill" src={searTopBg} style={styleAssign([styles.uf1, h(52)])} />
          </TouchableButton>
          <View style={styleAssign([h(52), styles.ujc, styles.upa, styles.uac])}>
            <View style={styleAssign([styles.uac, styles.ujc, styles.udr, bgColor(commonStyles.whiteColor)])}>
              <Image src={searchGrayIcon} mode="widthFix" style={styleAssign([w(14), h(14)])} />
              <Text style={styleAssign([color('#c6c6c6'), fSize(15), bgColor(commonStyles.transparent), ml(8)])}>搜索</Text>
            </View>
          </View>
        </View>
        
        <View style={styleAssign([wRatio(6), h(50), styles.uac, styles.ujc, mr(10)])} onClick={() => {
        rightClick && rightClick();
        console.log('LookHistoryPage');
        // navigation.navigate('LookHistoryPage')
      }}>
          <Image src={clockIcon} mode="aspectFill" style={styleAssign([w(20), h(18)])} />
        </View>
      </View>;
  }
};

export default HomeSearchTop;