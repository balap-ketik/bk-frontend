<template>
  <div class="hello">
    <button id="join" @click="invite(player)">Join Battle</button>
    <!--  2 -->
    <!-- pop up confirmation untuk join battle di room -->
    <!-- if yes, maka jalankan function -->
    <!-- if no -->
    <!-- Trigger/Open The Modal -->
    <button id="myBtn" @click="showInvite">Open Modal</button>
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <i class="fas fa-exclamation-triangle"></i>
        <span @click="close" class="close">&times;</span>
        <p id="text_challange"><b>{{player}}</b> want to challange you!!! <br><br> Do you dare?</p>
        <button class="yes-button" @click='acceptChallenge'>YES</button>
        <button class="no-button" @click='rejectChallenge'>NO</button>
      </div>
    </div>

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
    },
    close: function () {
      let modal = document.getElementById('myModal')
      modal.style.display = 'none'
    },
    showInvite: function () {
      let modal = document.getElementById('myModal')
      modal.style.display = 'block'
    }
  },
  sockets: {
    // 2nd user ----- home ---- 2
    confirmation: function (user) {
      // receive notification if another user invites to play
      if (user.usernameEnemy === this.user) {
        localStorage.setItem('usernameEnemy', user.username)
        // show pop-up modal
        this.showInvite()
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
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
    background-color: #f1f1f2;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 50%; /* Could be more or less, depending on screen size */
    border-radius: 25px;
    animation: shake 0.8s cubic-bezier(.36,.07,.19,.97) both;
    animation-iteration-count: infinite;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
}

/* The Close Button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

#text_challange {
  padding : 10px;
  color: black;
  font-size: 20px;
}

.fa-exclamation-triangle {
  color: red;
  font-size: 30px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

.yes-button{
  padding: 10px;
  padding-right: 40px;
  padding-left: 40px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: green;
  color: white;
  border-color: green;
  cursor: pointer;
}

.no-button{
  padding: 10px;
  padding-right: 40px;
  padding-left: 40px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color:red;
  color: white;
  border-color:red;
  cursor: pointer;
}
.no-button:hover {
  background: red;
  box-shadow: 2px 2px 2px #f70025;
  border-bottom: 2px solid #f70025;
  transition: all 0.3s ease-in;
}
.yes-button:hover {
  background: green;
  box-shadow: 2px 2px 2px rgb(6, 168, 6);
  border-bottom: 2px solid rgb(6, 168, 6);
  transition: all 0.3s ease-in;
}
</style>
