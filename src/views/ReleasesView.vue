<script lang="ts">
import {shop_icon, rls_cover, rls_info_s} from '../assets/resources'
export default {
  data() {
    return {
    }
  },
  computed: {
    releaseData() {
      let data: any = rls_info_s
      while(data.length % 4 != 0)
        data.push({})
      return data
    }
  },
  methods: {
    get_cover: rls_cover,
    get_icon: shop_icon,
  }
}
</script>

<template>
<div class="release-page">
  <div class="page-title">
    <h2>ALL RELEASES</h2>
  </div>
  <div class="release-row">
    <div v-for="item in releaseData" :key="item.id" class="item">
      <div class="cover-wrapper">
        <div class="not-release cover"></div>
        <div v-if="item.id" class="cover">
          <a :href="item.homepage" target="_blank">
            <img :src="get_cover(item.id)" />
          </a>
        </div>
        <div v-if="item.id" class="shade-wrapper cover">
          <div class="release-title">{{item.title}}</div>
          <div class="release-info">
            <div>{{item.code}}</div>
            <div>{{item.date}}</div>
          </div>
        </div>
      </div>
      <div class="bar">
        <a v-if="item.sources != undefined && item.sources.length > 0" :href="item.sources[0].url">
          <img :src="get_icon(item.sources[0].name)" />{{item.sources[0].name}}
        </a>
      </div>
      <div class="bar">
        <a v-if="item.sources != undefined && item.sources.length > 1" :href="item.sources[1].url">
          <img :src="get_icon(item.sources[1].name)" />{{item.sources[1].name}}
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
/* release page */
.release-page .item {
  width: 21%;
  margin: 2.5rem 2% 0;
  float: left;
}

.release-page .cover-wrapper {
  width: 100%;
  padding-top: 100%;
  position: relative;
}

.release-page .cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.release-page .cover img {
  width: 100%;
}

.release-page .not-release {
  border: 5px solid black;
  display: flex;
  align-items: center;
}

.release-page .not-release::before {
  font-size: 1.4rem;
  font-weight: bold;
  content: "NOT RELEASES";
  width: 100%;
  text-align: center;
}

.release-page .shade-wrapper {
  filter: opacity(0);
  transition: all 0.3s ease;
  background-image: url(/src/assets/shade.png);
  background-size: cover;
  color: #eee;
  pointer-events: none;
}

.release-page .release-title {
  font-size: 0.75rem;
  text-align: center;
  display: inline-block;
  position: absolute;
  top: 0.3rem;
  width: 100%;
}

.release-page .release-info {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.2rem;
}

.release-page .release-info div {
  transform: scale(0.7);
  -webkit-transform: scale(0.7);
}

.release-page .cover-wrapper:hover .shade-wrapper {
  filter: opacity(1);
}

.release-page .release-row {
  position: relative;
  margin: 0 -2%;
  width: 104%;
  overflow: auto;
}

.release-page .bar {
  margin: 1rem 0;
  background-color: #333;
  height: 1.8rem;
  transition: all 0.3s ease;
}

.release-page .bar:hover {
  background-color: #555;
}

.release-page .bar img,
.release-page .bar span {
  height: 100%;
  margin-right: 6px;
}

.release-page .bar a {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  height: 100%;
  display: block;
  display: flex;
  align-items: center;
  padding: 6px;
}

.release-page .bar a:hover {
  text-decoration: none;
}
</style>
