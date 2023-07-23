<script lang="ts">
import {rls_info_l, shop_icon, rls_cover, rls_banner} from '../assets/resources'
import AudioPlayer from '@/components/AudioPlayer.vue';
import PageBanner from '@/components/PageBanner.vue';
export default {
  computed: {
    info: (vm: any) => (rls_info_l as Record<string, any>)[(vm.$route.params.id as string)],
    get_cover: (vm: any) => rls_cover((vm.$route.params.id as string)),
    get_banner: (vm: any) => rls_banner((vm.$route.params.id as string)),
  },
  methods: {
    get_icon: shop_icon,
    get_number: (num: number) => num < 10 ? "0" + num : num
  },
  components: { AudioPlayer, PageBanner }
}
</script>

<template>
<div v-if="info != undefined" class="album-info">
  <PageBanner :subtitle="info.subtitle" :style="{'background-image': 'url('+get_banner+')'}">
    <div style="position: relative;">
      <h1>{{info.title}}</h1>
      <div class="intro">
        <span>{{info.intro}}</span>
      </div>
      <div class="access">
        <div v-for="s in info.sources" :key="s.id">
          <a target="_top" :href="s.url" :class="s.name">
            <!-- <img :src="get_icon(s.name)"> -->
            <span>{{s.name}}</span>
          </a>
        </div>
      </div>
    </div>
  </PageBanner>
  <div class="detail container">
    <div class="row">
      <div class="col-lg">
        <div>
          <img class="cover" :src="get_cover">
        </div>
        <a class="tradition-a download-link-lg" style="margin-top: 35px;">ARTWORK DOWNLOAD</a>
        <hr>
        <!-- CROSSFADE AUDIO PLAYER -->
        <AudioPlayer/>
      </div>
      <div class="col-lg">
        <div class="tracks">
          <div class="sub-title">DISC 1</div>
          <div class="tracks-item" style="padding: 0;"></div>
          <div v-for="i in [...new Array(info.tracks.length).keys()]" :key="i" class="tracks-item">
            <span class="number">{{get_number(i+1)}}</span>
            <div class="title">{{info.tracks[i].name}}</div>
            <div class="author">{{info.tracks[i].author}}</div>
          </div>
        </div>
        <a class="tradition-a mt-4 download-link-sm">ARTWORK DOWNLOAD</a>
      </div>
    </div>
    <hr style="margin: 60px 0;">
    <div class="infos">
      <div class="sub-info">
        <div class="subsub-title">INFO</div>
        <div>
          <div class="info-item" style="padding: 0;"></div>
          <div v-for="i in info.infos" :key="i.id" class="info-item">
            <div class="title">{{i.name}}</div>
            <div>{{i.value}}</div>
          </div>
        </div>
      </div>
      <div class="sub-info">
        <div class="subsub-title">CREDIT</div>
        <div>
          <div class="info-item" style="padding: 0;"></div>
          <div v-for="i in info.credit" :key="i.id" class="info-item">
            <div class="title">{{i.name}}</div>
            <div>{{i.value}}</div>
          </div>
        </div>
      </div>
      <div class="sub-info">
        <div class="subsub-title">RELATED LINKS</div>
        <div>
          <div class="info-item" style="padding: 0;"></div>
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
.page-banner::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7); 
}

.album-info .access{
  text-align: right;
  margin-top: 20px;
  position: relative;
}

.album-info .access div {
  display: inline-block;
  margin-left: 29px;
  margin-top: 10px;
}

.album-info .access a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  width: 148px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 20px;
  transition: color 0.3s ease, background-color 0.3s ease;
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

@media (min-width: 992px) {
  .album-info .head h1 {
    font-size: 3.6rem;
    line-height: 3.6rem;
  }
  .album-info .head .intro {
    width: 53.5%;
  }
  .album-info .access {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top: 0;
  }
  .album-info .access div {
    margin-top: 0;
  }
}

.album-info .detail{
  margin-top: 60px;
}

.album-info .detail .cover {
  width: 100%;
  padding: 0 21px 0 0;
} 

.album-info .detail .tradition-a{
  display: block;
  font-size: 0.9rem;
  text-decoration: underline;
}
/* 
.album-info .detail .info,
.album-info .detail .tracks {
  display: inline-block;
  vertical-align: top;
} */

.album-info .detail .tracks {
  padding-left: 21px;
}

.album-info .detail .sub-title {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2rem;
}

.album-info .detail .tracks-item {
  position: relative;
  padding: 0.9rem 0 0.9rem 50px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 0.9rem;
}

.album-info .detail .tracks-item .number {
  position: absolute;
  width: 50px;
  left: 0;
  top: 0;
  padding: 0.9rem 0;
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

.album-info .detail .infos {
  display: flex;
  justify-content: space-between;
}

.album-info .detail .infos .sub-info {
  width: 30%;
}

.album-info .detail .info-item {
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  padding: 0.4rem 0;
    display: flex;
    justify-content: space-between;
}
.album-info .detail .tracks-item div:nth-child(3),
.album-info .detail .info-item div:nth-child(2) {
  padding-left: 40px;
  text-align: right;
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
  font-size: 0.9rem;
  font-weight: 400;
}
</style>
