import Taro from '@tarojs/taro-rn';
import React from 'react';
/**
 * @filename index.rn.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/18
 * @Description: 积分和签到
 */
import { PureComponent } from "@tarojs/taro-rn";
import { Image, Text, View } from "@tarojs/components-rn";
//@ts-ignore
import iconJiFen from '../../../assets/ico_homepage_xinfeng.png';
//@ts-ignore
import iconQianDao from '../../../assets/ico_homepage_qiandao_btn.png';
import TouchableButton from "../../../compoments/touchable-button/index.rn";
import { scaleSize } from "../../../utils/datatool";
let JiFenAndQianDao = class JiFenAndQianDao extends PureComponent {
  render() {
    return <View style={{
      display: 'flex',
      flexDirection: 'row',
      height: scaleSize(57),
      width: '100%',
      alignItems: 'center'
    }}>
        <View style={{
        display: 'flex',
        flexDirection: 'row',
        height: scaleSize(57),
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <TouchableButton customStyle={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'white'
        }} onClick={() => {
          //navigation.navigate('ShangchengPage');
          console.log('ShangchengPage');
        }}>
            <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
              <Image src={iconJiFen} mode={'widthFix'} style={{
              width: scaleSize(22),
              height: scaleSize(22),
              marginTop: scaleSize(0)
            }} />
              <Text style={{ fontSize: scaleSize(16), color: '#182222', marginLeft: scaleSize(12) }}>积分商城</Text>
            </View>
          </TouchableButton>
        </View>
        <View style={{
        display: 'flex',
        height: scaleSize(57),
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <TouchableButton customStyle={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: 'white'
        }} onClick={() => {
          // this.getSignInPage();
          // this.modalRef && this.modalRef.show();
          Taro.eventCenter.trigger('showJiFenModal');
          console.log('每日签到');
        }}>
            <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
              <Image src={iconQianDao} mode={'widthFix'} style={{ width: scaleSize(23), height: scaleSize(20) }} />
              <Text style={{ fontSize: scaleSize(16), color: '#182222', marginLeft: scaleSize(12) }}>每日签到</Text>
            </View>
          </TouchableButton>
        </View>
      </View>;
  }
};

export default JiFenAndQianDao;