<script lang="ts">
import router from '@/router';
import { rls_banner, rls_info_s } from '../assets/resources';
import { defineComponent } from 'vue';

const TIME_INTERVAL = 5000; // 5s
const TRANSITION_TIME = 1000; // 1s
const PROGRESS_INTERVAL = 100; // 0.1s

export default defineComponent({
  name: "Carousel",
  data() {
    return {
      currentIndex: 0,
      interval: null as any,
      sliding: '',
      progress: 0, //
      progress_seen: true,
      progress_percentage: 0,
      progressInterval: null as any,
    };
  },
  computed: {
    currentImages(): any[] {
      const i: number = this.currentIndex;
      const arr = [this.prevNum(this.prevNum(i)), this.prevNum(i), i,
      this.nextNum(i), this.nextNum(this.nextNum(i))];
      let ret = arr.map(item => this.images[item]);
      console.log("currentImages:", ret);
      return ret;
    },
    images(): any[] {
      let arr: any[] = [];
      rls_info_s.forEach(element => {
        let banner = rls_banner(element.id);
        let url = element.homepage;
        if (banner !== undefined) {
          arr.push({ id: element.id, url: url, banner: banner });
        }
      });
      return arr;
    },
  },
  methods: {
    startSlideshow() {
      if (this.interval) clearInterval(this.interval);
      if (this.progressInterval) clearInterval(this.progressInterval);

      this.progress = 0;
      let count = TIME_INTERVAL / PROGRESS_INTERVAL;
      this.progressInterval = setInterval(() => {
        this.progress += 1;
        this.progress_percentage = this.progress / count;
        // console.log("progress:", this.progress, "percentage:", this.progress_percentage);
        if (this.progress >= count) {
          this.progress = 0;
          this.progress_seen = false;
          this.slideToNext();
        }
      }, PROGRESS_INTERVAL);
    },
    slideToNext() {
      this.sliding = 'left';
      this.resetProgress();
      setTimeout(() => {
        this.currentIndex = this.nextNum(this.currentIndex);
        this.sliding = '';
        this.resetProgress();
        this.progress_seen = true;
      }, TRANSITION_TIME);
    },
    goToSlide(index: number) {
      clearInterval(this.interval);
      clearInterval(this.progressInterval);
      this.currentIndex = index;
      this.resetProgress();
      this.startSlideshow(); // Restart slideshow after manual navigation
    },
    resetProgress() {
      this.progress = 0;
      this.progress_percentage = 0;
    },
    prevNum(i: number): number {
      return i - 1 < 0 ? this.images.length - 1 : i - 1;
    },
    nextNum(i: number): number {
      return i + 1 >= this.images.length ? 0 : i + 1;
    },
    updateHeight() {
      const element: any = document.getElementsByClassName("slideshow-container")[0];
      element.style.height = Math.floor(648 * element.offsetWidth / 1400) + 'px';
      console.log("carousel height -> ", element.style.height);
    },
    getCurrentHeight() {
      return Math.floor(648 * this.$el.offsetWidth / 1400) + 'px';
    },
    itemClickHandler(idx: number) {
      console.log('click', idx, "url:", this.currentImages[idx].url);
      router.push({ path: this.currentImages[idx].url });
    }
  },
  mounted() {
    this.startSlideshow();
    this.updateHeight();
    window.addEventListener('resize', this.updateHeight);
  },
  beforeDestroy() {
    clearInterval(this.interval);
    clearInterval(this.progressInterval);
  },
});
</script>

<template>
  <div class="slideshow">
    <div class="container tg-container">
      <div class="slideshow-container" :class="{
        'left-sliding': sliding == 'left',
        'right-sliding': sliding == 'right'
      }">
        <div v-for="(img, idx) in currentImages" :key="img.id" :style="{ backgroundImage: 'url(' + img.banner + ')' }"
          class="slideshow-item" @click="itemClickHandler(idx)"></div>
      </div>
    </div>
  </div>
  <div class="carousel-flat-indicators-container">
    <div class="carousel-indicators">
      <span v-for="(img, idx) in currentImages" :key="idx" class="carousel-indicators" @click="goToSlide(idx)">
        <span v-if="idx === currentIndex" class="active" :style="{ width: 31 * progress_percentage + 'px' }" v-show="progress_seen"></span>
        <!-- <span v-if="idx === currentIndex" class="active" :style="{ width: '15px' }"></span> -->
      </span>
    </div>
  </div>
</template>


<style scoped>
.carousel-flat-indicators-container {
  margin-top: -40px;
  margin-left: calc(36% - 30px);
}

/* Carousel Indicators */
.carousel-indicators {
  position: relative;
  margin-top: 12px;
  justify-content: initial !important;
}

.carousel-indicators span {
  width: 31px;
  height: 6px;
  background-color: #dddddda4;
  border-radius: 6px;
  margin: 0 5px;
  cursor: pointer;
}

.carousel-indicators .active {
  background-color: #ffffff;
  margin: 0 0;
  border-radius: 4px;
  opacity: 1;
}

.slideshow {
  overflow-x: clip;
}

.slideshow-container {
  overflow-x: visible;
  white-space: nowrap;
  transform: translateX(-200%);
  margin-left: -24px;
  width: 100%;
}

.slideshow-container div {
  width: 100%;
  height: 100%;
  display: inline-block;
  background-size: cover;
  background-position: center;
}

.slideshow-container div:nth-child(1),
.slideshow-container div:nth-child(2) {
  margin-right: 12px;
  filter: brightness(20%);
}

.slideshow-container div:nth-child(4),
.slideshow-container div:nth-child(5) {
  margin-left: 12px;
  filter: brightness(20%);
}

.slideshow-item {
  cursor: pointer;
}

.left-sliding div:nth-child(4) {
  margin-left: 0;
  filter: brightness(100%);
  transition: all 1s ease;
}

.left-sliding div:nth-child(3) {
  margin-right: 12px;
  filter: brightness(20%);
  transition: all 1s ease;
}

.left-sliding {
  transform: translateX(-300%);
  transition: transform 1s ease;
  margin-left: -36px;
}
</style>