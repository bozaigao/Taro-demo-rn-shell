import React from 'react';
/**
 * @filename index.tsx
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/23
 * @Description: 每日签到对话框
 */
import { Component } from "@tarojs/taro-rn";
import { Image, Text, View } from "@tarojs/components-rn";
import { scaleSize, styleAssign } from "../../../utils/datatool";
import { absL, absT, bgColor, color, commonStyles, default as styles, fSize, fWeight, h, mb, ml, mt, pl, pt, radiusA, w } from "../../../utils/style";
import TouchableButton from "../../../compoments/touchable-button/index.rn";
import MyModal from "../../../compoments/my-modal/index.rn";
import LinearGradient from "react-native-linear-gradient";
//@ts-ignore
import icoQiandaoBg from '../../../assets/ico_qiandao_bg.png';
//@ts-ignore
import icoQiandaoTag from '../../../assets/ico_qiandao_tag.png';
//@ts-ignore
import icoQiandaoGou from '../../../assets/ico_qiandao_yiqian_gou.png';
//@ts-ignore
import icoClose from '../../../assets/ico_modal_close_btn.png';
let SignAlert = class SignAlert extends Component {
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

    this.state = {
      signInPageDetail: { dateIntegrals: [], signInCount: 0 }
    };
  }
  render() {
    let { signInPageDetail } = this.state;
    let { closeCallback } = this.props;
    if (typeof signInPageDetail.signInCount === 'undefined') {
      signInPageDetail.signInCount = 0;
    }
    return <MyModal>
        <View style={styleAssign([w(291)])}>
          <View style={styleAssign([bgColor(commonStyles.whiteColor), radiusA(4), { overflow: 'hidden' }])}>
            <View style={styleAssign([w(291), h(150)])}>
              <Image src={icoQiandaoBg} style={{ width: scaleSize(291), height: scaleSize(150) }}>
                <View style={styleAssign([styles.uf1, styles.uac, pt(40)])}>
                  <View style={styleAssign([styles.udr, styles.uac])}>
                    <Text style={styleAssign([fSize(14), color('#ff8317')])}>+</Text>
                    <Text style={styleAssign([fSize(22), color('#ff8317'), bgColor(commonStyles.transparent)])}>
                      {signInPageDetail.dateIntegrals && signInPageDetail.dateIntegrals.length > 0 ? signInPageDetail.dateIntegrals[signInPageDetail.signInCount - 1 < 0 ? 0 : signInPageDetail.signInCount - 1] : 0}
                    </Text>
                  </View>
                  <Text style={styleAssign([fSize(20), color(commonStyles.whiteColor), bgColor(commonStyles.transparent), mt(27), fWeight('bold')])}>
                    {signInPageDetail.canSignIn ? '未签到' : '签到成功'}
                  </Text>
                  <Text style={styleAssign([fSize(14), mt(4), color(commonStyles.whiteColor), bgColor(commonStyles.transparent)])}>
                    我的积分：{signInPageDetail.integral}
                  </Text>
                </View>
              </Image>
            </View>
            <View style={styleAssign([styles.uWrap, pl(13), pt(16), styles.udr])}>
              {signInPageDetail.dateIntegrals.map((item, index) => {
              return <View style={styleAssign([ml(6), mt(6), styles.uac, mb(13)])} key={index}>
                    <TouchableButton activeOpacity={signInPageDetail.canSignIn && signInPageDetail.signInCount === index ? 0.8 : 1} onClick={() => {
                  signInPageDetail.canSignIn && signInPageDetail.signInCount === index && this.singIn();
                }} customStyle={styleAssign([w(50), h(60), bgColor('#f1f1f1'), styles.uac, styles.ujc, radiusA(2)])}>
                      <Text style={styleAssign([fSize(14), color('#ff8317')])}>+{item}</Text>
                      <Image src={icoQiandaoTag} style={styleAssign([mt(2), w(30), h(26)])} />
                      {
                  //@ts-ignore
                  index < signInPageDetail.signInCount ? null : <View style={styleAssign([styles.upa, absT(0), absL(0), w(50), h(60), bgColor('rgba(196,194,194,0.5)')])} />}
                    </TouchableButton>
                    {
                //@ts-ignore
                index < signInPageDetail.signInCount ? <Image src={icoQiandaoGou} style={styleAssign([w(20), h(13), mt(6)])} /> : <Text style={styleAssign([fSize(12), color('#a2a4a8'), mt(5)])}>第{index + 1}天</Text>}
                  </View>;
            })}
            </View>
            <View style={styleAssign([styles.uac, mt(10), mb(20)])}>
              {
            //@ts-ignore
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ff9200', '#ff5f00']}
            //@ts-ignore
            style={styleAssign([w(201), h(45), radiusA(4)])}>
                  <TouchableButton customStyle={styleAssign([styles.uf1, styles.uac, styles.ujc])} onClick={() => {
                closeCallback && closeCallback();
              }}>
                    <Text style={styleAssign([fSize(18), bgColor(commonStyles.transparent), color(commonStyles.whiteColor)])}>去积分商城看看</Text>
                  </TouchableButton>
                </LinearGradient>}
            </View>
          </View>
          <TouchableButton onClick={() => {
          closeCallback && closeCallback();
        }} customStyle={styleAssign([styles.uac, mt(37), bgColor(commonStyles.transparent)])}>
            <Image src={icoClose} style={styleAssign([w(38), h(38)])} />
          </TouchableButton>
        </View>
      </MyModal>;
  }
};
export { SignAlert as default };