// conditional rendering --->  v-if v-for 
const app = Vue.createApp({
  data() {
    return {
      addedGoals: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.addedGoals)
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
