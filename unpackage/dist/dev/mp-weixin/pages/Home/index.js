"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_swiper2 = common_vendor.resolveComponent("up-swiper");
  _easycom_up_swiper2();
}
const _easycom_up_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
if (!Math) {
  _easycom_up_swiper();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list3 = common_vendor.ref([
      "https://cdn.uviewui.com/uview/swiper/swiper3.png",
      "https://cdn.uviewui.com/uview/swiper/swiper2.png",
      "https://cdn.uviewui.com/uview/swiper/swiper1.png"
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: list3.value,
          indicator: true,
          indicatorMode: "line",
          circular: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhangxinxin/Desktop/fitness-app/pages/Home/index.vue"]]);
wx.createPage(MiniProgramPage);
