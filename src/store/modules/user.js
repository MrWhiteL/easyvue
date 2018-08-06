
const user = {
  state: {
    user: {},
    permission: [],
    modules: [],
    menus: [],
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
      sessionStorage.setItem('user', JSON.stringify(user));
    },
    SET_PERMISSION: (state, permission) => {
      state.permission = permission
    },
    SET_MODULES: (state, modules) => {
      state.modules = modules;
      sessionStorage.setItem('modules', JSON.stringify(modules));
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus;
      sessionStorage.setItem('menus', JSON.stringify(menus));
    }
  },
  getters: {
    getUser: state => {
      if (JSON.stringify(state.user) == "{}") {
        state.user = JSON.parse(sessionStorage.getItem('user'));
      }
      return state.user;
    },
    getMenus: state => {
      if (state.menus.length == 0) {
        state.menus = JSON.parse(sessionStorage.getItem(['menus']));
      }
      return state.menus;
    }
  },
  actions: {

  }
}

export default user
