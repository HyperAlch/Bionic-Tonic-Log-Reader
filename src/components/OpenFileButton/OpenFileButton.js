import { open } from '@tauri-apps/api/dialog';
  import { homeDir } from '@tauri-apps/api/path';
  import { readDir } from '@tauri-apps/api/fs';
  
  import { useFileStore } from '../../stores/files'


  export default {

    data() {
      return {
        fileStore: null,
      }
    },
    mounted: function() {
      this.fileStore = useFileStore();
    },
    methods: {
      async getFolder() {
        const selectedPath = await open({
          directory: true,
          multiple: false,
          defaultPath: await homeDir(),
        });
        
        if (selectedPath !== null) {
          this.fileStore.filesPath = selectedPath
          const entries = await readDir(selectedPath, { recursive: false });
          const logFiles = entries.filter(f => f.name.endsWith(".log"))
          
          this.fileStore.set_files(logFiles)
        }
      }
    },
  } 