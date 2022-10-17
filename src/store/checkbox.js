export const state = () => ({
  list: [
    {
      "id": 1,
      "name": "Shoes 1"
    },
    {
      "id": 2,
      "name": "Shoes 2"
    },
    {
      "id": 3,
      "name": "Shoes 3"
    },
    {
      "id": 4,
      "name": "Shoes 4"
    },
    {
      "id": 5,
      "name": "T-shirt 1"
    },
    {
      "id": 6,
      "name": "T-shirt 2"
    },
    {
      "id": 7,
      "name": "T-shirt 3"
    },
    {
      "id": 8,
      "name": "T-shirt 4"
    }
  ],
  selected: null
})

export const mutations = {
  setSelected(state, selected) {
    state.selected = selected
  }
}

export const actions = {
  setResult({commit}, result) {
    commit('setResult', result)
  },
  upResult({commit}) {
    commit('setResult', false)
  }
}

export const getters = {
  list: state => state.list,
  result: state => state.result
}