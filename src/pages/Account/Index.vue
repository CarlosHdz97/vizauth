<template>
    <q-page>
        <div class="row justify-center q-pa-md relative-position">
            <div class="col-12 col-md-4 text-center">
                <q-avatar class="shadow-3" size="80px" icon="person" text-color="white" color="black" />
                    <!-- <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar> -->
                <div class="text-h6">Carlos Hernández</div>
                <div class="text-weight-bold">ADMINISTRADOR</div>
                <q-select dense outlined color="grey" v-model="wp" :options="workpoints" option-value="id" option-label="name" class="q-px-xl"/>
                <q-btn icon="exit_to_app" class="absolute-top-right" flat rounded size="lg" />
            </div>
        </div>
        <div class="row justify-center">
            <div class="col-12 col-md-11 row q-col-gutter-md justify-center">
                <div class="col-5 col-md-2" v-for="module in modules" :key="module.name">
                    <q-card @click="changeUrl(module.path)" style="cursor:pointer;" clickable v-ripple>
                        <q-card-section class="text-center">
                            <q-avatar :color="module.color" :text-color="module.text" :icon="module.icon"/> <!-- insert_photo -->
                            <div class="text-subtitle2">{{module.name}}</div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
      return {
            modules: [
                {'name': 'Usuarios', 'icon': 'people_alt', 'color': 'cyan-1', 'text': 'cyan-6', 'path': '/users'},
                {'name': 'Soporte', 'icon': 'support', 'color': 'deep-purple-1', 'text': 'deep-purple-10', 'path': '/support'},
                {'name': 'Productos', 'icon': 'trip_origin', 'color': 'blue-grey-1', 'text': 'blue-grey-9', 'path': '/products'},
                {'name': 'Inventarios', 'icon': 'view_module', 'color': 'pink-1', 'text': 'pink-9', 'path': '/inventory'},
                {'name': 'Almacen', 'icon': 'bento', 'color': 'yellow-1', 'text': 'yellow-10', 'path': '/celler'},
                {'name': 'Etiquetas', 'icon': 'local_offer', 'color': 'light-green-1', 'text': 'light-green-9', 'path': '/labels'},
                {'name': 'Preventa', 'icon': 'shopping_bag', 'color': 'teal-1', 'text': 'teal-9', 'path': '/preSale'},
                {'name': 'Punto de venta', 'icon': 'store', 'color': 'orange-1', 'text': 'orange-10', 'path': '/sale'},
                {'name': 'Reportes', 'icon': 'analytics', 'color': 'purple-1', 'text': 'purple-10', 'path': '/dashboard'},
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
            wp : null,
        }
    },
    methods: {
        changeUrl(url){
            this.$router.push({'path' : url});
        }
    }
}
</script>