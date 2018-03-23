<template>
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
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
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
  /* margin-bottom: 0.85em; */
  /* margin-top: -0.65em; */
}
</style>
