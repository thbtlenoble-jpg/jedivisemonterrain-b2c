/**
 * Store Vuex — Companies
 * Gère la récupération des agences/partenaires depuis le BACK-NEST-FR
 */

export const state = () => ({
  companies: [],
  loading: false,
  error: null,
})

export const getters = {
  getCompanies: (state) => state.companies,
  isLoading: (state) => state.loading,
  hasError: (state) => !!state.error,
}

export const mutations = {
  SET_COMPANIES(state, companies) {
    state.companies = companies
  },
  SET_LOADING(state, val) {
    state.loading = val
  },
  SET_ERROR(state, err) {
    state.error = err
  },
}

export const actions = {
  /**
   * Récupère la liste des agences partenaires depuis GET /companies
   */
  async fetchCompanies({ commit }, { axios }) {
    commit('SET_LOADING', true)
    commit('SET_ERROR', null)
    try {
      const apiServer = process.env.API_SERVER || ''
      const response = await axios.get(`${apiServer}/companies`)
      commit('SET_COMPANIES', response.data)
      return response.data
    } catch (err) {
      commit('SET_ERROR', 'Impossible de charger les partenaires.')
      // eslint-disable-next-line no-console
      console.error('Erreur fetchCompanies :', err)
    } finally {
      commit('SET_LOADING', false)
    }
  },
}
