import { createApp } from 'vue';
import App from './components/assignment-6/App.vue'
//import FriendContact from './components/FriendComponent.vue'
//import NewFriend from './components/NewFriend.vue'
const app = createApp(App)

//app.component('friend-contact', FriendContact)
//app.component('new-friend', NewFriend)


// for Assignment-6
import UserData from './components/assignment-6/components/UserData.vue'
import ActiveUser from './components/assignment-6/components/ActiveUser.vue'

app.component('add-user', UserData)
app.component('active-user', ActiveUser)


app.mount('#app');
