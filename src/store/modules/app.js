const state = {
  active: 0
};

const mutations = {
  SET_ACTIVE(state, value) {
    state.active = value;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
