import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'
import OpenFileButton from './components/OpenFileButton/OpenFileButton.vue'
import FileEntry from './components/FileEntry/FileEntry.vue'
import RefreshFiles from './components/RefreshFiles/RefreshFiles.vue'
import { useLogStore } from './stores/logs'
import { useFileStore } from './stores/files'
import { readTextFile } from '@tauri-apps/api/fs';


const routes = {
  '/': Home,
  '/about': About
}

export default {
  data() {
    return {
      currentPath: window.location.hash,
      logStore: null,
      fileStore: null,
      selected_file_name: "",
      file_contents: [],
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
    
    this.logStore = useLogStore()
    this.fileStore = useFileStore()
    
    this.logStore.$onAction(
      async ({
        name, // name of the action
        store, // store instance, same as `someStore`
        after, // hook after the action returns or resolves
        onError, // hook if the action throws or rejects
      }) => {

        // this will trigger if the action succeeds and after it has fully run.
        // it waits for any returned promised
        after(async (_) => {
          if (name === "set_selected_file") {  
            this.selected_file_name = store.selected_file
            let contents = await readTextFile(`${this.fileStore.filesPath}/${store.selected_file}`);
            console.log("File loaded into string...")
            contents = contents.split('\n')
            contents = contents.filter((line) => line !== "")
            console.log("Lines split and filtered...")
            for (let i = 0; i < contents.length; i++) {
              let contents_array = contents[i].split(" | ")
              this.file_contents.push({
                day: contents_array[0],
                time: contents_array[1],
                type: contents_array[2],
                source: contents_array[3],
                target: contents_array[4],
                message: contents_array[5],
              }) 
            }
            
            if (contents.length === 0) {
              this.file_contents = []
            }
            store.set_file_lines(this.file_contents)
            // TODO: Fix bug where more lines are loaded than should be
            
          }
        })

        // this will trigger if the action throws or returns a promise that rejects
        onError((error) => {
          console.warn(
            `Failed "${name}" ms.\nError: ${error}.`
          )
        })
      }
    )
    
  },
  components: {
    OpenFileButton,
    FileEntry,
    RefreshFiles,
  }}