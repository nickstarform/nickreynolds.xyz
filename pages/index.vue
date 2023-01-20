<template>
  <v-col class="pad">
    <v-card
      class="logo py-4 d-flex justify-center"
      color="transparent"
      elevation="0"
    >
      <SoloPfp />
    </v-card>
    <v-card color="pad cardColor" elevation="9">
      <v-card-title class="flex justify-center">
        <h1>
          <span> Hello, I'm </span>
          <nuxt-link to="/about" class="landing">Nick</nuxt-link>
          <span class="dot landing">.</span>
        </h1>
      </v-card-title>
      <v-card-text class="about">
        <span class="words flex flex-center">I &nbsp;<TextCycler :items="aboutItems"></TextCycler></span>
        <TechStack />
      </v-card-text>
      <span class="flex-center words">Check out my &nbsp;<nuxt-link to="/projects" class="dot landing">&lt;projects&gt;</nuxt-link>&nbsp; in the sidebar.</span>
    </v-card>
  </v-col>
</template>

<script>
import TextCycler from '~/components/TextCycler.vue'
export default {
  name: 'WelcomePage',
  components: {
    TextCycler,
  },
  data() {
    return {
      aboutItems: [
        [' study Star Formation', 'https://nhn.ou.edu'],
        [' maintain the NHN Small Radio Telescope', ''],
        [' maintain the NHN optical telescopes', 'https://observatory.ou.edu'],
        [' am certified on the IRAM 30m', ''],
        [' want to collaborate with you', ''],
      ],
      items: [
        [' traveling,', 'travel'],
        [' my cat,', 'cat'],
        [' my friends,', 'friends'],
        [' my family.', 'son'],
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/mixins.scss';
@import '@/assets/variables.scss';
.html {
  @include html;
}
.landing {
  @include splash;
}
h1 .landing {
  text-decoration: underline;
  font-weight: bold;
}
v-card-text .about {
  display: flex;
  position: relative;
  padding-left: 50%;
  padding-right: 50%;
  overflow: hidden;
  margin: auto;
}
.dot {
  text-decoration: none !important;
}
.cardColor {
  @include cardColor;
}
.bg-img {
  background-image: url('./static/intro-bg.jpg');
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 10%;
}
.about {
  margin-bottom: 0;
  margin-top: 6px;
  font-size: 22px;
  padding-right: 4px;
}
.words {
  list-style-type: none;
  padding-left: 0;
  overflow: hidden;
  font-size: 1em;
}

</style>
