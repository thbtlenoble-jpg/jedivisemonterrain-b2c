<template>
  <transition name="fade">
    <div
      v-if="show"
      class="cursor-pointer rounded-sm fixed z-50 bottom-0 left-0 right-0 bg-grey01 m-2 p-2"
      @click="accept()"
    >
      En continuant votre navigation sur ce site, vous acceptez les cookies
      <span class="ml-5">OK ({{ timer }})</span>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      timer: 5,
    }
  },
  created() {
    // FIX : persistance localStorage — ne réapparaît plus à chaque visite
    if (process.client) {
      const accepted = localStorage.getItem('cookies_accepted')
      if (accepted) {
        this.show = false
        return
      }
      this.show = true
      this.startTimer()
    }
  },
  methods: {
    startTimer() {
      const interval = setInterval(() => {
        this.timer--
        if (this.timer <= 0) {
          clearInterval(interval)
          this.accept()
        }
      }, 1000)
    },
    accept() {
      this.show = false
      if (process.client) {
        localStorage.setItem('cookies_accepted', '1')
      }
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
