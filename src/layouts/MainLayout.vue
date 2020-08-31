<template>
  <q-layout view="hHR LpR fff">

    <q-header bordered class="bg-white text-black">
        <q-toolbar class="row justify-between">
            <div class="col-1 text-left">
                <q-btn dense flat round icon="apps" :to="{path: '/'}"  /> <!-- @click="left = !left" -->
            </div>

            <q-toolbar-title class="col-6 col-md-2 text-weight-bold text-center">
                <q-select dense borderless v-model="workpoint" :options="workpoints" option-value="id" option-label="name"/>
            </q-toolbar-title>

            <div class="col-1 text-right">
                <!-- <q-btn dense flat round icon="exit_to_app"/> -->
                <q-btn dense flat round icon="settings" @click="right = !right" />
            </div>
        </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" :width="250" bordered><!-- show-if-above -->
        <q-list class="q-pa-sm">
            <q-item clickable v-ripple v-for="module in modules" :key="module.name">
                <q-item-section avatar>
                <!-- <q-icon :color="module.text" :name="module.icon" /> -->
                <q-icon color="black" :name="module.icon" />
                </q-item-section>
                <q-item-section>{{module.name}}</q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
    
    <q-drawer v-model="right" side="right" bordered>
        <router-view name="settings"/>
    </q-drawer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
    data () {
        return {
            left: false,
            right: false,
            modules: [
                {'name': 'Usuarios', 'icon': 'people_alt', 'color': 'cyan-1', 'text': 'cyan-6', 'path': '/account'},
                {'name': 'Soporte', 'icon': 'support', 'color': 'deep-purple-1', 'text': 'deep-purple-10', 'path': '/suport'},
                {'name': 'Productos', 'icon': 'trip_origin', 'color': 'blue-grey-1', 'text': 'blue-grey-9', 'path': '/products'},
                {'name': 'Inventarios', 'icon': 'view_module', 'color': 'pink-1', 'text': 'pink-9', 'path': '/inventory'},
                {'name': 'Almacen', 'icon': 'bento', 'color': 'yellow-1', 'text': 'yellow-10', 'path': '/celler'},
                {'name': 'Etiquetas', 'icon': 'local_offer', 'color': 'light-green-1', 'text': 'light-green-9', 'path': '/labels'},
                {'name': 'Preventa', 'icon': 'shopping_bag', 'color': 'teal-1', 'text': 'teal-9', 'path': '/preSale'},
                {'name': 'Punto de venta', 'icon': 'store', 'color': 'orange-1', 'text': 'orange-10', 'path': '/sale'},
            ],
            workpoints: [
                {'id': 1, 'name': 'CEDIS SAN PABLO'},
                {'id': 2, 'name': 'CEDIS PANTACO'},
                {'id': 3, 'name': 'SAN PABLO 1'},
                {'id': 4, 'name': 'SAN PABLO 2'},
                {'id': 5, 'name': 'SAN PABLO 3'},
                {'id': 6, 'name': 'CORREO 1'},
                {'id': 7, 'name': 'CORREO 2'},
            ],
            workpoint: {'id': 4, 'name': 'SAN PABLO 2'},
        }
    }
}
</script>
