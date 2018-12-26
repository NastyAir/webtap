<template>
    <div>
        <v-toolbar color="blue" dark tabs>
            <v-text-field

                    class="mx-3"
                    flat
                    label="Search"
                    prepend-inner-icon="search"
                    solo-inverted
            ></v-text-field>
            <v-tabs
                    slot="extension"
                    v-model="check"
                    grow
                    color="transparent"
                    slider-color="white"
            >
                <v-tab v-for="(item,index) in tabs" :key="index">
                    {{ item.text }}
                </v-tab>
            </v-tabs>
        </v-toolbar>
        <v-tabs-items v-model="check">
            <v-tab-item v-for="(item,index) in tabs" :key="index">
                <v-card>
                    <v-container fluid grid-list-md>
                        <v-layout row wrap>
                            <v-flex
                                    v-for="(card,index) in getWebsiteData(item.type)"
                                    :key="index"
                                    xs12 md3 xl2>
                                <v-card @click="openUrl(card.url)">
                                    <v-img :src="card.pic" height="200px"></v-img>
                                    <v-card-title primary-title>
                                        <div>
                                            <div class="headline">{{card.name}}</div>
                                            <span class="grey--text">{{card.remark}}</span>
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
    import mydata from '../data/GetData'

    export default {
        data() {
            return {
                check: null,
                tabs: [
                    {text: "常用站点", type: "popular"},
                    {text: "知识学习", type: "learn"},
                    {text: "娱乐摸鱼", type: "pastime"},
                ],
                // tabs: ["站点导航", "知识学习", "生活分享"],

            }
        },
        methods: {
            openUrl(url) {
                window.console.log(url);
                window.open(url);
            },
            getWebsiteData(type) {
                return mydata(type)
            }
        }
    }
</script>