<!--template>
  <div>
    <h1>{{ titulo }}</h1>
    <button v-if="mode != 'add'" v-on:click="addMode()" class="btn btn-primary">
      Agregar
    </button>

    <div class="container" v-if="mode == 'list'">
      <fieldset>
        <legend>Mis Listas</legend>
        <div class="row justify-content-end">
          <select class="form-control col-md-3" v-model="slctVisible">
            <option value="T">Ver todas</option>
            <option value="V">Ver visibles</option>
            <option value="N">Ver NO visibles</option>
          </select>
        </div>
        <div>
          <label for="ordenarPor">Ordenar por:</label>
          <select id="ordenarPor" v-model="ordenarPor">
            <option value="nombre">Nombre</option>
            <option value="fecha">Fecha</option>
          </select>
        </div>
        <template>
          <div v-for="(list, index) in listasOrdenadas" :key="list.id">
            <div class="card" :key="list.id" :style="{ 'background-color': list.color }" v-if="getVisibility(index)">
              <div class="card-body">
                <div class="titulolista">
                  {{ list.nombre }}
                  <div class="btn-group">
                    <button v-on:click="deleteList(index)" class="btn btn-sm btn-danger" v-bind:title='"Eliminar"'>
                      <font-awesome-icon icon="trash"></font-awesome-icon>
                    </button>
                    <button v-on:click="editMode()" class="btn btn-primary">
                      Editar
                    </button>
                    <button v-if="list.visible" @click="visibleList(index)" class="btn btn-sm btn-info"
                      :title="'Ocultar lista'">
                      <font-awesome-icon icon="eye-slash"></font-awesome-icon>
                    </button>
                    <button v-else @click="visibleList(index)" class="btn btn-sm btn-info" :title="'Mostrar lista'">
                      <font-awesome-icon icon="eye"></font-awesome-icon>
                    </button>
                  </div>
                </div>
                <small>{{ list.fecha }}</small>
              </div>
            </div>
          </div>
        </template>

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
            <label for="addListColor">Fecha de la lista:</label>
            <input v-model="newList.fecha" type="date" class="form-control" id="addListFecha">
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

    <div class="container" v-if="mode == 'edit'">
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
            <label for="addListColor">Fecha de la lista:</label>
            <input v-model="newList.fecha" type="date" class="form-control" id="addListFecha">
          </div>
          <div class="form-group">
            <label for="addListColor">Color de la lista:</label>
            <input v-model="newList.color" type="color" class="form-control" id="addListColor">
          </div>
        </form>
        <div class="btn-group">
          <button v-on:click="saveList()" class="btn btn-primary">
            Editar
          </button>
          <button v-on:click="listMode()" class="btn btn-danger">
            Volver atras
          </button>
        </div>
      </fieldset>
    </div>
  </div>
</template-->

