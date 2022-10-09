import { useFileStore } from '../../stores/files'
import { useLogStore } from '../../stores/logs'

  export default {
    data() {
      return {
        fileStore: null,
        logStore: null,
        fileNames: [],
        reload: false,
      }
    },
    mounted: function() {
      this.fileStore = useFileStore();
      this.logStore = useLogStore();
      let self = this;
      this.fileStore.$onAction(
      ({
        name, // name of the action
        store, // store instance, same as `someStore`
        after, // hook after the action returns or resolves
        onError, // hook if the action throws or rejects
      }) => {

        // this will trigger if the action succeeds and after it has fully run.
        // it waits for any returned promised
        after((_) => {
          if (name === "set_files") {
            const amountOfFiles = store.get_length();
            self.fileNames = [];
            self.$nextTick(function () {
              for (let i = 0; i < amountOfFiles; i++) {
                self.fileNames.push(store.get_name(i));
              }
            })
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
    methods: {
      select_file(event) {
        this.logStore.set_selected_file(event.target.innerText)
      }
    },
  } 