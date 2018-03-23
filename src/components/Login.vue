<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1400 300">
      <!-- Symbol -->
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="50%" dy=".35em">
            AYO JOGET
        </text>
      </symbol>
      <!-- Duplicate symbols -->
      <use xlink:href="#s-text" class="text"></use>
      <use xlink:href="#s-text" class="text"></use>
      <use xlink:href="#s-text" class="text"></use>
      <use xlink:href="#s-text" class="text"></use>
      <use xlink:href="#s-text" class="text"></use>
    </svg>
    <div class="user-form">
      <form v-on:submit.prevent="login">
        <div class="username">
          <input type="text"
          class="form-control animated-search"
          v-model="userInput"
          placeholder="Enter your username.."
          v-validate="'min:4'"
          name="username">
          <transition name="alert-in">
            <p class="alert" v-if="errors.has('username')">{{ errors.first('username') }}</p>
          </transition>
        </div>
      </form>
    </div>

    <div class="login">
      <a @click="login" class="button">Login</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      userInput: ''
    }
  },
  methods: {
    login: function () {
      // console.log(this.userInput)
      this.$validator.validateAll().then((val) => {
        if (val) {
          this.$http.post('/users', {username: this.userInput})
            .then(user => {
              console.log(user)
              localStorage.setItem('username', this.userInput)
              // change this router to home/dashboard page
              this.$router.push('/home')
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          console.log('not valid')
        }
      })
    }
  }
}
</script>

<style scooped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.login {
  margin-top: 0.25em;
  font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
  z-index: -1;
}
div.login {
  margin-top: 0.5em;
  line-height: 15px;
}

.button {
  display: inline-block;
  padding: 15px;
  margin-right: 5px;
  height: 15px;
  min-width: 80px;
  background: #348AA7;
  border: none;
  outline: none;
  color: white;
  font-family: inherit;
  font-weight: 400;
  font-size: 15px;
  border-radius: 3px;
  box-shadow: 0 5px 0px #348aa7;
  border-bottom: 2px solid #30809b;
  margin-top: 3em;
}
.button:hover {
  background: #2e7a94;
  box-shadow: 0 4px 1px #2e7a94;
  border-bottom: 2px solid #2a7088;
  transition: all 0.3s ease-in;
}
.button:active{
  transform: translateY(4px);
  border-bottom-width: 2px;
  box-shadow: none;
}
.username input {
  -webkit-box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  margin-top: 1em;
  position: center;
  outline: none;
  text-align:center;
  background-size: 35px;
  height: 60px;
  width: 300px;
  border-radius: 1px;
  background-color: #ffffff;
  color: #9b9b9b !important;
  font-size: 18px !important;
  border: none;
  border-radius: 10px 10px 10px 10px;
  font-family: 'Plain Light', sans-serif;
  -webkit-transition: width 0.5s ease-in-out;
  -moz-transition: width 0.5s ease-in-out;
  -o-transition: width 0.5s ease-in-out;
  transition: width 0.5s ease-in-out;
  z-index: 5;
}

input[type="text"].animated-search::-webkit-input-placeholder {
  color: #9B9B9B;
  font-family: 'Plain-light', sans-serif;
  font-weight: lighter;
  font-size: 18px;
  line-height: 18 !important;
  text-align: center;
}

.animated-search:focus {
  width: 450px;
  border-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
}
p.alert-in-enter-active {
  /* margin-top:2em; */
  font-size: 15px;
  animation: bounce-in .9s;
  color:red;
}
p.alert-in-leave-active {
  /* margin-top:2em; */
  font-size: 15px;
  animation: bounce-in .9s reverse;
  color:red;
}

p {
  margin-top:2em;
  font-size: 15px;
  color:red;
  overflow: hidden;
}

@keyframes bounce-in {
  0% {
      transform: scale(0)
  }
  50% {
      transform: scale(1.25)
  }
  100% {
      transform: scale(1)
  }
}

/* Main styles */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);
.text {
  fill: none;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-dasharray: 70 330;
  stroke-dashoffset: 0;
  -webkit-animation: stroke 6s infinite linear;
  animation: stroke 6s infinite linear;
}

.text:nth-child(5n + 1) {
  stroke: #F2385A;
  -webkit-animation-delay: -1.2s;
  animation-delay: -1.2s;
}

.text:nth-child(5n + 2) {
  stroke: #F5A503;
  -webkit-animation-delay: -2.4s;
  animation-delay: -2.4s;
}

.text:nth-child(5n + 3) {
  stroke: #E9F1DF;
  -webkit-animation-delay: -3.6s;
  animation-delay: -3.6s;
}

.text:nth-child(5n + 4) {
  stroke: #56D9CD;
  -webkit-animation-delay: -4.8s;
  animation-delay: -4.8s;
}

.text:nth-child(5n + 5) {
  stroke: #3AA1BF;
  -webkit-animation-delay: -6s;
  animation-delay: -6s;
}

@-webkit-keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
/* Other styles */
/* html, body {
  height: 100%;
} */

body {
  /* background: #111; */
  /* background-size: 1.2em 100%; */
  font: 9.5em/1 'Open Sans', Impact;
  /* text-transform: uppercase; */
  /* margin: 0; */
}

svg {
  /* position: absolute; */
  width: 100%;
  height: 100%;
  margin-bottom: -0.85em;
}
</style>
