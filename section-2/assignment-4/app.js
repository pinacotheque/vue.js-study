const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            paragraphToggle: true,
            inputBgColor: ''
        }
    },
    computed: {
        paragClass() {
            return {
                visible: this.paragraphToggle,
                hidden: !this.paragraphToggle
            }
        }
    },
    methods: {
        toggleParag() {
            this.paragraphToggle = !this.paragraphToggle
        }
    }
})

app.mount('#assignment')