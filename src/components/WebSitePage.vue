<template>
    <div>
        <v-toolbar color="blue" dark tabs>
            <v-text-field
                    append-icon="mic"
                    class="mx-3"
                    flat
                    label="Search"
                    prepend-inner-icon="search"
                    solo-inverted
            ></v-text-field>
            <v-tabs
                    slot="extension"
                    v-model="check"
                    centered
                    color="transparent"
                    slider-color="white"
            >
                <v-tab v-for="(item,index) in tabs" :key="index">
                    {{ item }}
                </v-tab>
            </v-tabs>
        </v-toolbar>

        <v-tabs-items v-model="check">
            <v-tab-item v-for="(item,index) in tabs" :key="index">
                <v-card>
                    <v-container fluid grid-list-md>
                        <v-layout row wrap>
                            <v-flex
                                    v-for="(card,index) in cards"
                                    :key="index"
                                    xs6 md3 xl2>
                                <v-card>
                                    <v-img :src="card.src" height="200px"></v-img>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">{{card.title}}</div>
                                            <span class="grey--text">1,000 miles of wonder</span>
                                        </div>
                                    </v-card-title>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
    import data from '../data/WebSiteData'

    export default {
        data() {
            return {
                check: null,
                tabs: ["常用站点", "知识学习", "娱乐摸鱼"],
                // tabs: ["站点导航", "知识学习", "生活分享"],
                cards: data,
            }
        }, mounted() {
            this.console.log(this.cards)
        }
    }
</script>