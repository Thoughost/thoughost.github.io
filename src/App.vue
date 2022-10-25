<script lang="ts">
import {
  RouterLink,
  RouterView
} from "vue-router";
export default {
  data() {
    return {}
  }
}
</script>

<template>
<header>
  <nav class="navbar navbar-expand-sm px-0 navbar-light">
    <!-- logo -->
    <a class="navbar-brand" href="/">
      <img src="@/assets/Logo-s.png" />
    </a>
    <!-- collapse -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <!-- navbar item (text) -->
        <li class="nav-item nav-text">
          <a class="nav-link" style="color: black" href="/about">ABOUT</a>
        </li>
        <li class="nav-item nav-text">
          <a class="nav-link" style="color: black" href="/releases">RELEASES</a>
        </li>
        <li class="nav-item nav-text">
          <a class="nav-link" style="color: black" href="https://forms.gle/oG1YHhTrJACY3RVi9">CONTACT</a>
        </li>
        <!-- navbar item (icon) -->
        <li class="nav-item d-flex nav-icon-wrapper" style="margin-right: 0">
          <div class="
                nav-icon
                d-flex
                flex-column
                justify-content-center
                align-items-start
              ">
            <a href="https://twitter.com/thoughost">
              <span class="icon icon-twitter"></span>
            </a>
          </div>
          <div class="
                nav-icon
                d-flex
                flex-column
                justify-content-center
                align-items-start
              ">
            <a href="https://soundcloud.com/thoughost">
              <span class="icon icon-sc"></span>
            </a>
          </div>
          <div class="
                nav-icon
                d-flex
                flex-column
                justify-content-center
                align-items-start
              ">
            <a href="https://thoughost.bandcamp.com/">
              <span class="icon icon-bc"></span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</header>

<RouterView />

<!-- footer -->
<div class="footer">
  <div class="motto">
    <span>"Finding creative sounds is our purpose."</span>
  </div>
  <div class="footer-logo">
    <span>©2020 Thoughost. All right reserved.</span>
  </div>
</div>
</template>

<style scoped>

/* projects page */
.project-page .panel {
  display: none;
  visibility: hidden;
}

.project-page .panel-activate {
  display: block;
  visibility: visible;
}

.project-page .panel h3 {
  font-size: 1.4rem;
  text-align: center;
  font-weight: bold;
  margin: 40px 0;
  position: relative;
}

.project-page .panel h3 a {
  transition: color 0.3s ease;
}

.project-page .panel h3 a:hover {
  color: #555;
  text-decoration: none;
}

.project-page .panel .more-title::after {
  content: "NOW!!";
  display: inline-block;
  margin: 0 0 0 10px;
  font-size: 0.5rem;
  vertical-align: top;
  color: red;
}

.project-page .panel ul {
  padding: 0;
  font-size: 0.9rem;
}

.project-page .panel li {
  list-style-type: none;
  margin-bottom: 1rem;
}

.project-page .panel p {
  font-size: 0.9rem;
}

.project-page .panel .content-p {
  padding: 0 10%;
  overflow: hidden;
}

.project-page .panel .content-p .submit-wrapper {
  text-align: center;
  padding: 40px 0 60px;
}

