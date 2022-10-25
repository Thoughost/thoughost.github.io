<script lang="ts">
import releases from '../assets/all_releases.json'
const shops = import.meta.glob('@/assets/shops/*.png', {eager: true, import: "default"})
const shop_dirname = Object.keys(shops)[0].substring(0, Object.keys(shops)[0].lastIndexOf('/')+1)
export default {
  data() {
    return {
    }
  },
  computed: {
    releaseData() {
      let data: any = releases.data
      while(data.length % 4 != 0)
        data.push({})
      return data
    }
  },
  methods: {
    get_url: (id: string, url: string) => url ? url : "/releases/" + id,
    get_cover: (id: string) => "/src/assets/releases/" + id + "/cover-s.png",
    get_icon: (name: string) => shops[`${shop_dirname}${name}.png`],
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
          <a :href="get_url(item.id, item.url)" target="_blank">
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
        <a v-if="item.source1 != null" :href="item.source1.url">
          <img :src="get_icon(item.source1.name)" />{{item.source1.name}}
        </a>
      </div>
      <div class="bar">
        <a v-if="item.source2 != null" :href="item.source2.url">
          <img :src="get_icon(item.source2.name)" />{{item.source2.name}}
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
