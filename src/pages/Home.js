import TableRow from "../components/TableRow/TableRow.vue";
import { useLogStore } from '../stores/logs';

export default {
  components: {
    TableRow,
  },
  data() {
    return {
      logStore: null,
    }
  },
  mounted() {
    this.logStore = useLogStore();
    this.logStore.$onAction(
      ({
        name, // name of the action
        store, // store instance, same as `someStore`
        after, // hook after the action returns or resolves
        onError, // hook if the action throws or rejects
      }) => {

        // this will trigger if the action succeeds and after it has fully run.
        // it waits for any returned promised
        after((_) => {
          if (name === "set_file_lines") {
            console.log("File lines loaded...")
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
  }
}