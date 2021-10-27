<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <new-friend @add-contact="addContact"></new-friend>
        <ul>
            <friend-contact v-for="friend in friends" 
            :key="friend.id" 
            :id="friend.id"
            :name="friend.name" 
            :phone-number="friend.phone" 
            :email-address="friend.email" 
            :is-favorite="friend.isFavorite"
            @toggle-fav="toggleFavStatus"
            @delete="deleteContact"
            >
            </friend-contact>
        </ul>
    </section>
</template>

<script>
import NewFriend from './components/NewFriend.vue'
export default {
  components: { NewFriend },
    data() {
        return{
            friends: [
                {
                    id: 'Gamze',
                    name: 'Gamze Guneri',
                    phone: '12345 567',
                    email: 'gamze@gmail.com',
                    isFavorite: true
                }
            ]
        }
    },
    methods: {
        toggleFavStatus(friendId) {
           const selectedFriend = this.friends.find((friend) => friend.id === friendId)
           selectedFriend.isFavorite = !selectedFriend.isFavorite
        },
        addContact(name, phone, email){
            const newFriendContact = {
                id: new Date().toISOString(),
                name: name,
                phone: phone,
                email: email,
                isFavorite: false
            }
            this.friends.push(newFriendContact)
        },
        deleteContact(friendId) {
            this.friends = this.friends.filter(friend => friend.id !== friendId)
        }
    }
}
</script>