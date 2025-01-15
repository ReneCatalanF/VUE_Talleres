<template>
  <div class="home">
    <Mislistas v-bind:titulo='"Mis Listas"'/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Mislistas from '../components/MisListas.vue';

@Component({
  components: {
    Mislistas,
  },
})
export default class HomeView extends Vue {}
</script>
