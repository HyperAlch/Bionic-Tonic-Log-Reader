import { readDir } from '@tauri-apps/api/fs';
  import { useFileStore } from '../../stores/files'
  export default {
    data() {
      return {
        fileStore: null,
        fileNames: [],
        reload: false,
      }
    },
    mounted: function() {
      this.fileStore = useFileStore();
       
    },
    methods: {
      async refreshFiles() {
        if (this.fileStore.filesPath !== "") {
          const entries = await readDir(this.fileStore.filesPath, { recursive: false });
          const logFiles = entries.filter(f => f.name.endsWith(".log"))
          
          this.fileStore.set_files(logFiles)
        }
      }
    },
  } 