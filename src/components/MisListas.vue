<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button v-if="mode != 'add'" v-on:click="addMode()" class="btn btn-primary">
      Agregar
    </button>

    <div class="container" v-if="mode == 'list'">
      <fieldset>
        <legend>Mis Listas</legend>
        <div class="card" v-for="(list) in lists" v-bind:key="list.id"
        v-bind:style="{ 'background-color': list.color }">
          <div class="card-body">
          <h5>{{ list.nombre }}</h5>
          <small>{{ list.fecha | formatDate }}</small>
          </div>
        </div>

        <div v-if="lists.length == 0" class="alert alert-warning">
          No has creado ninguna Lista
        </div>
      </fieldset>
    </div>

    <div class="container" v-if="mode == 'add'">
      <fieldset>
        <legend>Añadir nueva lista</legend>
        <form>
          <div class="form-group">
            <label for="addListNombre">Nombre :</label>
            <input ref="newList_nombre" v-model="newList.nombre" type="text" class="form-control" id="addListNombre"
              v-bind:placeholder='"Nombre de la Lista"' />
            <span v-if="errlist.nombre" class="small text-danger">
              Debe escribir un nombre de la lista.
            </span>
          </div>
          <div class="form-group">
            <label for="addListColor">Color de la lista:</label>
            <input v-model="newList.color" type="color" class="form-control" id="addListColor">
          </div>
        </form>
        <div class="btn-group">
          <button v-on:click="addList()" class="btn btn-primary">
            Crear
          </button>
          <button v-on:click="listMode()" class="btn btn-danger">
            Volver atras
          </button>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TaskList from '@/models/TaskList';
import moment from 'moment';
import { filter } from 'vue/types/umd';

@Component({
    filters: {
        formatDate: function (value: any) {
            //TODO, verificar que hay algo en value!
            return value.format("DD/MM/YYYY hh:mm:ss");
        }
    }
})

export default class Mislistas extends Vue {
  $refs!: {
    newList_nombre: HTMLFormElement
  }

  @Prop() private titulo!: string;

  mode = "list";
  lists: TaskList[] = [];

  newList: TaskList = new TaskList();
  errlist = { nombre: false };

  addMode(): void {
    let nextId = this.lists.length > 0 ? this.lists[this.lists.length - 1].id + 1 : 1;
    this.newList = new TaskList();
    this.newList.id = nextId;
    this.mode = "add";
    this.errlist.nombre = false;
  }

  listMode(): void {
    this.mode = "list";
  }

  addList(): void {
    if (this.newList.nombre != "") {
      this.newList.fecha = moment();
      this.lists.push(this.newList);
      this.mode = 'list';
    } else {
      this.errlist.nombre = true;
      this.$refs.newList_nombre.focus();
    }
  }
}
</script>