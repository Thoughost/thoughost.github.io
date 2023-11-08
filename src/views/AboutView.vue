<script lang="ts">
import {profile_photos} from '../assets/resources'
import members from '../assets/json/members.json'
import staff from '../assets/json/staff.json'
import PageBanner from '@/components/PageBanner.vue'

export default {
  data() {
    return {
      members,
      staff,
      photos: profile_photos,
      display_info: undefined,
      cross: 0
    }
  },
  computed: {
    rows(vm: any) {
      return [...new Array(Math.ceil(vm.members.length / 3)).keys()]
    }
  },
  methods: {
    one_row(i: number): Array<Record<string, any> >  {
      let idx = (this as any).members.length < (i + 1) * 3 ? (this as any).members.length : (i + 1) * 3
      return (this as any).members.slice(i * 3, idx)
    },
    click_info(info: Record<string, any>) {
      (this as any).display_info = info
    }
  },
  components: { PageBanner }
}
</script>

<template>
<div class="about-page">
  <!-- banner -->
  <PageBanner style="background-color: gray;">
    <div>
      <h1> ABOUT </h1>
      <div class="intro">
        <span> 
          Thoughost is a doujin circle from China. We want to find creative sounds in the whole world.
        </span>
      </div>
    </div>
  </PageBanner>
  <!-- PART of MEMBERS -->
  <div class="container self-c">
    <div class="sub-title">MEMBERS</div>
    <div class="row">
      <div v-for="item in members" :key="item.name" class="col-12 col-sm-6 col-md-4 col-xl-3 item" @click="click_info(item)">
        <img v-if="item.image" class="avatar" :src="photos(item.image)" />
        <div class="mask">
          <div class="prefix">{{item.prefix}}</div>
          <div class="name">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- PART of STAFF -->
  <div class="container self-c">
    <div class="sub-title">STAFF</div>
    <div class="row">
      <div v-for="item in staff" :key="item.name" class="col-12 col-sm-6 col-md-4 col-xl-3 item" @click="click_info(item)">
        <img v-if="item.image" class="avatar" :src="photos(item.image)" />
        <div class="mask">
          <div class="prefix">{{item.prefix}}</div>
          <div class="name">{{item.name}}</div>
        </div>  
      </div>
    </div>
  </div>
  <!-- PART of DETAIL -->
  <transition name="opacity">
    <div class="detail" v-if="display_info!==undefined" @click="display_info=undefined">
      <div class="container">
        <div class="dialog" @click.stop="">
          <img :src="photos(display_info.image)" class="profile" :style="{'object-position': display_info.position===undefined?'center':display_info.position}"/>
          <div class="info-bar">
            <div class="cross-icon" :class="{ 'invert-elem': display_info.crossinvert }" @mouseenter="cross=1" @mouseleave="cross=0" @click="display_info=undefined;cross=0">
              <transition name="opacity">
                <img v-if="cross==0" src="@/assets/svgs/cross_normal.svg" class="normal" />
              </transition>
              <transition name="opacity">
                <img v-if="cross==1" src="@/assets/svgs/cross_hover.svg" class="hover" />
              </transition>
            </div>
            <div>
              <div class="sub-title"> 
                {{display_info.name}}
              </div>
              <div v-html="display_info.intro" class="intro"></div>
            </div>
            <div class="contact">
              <div v-for="(link, item) in display_info.contact" :key="item">
                <a :href="link" class="tradition-a"> {{item}} </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<style scoped>
.about-page .self-c {
  margin-top: 60px;
}

.about-page .row {
  margin: 0;
}

.about-page .item {
  padding: 0;
  position: relative;
  cursor: pointer;
}

.about-page .item .avatar {
  width: 100%;
  object-fit: cover;
}

.about-page .item .mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s linear;
  display: flex;
}

.about-page .item:hover .mask {
  opacity: 100;
}

.about-page .item .mask .prefix {
  font-size: 1rem;
  font-weight: 400;
}

.about-page .item .mask .name {
  font-size: 1.5rem;
  line-height: 1.3rem;
  margin-top: 5px;
  font-weight: 700;
}

@media (min-width: 576px) {
  .about-page .item .avatar {
    height: 143.6px;
  }
}

@media (min-width: 768px) {
  .about-page .item .avatar {
    height: 129.5px;
  }
}

@media (min-width: 992px) {
  .about-page .item .avatar {
    height: 174px;
  }
}

@media (min-width: 1200px) {
  .about-page .item .avatar {
    height: 156px;
  }
  .about-page .item .mask .name {
    font-size: 2.4rem;
    line-height: 2.2rem;
  }
}

@media (min-width: 1600px) {
  .about-page .item .avatar {
    height: 184px;
  }
}

/* dialog */
.about-page .detail {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.about-page .detail .dialog {
  width: 80.5%;
  background-color: black;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
}

.about-page .detail .dialog .profile {
  object-fit: cover;
  display: none;
}

.about-page .detail .dialog .sub-title {
  margin-right: 45px;
}

.about-page .detail .dialog .info-bar {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 35px 20px;
  font-size: 1rem;
}

.about-page .detail .dialog .cross-icon {
  position: absolute;
  right: 20px;
  top: 35px;
  height: 35px;
  width: 35px;
  cursor: pointer;
}

.about-page .detail .dialog .cross-icon img {
  width: 100%;
  height: 100%;
  position: absolute;
}

@media (max-width: 1200px) {
  .about-page .detail .dialog .cross-icon {
    filter: invert(.0);
  }
}

@media (max-width: 992px) {
  .about-page .detail .dialog .intro {
    margin-bottom: 34px;
  }
}

@media (min-width: 992px) {
  .about-page .detail .dialog {
    height: 464.3px;
  }
}

@media (min-width: 1200px) {
  .about-page .detail .dialog {
    height: 554px;
  }
  .about-page .detail .dialog .profile {
    width: 554px;
    height: 554px;
  }
  .about-page .detail .dialog .profile {
    display: block;
  }
  .about-page .detail .dialog .sub-title {
    margin-right: 0;
  }
}

@media (min-width: 1600px) {
  .about-page .detail .dialog {
    height: 653px;
  }
  .about-page .detail .dialog .profile {
    width: 653px;
    height: 653px;
  }
  .about-page .detail .dialog .profile {
    display: block;
  }
}
</style>
