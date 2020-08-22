<template>
    <q-page>
        <div class="row q-col-gutter-md justify-center">
            <q-toolbar class="col-12 bg-grey-2 shadow-2">
                <q-btn flat color="black" icon="apps" />
                <q-toolbar-title>
                    <q-input v-model="form.search" color="black" label="Buscar por nombre" class="text-center" borderless />
                </q-toolbar-title>
                <!-- <q-btn flat color="grey-4" icon="filter_alt" @click="filter = true"/> -->
            </q-toolbar>
            <div class="col-11" v-for="account in accounts" :key="account.id">
                <q-card>
                    <q-card-section horizontal>
                        <q-card-section class="flex flex-center">
                            <q-avatar color="black" text-color="white" icon="person"/>
                        </q-card-section>
                        <q-item>
                            <q-item-section>
                                <q-item-label class="text-subtitle2 text-weight-bolder">{{account.name}}</q-item-label>
                                <q-item-label>{{account.rol}}</q-item-label>
                                <q-item-label caption>Conectado</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <div class="row justify-center q-py-md">
            <q-pagination v-model="page" color="black" :max="10" :max-pages="6" :boundary-numbers="false"></q-pagination>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 25]">
            <q-btn fab icon="add" color="grey-9" />
        </q-page-sticky>
        <!-- <q-dialog v-model="filter">
            <q-card style="width: 300px" class="text-center q-px-sm q-pb-md">
                <q-card-section>
                    <div class="text-h6">Filtros</div>
                </q-card-section>
                <q-item tag="label" v-ripple class="row">
                    <q-item-section avatar class="col-6">
                        <q-toggle v-model="form.nombre[0]" label="Nombre"/>
                    </q-item-section>
                    <q-item-section class="col">
                        <q-btn icon="arrow_drop_down_circle" flat/>
                    </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple class="row">
                    <q-item-section avatar class="col-6">
                        <q-toggle v-model="form.rol[0]" label="Rol"/>
                    </q-item-section>
                    <q-item-section class="col">
                        <q-btn icon="filter_alt" flat/>
                    </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple class="row">
                    <q-item-section avatar class="col-6">
                        <q-toggle v-model="form.status[0]" label="Status"/>
                    </q-item-section>
                    <q-item-section class="col">
                        <q-btn icon="filter_alt" flat/>
                    </q-item-section>
                </q-item>
                <q-btn label="Aceptar" color="black"/>
            </q-card>
        </q-dialog> -->
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
            ],
            form: {
                search : '',
                nombre : [false, ''],
                rol :[false, ''],
                status :[false, ''],
            },
            page: 1,
            filter:false
        }
    }
}
</script>