<script>
export default {
  props: {
    subtitle: String
  }
}
</script>

<template>
  <div class="page-banner">
    <div class="head container">
      <h2>{{ subtitle }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.page-banner{
  height: 432px;
  padding: 25px 0;
  background-size: cover;
  background-position: center;
  position: relative;
}

.page-banner .head {
  text-align: center;
  color: azure;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.page-banner .head h1 {
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 600;
  margin-bottom: 25px;
  text-align: inherit;
  margin-left: -5px;
}

.page-banner .head h2 {
  font-size: 1rem;
  font-weight: 600;
  text-align: inherit;
}

.page-banner .head .intro{
  font-size: 1rem;
  font-weight: 400;
}

@media (min-width: 768px) {
  .page-banner {
    padding: 35px 0;
  }
  .page-banner .head h1 {
    font-size: 5rem;
    line-height: 4.2rem;
    margin-bottom: 35px;
  }
}

@media (min-width: 992px) {
  .page-banner {
    height: 558px;
    padding: 45px 0;
  }
  .page-banner .head h1 {
    margin-bottom: 45px;
  }
}

@media (min-width: 1200px) {
  .page-banner {
    height: 648px;
    padding: 60px 0;
  }
  .page-banner .head h1 {
    font-size: 6rem;
    line-height: 4.4rem;
    margin-bottom: 60px;
  }
}
</style>