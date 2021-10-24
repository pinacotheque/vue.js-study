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
    }
  }
});

app.mount('#user-goals');
