<script lang="ts">
import router from '@/router';
import { rls_banner, rls_info_s } from '../assets/resources';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Carousel",
  data() {
    return {
      currentIndex: 0,
      interval: null as any,
      sliding: '',
      progress: 0, // Progress for the progress bar
      progressInterval: null as any, // Interval for updating progress
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
      // Clear existing intervals if any
      if (this.interval) clearInterval(this.interval);
      if (this.progressInterval) clearInterval(this.progressInterval);

      // Start progress bar and slide timer
      this.progress = 0;
      this.progressInterval = setInterval(() => {
        this.progress += 1;
        if (this.progress >= 100) {
          this.progress = 0;
          this.slideToNext();
        }
      }, 100); // Updates progress every 100ms (10s for full bar)

      // Slideshow interval to change slide every 10s
      this.interval = setInterval(() => {
        this.slideToNext();
      }, 10000);
    },
    slideToNext() {
      this.sliding = 'left';
      setTimeout(() => {
        this.currentIndex = this.nextNum(this.currentIndex);
        this.sliding = '';
      }, 1000); // Slide transition time
    },
    goToSlide(index: number) {
      clearInterval(this.interval);
      clearInterval(this.progressInterval);
      this.currentIndex = index;
      this.progress = 0;
      this.startSlideshow(); // Restart slideshow after manual navigation
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

      <!-- Progress Bar -->
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>

      <!-- Indicators -->
      <div class="carousel-indicators">
        <span v-for="(img, idx) in currentImages" :key="idx" :class="{ active: idx === currentIndex }"
          @click="goToSlide(idx)"></span>
      </div>

    </div>
  </div>
</template>


<style scoped>
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

/* Carousel Indicators */
.carousel-indicators {
  justify-content: center;
  position: relative;
  margin-top: 12px;
}

.carousel-indicators span {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.carousel-indicators .active {
  background-color: #333;
}

/* Progress Bar */
.progress-bar-container {
  width: 75%;
  margin: 0 auto;
  background-color: #eee;
  margin-top: 2px;
}

.progress-bar {
  height: 3px;
  background-color: #333;
  transition: width 0.2s linear;
}
</style>