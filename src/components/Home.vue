<template>
  <div class="container player-list">
    <div class="row" v-for="(player, index) in players" :key=index>
      <div class="col-md-4">
        <ul class="list-group">
          <li class="list-group-item list-group-item-action">
            {{player}}
          </li>
        </ul>
      </div>
      <div class="col-md-2">
        <button class="btn btn-outline-success">
          <i class="fab fa-playstation fa-2x"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      player: '',
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
        if (this.players.indexOf(val) === -1 ){
          this.players.push(val)
        }
      }
    }
  },
  created () {
    this.generateId()
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
div.player-list
{
  padding-top: 15px;
}
.col-md-2
{
  flex:0 0 0!important;
}
</style>
