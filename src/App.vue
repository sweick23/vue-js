<template>
<div id="app">
  <nav class="navbar nav" role="navigation"> 
    <div class="container  has-shadow" role="navigation">
 
        <div class="navbar-start nav-left">
          <a class="navbar-item">MyCompany</a>
        </div>

        <span class="navbar-burger burger" v-on:click="toggleNav" v-bind:class="{'is-active': isActive}" > 
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="navbar-end navbar-menu" v-on:click="toggleNav" v-bind:class="{'is-active': isActive}">

          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="faq" class="navbar-item r-item">Features</router-link>
          <router-link to="faq" class="navbar-item r-item">About</router-link>
          <router-link to="faq" class="navbar-item r-item">FAQ</router-link>

          <div class="navbar-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Join Now</span>
              </a>
            </p>
          </div>

       
      </div>
    </div>
  </nav>
    <router-view></router-view>

    <footer class="footer is-primary">
      <div class="container">
        <div class=" columns">
          <div class="column">
            <p>And this right here is a spiffy footer, where you can put stuff.</p>
          </div>
          <div class="column has-text-right">
           <a class="icon" href="#"><i class="fab fa-facebook-f"></i></a>
           <a class="icon" href="#" ><i class="fab fa-github-alt"></i></a> 
          </div>
        </div>
      </div>
    </footer>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'nq'


.nav
  background-color: #383838
  a:hover
    color: gray

.nav-left a
  color: #fff
  font-weight: bold
  &:hover
    background-color: #383838
    color: #FFF


a.r-item
  color: #c1c1c1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover 
      background-color: #f1f1f1

.burger
  color: #c1c1c1
  margin-top: -2.55rem

footer
  background: $primary !important
  color: #fff

.icon 
  color: #fff
  margin-left: 20px
  font-size: 1.3em    

</style>
