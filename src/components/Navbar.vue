<template>
  <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="color:whitesmoke!important;">
              CATEGORY
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <ul class="dropdown-item pl-1">
              <a class="dropdown-item" href="#">{{category}}</a>
            </ul>
            <!-- <div class="dropdown-divider"></div> -->
          </div>
        </li>
      </ul>
    <a class="navbar-brand" style="font-family:futura;font-style:italic;"><strong>JUST BLOG IT!!</strong></a>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            USER</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarUser">
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item" href="#">Other</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" style="background-color:red;" >Logout</a>
            </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav
{
  background-color: rgb(253, 185, 11);
  color: whitesmoke!important;
}
</style>
