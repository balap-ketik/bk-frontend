<template>
  <div class="container">
    <div class="offset-md-6">
      <h2><span><i class="fas fa-trophy"></i></span> Leader Board Scores</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(score,i) in leaders" :key="i">
            <td>{{i+1}}</td>
            <td>{{score.username}}</td>
            <td>{{score.score}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LeaderBoard',
  data () {
    return {
      leaders: {}
    }
  },
  created: function () {
    this.showLeaders()
  },
  methods: {
    showLeaders: function () {
      let self = this
      axios({
        method: 'get',
        url: 'http://localhost:3000/leaderboards'
      }).then(response => {
        console.log(response)
        self.leaders = response.data.leaders
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
