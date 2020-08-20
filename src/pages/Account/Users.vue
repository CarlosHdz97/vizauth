<template>
    <q-page>
        <div class="row q-col-gutter-lg justify-center q-py-md">
            <div class="col-12 row">
                <q-btn flat color="blue-9" label="Nombre" icon-right="keyboard_arrow_down" />
                <q-btn flat color="blue-9" label="Rol" icon-right="filter_alt" />
                <q-btn flat color="blue-9" label="Status" icon-right="filter_alt" />
            </div>
            <div class="col-11">
                <q-list bordered class="rounded-borders">
                    <div v-for="account in accounts" :key="account.id">
                        <q-item clickable v-ripple>
                            <q-item-section avatar>
                                <q-avatar color="black" text-color="white" icon="person"/>
                            </q-item-section>
                            <q-item-section>
                                <q-item-label lines="1">{{account.name}}</q-item-label>
                                <q-item-label caption lines="1">
                                    <span class="text-weight-bold">{{account.rol}}</span>
                                </q-item-label>
                            </q-item-section>
                            <q-item-section side top>
                                <q-item-label lines="1">Activo</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-separator inset="item" />
                    </div>
                </q-list>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'PageUsers',
  data () {
      return {
          accounts: [
              {'id': 1, 'name': 'Carlos Hernandez', 'rol': 'root'},
              {'id': 2, 'name': 'Eduardo Lopez', 'rol': 'root'},
              {'id': 3, 'name': 'Ricardo', 'rol': 'Administrador'},
              {'id': 4, 'name': 'Diego Huerta', 'rol': 'Administrador general'},
              {'id': 5, 'name': 'Pedro', 'rol': 'Vendedor'},
              {'id': 6, 'name': 'Nicol', 'rol': 'Cajero'},
          ]
      }
  }
}
</script>