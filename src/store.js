import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'

const VuexPersist = new VuexPersist({
    Key: 'vuexjs3movies',
    storage: windows.localStorage
})

const defaultState = { 
    popularMovies: null,
    frenchMovies: null,
    americanMovies: null,
    lastmovies: null,
    top50movies: null
}


export const store = createStore({
    state() {
        if(localStorage.state) {
            return localStorage.state
        }
        else {
            return defaultState
        }
    },


    mutations: {
        storePopularMovies(state, payload) {
            state.popularMovies = payload
        },


        storeFrenchMovies(state, payload) {
            state.frenchMovies = payload
        },

        storeAmericanMovies(state, payload) {
            state.americanMovies = payload
        },

        storeLastMovies(state, payload) {
            state.lastMovies = payload
        },

        storeTop50Movies(state, payload) {
            state.top50Movies = payload
        },

        resetState(state) {
            Object.assign(state, defaultState)
        },
    },

    getters: {
        getPopularMovies(state) {
            return state.popularMovies
        },

        getFrenchMovies(state) {
            return state.franchMovies
        },

        getAmericanMovies(state) {
            return state.americanMovies
        },

        getLastMovies(state) {
            return state.lastMovies
        },

        getTop50Movies(state) {
            return state.top50Movies
        },
    },



    actions: {
        resetState() {
            store.commit("resetState")
        }
    },

    plugins: [VuexPersist.plugin]
})