<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button v-if="mode != 'add'" v-on:click="addMode()" class="btn btn-primary">
      Agregar
    </button>

    <div class="container" v-if="mode == 'list'">
      <fieldset>
        <legend>Mis Listas</legend>
        <div class="row justify-content-end">
          <select class="form-control col-md-3" v-model="slctVisible">
            <option value="T">Ver todas</option>
            <option value="V">Ver visibles</option>
            <option value="N">Ver NO visibles</option>
          </select>
        </div>
        <div>
          <label for="ordenarPor">Ordenar por:</label>
          <select id="ordenarPor" v-model="ordenarPor">
            <option value="nombre">Nombre</option>
            <option value="fecha">Fecha</option>
          </select>
        </div>
        <template>
          <div v-for="(list, index) in getAll()" :key="list.id">
            <div class="card" :key="list.id" :style="{ 'background-color': list.color }" v-if="getVisibility(index)">
              <div class="card-body">
                <div class="titulolista">
                  {{ list.nombre }}
                  <div class="btn-group">
                    <button v-on:click="deleteList(index)" class="btn btn-sm btn-danger" v-bind:title='"Eliminar"'>
                      <font-awesome-icon icon="trash"></font-awesome-icon>
                    </button>
                    <button v-on:click="editMode(index)" class="btn btn-primary">
                      Editar
                    </button>
                    <button v-if="list.visible" @click="visibleList(index)" class="btn btn-sm btn-info"
                      :title="'Ocultar lista'">
                      <font-awesome-icon icon="eye-slash"></font-awesome-icon>
                    </button>
                    <button v-else @click="visibleList(index)" class="btn btn-sm btn-info" :title="'Mostrar lista'">
                      <font-awesome-icon icon="eye"></font-awesome-icon>
                    </button>
                  </div>
                </div>
                <small>{{ list.fecha }}</small>
              </div>
            </div>
          </div>
        </template>

        <div v-if="getCount() == 0" class="alert alert-warning">
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
            <label for="addListColor">Fecha de la lista:</label>
            <input v-model="newList.fecha" type="date" class="form-control" id="addListFecha">
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

    <div class="container" v-if="mode == 'edit'">
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
            <label for="addListColor">Fecha de la lista:</label>
            <input v-model="newList.fecha" type="date" class="form-control" id="addListFecha">
          </div>
          <div class="form-group">
            <label for="addListColor">Color de la lista:</label>
            <input v-model="newList.color" type="color" class="form-control" id="addListColor">
          </div>
        </form>
        <div class="btn-group">
          <button v-on:click="saveList()" class="btn btn-primary">
            Editar
          </button>
          <button v-on:click="listMode()" class="btn btn-danger">
            Volver atras
          </button>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<!--script lang="ts">
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

  slctVisible = "T";

  newList: TaskList = new TaskList();
  editListthis: TaskList = new TaskList();
  errlist = { nombre: false };
  ordenarPor = 'nombre';

  stringToDate(dateString: string | null): Date | null {
    if (!dateString) {
      return null;
    }

    const partes = dateString.split('-');
    if (partes.length === 3) {
      const anio = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10) - 1; // Los meses en Date van de 0 a 11
      const dia = parseInt(partes[2], 10);
      return new Date(anio, mes, dia);
    }
    return null; // Devuelve null si el formato no es válido
  }

  getFechaHoyString(): string {
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Añade un 0 delante si es necesario
    const dia = String(hoy.getDate()).padStart(2, '0'); // Añade un 0 delante si es necesario
    return `${anio}-${mes}-${dia}`;
  }


  get listasOrdenadas() {
    const listasCopia = [...this.lists]
    if (this.ordenarPor == 'nombre') {
      return listasCopia.sort((a, b) => a.nombre.localeCompare(b.nombre))
    } else if (this.ordenarPor == 'fecha') {
      return listasCopia.sort((a, b) => {
        const fechaA = a.fecha ? this.stringToDate(a.fecha) : null;
        const fechaB = b.fecha ? this.stringToDate(b.fecha) : null;

        if (!fechaA && !fechaB) return 0; // ambos null
        if (!fechaA) return 1; // a null
        if (!fechaB) return -1; // b null

        return fechaA!.getTime() - fechaB!.getTime();
      })
    }
    return listasCopia
  }

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
  editMode(index: number): void {
    this.editListthis = { ...this.lists[index] };
    this.mode = "edit";
    this.errlist.nombre = false;
  }
  saveList(): void {
    if (this.editListthis.nombre != "") {
      if (this.editListthis.fecha == null) {
        this.editListthis.fecha = this.getFechaHoyString();
      }
      const index = this.lists.findIndex(l => l.id === this.editListthis.id);
      if (index !== -1) {
        this.lists.splice(index, 1, { ...this.editListthis });
        this.mode = "list";
        this.editListthis = new TaskList();
      }
      this.mode = 'list';
    } else {
      this.errlist.nombre = true;
      this.$refs.newList_nombre.focus();
    }


  }

  addList(): void {
    if (this.newList.nombre != "") {
      if (this.newList.fecha == null) {
        this.newList.fecha = this.getFechaHoyString();
      }
      this.newList.visible = true;
      this.lists.push(this.newList);
      this.mode = 'list';
    } else {
      this.errlist.nombre = true;
      this.$refs.newList_nombre.focus();
    }
  }

  formatDate2(value: any) {
    //TODO, verificar que hay algo en value!
    return value.format("DD/MM/YYYY hh:mm:ss");
  }

  visibleList(index: number) {
    this.lists[index].visible = (this.lists[index].visible ? false : true);
  }

  deleteList(list: number) {
    this.lists.splice(list, 1);
  }

  getVisibility(index: number) {
    let res = true;
    switch (this.slctVisible) {
      case "V":
        res = this.lists[index].visible;
        break;
      case "N":
        res = !this.lists[index].visible;
        break;
      default:
        res = true;
        break;
    }
    return res;
  }
}
</script-->

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
  //lists: TaskList[] = [];

  slctVisible = "T";

  newList: TaskList = new TaskList();
  editListthis: TaskList = new TaskList();
  errlist = { nombre: false };
  ordenarPor = 'nombre';

  getAll(){
    return this.$store.getters.getAll;
  }

  getCount(){
    return this.$store.getters.getCount;
  }

  stringToDate(dateString: string | null): Date | null {
    if (!dateString) {
      return null;
    }

    const partes = dateString.split('-');
    if (partes.length === 3) {
      const anio = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10) - 1; // Los meses en Date van de 0 a 11
      const dia = parseInt(partes[2], 10);
      return new Date(anio, mes, dia);
    }
    return null; // Devuelve null si el formato no es válido
  }

  getFechaHoyString(): string {
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Añade un 0 delante si es necesario
    const dia = String(hoy.getDate()).padStart(2, '0'); // Añade un 0 delante si es necesario
    return `${anio}-${mes}-${dia}`;
  }


  get listasOrdenadas() {
    const listasCopia = this.$store.getters.getAll;
    if (this.ordenarPor == 'nombre') {
      return listasCopia.sort((a: { nombre: string; }, b: { nombre: any; }) => a.nombre.localeCompare(b.nombre))
    } else if (this.ordenarPor == 'fecha') {
      return listasCopia.sort((a: { fecha: string | null; }, b: { fecha: string | null; }) => {
        const fechaA = a.fecha ? this.stringToDate(a.fecha) : null;
        const fechaB = b.fecha ? this.stringToDate(b.fecha) : null;

        if (!fechaA && !fechaB) return 0; // ambos null
        if (!fechaA) return 1; // a null
        if (!fechaB) return -1; // b null

        return fechaA!.getTime() - fechaB!.getTime();
      })
    }
    return listasCopia
  }

  addMode(): void {
    let nextId = this.$store.getters.getNextId;
    this.newList = new TaskList();
    this.newList.id = nextId;
    this.mode = "add";
    this.errlist.nombre = false;
  }

  listMode(): void {
    this.mode = "list";
  }
  editMode(index: number): void {
    
    this.editListthis = { ...this.$store.getters.getAll[index] };
    this.mode = "edit";
    this.errlist.nombre = false;
  }
  saveList(): void {
    if (this.editListthis.nombre != "") {
      if (this.editListthis.fecha == null) {
        this.editListthis.fecha = this.getFechaHoyString();
      }
      /*
      const index = this.lists.findIndex(l => l.id === this.editListthis.id);
      if (index !== -1) {
        this.lists.splice(index, 1, { ...this.editListthis });
        this.mode = "list";
        this.editListthis = new TaskList();
      }*/
      this.$store.commit('edit', this.newList);
      this.mode = "list";
      this.editListthis = new TaskList();
    } else {
      this.errlist.nombre = true;
      this.$refs.newList_nombre.focus();
    }


  }

  addList(): void {
    if (this.newList.nombre != "") {
      if (this.newList.fecha == null) {
        this.newList.fecha = this.getFechaHoyString();
      }
      this.newList.visible = true;
      //this.lists.push(this.newList);
      this.$store.commit('add', this.newList);
      this.mode = 'list';
    } else {
      this.errlist.nombre = true;
      this.$refs.newList_nombre.focus();
    }
  }

  formatDate2(value: any) {
    //TODO, verificar que hay algo en value!
    return value.format("DD/MM/YYYY hh:mm:ss");
  }

  visibleList(index: number) {
    //this.lists[index].visible = (this.lists[index].visible ? false : true);
    this.$store.commit('setVisible', index);
  }

  deleteList(list: number) {
    //this.lists.splice(list, 1);
    this.$store.commit('del', list);
  }

  getVisibility(index: number) {
    let res = true;
    switch (this.slctVisible) {
      case "V":
        res = this.$store.getters.getVisible(index);
        break;
      case "N":
        res = !this.$store.getters.getVisible(index);
        break;
      default:
        res = true;
        break;
    }
    return res;
  }
}
</script>

<style scoped>
.titulolista {
  font-size: 2em;
}
</style>