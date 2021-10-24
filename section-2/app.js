const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn',
            courseGoalB: 'Master the course and learn',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if (randomNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
})
app.mount('#user-goal')


const app2 = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        }
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name
        },
        submitForm() {
            //e.preventDefault() --> v-on:submit.prevent
            alert('submitted')
        },
        setName(e, lastName) {
            this.name = e.target.value + ' ' + lastName
        },
        add(num) {
            this.counter = this.counter + num
        },
        reduce(num) {
            this.counter = this.counter - num
        }
    }
})
app2.mount('#events')