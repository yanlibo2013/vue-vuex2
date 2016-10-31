

import * as types from './mutation-types'

export const getDevicetype = ({ commit }) => {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = true;
  for (var i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  var dev = flag ? "PC" : "MOBILE";
  commit(types.GET_DEVICE_TYPE, {
    device: dev
  })
};