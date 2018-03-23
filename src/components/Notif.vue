<template>
  <div class="hello">
    <button class="pulse" @click="invite(player)">CHALLENGE</button>
    <!--  2 -->
    <!-- pop up confirmation untuk join battle di room -->
    <!-- if yes, maka jalankan function -->
    <!-- if no -->
    <!-- Trigger/Open The Modal -->
    <!-- <button id="myBtn" @click="showInvite">Open Modal</button> -->
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span @click="close" class="close">&times;</span>
        <p>Some text in the Modal..</p>
        <button @click='acceptChallenge'>yes</button>
        <button @click='rejectChallenge'>no</button>
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
<style>
div.hello
{
  align-items: center;
}
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
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 50%; /* Could be more or less, depending on screen size */
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

.pulse {
  color: whitesmoke;
  font-family: futura;
  font-weight: bolder;
  margin-right: 0;
  display: block;
  width: 100px;
  height: 30px;
  border-radius: 10%;
  background: green;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(204,169,44, 0.4);
  animation: pulse 2s infinite;
}
.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(212, 28, 21, 0.4);
    box-shadow: 0 0 0 0 rgba(202, 16, 16, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(223, 11, 11, 0);
      box-shadow: 0 0 0 10px rgba(223, 11, 11, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(223, 11, 11, 0);
      box-shadow: 0 0 0 0 rgba(223, 11, 11, 0);
  }
}
</style>
