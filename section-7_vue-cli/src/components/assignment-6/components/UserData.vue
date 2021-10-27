<template>
    <form @submit.prevent="submitUser">
        <div>
        <label> Name: </label>
        <input type="text" v-model="enteredName">
        </div>
        <div>
        <label> Age: </label>
        <input type="text" v-model="enteredAge">
        </div>
        <button>Add User</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredAge: ''
        }
    },
    methods: {
        submitUser() {
            this.$emit('add-user', this.enteredName, this.enteredAge)
        }
    }
}
</script>