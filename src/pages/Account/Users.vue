<template>
    <q-page>
        <div class="row justify-center">
            <q-table class="row q-col-gutter-sm col-12 col-md-11 justify-center" grid grid-header :data="accounts" :columns="columns" row-key="id" :filter="filter" hide-header>
                <template v-slot:top-right>
                    <q-input dense debounce="300" v-model="filter" placeholder="Buscar">
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                    </q-input>
                </template>
                <template v-slot:header="props">
                    <q-tr :props="props" class="text-center">
                        <q-th v-for="col in props.cols" :key="col.name" :props="props" class="text-bolder">
                            {{ col.label }}
                        </q-th>
                    </q-tr>
                </template>
                <template v-slot:item="props">
                    <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
                    <q-card v-ripple style="cursor:pointer;">
                        <q-card-section horizontal>
                            <q-card-section class="flex flex-center">
                                <q-avatar color="black" text-color="white" icon="person"/>
                            </q-card-section>
                            <q-item>
                                <q-item-section>
                                    <q-item-label class="text-subtitle2 text-weight-bolder">{{props.row.name}}</q-item-label>
                                    <q-item-label>{{props.row.rol}}</q-item-label>
                                    <q-item-label caption>{{props.row.status}}</q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-card-section>
                    </q-card>
                    </div>
                </template>
            </q-table>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 25]">
            <q-btn fab icon="add" color="grey-9" :to="{path:'/users/create'}"/>
        </q-page-sticky>
    </q-page>
</template>

<script>
export default {
  name: 'PageUsers',
  data () {
        return {
            accounts: [
                {'id': 1, 'name': 'Carlos Hernandez', 'rol': 'root', 'status': 'conectado'},
                {'id': 2, 'name': 'Eduardo Lopez', 'rol': 'root', 'status': 'conectado'},
                {'id': 3, 'name': 'Ricardo', 'rol': 'Administrador', 'status': 'conectado'},
                {'id': 4, 'name': 'Diego Huerta', 'rol': 'Administrador general', 'status': 'conectado'},
                {'id': 5, 'name': 'Pedro', 'rol': 'Vendedor', 'status': 'conectado'},
                {'id': 6, 'name': 'Nicol', 'rol': 'Cajero', 'status': 'conectado'},
                {'id': 1, 'name': 'Carlos Hernandez', 'rol': 'root', 'status': 'conectado'},
                {'id': 2, 'name': 'Eduardo Lopez', 'rol': 'root', 'status': 'conectado'},
                {'id': 3, 'name': 'Ricardo', 'rol': 'Administrador', 'status': 'conectado'},
                {'id': 4, 'name': 'Diego Huerta', 'rol': 'Administrador general', 'status': 'conectado'},
                {'id': 5, 'name': 'Pedro', 'rol': 'Vendedor', 'status': 'conectado'},
                {'id': 6, 'name': 'Nicol', 'rol': 'Cajero', 'status': 'conectado'},
            ],
            filter: '',
            columns: [
                {name: 'name', required: true, label: 'Nombre', align: 'left', field: row =>row.name, sortable: true},
                {name: 'rol', required: true, label: 'Rol', align: 'left', field: row =>row.rol, sortable: true},
                {name: 'status', required: true, label: 'status', align: 'left', field: row =>row.status, sortable: true},
            ]
        }
    }
}
</script>