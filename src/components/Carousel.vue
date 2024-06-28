<script lang="ts">
import { rls_banner, rls_info_s } from '../assets/resources'
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Carousel",
  data() {
    return {
      currentIndex: 0,
      interval: null as any,
      sliding: '',
    };
  },
  computed: {
    currentImages(): any[] {
      const i: number = this.currentIndex;
      const arr = [this.prevNum(this.prevNum(i)), this.prevNum(i), i, 
                 this.nextNum(i), this.nextNum(this.nextNum(i))];
      return arr.map(item => this.images[item]);
    },
    images(): any[] {
      let arr: any[] = [];
      rls_info_s.forEach(element => {
        let banner = rls_banner(element.id);
        if (banner !== undefined) {
          arr.push(banner);
        }
      });
      return arr;
    }
  },
  methods: {
    startSlideshow() {
      this.interval = setInterval(() => {
        this.sliding = 'left';
        setTimeout(() => {
          this.currentIndex = this.nextNum(this.currentIndex);
          this.sliding = ''; 
        }, 1000);
      }, 10000); // 切换图片的时间间隔，这里设置为10秒
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
    }
  },
  mounted() {
    this.startSlideshow();
    this.updateHeight();
    window.addEventListener('resize', this.updateHeight);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
});
</script>

<template>
  <div class="slideshow">
    <div class="container tg-container">
      <div class="slideshow-container" :class="{'left-sliding': sliding == 'left', 'right-sliding': sliding == 'right'}">
        <div v-for="(img, idx) in currentImages" :key="img.id" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
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
    /* margin: 0 6px; */
    height: 100%;
    display: inline-block;
    background-size: cover;
    background-position: center;
  }

  .slideshow-container div:nth-child(1), .slideshow-container div:nth-child(2) {
    margin-right: 12px;
    filter: brightness(20%);
  }

  .slideshow-container div:nth-child(4), .slideshow-container div:nth-child(5) {
    margin-left: 12px;
    filter: brightness(20%);
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