import { pxTransform } from "@tarojs/taro-rn";
let defaultPixel = 2; //iphone6的像素密度
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/18
 * @function: 尺寸适配
 */
export function scaleSize(size) {
  return pxTransform(size * defaultPixel);
}
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/21
 * @function: 字体大小适配
 */
export function setSpText(size) {
  return pxTransform(Math.round(size * defaultPixel + 0.5));
}
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2019/9/21
 * @function: 将样式数组进行合并
 */
export function styleAssign(styles) {
  styles.unshift({ display: 'flex' });
  styles.unshift({ flexDirection: 'column' });
  //@ts-ignore
  return Object.assign(...styles);
}
/**
 * @author 何晏波
 * @QQ 1054539528
 * @date 2018/10/22
 * @function: 定时器任务
 */
export function debounce(idle, action) {
  let last;
  return (() => {
    clearTimeout(last);
    last = setTimeout(function () {
      action();
    }, idle);
  })();
}