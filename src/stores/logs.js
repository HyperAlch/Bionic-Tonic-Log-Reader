import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLogStore = defineStore('logs', () => {
  const selected_file = ref("")
  const file_lines = ref([])

  function set_selected_file(file_name) {
    this.selected_file = file_name
  }
  
  function set_file_lines(file_lines) {
    this.file_lines = file_lines
  }
  
  return { selected_file, set_selected_file, file_lines, set_file_lines }
})