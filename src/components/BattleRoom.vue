<template>
  <div >
    <h2>My Username {{player}}</h2>
    <h2>My Point {{point}}</h2>
    <h2>Ready Player One: {{ready}}</h2>
    <h2>Player Two Username {{playerTwo}}</h2>
    <h2>Player Two  Point {{pointTwo}}</h2>
    <h2>Ready Player Two: {{readyTwo}}</h2>
    <div class="btn-player-one">
      <button v-if="button.button1" v-shortkey="['arrowleft']" @shortkey="clickLeftPlayerOne">kiri</button>
      <button disabled="" v-else>kiri</button>
      <button v-if="button.button2" v-shortkey="['arrowup']" @shortkey="clickUpPlayerOne" >atas</button>
      <button disabled="" v-else>atas</button>
      <button v-if="button.button3" v-shortkey="['arrowdown']" @shortkey="clickDownPlayerOne">bawah</button>
      <button disabled="" v-else>bawah</button>
      <button v-if="button.button4" v-shortkey="['arrowright']" @shortkey="clickRightPlayerOne">kanan</button>
      <button disabled="" v-else>kanan</button>
    </div>
    <div class="game-start" v-if="!ready && !gameOver">
      <button @click="playerReady"> Ready</button>
    </div>
    <h2 v-if="gameOver">Gamve Over</h2>
    <router-link to="/home" v-if="gameOver"> Back To Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'BattleRoom',
  data () {
    return {
      player: localStorage.username,
      playerTwo: localStorage.usernameEnemy,
      point: 0,
      pointTwo: 0,
      ready: false,
      readyTwo: false,
      gameOver: false,
      button: {
        button1: false,
        button2: false,
        button3: false,
        button4: false
      },
      buttonNumber: 0
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    get_player_point: function (val) {
      if (val.player !== this.player) {
        this.pointTwo = val.point
      }
    },
    send_random_button_player_1: function (val) {
      this.changeButtonStatePlayer1(val)
    },
    all_player_ready: function (val) {
      if (val.player !== this.player) {
        this.readyTwo = val.ready
      }
      if (this.ready && this.readyTwo) {
        this.startGame()
      }
    }
  },
  methods: {
    clickDownPlayerOne () {
      this.point++
    },
    clickUpPlayerOne () {
      this.point++
    },
    clickRightPlayerOne () {
      this.point++
    },
    clickLeftPlayerOne () {
      this.point++
    },
    clickLeftPlayerOneMinus () {
      this.point--
    },
    getButtonPressed () {
      this.$socket.emit('random_button_player_1')
      this.$socket.emit('player_point', { player: this.player, point: this.point })
    },
    playerReady () {
      const app = this
      app.ready = true
      app.gameOver = false
      this.$socket.emit('player_ready', {player: this.player, ready: this.ready})
    },
    startGame () {
      const app = this
      let intervalGame = setInterval(function () {
        app.getButtonPressed()
      }, 500)
      setTimeout(function () {
        clearInterval(intervalGame)
        app.button = {
          button1: false,
          button2: false,
          button3: false,
          button4: false
        }
        app.gameOver = true
        app.ready = false
        app.readyTwo = false
        localStorage.removeItem('usernameEnemy')
        app.sendPlayerPoint()
      }, 10000)
    },
    sendPlayerPoint () {
      this.$http.post('/leaderboards', {username: this.player, score: this.point}).then(res => {
        console.log(res.data)
      }).catch(err => console.log(err))
    },
    generateID () {
      var text = ''
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      return text
    },
    changeButtonStatePlayer1 (number) {
      this.button = {
        button1: false,
        button2: false,
        button3: false,
        button4: false
      }
      this.button[`button${number}`] = true
      if (this.gameOver) {
        this.getButtonPressed()
        this.button = {
          button1: false,
          button2: false,
          button3: false,
          button4: false
        }
      }
    }
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
