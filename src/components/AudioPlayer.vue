<template>
  <div v-if="info" class="audio-info">
    <h6 style="font-size: 19px;">{{ song_title }}</h6>
    <p style="font-size: 13px; font-style: italic;">{{ song_artist }}</p>
    <div class="controls">
      <button @click="toggle">
        <i :class="play_back_icon"></i>
      </button>
      <p class="time-info">{{ convert_seconds_to_time(song_current_time) }} / {{ convert_seconds_to_time(song_total_time) }}
      </p>
    </div>
    <div class="progress-bar">
      <div class="progress-played" :style="{ width: progress_played_width }"></div>
      <div class="progress-remaining" :style="{ width: 100 - parseFloat(progress_played_width) + '%' }"></div>
      <input type="range" class="time-slider" :value="song_current_time" :max="song_total_time" @input="seek_to_time">
    </div>
  </div>
</template>

<script lang="ts">
import { rls_info_l, crossfade_audios } from '@/assets/resources';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AudioPlayer',
  data() {
    return {
      song_title: 'LOADING...',
      song_artist: 'LOADING...',
      song_total_time: 0, // seconds
      song_current_time: 0, // seconds
      audio_element: null as any,
      is_playing: false as boolean
    };
  },
  computed: {
    info: (vm: any) => (rls_info_l as Record<string, any>)[(vm.$route.params.id as string)],
    get_audio: (vm: any) => crossfade_audios((vm.$route.params.id as string)),
    play_back_icon(): string {
      return this.is_playing ? 'fas fa-pause' : 'fas fa-play';
    },
    progress_played_width(): string {
      if (this.song_total_time === 0) return '0';
      const progress = (this.song_current_time / this.song_total_time) * 100;
      return `${progress}%`;
    }
  },
  mounted() {
    this.load_audio();
  },
  methods: {
    async load_audio() {
      this.song_title = this.info.audio.title;
      this.song_artist = this.info.audio.artist;

      const audio_path = await this.get_audio;
      this.audio_element = new Audio(audio_path);
      this.audio_element.addEventListener('loadedmetadata', () => {
        this.song_total_time = Math.floor(this.audio_element.duration);
      });
      this.audio_element.addEventListener('timeupdate', this.update_current_time);
    },
    convert_seconds_to_time(seconds: number) {
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      return `${min}:${sec < 10 ? '0' + sec : sec}`;
    },
    update_current_time() {
      this.song_current_time = Math.floor(this.audio_element.currentTime);
    },
    toggle() {
      if (this.is_playing) {
        this.pause();
      } else {
        this.play();
      }
    },
    play() {
      if (this.audio_element) {
        this.audio_element.play();
        this.is_playing = true;
      }
    },
    pause() {
      if (this.audio_element) {
        this.audio_element.pause();
        this.is_playing = false;
      }
    },
    seek_to_time(event: Event) {
      const target = event.target as HTMLInputElement;
      const time = parseFloat(target.value);
      if (this.audio_element) {
        this.audio_element.currentTime = time;
        this.song_current_time = time;
      }
    }
  }
});
</script>

<style scoped>
.controls button {
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
}

.time-info {
  display: inline-block;
  margin-left: 10px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #000;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.progress-played {
  height: 100%;
  background-color: #000;
}

.progress-remaining {
  height: 100%;
  background-color: #d1d1d1;
  position: absolute;
  top: 0;
  right: 0;
}

.time-slider {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  -webkit-appearance: none;
}

.time-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  background-color: #000;
  border-radius: 0;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.time-slider::-webkit-slider-thumb:hover {
  background-color: #a5a5a5;
}

.time-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  background-color: #000;
  border-radius: 0;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.time-slider::-moz-range-thumb:hover {
  background-color: #a5a5a5;
}
</style>
