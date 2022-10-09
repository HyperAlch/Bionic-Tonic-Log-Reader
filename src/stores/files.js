import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFileStore = defineStore('files', () => {
  const files = ref({})
  const filesPath = ref("")
  function set_files(new_files) {
    this.files = new_files;
  }
  
  function get_name(index) {
    return this.files[index].name
  }
  
  function get_length() {
    return Object.keys(this.files).length
  }

  return { files, set_files, get_name, get_length, filesPath}
})