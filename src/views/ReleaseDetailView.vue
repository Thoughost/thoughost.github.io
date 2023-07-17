<script lang="ts">
import {rls_info_l, shop_icon, rls_cover, rls_banner} from '../assets/resources'
export default {
  computed: {
    info: (vm: any) => (rls_info_l as Record<string, any>)[(vm.$route.params.id as string)],
    get_cover: (vm: any) => rls_cover((vm.$route.params.id as string)),
    get_banner: (vm: any) => rls_banner((vm.$route.params.id as string)),
  },
  methods: {
    get_icon: shop_icon,
    get_number: (num: number) => num < 10 ? '0' + num : num
  }
}
</script>

<template>
<div v-if="info != undefined" class="album-info">
  <div class="banner" :style="{'background-image': 'url('+get_banner+')'}">
    <div class="head container">
      <h2>{{info.subtitle}}</h2>
      <div class="head-bottom">
        <h1>{{info.title}}</h1>
        <div class="row">
          <div class="intro col-lg-7">
            <span>{{info.intro}}</span>
          </div>
          <div class="access col-lg-5">
            <div v-for="s in info.sources" :key="s.id">
              <a target="_top" :href="s.url" :class="s.name">
                <!-- <img :src="get_icon(s.name)"> -->
                <span>{{s.name}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="detail container">
    <div class="row">
      <div class="col-lg">
        <img class="cover" :src="get_cover">
        <a class="tradition-a mt-4 download-link-lg">ARTWORK DOWNLOAD</a>
      </div>
      <div class="col-lg">
        <div class="tracks">
          <div class="sub-title">DISC 1</div>
          <div class="tracks-item"></div>
          <div v-for="i in [...new Array(info.tracks.length).keys()]" :key="i" class="tracks-item">
            <span class="number">{{get_number(i+1)}}</span>
            <div class="title">{{info.tracks[i].name}}</div>
            <div class="author">{{info.tracks[i].author}}</div>
          </div>
        </div>
        <a class="tradition-a mt-4 download-link-sm">ARTWORK DOWNLOAD</a>
      </div>
    </div>
    <hr class="my-5">
    <div class="infos">
      <div class="sub-info">
        <div class="subsub-title">INFO</div>
        <div class="mt-2">
          <div class="info-item"></div>
          <div v-for="i in info.infos" :key="i.id" class="info-item">
            <div class="title">{{i.name}}</div>
            <div>{{i.value}}</div>
          </div>
        </div>
      </div>
      <div class="sub-info">
        <div class="subsub-title">CREDIT</div>
        <div class="mt-2">
          <div class="info-item"></div>
          <div v-for="i in info.credit" :key="i.id" class="info-item">
            <div class="title">{{i.name}}</div>
            <div>{{i.value}}</div>
          </div>
        </div>
      </div>
      <div class="sub-info">
        <div class="subsub-title">RELATED LINKS</div>
        <div class="mt-2">
          <div class="info-item"></div>
          <div v-for="i in info.links" :key="i.id" class="info-item">
            <div class="title">
              <a :href="i.value" class="tradition-a">{{i.name}}</a>
            </div>
          </div>
        </div>
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
.album-info .banner{
  height: 560px;
  background-size: cover;
  background-position: center;
  padding: 50px 0;
}

.album-info .head {
  text-align: center;
  color: azure;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.album-info .head h1 {
  font-size: 5rem;
  line-height: 6rem;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: inherit;
}

.album-info .head h2 {
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
  margin: 0 0 20px;
  text-align: inherit;
}

.album-info .head .intro span{
  font-size: 1rem;
  font-weight: 400;
  padding-left: 10px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.album-info .access{
  text-align: right;
}

.album-info .access div {
  display: inline-block;
  margin-left: 25px;
}

.album-info .access a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 180px;
  font-size: 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.album-info .access .bandcamp {
  color: #1da0c3;
  border: #1da0c3 2px solid;
}

.album-info .access .bandcamp:hover {
  background-color: #1da0c3;
  color: azure;
}

.album-info .access .dizzylab{
  color: #f96027;
  border: #f96027 2px solid;
}

.album-info .access .dizzylab:hover {
  background-color: #f96027;
  color: azure;
}

@media (max-width: 1200px) {
  .album-info .access a {
    width: 160px;
  }
}
@media (max-width: 992px) {
  .album-info .banner{
    height: 350px;
    padding: 25px 0;
  }
  .album-info .head h1 {
    font-size: 3rem;
    line-height: 4rem;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: inherit;
  }
  .album-info .head .intro span{
    min-height: unset;
  }
  .album-info .access {
    margin-top: 30px;
  }
}

/* 

.album-info .head .cover {
  width: 45%;
  margin: 40px 0;
} 

.album-info hr {
  border-top-color: black;
  border-top-width: 2px;
  margin: 30px 0;
}
*/

.album-info .detail{
  margin-top: 50px;
}

.album-info .detail .cover {
  width: 100%;
  padding: 0 2rem 0 0;
} 

.album-info .detail .tradition-a{
  display: block;
  font-size: 0.8rem;
}
/* 
.album-info .detail .info,
.album-info .detail .tracks {
  display: inline-block;
  vertical-align: top;
} */

.album-info .detail .tracks {
  padding-left: 2rem;
}

.album-info .detail .sub-title {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2rem;
}

.album-info .detail .tracks-item {
  position: relative;
  padding: 0.8rem 0 0.8rem 50px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 0.8rem;
}

.album-info .detail .tracks-item .number {
  position: absolute;
  width: 50px;
  left: 0;
  top: 0;
  padding: 0.8rem 0;
}

.album-info .detail .download-link-sm {
  display: none;
}

@media (max-width: 992px) {
  .album-info .detail .download-link-lg {
    display: none;
  }
  .album-info .detail .download-link-sm {
    display: block;
  }
  .album-info .detail .cover {
    padding: 0;
  } 
  .album-info .detail .tracks {
    padding-left: 0;
  }
  .album-info .detail .sub-title {
    margin-top: 50px;
  }
}

.album-info .detail .subsub-title {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2rem;
}

.album-info .detail .infos {
  display: flex;
  justify-content: space-between;
}

.album-info .detail .infos .sub-info {
  width: 30%;
}

.album-info .detail .info-item {
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  padding: 0.6rem 0;
    display: flex;
    justify-content: space-between;
}

@media (max-width: 1200px) {
  .album-info .detail .info-item{
    display: block;
  }
  .album-info .detail .info-item .title {
    font-weight: 600;
    color: gray;
  }
}

@media (max-width: 992px){
  .album-info .detail .infos {
    display: block;
  }
  .album-info .detail .infos .sub-info {
    width: 100%;
  }
  .album-info .detail .info-item{
    display: flex;
  }
  .album-info .detail .info-item .title {
    font-weight: 400;
    color: inherit;
  }
  .album-info .detail .subsub-title {
    margin-top: 40px;
  }
}

.album-info .detail .info-item div {
  font-size: 0.8rem;
  font-weight: 400;
}
</style>
