import animated from "animate.css";

// Vue: VuePress 正在使用的 Vue 构造函数
// options: 附加到根实例的一些选项
// router: 当前应用的路由实例
// siteData: 站点元数据
export default ({Vue, options, router, siteData}) => {
    Vue.use(animated);
    Vue.filter("upperCase", value => value.toUpperCase());
}
