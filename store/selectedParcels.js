export const state = () => ({
  parcelleSelectedInfos: [],
  address: null,
})

export const getters = {
  getParcelleSelectedInfos: (state) => {
    return state.parcelleSelectedInfos.slice()
  },
  getAddress: (state) => {
    return { ...state.address }
  },
}

export const actions = {}

export const mutations = {
  setParcelleSelectedInfos(state, { address, parcelleSelectedInfos }) {
    state.parcelleSelectedInfos = parcelleSelectedInfos
    state.address = address
  },
}
