<template>
  <!-- <div class="container"> -->
    <div class="leaderboard">
      <h2><i class="fas fa-trophy"></i> Leader Board Scores</h2>
      <div class="tablescore">
        <div class="table-title">
          <div class="thead">
            Rank
          </div>
          <div class="thead">
            Username
          </div>
          <div class="thead">
            Score
          </div>
        </div>
        <div class="table-body" v-for='(score, index) in leaders' :key='index'>
          <div class="thead">
            {{index+1}}
          </div>
          <div class="thead">
            {{score.username}}
          </div>
          <div class="thead">
            {{score.score}}
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
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
.leaderboard
{
  /* align-content: center;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto; */
  padding: 5px;
  background-color: whitesmoke;
}
.table-title
{
  border-bottom: 1px solid black;
  background-color: rgb(253, 185, 11);
  align-items: center;
  /* margin-left: 10%; */
  /* margin-right: 10%; */
}
.table-title
{
  display: grid;
  grid-template-columns: auto auto auto;
}
.table-body
{
  display: grid;
  grid-template-columns: auto auto auto;
}
.fa-trophy{
  color: gold;
}
</style>
