<script lang="ts">
import {profile_photos} from '../assets/resources'
export default {
  data() {
    return {
      members: [{
          name: "潮音きつね",
          image: "kitsune.jpg",
          prefix: "ARTIST",
          intro: "<p>ななひらyes!</p><p>ちょこyes!</p><p>大山チロルyes!</p>",
          twitter: "xo_kuroneko"
        },
        {
          name: "Konseki Takane",
          image: "takane.png",
          prefix: "DESIGNER",
          intro: "<p>DOUJiN LiFE&rsquo;S CAFE FOUNDER</p><p>I learned all my Japanese from anime.</p><p>The most beautiful thing in the world is a girl with beast ears wearing white stockings.</p>",
          twitter: "Konseki_Takane"
        },
        {
          name: "望月真白",
          image: "mashiro.jpg",
          prefix: "DJ&ARTIST",
          intro: "<p>Aka DJ MASHIRO (2), a DJ who loves Drummin&rsquo;, Experimental sound.</p><p>Started music career w&rsquo; Doujin music, now show an interest in Denpa (galgame lol) culture.</p><p>Also works for GNG, a group about party night organization, digital magazine, radio sessions.</p>",
          twitter: "Dazzletek_"
        },
        {
          name: "Nirotiy",
          image: "nirotiy.png",
          prefix: "ARTIST",
          intro: "<p>Make a crapload of crap of different genres and such.</p><p>Suffer from poverty.(not that serious)</p><p>Really want to drink a nice cup of cocktail.</p><p>Using a headphone under 15＄ to create &ldquo;music&rdquo;.</p>",
          twitter: "nirotiy"
        },
        {
          name: "rmdyh",
          image: undefined,
          prefix: "WEB",
          intro: "<p>WELCOME TO OSU!!!!!!!!!!!!!!!!!!!!!!!</p>",
          twitter: undefined
        },
        {
          name: "Foe Requiem",
          image: undefined,
          prefix: "STAFF",
          intro: "<p>I LOVE SIDE PONYTAIL!</p>",
          twitter: undefined
        },
      ],
      photos: profile_photos
    }
  },
  computed: {
    rows(vm: any) {
      return [...new Array(Math.ceil(vm.members.length / 3)).keys()]
    }
  },
  methods: {
    one_row(i: number): Array<Record<string, any> >  {
      let idx = (this as any).members.length < (i + 1) * 3 ? (this as any).members.length : (i + 1) * 3
      return (this as any).members.slice(i * 3, idx)
    }
  }
}
</script>

<template>
<div class="about-page">
  <!-- PART of about -->
  <div class="page-title">
    <h2>ABOUT</h2>
  </div>
  <div class="about-content">
    <p>Thoughost is a netlabel from China. We want to find creative sounds in the whole world.</p>
  </div>
  <!-- PART of release your track -->
  <div class="page-title">
    <h3>RELEASE YOUR TRACK</h3>
  </div>
  <div class="about-content">
    <p>We will post the next project on the homepage. If you wish to participate and release in the compilation,<br /> please contact us.</p>
  </div>
  <!-- PART of members -->
  <div class="page-title">
    <h3>MEMBERS</h3>
  </div>
  <div class="my-4">
    <!-- first row for members' show-->
    <div v-for="i in rows" :key="i">
      <div class="member-row">
        <div v-for="item in one_row(i)" :key="item.id" class="item">
          <div class="prefix">
            <div>{{item.prefix}}</div>
          </div>
          <img v-if="item.image" class="avatar mb-2" :src="photos(item.image)" />
          <div class="my-2" style="font-weight: bold;">{{item.name}}</div>
          <div v-html="item.intro" class="my-2" style="padding:0 40px"></div>
          <div v-if="item.twitter" class="comm"><a target="_top" :href="'https://twitter.com/'+item.twitter">Twitter@{{item.twitter}}</a></div>
        </div>
      </div>
      <hr v-if="i+1 < rows.length"/>
    </div>
  </div>
</div>
</template>

<style scoped>
/* about page */
.about-page {
  text-align: center;
}

.about-page .about-content {
  display: flex;
  align-items: center;
}

.about-page .about-content p {
  flex-grow: 1;
  margin: 3rem 0;
}

.about-page .member-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.about-page .item {
  width: 31%;
  position: relative;
  height: 25rem;
  padding: 0 0.2rem;
  font-size: 0.8rem;
  margin: 2% 0;
}

.about-page .prefix {
  position: absolute;
  -moz-transform: rotate(90deg);
  transform: rotate(90deg);
  top: 0;
  left: 0;
}

.about-page .item .prefix div {
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.2);
}

.about-page .item .avatar {
  width: 40%;
  margin: auto;
}

.about-page .item .comm {
  position: absolute;
  bottom: 0;
  display: inline-block;
  left: 20%;
  width: 60%;
  background-color: black;
  color: white;
  font-size: 0.75rem;
  transition: background-color 0.3s ease;
}

.about-page .item .comm a {
  color: white;
  display: block;
  padding: 0.5rem 0;
}

.about-page .item .comm:hover {
  background-color: #333;
}

.about-page .item .comm:hover a {
  color: white;
  text-decoration: none;
}

.about-page .item p {
  margin-bottom: 0.3rem;
}

.about-page hr {
  background-color: black;
}
</style>