.project-page .panel .content-p .submit {
  padding: 10px 30px;
  background-color: black;
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.project-page .panel .content-p .submit:hover {
  background-color: #333;
}

.project-page .panel .content-p .submit:hover {
  text-decoration: none;
}

.project-page .panel hr {
  margin: 0;
  border-top: 2px solid black;
}

.project-page .panel .content-c {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}

.project-page .panel .ss-panel {
  width: 46%;
}

.project-page .panel .ss-panel h4 {
  font-size: 1rem;
  margin-bottom: 20px;
  font-weight: bold;
  margin: 20px 0;
  text-transform: uppercase;
}

.project-page .panel .ss-panel a {
  color: cornflowerblue;
}

.project-page .panel .ss-panel .ss-panel-content {
  padding-left: 20px;
  position: relative;
}

.project-page .panel .ss-panel .ss-panel-content .underline {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 0.3rem 0 0.2rem;
}

.project-page .panel .ss-panel .ss-panel-content::before {
  content: "";
  background-color: black;
  display: block;
  width: 3px;
  height: 1.2rem;
  position: absolute;
  left: 0;
}

.project-page .sidebar-wrapper {
  position: fixed;
  top: 18rem;
  left: 0;
  right: 0;
  max-width: 100vh;
  margin: auto;
  text-align: right;
}

.project-page .sidebar-wrapper .sidebar {
  display: inline-block;
  opacity: 1;
  transition: all 0.3s ease;
  background-color: white;
}

.project-page .sidebar-wrapper .sidebar:hover {
  display: inline-block;
  opacity: 1;
}

.project-page .sidebar-wrapper .sidebar .item {
  display: block;
  border: 2px solid #333;
  text-align: center;
  height: 2rem;
  width: 2rem;
  line-height: 1.7rem;
  margin: 0.2rem 0;
  border-radius: 3px;
  cursor: pointer;
  background-color: white;
}

.project-page .sidebar-wrapper .sidebar .item-activate {
  color: white;
  background-color: #333;
}

/* navbar */
.navbar {
  padding: 35px 0;
}

.navbar a {
  transition: filter 0.3s ease;
  font-family: 'Text Me One', sans-serif;
  letter-spacing: 1.5px;
  font-weight: bold;
}

.navbar a:hover {
  filter: contrast(0.3);
}

.navbar-brand {
  display: flex;
  padding: 0;
}

.nav-item {
  margin: 0 16px;
  font-size: 0.7rem;
}

.nav-icon-wrapper {
  width: 112px;
  justify-content: space-between;
}

.nav-icon img {
  height: 16px;
}

.nav-icon a {
  display: flex;
}

/* icon font */
@font-face {
  font-family: "iconfont";
  src: url('iconfont.eot?t=1592416525603');
  /* IE9 */
  src: url('iconfont.eot?t=1592416525603#iefix') format('embedded-opentype'),
    /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOoAAsAAAAAB/QAAANZAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDFIJwATYCJAMUCwwABCAFhG0HSBv8BhEVnNXIfiTGtij2Kio7O/NX0T4aZ4IIc9qsJLuuSvQ6QoAkxy8gSABszvXARkWokZx98ugLacfppRn8/xwzXYrnX9scM4v2BjhKoNmw8jrp8EDvQE7Ubxi7ifIgroYAluRkRcqWr1oXDwNYJYB07dShFV7KjcFoMQ/BLTlokJk4eGqSugrM4L8vb8gtHigcDdhYs325tpR8bp+30iODI2lKEXDGMwLaMdBAVsCA9C41d0WH4axorDPdUBKweCjUWJPqPK/3vFUwSMzfkdTCf3igMQgKxAVkhwNQUooYeG4xExqe1xFRJqknMiHwvFUEBdyXFWyY0QPYDKRpuVjgFyovdbbw8D62fc12bWt1GLI+7RJZfTv/5LXxfn/9u3frLkyYb+3ZuylX+cpFXQikWe0fcvdpy8n++r5Ag0rlvgJksxwqd9gva3L4fPX8gRo3fLWEoqUnC16ocrLqvIZUdX3P6gVeJDxvZrEiI8KKCdt6TBo2vNYQvNXjefMpKIdmTumZSPBj3O+XibXHdmos3dSMGdJVio0OiT5Zo0Z4OKY++bllhQqu+00pNLo+D3N1T23rr8lRIVud0BVZS+cpKx2rJ5T8+bZyVNOeVFUXYo7lbJIvdEetNk96jnAjyxcc/uXjpMS48hFP9/7RLxZufxRBSl3rrHEdc86cdd2zJha6pOac66R2tm/vi+7HQACCr9QbnQRgUJ+DQaMr8egOfUvX+o1/Q+1W32q3iCr6zQszADyMHhwhOoM7DO3E/AsJrTk/jdOyzbg8oHGM3YzZttUh2whi5fRY4FfZY3kyjjShdTYIHgkxKEJIBhqPtEiDzQoOYeQFF48SYMlCheNhxNEbjZhQIDPjBBCi2QGKSE6AJpprSIN9DA6JvAOXaNFgqS9xZwwjvTjqy5VRCVrQf6gNDQ7p5BLkvtCPneIkj+N+yLH2QZ5k2dgTB+QxtsTJFyIOHFMPD+F62HUEgalBI0klEso0dWWflBjqVxeujErQgv5DbWhwtLtccj//Qj92imtaOqw/5FiPD3mStUA+xUOrlmt5Tpx8IeLAMfXwEOZh1xGE8nkNGkmqHsFQprCTaytO5pf2D3AEsICPckSJFiOOuOx7176S/bWj0R5lrkWQd6Eb42oFAAAA') format('woff2'),
    url('iconfont.woff?t=1592416525603') format('woff'),
    url('iconfont.ttf?t=1592416525603') format('truetype'),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1592416525603#iconfont') format('svg');
  /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-right:before {
  content: "\e655";
}

.icon::before {
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.nav-icon .icon::before {
  font-weight: 400;
  font-size: 0.9rem;
}

.icon-twitter::before {
  font-family: "Font Awesome 5 Brands";
  content: "\f099";
}

.icon-sc::before {
  font-family: "Font Awesome 5 Brands";
  content: "\f1be";
}

.icon-bc::before {
  font-family: "Font Awesome 5 Brands";
  content: "\f2d5";
}

/* footer */
.footer {
  padding: 1.5rem 0 2rem;
  text-align: center;
  border-top: 1px solid #ddd;
  margin-top: 3rem;
}

.motto {
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
}

.footer-logo {
  padding-top: 0.5rem;
}

.footer-logo span {
  display: block;
  font-size: 0.5rem;
  font-weight: 500;
}
</style>
