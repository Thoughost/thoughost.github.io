<script lang="ts">
import { news_s } from '../assets/resources'
import { defineComponent } from 'vue'

export default defineComponent({
  created() {
    window.addEventListener("resize", this.resize_handle);
    // check if mobile first
    if (window.innerWidth < 768) {
      this.ifViewOnMobile = true
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.resize_handle);
  },
  computed: {
    newsData() {
      let data = news_s
      console.log(data)
      return data
    }
  },
  methods: {
    resize_handle(e: any) {
      let width = e.target.innerWidth
      if (width < 768) {
        this.ifViewOnMobile = true
      } else {
        this.ifViewOnMobile = false
      }
    }
  },
  data() {
    return {
      ifViewOnMobile: false
    }
  }
})
</script>

<template>
  <div class="news-page container">
    <div class="page-title">
      <h2>ALL NEWS</h2>
    </div>
    <div class="news-row">
      <div v-for="item in newsData" :key="item.id" class="item" :style="ifViewOnMobile ? 'width: 98%' : 'width: 95%'">
        <div class="news-wrapper">
          <div v-if="item.id">
            <div class="news-title">{{ item.title }}</div>
            <div class="news-date">{{ item.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.news-row {
  /* one news one row , left is title, right is date */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.news-page {
  margin-top: 20px;
}

.page-title {
  margin-bottom: 20px;
}

.news-wrapper {
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}

.news-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.news-date {
  text-align: right;
  font-size: 0.8rem;
}

.item {
  margin: 2.5rem 2% 0;
  float: left;
}

</style>
