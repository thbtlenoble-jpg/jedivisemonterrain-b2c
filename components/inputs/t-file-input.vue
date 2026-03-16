<template>
  <div>
    <input
      id="fileInput"
      class="hidden"
      type="file"
      multiple
      accept="image/*,application/pdf"
    />
    <div
      class="dropbox border-dotted border-2 rounded-md overflow-y-scroll"
      style="max-height: 200px"
    >
      <!-- If there is no file -->
      <div
        v-if="files.length === 0"
        class="text-center text-grey02 py-4 cursor-pointer h-full"
        @click="choseFiles"
      >
        <fa-icon :icon="['fas', 'upload']" class="text-xl" />
        <p class="md:text-h3-sm">Déposez vos documents ici</p>
        <span class="block md:text-h4-sm"
          >(Photos du terrain, titre de propriété, CU,...)</span
        >
      </div>
      <!-- If there is at least 1 uploaded file -->
      <div v-else class="flex flex-wrap">
        <!-- File -->
        <div
          v-for="(file, index) of files"
          :key="index"
          class="w-full p-2 mx-2 border-dashed border-1 cursor-not-allowed mt-2"
          @click="removeFile(index)"
        >
          <span class="block">{{ file.name }}</span>
        </div>
        <!-- + Button -->
        <div
          class="cursor-pointer mx-2 w-full border-dashed border-1 text-h1-lg text-center my-2"
          @click="choseFiles"
        >
          +
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import $ from 'jquery'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      files: [] as any,
    }
  },
  mounted() {
    const inputElement = $('#fileInput')[0]
    inputElement.addEventListener(
      'change',
      (event: any) => {
        this.addFiles(event.srcElement.files)
      },
      false
    )
    const dragenter = (e: any) => {
      $('.dropbox').addClass('hover')
      e.stopPropagation()
      e.preventDefault()
    }
    const dragover = (e: any) => {
      $('.dropbox').removeClass('hover')
      e.stopPropagation()
      e.preventDefault()
    }
    const drop = (e: any) => {
      e.stopPropagation()
      e.preventDefault()
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        this.files.push(e.dataTransfer.files[i])
      }
    }
    const dropbox = $('.dropbox')[0]
    dropbox.addEventListener('dragenter', dragenter, false)
    dropbox.addEventListener('dragover', dragover, false)
    dropbox.addEventListener('drop', drop, false)
  },
  methods: {
    choseFiles() {
      $('#fileInput').click()
    },
    addFiles(files: []) {
      for (const file of files) {
        this.files.push(file)
      }
      this.$emit('files', this.files)
    },
    removeFile(index: any) {
      this.files.splice(index, 1)
    },
  },
})
</script>

<style>
.hover {
  background-color: rgb(249, 255, 255);
}
.dropbox::-webkit-scrollbar {
  display: none;
}
.dropbox {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
