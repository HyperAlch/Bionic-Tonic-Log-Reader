import { ref } from "vue";
  import { writeText, readText } from '@tauri-apps/api/clipboard';
  
  export default {
    props: ['number', 'day', 'time', 'type', 'source', 'target', 'message'],
    data() {
      return {
        class_string: ''
      }
    },
    computed: {
     
    },
    methods: {
      getRowColor() {
        let class_dict = {
          'Error': 'table-danger',
          'Warn': 'table-warning',
          'Info': 'table-success',
          'Debug': 'table-info',
          'Trace': 'table-light',
        }
        
        if (class_dict[this.type]) return class_dict[this.type]
        else return ""
      },
      async copyRecord() {
        let output = `[${this.day}][${this.time}][${this.type}] ${this.source} "${this.target}: ${this.message}"`
        await writeText(output);
      }
    },
    mounted() {
      this.class_string = this.getRowColor()
    }
  } 