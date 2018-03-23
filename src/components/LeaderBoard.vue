<template>
  <!-- <div class="container"> -->
    <div class="leaderboard">
      <h2><i class="fas fa-trophy"></i><span> Leader Board Scores</span></h2>
      <div class="tablescore">
        <div class="table-title">
          <div class="thead">
            Rank
          </div>
          <div class="thead">
            Username
          </div>
          <div class="thead"> Score
          </div> </div>
        <div class="table-body" v-for='(score, index) in leaders' :key='index'>
          <div class="thead">
            {{index+1}}
          </div>
          <div class="thead">
            {{score.username}}
          </div>
          <div class="thead"> {{score.score}}
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'LeaderBoard',
  created: function () {
    this.showLeaders()
  },
  computed: mapState(['leaders']),
  methods: {
    ...mapActions(['showLeaders'])
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
  border: 10px solid transparent;
  /* padding: 15px; */
  -webkit-border-image: url(https://www.w3schools.com/cssref/border.png) 30 round;
  -o-border-image: url(https://www.w3schools.com/cssref/border.png) 30 round;
  border-image: url(https://www.w3schools.com/cssref/border.png) 30 round;
}
.table-title
{
  border-bottom: 1px solid black;
  background-color: rgb(253, 185, 11);
  align-items: center;
  font-weight: bold;
  padding-bottom: 10px;
  padding-top:  10px;
  padding-left: 5px;
  padding-right: 5px;
  /* margin-left: 10%; */
  /* margin-right: 10%; */
}
.table-title
{
  display: grid;
  grid-template-columns: 45px auto 80px;
}
.table-body

{
  display: grid;
  grid-template-columns: 45px auto 80px;
  padding: 5px;
}
.fa-trophy{
  color: gold;
  text-shadow: 2px 2px 2px goldenrod;
}
span {
  text-shadow: 2px 2px 2px grey;
}

</style>
