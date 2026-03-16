/**
 * Store Vuex — Lead B2C
 * Gère la soumission du formulaire lead depuis jedivisemonterrain.fr
 * vers l'API BACK-NEST-FR (POST /api/lead + POST /api/lead_files)
 */

export const state = () => ({
  loading: false,
  error: null,
  projectId: null,
  submitted: false,
})

export const getters = {
  isLoading: (state) => state.loading,
  hasError: (state) => !!state.error,
  getError: (state) => state.error,
  getProjectId: (state) => state.projectId,
  isSubmitted: (state) => state.submitted,
}

export const mutations = {
  SET_LOADING(state, val) {
    state.loading = val
  },
  SET_ERROR(state, err) {
    state.error = err
  },
  SET_PROJECT_ID(state, id) {
    state.projectId = id
  },
  SET_SUBMITTED(state, val) {
    state.submitted = val
  },
  RESET(state) {
    state.loading = false
    state.error = null
    state.projectId = null
    state.submitted = false
  },
}

export const actions = {
  /**
   * Soumet le lead principal vers POST /api/lead (BACK-NEST-FR)
   * @param {Object} leadPayload — données du formulaire LeadCreation.vue
   * @returns {Object} réponse API avec project_id
   */
  async submitLead({ commit }, { lead, axios }) {
    commit('SET_LOADING', true)
    commit('SET_ERROR', null)
    try {
      const apiServer = process.env.API_SERVER || ''
      const response = await axios.post(`${apiServer}/api/lead`, lead)
      commit('SET_PROJECT_ID', response.data.project_id || response.data.id)
      return response.data
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        'Erreur lors de la soumission du lead. Veuillez réessayer.'
      commit('SET_ERROR', msg)
      throw err
    } finally {
      commit('SET_LOADING', false)
    }
  },

  /**
   * Upload les fichiers joints au lead
   * @param {number} projectId — id du projet créé
   * @param {FileList|Array} files — fichiers à uploader
   */
  async submitLeadFiles({ commit }, { projectId, files, axios }) {
    if (!files || files.length === 0) return
    const apiServer = process.env.API_SERVER || ''
    const formData = new FormData()
    formData.append('project_id', projectId)
    files.forEach((file) => {
      formData.append('files', file)
    })
    try {
      await axios.post(`${apiServer}/api/lead_files`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    } catch (err) {
      // On ne bloque pas si les fichiers échouent — le lead est déjà enregistré
      // eslint-disable-next-line no-console
      console.error('Erreur upload fichiers lead :', err)
    }
  },

  /**
   * Action principale : submit lead + fichiers en séquence
   */
  async submitLeadWithFiles({ dispatch, commit }, { lead, files, axios }) {
    commit('SET_LOADING', true)
    try {
      const data = await dispatch('submitLead', { lead, axios })
      const projectId = data.project_id || data.id
      if (files && files.length > 0) {
        await dispatch('submitLeadFiles', { projectId, files, axios })
      }
      commit('SET_SUBMITTED', true)
      return data
    } finally {
      commit('SET_LOADING', false)
    }
  },
}
