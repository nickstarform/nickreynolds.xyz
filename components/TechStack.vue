<template>
  <div class="mt-16 md:mt-24">
    <div class="flex flex-center">
      <h2 class="text-center">
        <h1 class="rainbow-text">Tech stack I use</h1>
      </h2>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'up' : 'down'}` }}</v-icon>
      </v-btn>
    </div>
    <v-list v-if="miniVariant" color="transparent" class="flex-container">
      <v-list-item v-for="(item, i) in techStack" :key="i" class="flex">
        <v-list-item-action>
          <el-tooltip
            :content="item.iconDesc"
            class="flex flex-center inline-flex justify-center items-center"
            effect="customized"
            :open-delay="300"
            placement="bottom"
          >
            <component :is="item.iconObj" width="50" height="50"></component>
          </el-tooltip>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script scoped>
import { Tooltip } from 'element-ui'

export default {
  name: 'TechStack',
  components: {
    [Tooltip.name]: Tooltip,
  },

  data() {
    return {
      miniVariant: true,
      techStack: [
        {
          iconObj: 'IconsNuxt',
          iconDesc: 'Nuxt.js (Vue.js Webpack Framework)',
        },
        {
          iconObj: 'IconsPython',
          iconDesc: 'Python (primary development)',
        },
        {
          iconObj: 'IconsCpp',
          iconDesc: 'C++ (Blazing fast computations)',
        },
        {
          iconObj: 'IconsAws',
          iconDesc: 'Amazon Web Services (How this site is hosted)',
        },
        {
          iconObj: 'IconsGithub',
          iconDesc: 'Github (My favourite social app)',
        },
        {
          iconObj: 'IconsJavascript',
          iconDesc: 'Javascript (My web development language)',
        },
        {
          iconObj: 'IconsVuejs',
          iconDesc: 'Vue.js (Front-end JS Framework)',
        },
      ],
    }
  },
}
</script>

<style scoped>
.flex-container {
  @apply flex;
  overflow: hidden;
}
.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}

.rainbow-text {
  background-image: radial-gradient(
    circle,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  );
  color: transparent;
}
.rainbow-text {
  background-image: linear-gradient(
    to right,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  );
  color: transparent;
  -webkit-background-clip: text;
  display: inline-block;
}
.rainbow-text-loop {
  display: inline-block;
  -webkit-animation: rainbow-loop 1s infinite;
  -webkit-background-clip: text;
}
@-webkit-keyframes rainbow-loop {
  0% {
    background-image: linear-gradient(
      to right,
      violet,
      indigo,
      blue,
      green,
      yellow,
      orange,
      red
    );
  }
  17% {
    background-image: linear-gradient(
      to right,
      indigo,
      blue,
      green,
      yellow,
      orange,
      red,
      violet
    );
  }
  33% {
    background-image: linear-gradient(
      to right,
      blue,
      green,
      yellow,
      orange,
      red,
      violet,
      indigo
    );
  }
  50% {
    background-image: linear-gradient(
      to right,
      green,
      yellow,
      orange,
      red,
      violet,
      indigo,
      blue
    );
  }
  67% {
    background-image: linear-gradient(
      to right,
      yellow,
      orange,
      red,
      violet,
      indigo,
      blue,
      green
    );
  }
  83% {
    background-image: linear-gradient(
      to right,
      orange,
      red,
      violet,
      indigo,
      blue,
      green,
      yellow
    );
  }
  100% {
    background-image: linear-gradient(
      to right,
      red,
      violet,
      indigo,
      blue,
      green,
      yellow,
      orange
    );
  }
}
@-webkit-keyframes rainbow {
  0% {
    color: orange;
  }
  10% {
    color: purple;
  }
  20% {
    color: red;
  }
  30% {
    color: CadetBlue;
  }
  40% {
    color: yellow;
  }
  50% {
    color: coral;
  }
  60% {
    color: green;
  }
  70% {
    color: cyan;
  }
  80% {
    color: DeepPink;
  }
  90% {
    color: DodgerBlue;
  }
  100% {
    color: orange;
  }
}
</style>
