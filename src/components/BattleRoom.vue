<template>
  <div>
    <audio id="track">
      <source src="@/assets/track.mp3" type="audio/mpeg">
    </audio>
    <div class="playersection">
      <div class="playerone">
        <h2>{{player}}</h2>
        <div class="hit-the-floor">{{point}}</div>
        <h2 v-if="!ready">Not Ready</h2>
        <h2 v-else>Ready</h2>
      </div>
      <div class="playimage">
        <img id="playimage" src="@/assets/simpsons.gif" alt="">
      </div>
      <div class="playertwo">
        <h2>{{playerTwo}}</h2>
        <div class="hit-the-floor">{{pointTwo}}</div>
        <h2 v-if="!readyTwo">Not Ready</h2>
        <h2 v-else>Ready</h2>
      </div>
    </div>
    <div class="btn-player-one">
      <button class="button" v-if="button.button1" v-shortkey="['arrowleft']" @shortkey="clickLeftPlayerOne">
        <img src="@/assets/arrow.png" alt="bawah" width="20px" height="auto" style="transform: rotate(-270deg)">
      </button>
      <button class="button" id="disable" disabled="" v-else>
        <img src="@/assets/arrow.png" alt="bawah" width="20px" height="auto" style="transform: rotate(-270deg)">
      </button>
      <button class="button" v-if="button.button2" v-shortkey="['arrowup']" @shortkey="clickUpPlayerOne">
        <img src="@/assets/arrow.png" alt="bawah" width="20px" height="auto" style="transform: rotate(180deg)">
      </button>
      <button class="button" id="disable" disabled="" v-else>
        <img src="@/assets/arrow.png" alt="bawah" width="20px" height="auto" style="transform: rotate(180deg)">
      </button>
      <button class="button" v-if="button.button3" v-shortkey="['arrowdown']" @shortkey="clickDownPlayerOne">
        <img src="@/assets/arrow.png" alt="bawah" width="20px" height="auto">
      </button>
      <button class="button" id="disable" disabled="" v-else>
        <img src="@/assets/arrow.png" alt="bawah" width="20px" height="auto">
      </button>
      <button class="button" v-if="button.button4" v-shortkey="['arrowright']" @shortkey="clickRightPlayerOne">kanan</button>
      <button class="button" id="disable" disabled="" v-else>
        <img src="@/assets/arrow.png" alt="bawah" width="20px" height="auto" style="transform: rotate(-90deg)">
      </button>
    </div>
    <div class="game-start" v-if="!ready && !gameOver">
      <a class="button" @click="playerReady"> Ready</a>
    </div>
    <h2 id="gameover" v-if="gameOver">Game Over</h2>
    <router-link to="/home" v-if="gameOver"> Back To Home</router-link>
  </div>
</template>

<script>
// import swal from 'sweetalert'
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
        this.playtrack()
      }
    }
  },
  created: function () {
    let img = document.getElementById('playimage')
    console.log(img)
    img.display.style = 'none'
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
      }, 120000)
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
    },
    playtrack () {
      var x = document.getElementById('track')
      x.play()
    },
    stoptrack () {
      var x = document.getElementById('track')
      x.pause()
      x.currentTime = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2{
  font-size: 30px;
}
#disable {
  background: #348AA7;
  box-shadow: 0 5px 0px #348aa7;
  border-bottom: 2px solid #30809b;
  transform: translateY(-4px);
  transition: all 0.1s ease-in;
}
#disable:hover {
  background: #2e7a94;
  box-shadow: 0 4px 1px #2e7a94;
  border-bottom: 2px solid #2a7088;
}

.button {
  display: inline-block;
  padding: 15px;
  margin-right: 5px;
  height: 15px;
  min-width: 80px;
  background: red;
  border: none;
  outline: none;
  color: white;
  font-family: inherit;
  font-weight: 400;
  font-size: 15px;
  border-radius: 3px;
  box-shadow: 0 5px 0px #a74134;
  border-bottom: 2px solid #9b3030;
  margin-top: 3em;
}
.button:hover {
  background: red;
  box-shadow: 0 4px 1px #942e2e;
  border-bottom: 2px solid #882a2a;
  transition: all 0.3s ease-in;
}
.button:active{
  transform: translateY(4px);
  border-bottom-width: 2px;
  box-shadow: none;
}
a {
  font-size: 20px;
  text-decoration: none;
}
a:visited {
  text-decoration: none;
  color: inherit;
}

.btn-player-one {
  margin-top: -0.5em;
}

button > img {
  position: absolute;
  left:30px;
  bottom: 8px
}

.hit-the-floor {
color: #fff;
font-size: 250px;
font-weight: bold;
font-family: Helvetica;
text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
}

.hit-the-floor {
  text-align: center;
}

.playersection {
  /* margin: 0.5em 1em; */
  margin-left: 1em;
  margin-right: 1em;
  margin-top: -0.25em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px
}

.playersection > div {
  display: flex;
  flex-direction: column;
}
.game-start {
  margin-top: -0.5em;
}

</style>
