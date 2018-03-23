<template>
  <div class="hello">
    <button id="join" @click="invite(player)">Join Battle</button>
    <!--  2 -->
    <!-- pop up confirmation untuk join battle di room -->
    <!-- if yes, maka jalankan function -->
    <!-- if no -->

  </div>
</template>

<script>
export default {
  props: ['player'],
  name: 'Notification',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: '',
      enemy: ''
    }
  },
  methods: {
    // 1st user  -- home -- 1
    invite: function (usernameEnemy) {
      console.log('masuk')
      localStorage.setItem('usernameEnemy', usernameEnemy)
      let username = localStorage.getItem('username')
      console.log(username)
      let battle = {
        // lengkapi harus kirim user socket id juga
        username: username, // herby
        usernameEnemy: usernameEnemy // hari
      }
      this.$socket.emit('invite', battle)
      this.$router.push('/battle-room')
    },
    // 2nd user ---- home --- 3
    acceptChallenge: function () {
      // this.$socket.emit('confirmChallenge', true)
      this.$router.push('/battle-room')
    },
    rejectChallenge: function () {
      let username = localStorage.getItem('username')
      let usernameEnemy = localStorage.getItem('usernameEnemy')
      let user = {
        username,
        usernameEnemy,
        bool: false
      }
      this.$socket.emit('rejectChallenge', user)
      localStorage.removeItem('usernameEnemy')
    }
  },
  sockets: {
    // 2nd user ----- home ---- 2
    confirmation: function (user) {
      // receive notification if another user invites to play
      if (user.usernameEnemy === this.user) {
        localStorage.setItem('usernameEnemy', user.username)
        // show pop-up modal
      }
    },
    // 1st user ---in room--- 4
    inviteRejected: function (user) {
      // pop-up invitation rejected
    }
  },
  created () {
    this.user = localStorage.getItem('username')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
