<template>
  <div class="container player-list">
    <div class="row">
      <div class="col-md-6">
        <div class="list-group" v-for="(player, index) in players" :key=index>
          <li class="list-group-item list-group-item-action">
            {{player.username}}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      players: [{
      //   username: 'SUBROTO'
      // }, {
      //   username: 'SUBAGJA'
      // }, {
      //   username: 'SUMANTO'
      }]
    }
  },
  created () {
    axios.post('http://localhost:3000//', {

    })
  }

}
</script>

<style>
div.player-list
{
  padding-top: 15px;
}
</style>
