<script lang="ts">

import { news_s, news_images_s } from '../assets/resources'

export default {
    computed: {
        get_news: function (vm: any) {
            console.log(vm.$route.params.id)
            let data = news_s.find((news: any) => news.id == vm.$route.params.id)
            console.log(data)
            return data
        },
        get_image: function (vm: any) {
            let data = news_images_s.find((news: any) => news.id == vm.$route.params.id)
            return data
        },
    },
}
</script>

<template>
    <div v-if="get_news == undefined" class="news-detail">
        <!-- print vm.$route.params.id -->
        <div class="news-title">News <span style="color: gray;">{{ $route.params.id }}</span> not found : (</div>
    </div>
    <div v-if="get_news != undefined" class="news-detail">
        <div class="news-title">{{ get_news.title }}</div>
        <div class="news-date">{{ get_news.date }}</div>
        <div v-if="get_image != undefined">
            <img class="news-image" :src="get_image.url" alt="news image">
        </div>
        <div class="news-content">
            <div v-html="get_news.content"></div>
        </div>
    </div>
</template>

<style scoped>
.news-detail {
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.news-title {
    font-size: 1.5rem;
    font-weight: bold;
}

.news-date {
    text-align: right;
    font-size: 0.8rem;
    color: #666;
}

.news-image {
    width: 40%;
    /* center */
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.news-content {
    margin-top: 20px;
}

.news-content img {
    width: 100%;
    margin-top: 20px;
}

.news-content p {
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 10px;
}

.news-content a {
    color: #007bff;
    text-decoration: none;
}

.news-content a:hover {
    text-decoration: underline;
}

.news-content h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 20px;
}

.news-content h2 {
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 20px;
}

.news-content h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 20px;
}

.news-content h4 {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 20px;
}

.news-content h5 {
    font-size: 0.9rem;
    font-weight: bold;
    margin-top: 20px;
}

.news-content h6 {
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: 20px;
}

.news-content ul {
    margin-top: 20px;
    padding-left: 20px;
}

.news-content ol {
    margin-top: 20px;
    padding-left: 20px;
}

.news-content li {
    font-size: 1rem;
    line-height: 1.5;
}

.news-content blockquote {
    margin-top: 20px;
    padding: 10px;
    background-color: #f8f9fa;
    border-left: 5px solid #007bff;
}
</style>