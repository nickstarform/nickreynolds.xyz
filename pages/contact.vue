<template>
  <v-col class="pad">
    <v-card elevation="9" class="pad flex flex-center cardColor">
      <div>
        <div class="flex flex-center w-full">
          <h1 class="text-center splash">{{ title }}</h1>
        </div>
        <div class="wrapper flex flex-center">
          <h3 class="text-primary mt-8 font-semibold mb-6">{{ message }}</h3>

          <form action="POST" @submit.prevent="submit($event)">
            <div class="row flex flex-center">
              <div class="left-column">
                <label
                  for="fullName"
                  class="block mb-2 text-gray-700 dark:text-gray-200 highlight text-right"
                >
                  Full Name
                </label>
              </div>
              <div class="right-column">
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  required="required"
                  class="highlight text-gray-700 dark:text-gray-200 dark:bg-gray-800 dark:border-dark-light block bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-primary dark:focus:border-gray-500 mb-2 p-4"
                />
              </div>
            </div>
            <div class="row">
              <label
                for="email"
                class="block mb-2 text-gray-700 dark:text-gray-200 highlight left-column text-right"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required="required"
                class="highlight text-gray-700 dark:text-gray-200 dark:bg-gray-800 dark:border-dark-light block w-fit bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-primary dark:focus:border-gray-500 mb-2 p-4 right-column"
              />
            </div>
            <div class="row">
              <label
                for="Message"
                class="block mb-2 text-gray-700 dark:text-gray-200 highlight left-column text-right"
              >
                Message
              </label>
              <textarea
                id="Message"
                rows="6"
                type="text"
                name="Message"
                placeholder="Enter your message"
                required="required"
                class="highlight text-gray-700 dark:text-gray-200 dark:bg-gray-800 dark:border-dark-light block w-fit bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-primary dark:focus:border-gray-500 mb-2 p-4 right-column"
              ></textarea>
            </div>
            <div class="row">
              <div
                v-if="{ btnActive }"
                class="flex flex-center w-full highlight"
              >
                <v-btn type="submit" class="shadow border-1 py-3 px-8 rounded">
                  <h1 class="highlight">Submit</h1>
                </v-btn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'ContactMe',
  props: {
    title: {
      type: String,
      default: 'Contact Me',
    },
  },

  data() {
    return {
      message: '',
      timerCount: 0,
      btnActive: true,
    }
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        } else {
          this.btnActive = true
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },

  methods: {
    submit(event) {
      const data = new FormData(event.target)
      this.$axios
        .$post('https://formspree.io/f/xrgvbzok', data)
        .then((response) => {
          this.timerCount = 5000
          this.message = 'Thank you for getting in touch!'
          this.btnActive = false
          event.target.reset()
        })
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/mixins.scss';
@import '@/assets/variables.scss';
.splash {
  @include splash;
}
.highlight {
  @include highlight;
}
.bolden {
  @include bolden;
}
.wrapper {
  display: inline-block;
}
.cardColor {
  @include cardColor;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.left-column {
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  flex: 1;
  width: 50%;
}

.right-column {
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  flex: 2;
  width: 50%;
}
</style>
