<template>
  <div id="app">
    <Head />

    <div class="container">
      <main role="main" class="pb-3">
        <router-view />
      </main>
    </div>

    <Foot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Foot from '@/components/layout/Foot.vue';
import Head from './components/layout/Header.vue';

@Component({
  components: {
    Foot,
    Head,
  },
})
export default class App extends Vue { }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
