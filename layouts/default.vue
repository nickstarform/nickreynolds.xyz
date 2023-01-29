<template>
  <v-app dark>
    <div class="flex flex-container flex-center bg-img html">
      <HeadDrawerLeft />
      <div class="flex pad">
        <Nuxt />
      </div>
    </div>
  </v-app>
</template>

<script type="text/javascript">
import HeadDrawerLeft from '@/layouts/header.vue'
export default {
  name: 'DefaultLayout',
  components: {
    HeadDrawerLeft,
  },
}
</script>

<style lang="scss">
@import '@/assets/mixins.scss';
.html {
  @include html;
  font-size: 5;
  font-size-adjust: 0.5;
  min-width: 68.75/3rem; // 380 px;
}
.pad {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.cardColor {
  @include cardColor;
}
.layout {
  padding-top: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
}
h1 {
  font-size: xx-large;
  line-height: 1em;
  letter-spacing: -0.03em;
  margin: 0;
}
h2 {
  font-size: medium;
  line-height: 1em;
  letter-spacing: -0.03em;
  margin: 0;
}
h1 h2 h3 body span a {
  color: white;
}
.bg-img {
  background-attachment: fixed;
  background-image: url('./static/intro-bg.jpg');
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.flex-center {
  @apply flex justify-center items-center;
}
.flex-right {
  @apply flex;
  justify-content: right;
}
.flex-left {
  @apply flex;
  justify-content: left;
}

*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}
</style>
