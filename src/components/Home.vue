<template>
  <div class="container" id="home">
    <div class="players">
      <h1>PLayer List</h1>
      <div class="boardpack" v-for="(player, index) in players" :key=index>
        <div class="playerlist">
          <h3 v-if="player !== ''">{{player}}</h3>
          <h3 v-else>No Online PLayer Available</h3>
        </div>
        <div class="logo">
          <notif :player='player'></notif>
        </div>
      </div>
    </div>
    <div class="leaderboard">
      <leaderboard></leaderboard>
    </div>
  </div>

</template>

<script>
import Notif from '@/components/Notif'
import Leaderboard from '@/components/LeaderBoard'

export default {
  data () {
    return {
      player: localStorage.getItem('username'),
      players: []
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    show_online_player: function (val) {
      console.log('masuk')
      // this.players = val
      console.log(val)
      if (this.player !== val) {
        if (this.players.indexOf(val) === -1) {
          this.players.push(val)
        }
      }
    }
  },
  components: {
    Notif: Notif,
    Leaderboard: Leaderboard
  },
  created () {
    // this.generateId()
    setInterval(() => {
      this.$socket.emit('player_in', this.player)
    }, 1000)
  },
  methods: {
    generateId () {
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i = 0; i < 5; i++) {
        this.player += possible.charAt(Math.floor(Math.random() * possible.length))
      }
    }
  }

}
</script>

<style>
.container
{
  /* background-color: black; */
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 5em;
}
#home
{
  font-size: 15px;
}
.players
{
  background-color: whitesmoke;
}
.boardpack
{
  display: grid;
  grid-template-columns: 3fr 1fr;
  /* border-bottom: 1px solid rgb(253, 185, 11); */
}
.playerlist
{
  border-right: 1px solid rgb(253, 185, 11);
  border-top: 1px solid rgb(253, 185, 11);
}
.logo
{
  margin-top: auto;
  margin-bottom: auto;
}
.leaderboard
{
  background-color: white;
}
</style>
