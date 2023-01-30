<template>
  <div>
    <v-toolbar
      :v-if="!$vuetify.breakpoint.mdAndUp"
      :color="!$vuetify.breakpoint.mdAndUp ? `` : `transparent`"
      :elevation="!$vuetify.breakpoint.mdAndUp ? `9` : `0`"
      absolute
      left
      class=""
    >
      <v-btn
        class="hidden-md-and-up"
        color="--v-highlight-base"
        @click.self="drawer = !drawer"
      ><IconsMdimenu @click.self="drawer = !drawer"/></v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      expand-on-hover
      dark
      left
      app
      :permanent="$vuetify.breakpoint.mdAndUp"
      width="20%"
      :min-width="$vuetify.breakpoint.mdAndUp ? `` : `200px`"
      class="navbar cardColor"
      elevation="9"
    >
      <v-list nav dense>
        <v-list-item-content>
          <v-list-item-title class="text-h6 splash"
            >Nick Reynolds Tran</v-list-item-title
          >
        </v-list-item-content>
        <v-divider></v-divider>
        <div class="d-flex">
          <v-list-item-action><IconsSun /></v-list-item-action>
          <v-list-item-content>PhD Astrophysics </v-list-item-content>
        </div>
        <div class="d-flex">
          <v-list-item-action>
            <v-list-item-subtitle
              ><IconsMdimapmarker width="24" color="white"/></v-list-item-subtitle
            >
          </v-list-item-action>
          <v-list-item-content>
            <a
              href="https://www.google.com/maps/place/Oklahoma+City"
              target="_blank"
              class="highlight"
              >OKC, USA</a
            >
          </v-list-item-content>
        </div>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense>
        <v-list-item
          v-for="(item, i) in coords"
          :key="i"
          exact
          dense>
          <v-list-item-content>
            <a v-if="item.href.startsWith('https')" :href="item.href" target="_blank">
              <component :is="item.icon" width="24"/></a>
            <nuxt-link v-else to="contact">
              <IconsMdiemail width="24"/>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          exact dense
          class="d-flex"
          :target="item.to.startsWith('https') ? `_blank` : ``"
          :href="item.to.startsWith('https') ? item.to : ``">
          <v-list-item-action>
            <component :is="item.icon" width="24"/>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <div class="footer flex">
        <span class="flex-center">
          &lt;&gt; w/ ♡ in&nbsp;<IconsVuejs width="1em" style="min-width: 20px;"/>
        </span>
        <span class="flex-center">&copy;{{ new Date().getFullYear() }}</span>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'HeadDrawerLeft',
  components: {},
  data() {
    return {
      bg: 'transparent',
      clipped: true,
      drawer: null,
      fixed: true,
      coords :[
        {
          icon: "IconsGithub",
          href: "https://github.com/nickalaskreynolds",
        },
        {
          icon: "IconsIg",
          href: "https://instagram.com/nickstarform",
        },
        {
          icon: "IconsTwitter",
          href: "https://twitter.com/AstroTranRe",
        },
        {
          icon: "IconsOrcid",
          href: "https://orcid.org/0000-0002-9239-6422",
        },
      ],
      items: [
        {
          icon: 'chevron-',
          title: '',
          to: '',
          button: true,
        },
        {
          icon: 'IconsMdihome',
          title: 'Hello',
          to: '/',
        },
        {
          icon: 'IconsMdipencil',
          title: 'About Me',
          to: '/about',
        },
        {
          icon: 'IconsMdilaptop',
          title: 'Projects',
          to: '/projects',
        },
        {
          icon: 'IconsMdibriefcase',
          title: 'CV/Resume',
          to: '/cv',
        },
        {
          icon: 'IconsMdichartbubble',
          title: 'Contact',
          to: '/contact',
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Nickalas Reynolds Tran',
    }
  },
  mounted() {
    window.onscroll = () => {
      this.changeColor()
    }
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = 'black'
      } else {
        this.bg = 'transparent'
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/mixins.scss';
@import '@/assets/variables.scss';
.navpad {
  margin-left: 0;
  padding-left: 50%;
}
.navpad_reset > .navpad {
  padding-left: 0%;
}
.splash {
  @include splash;
}
.highlight {
  @include highlight;
}
.footer {
  position: fixed;
  bottom: 0;
}
.navbar {
  display: block;
  @include cardColor;
}
@media only screen and (max-width: 500px) {
  .navbar {
    display: block !important;
    min-width:200px !important;
  }
}
</style>
