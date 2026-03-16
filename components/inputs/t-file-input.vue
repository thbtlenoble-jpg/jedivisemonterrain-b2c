<template>
  <div>
    <input
      ref="fileInput"
      class="hidden"
      type="file"
      multiple
      accept="image/*,application/pdf"
      @change="onInputChange"
    />
    <div
      ref="dropbox"
      class="dropbox border-dotted border-2 rounded-md overflow-y-scroll"
      style="max-height: 200px"
    >
      <div
        v-if="files.length === 0"
        class="text-center text-grey02 py-4 cursor-pointer h-full"
        @click="choseFiles"
      >
        <fa-icon :icon="['fas', 'upload']" class="text-xl" />
        <p class="md:text-h3-sm">Déposez vos documents ici</p>
        <span class="block md:text-h4-sm">(Photos du terrain, titre de propriété, CU,...)</span>
      </div>
      <div v-else class="flex flex-wrap">
        <div
          v-for="(file, index) of files"
          :key="index"
          class="w-full p-2 mx-2 border-dashed border-1 cursor-not-allowed mt-2"
          @click="removeFile(index)"
        >
          <span class="block">{{ file.name }}</span>
        </div>
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
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      files: [] as any,
    }
  },
  mounted() {
    // Drag & drop via refs Vue natifs (plus de jQuery)
    const dropbox = this.$refs.dropbox as HTMLElement
    if (!dropbox) return
    dropbox.addEventListener('dragenter', (e: any) => {
      dropbox.style.backgroundColor = 'rgb(249,255,255)'
      e.stopPropagation(); e.preventDefault()
    }, false)
    dropbox.addEventListener('dragover', (e: any) => {
      e.stopPropagation(); e.preventDefault()
    }, false)
    dropbox.addEventListener('drop', (e: any) => {
      e.stopPropagation(); e.preventDefault()
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        this.files.push(e.dataTransfer.files[i])
      }
      this.$emit('files', this.files)
    }, false)
    dropbox.addEventListener('dragleave', () => {
      dropbox.style.backgroundColor = ''
    }, false)
  },
  methods: {
    choseFiles() {
      const input = this.$refs.fileInput as HTMLInputElement
      if (input) input.click()
    },
    onInputChange(event: any) {
      this.addFiles(event.target.files)
    },
    addFiles(files: any) {
      for (const file of files) {
        this.files.push(file)
      }
      this.$emit('files', this.files)
    },
    removeFile(index: any) {
      this.files.splice(index, 1)
      this.$emit('files', this.files)
    },
  },
})
</script>

<style>
.dropbox::-webkit-scrollbar { display: none; }
.dropbox { -ms-overflow-style: none; scrollbar-width: none; }
</style>
