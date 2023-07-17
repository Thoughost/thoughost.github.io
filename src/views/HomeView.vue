<script lang="ts">
import {banner, rls_info_s, rls_bar, masks} from '../assets/resources'
export default {
  data() {
    return {
      project_txt: '「FREEFORM HARDCORE COMPILATION」',
      release_banner: banner,
      releases: rls_info_s.slice(0, 4),
      release_bar: rls_bar,
      release_mask: masks,
    }
  },
}
</script>

<template>
<main class="container">
  <!-- carousel -->
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <!-- images -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <a target="_top" :href="releases[0].homepage">
          <img :src="release_banner" class="slideshow" :alt="releases[0].id">
        </a>
      </div>
    </div>
  </div>

  <!-- container -->
  <div class="px-0 main-container">
    <!-- albums -->
    <div class="d-block w-100">
      <div class="title-header">
        <div>
          <h2>NEW RELEASES</h2>
        </div>
        <div class="title-sub text-black-50">
          <a target="_top" href="/releases">
            <span>VIEW ALL</span>
            <span class="iconfont icon-right"></span>
          </a>
        </div>
      </div>
      <div>
        <div v-for="release in releases" :key="release.id" class="release-bar" :style="`background-image:url(${release_bar(release.id)})`">
          <a target="_top" :href="release.homepage">
            <img :src="release_mask(release.type)">
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- projects -->
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
</main>
</template>

<style scoped>
/* homepage */
.slideshow {
  display: block;
  width: 100%;
  background-size: cover;
  background-position: 50%;
  color: transparent;
}

.release-bar {
  margin-bottom: 1rem;
  padding-top: 6.26%;
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
