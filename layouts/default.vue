<template>
  <div class="relative">
    <Navbar class="sticky top-0 z-40" />
    <Nuxt />
    <!--Footer -->
    <Footer />

    <Cookies />
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style>
@media (min-width: 1401px) {
  .toasted-container.top-right {
    top: 70px !important;
    right: 70px !important;
  }
  .toasted .primary,
  .toasted.toasted-primary {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) !important;
    border-radius: 5px !important;
    padding: 10px 15px !important;
    font-size: 15px !important;
    min-height: auto !important;
  }
  .toasted-container .toasted {
    margin-top: 0 !important;
    margin-bottom: 10px !important;
  }
}
@media (max-width: 1400px) {
  .toasted-container.top-right {
    top: 50px !important;
    right: 50px !important;
  }
  .toasted .primary,
  .toasted.toasted-primary {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) !important;
    border-radius: 5px !important;
    padding: 10px 15px !important;
    font-size: 12px !important;
    min-height: auto !important;
  }
  .toasted-container .toasted {
    margin-top: 0 !important;
    margin-bottom: 10px !important;
  }
}
@media (max-width: 1024px) {
  .toasted-container.top-right {
    top: 30px !important;
    right: 30px !important;
  }
  .toasted .primary,
  .toasted.toasted-primary {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) !important;
    border-radius: 5px !important;
    padding: 10px 10px !important;
    font-size: 12px !important;
    min-height: auto !important;
  }
  .toasted-container .toasted {
    margin-top: 0 !important;
    margin-bottom: 10px !important;
  }
}
@media (max-width: 600px) {
  .toasted-container.top-right {
    top: 0px !important;
    right: 0px !important;
  }
  .toasted .primary,
  .toasted.toasted-primary {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) !important;
    border-radius: 0px !important;
    padding: 10px 10px !important;
    font-size: 10px !important;
    min-height: auto !important;
  }
  .toasted-container .toasted {
    margin-top: 0 !important;
    margin-bottom: 10px !important;
  }
}
.toasted .primary.info,
.toasted.toasted-primary.info {
  background: #00b9b4 !important;
}
.toasted .primary.error,
.toasted.toasted-primary.error {
  background: #e85d00 !important;
}
.toasted .primary.error,
.toasted.toasted-primary.success {
  background: #65cb00 !important;
}
.toasted .primary,
.toasted.toasted-primary {
  background: #aebbc0 !important;
}
</style>
