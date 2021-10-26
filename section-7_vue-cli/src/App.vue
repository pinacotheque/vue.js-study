<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <ul>
            <friend-contact v-for="friend in friends" 
            :key="friend.id" 
            :id="friend.id"
            :name="friend.name" 
            :phone-number="friend.phone" 
            :email-address="friend.email" 
            :is-favorite="friend.isFavorite"
            @toggle-fav="toggleFavStatus">
            </friend-contact>
        </ul>
    </section>
</template>

<script>
export default {
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
        }
    }
}
</script>