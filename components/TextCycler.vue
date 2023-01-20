<template>
  <div class="words cycler flex flex-center">
    <a v-if="currentText[1] !== ''" href="currentText[1]">
      <span v-text="currentText[0]"></span>
    </a>
    <span v-else v-text="currentText[0]"></span>
    <span>.</span>

  </div>
</template>

<script scoped>
export default {
  name: 'TextCycler',
  props: {
    items: {
      type: Object(Array),
      default: [
        [
          'No items passed to text-cycler. The items prop was null or undefined',
          '',
        ],
      ],
    },
    delay: {
      type: Number,
      default: 2000,
    },
    stop: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    const self = this
    setInterval(() => {
      self.currentIndex = ++self.currentIndex % self.items.length
    }, self.delay)
    return { currentIndex: 0 }
  },

  computed: {
    currentText() {
      return this.items[this.currentIndex]
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/mixins.scss';

span {
  @include highlight;
}

.words {
  list-style-type: none;
  padding-left: 0;
  overflow: hidden;
  font-size: 1em;
}

.cycler a { 
  text-align: left; 
}
.cycler span { 
  text-align: left; 
}

.cycler a span {
  text-align: left;
  white-space: nowrap;
}

.cycler {
  display: inline-block;
  position: relative;
  overflow: hidden;
}
</style>
