<script lang="ts">
import all_release_detail from "@/assets/all_release_detail.json"
const shops = import.meta.glob('@/assets/shops/*.png', {eager: true, import: "default"})
const shop_dirname = Object.keys(shops)[0].substring(0, Object.keys(shops)[0].lastIndexOf('/')+1)
export default {
  computed: {
    info(vm: any) {
      return (all_release_detail as Record<string, any>)[(vm.$route.params.id as string)]
    },
    get_cover: (vm: any) => "/src/assets/releases/" + vm.info.id + "/cover.png",
  },
  methods: {
    get_icon: (name: string) => shops[`${shop_dirname}${name}.png`],
    get_number: (num: number) => num < 10 ? '0' + num : num
  }
}
</script>

<template>
<div v-if="info != undefined" class="album-info">
  <div class="head">
    <h4>"{{info.intro}}"</h4>
    <img class="cover" :src="get_cover">
    <h1>{{info.title}}</h1>
    <h2>{{info.subtitle}}</h2>
    <div class="access">
      <div v-for="s in info.sources" :key="s.id">
        <a :href="s.url">
          <img :src="get_icon(s.name)">
          <span>{{s.name}}</span>
        </a>
      </div>
    </div>
  </div>
  <hr>
  <div class="detail">
    <div class="info">
      <div v-for="i in info.infos" :key="i.id" class="info-item">
        <h5>{{i.name}}</h5>
        <div>{{i.value}}</div>
      </div>
    </div>
    <div class="tracks">
      <div v-for="i in [...new Array(info.tracks.length).keys()]" :key="i" class="tracks-item">
        <span class="number">{{get_number(i+1)}}</span>
        <div class="title">{{info.tracks[i].name}}</div>
        <div class="author">{{info.tracks[i].author}}</div>
      </div>
    </div>
  </div>
</div>
<div v-else class="album-info">
  <div class="head">
    <h1 style="margin: 100px 0 200px">Page not found.</h1>
  </div>
</div>
</template>

<style scoped>
.album-info .head {
  text-align: center;
}

.album-info .head .cover {
  width: 45%;
  margin: 40px 0;
}

.album-info .head h1 {
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
}

.album-info .head h2 {
  color: gray;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  margin: 0 0 20px;
}

.album-info .head h4 {
  font-style: italic;
  font-size: 12px;
  font-weight: 600;
  margin: 0;
}

.album-info .access div {
  display: inline-block;
  margin: 0 10px;
}

.album-info .access a {
  display: flex;
  background-color: black;
  color: white;
  height: 50px;
  width: 160px;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  transition: background-color 0.3s ease;
}

.album-info .access a:hover {
  background-color: #333;
  text-decoration: none;
}

.album-info .access a img {
  width: 24px;
  margin-right: 10px;
}

.album-info hr {
  border-top-color: black;
  border-top-width: 2px;
  margin: 30px 0;
}

.album-info .detail .info,
.album-info .detail .tracks {
  display: inline-block;
  vertical-align: top;
  width: 49%;
}

.album-info .detail .info .info-item {
  margin-bottom: 25px;
}

.album-info .detail .info-item h5 {
  font-size: 15px;
  font-weight: 600;
  color: gray;
}

.album-info .detail .info-item div {
  font-size: 13px;
  font-weight: 600;
}

.album-info .detail .tracks-item {
  position: relative;
  padding-left: 50px;
}

.album-info .detail .tracks-item .number {
  position: absolute;
  width: 50px;
  left: 0;
  top: 0;
  text-align: center;
  color: gray;
  font-weight: 600;
}

.album-info .detail .tracks-item .title {
  font-weight: 600;
  font-size: 16px;
}

.album-info .detail .tracks-item .author {
  font-size: 14px;
  color: gray;
  margin: 5px 0;
}
</style>
