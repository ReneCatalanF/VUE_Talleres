<template>
    <div class="otros-enlaces">
      <h1>Otros enlaces de interés</h1>
      <div v-if="loading">Cargando enlaces...</div>
      <div v-if="errorMsg" class="alert alert-danger">
        Error al obtener los enlaces: {{ errorMsg }}
      </div>
      <ul v-if="enlaces && enlaces.length > 0">
        <li v-for="enlace in enlaces" :key="enlace.url">
          <a :href="enlace.url" target="_blank" rel="noopener noreferrer">{{ enlace.titulo }}</a>
        </li>
      </ul>
          <div v-else-if="enlaces && enlaces.length === 0 && !loading && !errorMsg">
                  <p>No hay enlaces disponibles.</p>
          </div>
    </div>
  </template>
  
  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import serviceAPI from '@/services/service';
  import { APIStatus } from '@/http-config';
  
  interface Enlace {
    titulo: string;
    url: string;
  }
  
  @Component
  export default class OtrosEnlacesView extends Vue {
    enlaces: Enlace[] | null = null;
    errorMsg: string | null = null;
    loading = true;
  
    async mounted() {
      try {
        serviceAPI.get("CMS/enlaces").then(r => {
        if (r.status == APIStatus.OK) {
            if (r != null && r.respuesta != null) {
              this.enlaces = r.respuesta as Enlace[];
            } else {
                this.errorMsg = "No se han recibido datos";
            }
        } else {
            this.errorMsg = r.error;
        }
    }).catch(e => {
        this.errorMsg = e;
    });
      } catch (error:unknown) {
        this.loading = false;
        this.errorMsg = (error as Error).message || "Error desconocido";
      }
    }
  }
  </script>