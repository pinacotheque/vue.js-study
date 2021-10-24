const app = Vue.createApp({
    data() {
        return {
            task: '',
            tasks: [],
            visibility: true
        }
    },
    computed: {
        buttonCaption() {
            return this.visibility ? 'Hide' : 'Show'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task)
        },
        toggleList() {
            this.visibility = !this.visibility
        }
    }
})

app.mount('#assignment')