<template>
    <form @submit.prevent = "submitFriend">
        <div>
            <label> Name </label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label> Phone </label>
            <input type="tel" v-model="enteredPhone">
        </div>
        <div>
            <label> E-Mail </label>
            <input type="email" v-model="enteredEmail">
        </div>
        <button>Add Friend</button>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitFriend() {
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
        }
    }
}
</script>