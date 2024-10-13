<script lang="ts">
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
  <div class="container">
    <div class="page-title">
      <h2>BLACKHOLE</h2>
    </div>
    <br>
    <div style="align-items: center; display: flex; justify-content: center;">
      <pre>

 ________________________________
/ webpage under construction !!! \
 --------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
    </pre>
    </div>
    <br>
    <div style="align-items: center; display: flex; justify-content: center;">
      <img src="https://www.nasa.gov/wp-content/uploads/2019/09/bh_labeled.jpg" alt="blackhole"
        style="width: 100%;">
    </div>
  </div>
</template>

<style scoped>
</style>
