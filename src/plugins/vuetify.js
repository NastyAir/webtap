import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
    iconfont: 'md',
    theme: {
        primary: '#18a3ff',
        secondary: '#b0bec5',
        accent: '#61ffaa',
        error: '#ed2745'
    }
})
