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
  <nav class="navbar navbar-expand-lg navbar-light container tg-container">
    <!-- logo -->
    <a target="_top" class="navbar-brand" href="/">
      <img src="@/assets/icons/thoughost.svg" >
    </a>
    <!-- collapse -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto tg-font-10">
        <!-- navbar item (text) -->
        <li class="nav-item">
          <a target="_top" href="/project" style="color:#ff0000">NEXT PROJECT</a>
        </li>
        <li class="nav-item">
          <a target="_top" href="/releases">DISCOGRAPHY</a>
        </li>
        <li class="nav-item">
          <a target="_top" href="https://forms.gle/oG1YHhTrJACY3RVi9">CONTACT</a>
        </li>
        <li class="nav-item">
          <a target="_top" href="/about">ABOUT</a>
        </li>
        <!-- navbar item (icon) -->
        <li class="nav-item nav-icon-wrapper">
          <a class="nav-icon" target="_top" href="https://twitter.com/thoughost">
            <img src="@/assets/icons/X.svg" height="12px">
          </a>
          <a class="nav-icon" target="_top" href="https://soundcloud.com/thoughost">
            <img src="@/assets/icons/soundcloud.svg" height="16px">
          </a>
          <a class="nav-icon" target="_top" href="https://thoughost.bandcamp.com/">
            <img src="@/assets/icons/bandcamp.svg" height="12px">
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>

<RouterView />

<!-- footer -->
<div class="footer">
  <div class="container tg-flex-lr tg-pt-80 tg-pb-80 tg-font-12" style="align-items: flex-start;">
    <div>
      <div class="d-inline-block align-top">
        <div class="tg-pb-40">
          <div class="item">
            <a target="_top" href="/about">ABOUT</a>
          </div>
          <div class="item">
            <a target="_top" href="/releases">DISCOGRAPHY</a>
          </div>
          <div class="item">
            <a target="_top" href="https://forms.gle/oG1YHhTrJACY3RVi9">CONTACT</a>
          </div>
        </div>
      </div>
      <div class="d-inline-block align-top">
        <div class="item">
          <a target="_top" href="/">BLACK HOLE</a>
        </div>
      </div>
        <a target="_top" class="d-block" href="/">
          <img class="logo" src="@/assets/icons/thoughost.svg">
        </a>
    </div>
    <div class="sider">
      <div class="d-xl-inline-block align-top tg-pb-40">
        <img class="d-inline-block" src="@/assets/icons/email.svg" style="height: 18px; margin: 0 8px 0 -35px;">
        <span class="d-inline">EMAIL</span>
        <div class="tg-font-8">thoughost.dm@gmail.com</div>
      </div>
      <div class="d-xl-inline-block align-top child-2">
        <img class="d-inline-block" src="@/assets/icons/followus.svg" style="height: 18px; margin: 0 8px 0 -35px;">
        <span class="d-inline">FOLLOW US</span>
        <div class="icons">
          <div><img src="@/assets/icons/X.svg"></div>
          <div><img src="@/assets/icons/X.svg"></div>
          <div><img src="@/assets/icons/X.svg"></div>
          <div><img src="@/assets/icons/X.svg"></div>
          <div><img src="@/assets/icons/X.svg"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="container ffooter tg-font-8 tg-flex-lr">
    <div>Copyright ©2020-2024 Thoughost. All right reserved.</div>
    <div>"Finding creative sounds is our purpose."</div>
  </div>
</div>
</template>

<style scoped>
/* navbar */
.navbar {
  height: 86px;
}

.navbar-brand {
  display: flex;
  padding: 0;
  height: 33px;
}

.nav-item {
  font-weight: 600;
  line-height: 26px;
  margin-left: 43px;
}

.nav-item:hover {
  text-decoration: underline;
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

.nav-icon img{
  padding-left: 28px;
}

/* footer */
.footer {
  background-color: #101010;
  color: #fff;
  margin-top: 96px;
  font-weight: 600;
}

.footer .item{
  height: 32px;
  width: 250px;
}

.footer .logo{
  height: 33px;
  filter: brightness(100);
}

.footer .sider {
  color: #A7A7A7;
}

@media (min-width: 1200px) {
  .footer .sider .child-2{
    padding-left: 120px;
  }
}

.footer .icons div{
  margin-top: 12px;
  display: inline-block;
  height: 36px;
  width: 36px;
  padding: 6px;
  margin-left: 18px;
  background-color: #A7A7A7;
}

.footer .icons div:first-child{
  margin-left: 0;
}

.footer .icons img {
  height: 24px;
}

.ffooter {
  height: 86px;
  border-top: #46474D 1px solid;
  font-weight: 100;
}

@media (max-width: 767.98px) {
  .ffooter {
    flex-direction: column-reverse;
    justify-content: center;
  }
}

</style>
