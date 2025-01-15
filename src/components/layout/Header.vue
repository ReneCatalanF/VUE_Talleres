<template>
    <header>
      <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div class="container">
          <router-link to="/" class="navbar-brand">Taller FE</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
            <ul class="navbar-nav flex-grow-1">
              <li class="nav-item">
                <router-link to="/" class="nav-link text-dark">Inicio</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link text-dark">Acerca de</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/otros-enlaces">Otros enlaces</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Head extends Vue {

}
</script>