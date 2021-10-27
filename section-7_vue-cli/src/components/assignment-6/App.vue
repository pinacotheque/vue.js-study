<template>
    <section>
        <h1>Users</h1>
        <add-user @add-user="addUser"></add-user>
        <ul>
            <active-user v-for ="user in users" 
            :key="user.id"
            :id="user.id"
            :name="user.name"
            :age="user.age"
             ></active-user>
        </ul>
    </section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
export default{
  components: { ActiveUser },
    data() {
        return {
            users: [
                {
                    id: 'user1',
                    name: 'user1',
                    age: '1'
                }
            ]
        }
    },
    methods: {
        addUser(name, age) {
            const newUser = {
                id: new Date().toISOString,
                name:name,
                age:age
            }
            this.users.push(newUser)
        }
    }
}
</script>