<template>
  <div>
    <div class="title">
      <h1>Ayo Joget</h1>
    </div>

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
import axios from 'axios'

// change baseUrl when deployed
let axiosInstance = axios.create({
  baseURL: 'http://localhost:3000'
})

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
          axiosInstance.post('/users', {username: this.userInput})
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

h1 {
  font-family: 'Open Sans', 'Montserrat', 'Arial', sans-serif;
  color: white;
  font-size: 120px;
  margin: 0;
}

.login {
  font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
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
  margin-top: 3em;
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
.alert-in-enter-active {
    animation: bounce-in .9s;
    color:red;
}
.alert-in-leave-active {
    animation: bounce-in .9s reverse;
    color:red;
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

</style>
