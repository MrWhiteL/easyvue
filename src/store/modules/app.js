import Cookies from 'vue-cookie'
const app = {
  state: {
    refresh: true,
    currentPage: "",
    mainHeaderTheme: 'light',
    tags: [], //打开的标签页
    breadCrumbStr: '', // 面包屑字符串
    applicationId:null,
    isShrink:true,
  },
  mutations: {
    SET_REFRESH: (state, refresh) => {
      state.refresh = refresh;
    },
    SET_APPLICATION: (state, applicationId) => {
      state.applicationId = applicationId;
    },
    setTags(state, data) {
      state.tags = data;
    },
    setBreadCrumbStr(state, data) {
      state.breadCrumbStr = data;
    },
    SET_CURRENTPAGE(state,data){
      state.currentPage = data;
    },
    SET_ISSHRINK:(state,data)=>{
      state.isShrink = data;
    }
  },
  getters: {

  },
  actions: {

  }
}
export default app
