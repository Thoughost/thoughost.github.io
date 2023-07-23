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
  <nav class="navbar navbar-expand-lg navbar-light container">
    <!-- logo -->
    <a target="_top" class="navbar-brand" href="/">
      <img height="33px" src="@/assets/svgs/LOGO.svg" />
    </a>
    <!-- collapse -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <!-- navbar item (text) -->
        <li class="nav-item">
          <a target="_top" href="/project">NEXT PROJECT</a>
        </li>
        <li class="nav-item">
          <a target="_top" href="/about">ABOUT</a>
        </li>
        <li class="nav-item">
          <a target="_top" href="/releases">DISCOGRAPHY</a>
        </li>
        <li class="nav-item">
          <a target="_top" href="https://forms.gle/oG1YHhTrJACY3RVi9">CONTACT</a>
        </li>
        <!-- navbar item (icon) -->
        <li class="nav-item nav-icon-wrapper">
          <div class="nav-icon">
            <a target="_top" href="https://twitter.com/thoughost">
              <span class="icon icon-twitter"></span>
            </a>
          </div>
          <div class="nav-icon">
            <a target="_top" href="https://soundcloud.com/thoughost">
              <span class="icon icon-sc"></span>
            </a>
          </div>
          <div class="nav-icon">
            <a target="_top" href="https://thoughost.bandcamp.com/">
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
  <div class=" container">
  <div class="motto">
    <span>"Finding creative sounds is our purpose."</span>
  </div>
  <div class="footer-logo">
    <span>Copyright ©2020-2023 Thoughost. All right reserved.</span>
  </div>
  </div>
</div>
</template>

<style scoped>
/* navbar */
header{
  border-bottom: #eee 0.4px solid;
  /*margin-bottom: 30px;*/
  /* Box-shadow: 0 0 10px 5px #eee; */
}

.navbar {
  padding: 15px;
}

.navbar a {
  transition: color 0.3s ease;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 36px;
  color: #111;
  text-decoration: none;
}

.navbar a:hover {
  color: #555;
}

.navbar-brand {
  display: flex;
  padding: 0;
}

.navbar-nav{
  height: 36px;
}

.nav-item {
  margin: 0 15px;
}

@media (max-width: 992px){
  .navbar-nav{
    margin-top: 12px;
    height: unset;
  }
  .nav-item {
    margin: 6px 0;
  }
}

.nav-icon-wrapper {
  margin-right: 0;
  position: relative;
}

.nav-icon-wrapper::before {
  content: '';
  display: block;
  width: 1px;
  height: 20px;
  position: absolute;
  top: 8px;
  left: 0px;
  background-color: #e0e0e0;
}

@media (min-width: 992px){
  .nav-icon-wrapper {
    padding-left: 6px;
  }
}

.nav-icon {
  display: inline-block;
  padding: 0 24px 0 0;
}

@media (min-width: 992px){
  .nav-icon{
    padding: 0 0 0 24px;
  }
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
  font-size: inherit;
  font-family: "Font Awesome 5 Brands";
}

.icon-twitter::before {
  content: "\f099";
}

.icon-sc::before {
  content: "\f1be";
}

.icon-bc::before {
  content: "\f2d5";
}

/* footer */
.footer {
  padding: 1.5rem 0;
  border-top: 1px solid #e0e0e0;
  margin-top: 60px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
}

@media (min-width: 992px){
  .footer .container{
    display: flex;
    justify-content: space-between;
  }
}

@media (max-width: 992px){
  .footer{
    text-align: center;
  }

  .footer-logo {
    padding-top: 0.5rem;
  }
}
</style>
