<template>
    <q-page class="q-pa-sm q-col-gutter-sm">
        <div class="row justify-center items-center q-col-gutter-md">
            <div class="col-12 col-md-11">
                <q-card>
                    <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
                        <q-tab name="tickets" label="Tickets" />
                        <q-tab name="reporte" label="Reportes" />
                        <q-tab name="miembros" label="Miembros" />
                        <q-tab name="equipos" label="Equipos" />
                        <q-tab name="dashboard" label="Dashboard" />
                    </q-tabs>
                    <q-separator />
                    <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="tickets">
                            <div class="text-h3 text-weight-bold text-center">CONTENT</div>
                            <!-- <q-breadcrumbs gutter="none">
                                <template v-slot:separator>
                                    <q-icon size="1.5em" name="keyboard_arrow_right" />
                                </template>
                                <q-breadcrumbs-el icon="home" to="/" />
                                <q-breadcrumbs-el icon="filter_alt" label="Comercio" to="/" />
                                <q-breadcrumbs-el icon="dashboard" label="historio #122" to="/" />
                                <q-breadcrumbs-el icon="dashboard" label="dashboard" to="/" />
                                <q-breadcrumbs-el icon="person" label="Carlos Hernández" to="/" />
                            </q-breadcrumbs> -->
                        </q-tab-panel>

                        <q-tab-panel name="miembros">
                            <div class="text-h3 text-weight-bold text-center">CONTENT</div>
                        </q-tab-panel>

                        <q-tab-panel name="reporte">
                            <div class="text-h3 text-weight-bold text-center">CONTENT</div>
                        </q-tab-panel>

                        <q-tab-panel name="equipos">
                            <div class="text-h3 text-weight-bold text-center">CONTENT</div>
                        </q-tab-panel>

                        <q-tab-panel name="dashboard">
                            <div class="text-h3 text-weight-bold text-center">CONTENT</div>
                        </q-tab-panel>
                    </q-tab-panels>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'PageUsers',
    data () {
        return {
            status: [
                {'name': 'Nuevos', 'amount': 4, 'color': 'blue-2', 'text': 'blue-9', 'icon': 'local_offer'},
                {'name': 'Abiertos', 'amount': 10, 'color': 'green-2', 'text': 'green-9', 'icon': 'local_offer'},
                {'name': 'Urgentes', 'amount': 2, 'color': 'yellow-2', 'text': 'yellow-9', 'icon': 'speed'},
                {'name': 'Atrasado', 'amount': 1, 'color': 'red-2', 'text': 'red-9', 'icon': 'warning'}
            ],
            contacts : [ 
                {id: 1, name: 'Ruddy Jedrzej', email: 'SOLICITUD', letter: 'R'}, 
                {id: 2, name: 'Mallorie Alessandrini', email: 'SOLICITUD', letter: 'M'}, 
                {id: 3, name: 'Elisabetta Wicklen', email: 'SOLICITUD', letter: 'E'}, 
                {id: 4, name: 'Seka Fawdrey', email: 'SOLICITUD', letter: 'S'} 
            ],
            tab: 'tickets'
        }
    }
}
</script>