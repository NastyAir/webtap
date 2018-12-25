<template>
    <div id="app">
        <v-app >
            <v-toolbar dark color="primary">
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title class="white--text">WebTap——工具箱</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>apps</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>refresh</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>
            </v-toolbar>
            <!--<img alt="Vue logo" src="./assets/logo.png">-->
            <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
            <!--<router-link to="/helloworld">helloworld</router-link>-->
            <!--<router-link to="/website">website</router-link>-->
            <v-content>
                <router-view></router-view>
            </v-content>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {},
        mounted: function () {
            this.$router.push('/website')
        }
    }
</script>

<style>

</style>
