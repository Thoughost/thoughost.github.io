<script lang="ts">
import Carousel from '@/components/Carousel.vue';
import {banner, rls_info_s, rls_cover, masks, news_s} from '../assets/resources'
export default {
  data() {
    return {
      project_txt: '「KAKUSATSU SHOUJO 3」',
      release_banner: banner,
      releases: rls_info_s.slice(0, 12),
      release_cover: rls_cover,
      release_mask: masks,
      news: news_s.slice(0, 4),
    }
  },
  components: { Carousel }
}
</script>

<template>
  <Carousel></Carousel>
  <!-- news container -->
  <div class="container tg-pt-80 tg-pb-80">
    <div class="tg-pb-40">
      <h2 class="tg-font-20">NEWS</h2> 
    </div>
    <div class="tg-flex-lr tg-flex-wrap position-relative" style="margin-top: -26px;">
      <div v-for="n in news" :key="n.id" class="news-wrapper tg-font-12">
        <div class="d-inline-block">{{ n.date }}</div>
        <div class="d-inline-block">{{ n.title }}</div>
      </div>
      <div class="more">
        <span class="tg-font-9">MORE</span>
        <img src="@/assets/icons/more.svg">
      </div>
    </div>
  </div>
  
  <!-- releases -->
  <div style="background-color: #F2F2F2">
    <div class="container tg-pt-80 position-relative">
      <div class="tg-pb-40">
        <h2 class="tg-font-20">RELEASES</h2> 
      </div>
      <div class="tg-flex-lr tg-flex-wrap" style="margin-top: -12px;">
        <div v-for="release in releases" :key="release.id" class="release-cover" :style="`background-image:url(${release_cover(release.id)})`">
          <a target="_top" :href="release.homepage">
            <!-- <img :src="release_mask(release.type)"> -->
          </a>
        </div>
      </div>
      <div class="more">
        <span class="tg-font-9">MORE</span>
        <img src="@/assets/icons/more.svg">
      </div>
    </div>
  </div>

<!-- <main class="container">
  <div class="mt-4 d-block w-100">
    <div class="title-header">
      <div>
        <h2>PROJECT</h2>
      </div>
      <div class="title-sub text-black-50" style="display:default">
        <a target="_top" :href="project_txt ? '/project' : '/'" :style="{ cursor: (project_txt ? 'pointer' : 'default') }">
          <span>MORE INFORMATION</span>
          <span class="iconfont icon-right"></span>
        </a>
      </div>
    </div>
    <div>
      <div class="project-item">
        <a target="_top" :href="project_txt ? '/project' : '/'" :style="{ cursor: (project_txt ? 'pointer' : 'default') }">
          <span>{{project_txt ? project_txt : "Next project comming soon..."}}</span>
        </a>
      </div>
    </div>
  </div>
</main> -->
</template>

<style scoped>
.news-wrapper {
  padding: 26px 0;
  font-weight: 600;
  border-bottom: 1px solid #A7A7A7;
  width: 47%;
}

.news-wrapper div:nth-child(1){
  width: 110px;
  height: 22px;
  line-height: 22px;
  color: #fff;
  background-color: #101010;
  text-align: center;
  margin-right: 10px;
}

.more {
  position: absolute;
  right: 0;
  bottom: -44px;
  font-weight: 600;
}

.more div {
  display: inline-block;
  vertical-align: middle;
}

.more img{
  height: 12px;
  margin-left: 5px;
  display: inline-block;
  vertical-align: middle;
}

.release-cover {
  width: 278px;
  height: 278px;
  margin-top: 12px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.release-bar:hover img {
  display: block;
}

.release-bar img {
  width: 100%;
  position: absolute;
  top: 0;
  display: none;
}

.project-item {
  width: 100%;
  background-color: black;
  padding-top: 12.51%;
  position: relative;
  cursor: pointer;
}

.project-item img {
  width: 100%;
  position: absolute;
  top: 0;
  display: none;
}

.project-item span {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
  z-index: 2;
}

.project-item span:before {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
</style>
