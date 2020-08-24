<template>
    <q-page class="row flex-center justify-center">
        <div class="col-11 col-md-4">
            <q-stepper v-model="step" ref="stepper" contracted color="primary" animated>
                <q-step :name="1" title="Select campaign settings" icon="settings" :done="step > 1">
                    <div class="row q-col-gutter-sm items-center">
                        <div class="col-6">
                            <q-card class="text-center">
                                <q-card-section>
                                    <q-avatar icon="person_add" size="45px" color="black" text-color="white"/>
                                    <div class="text-weight-bold text-h6 text-center">Nuevo</div>
                                </q-card-section>
                            </q-card>
                        </div>
                        <div class="col-6">
                            <q-card class="text-center">
                                <q-card-section>
                                    <q-avatar icon="person" size="45px" color="black" text-color="white"/>
                                    <div class="text-weight-bold text-h6 text-center">Existente</div>
                                </q-card-section>
                            </q-card>
                        </div>
                    </div>
                </q-step>
                <q-step :name="2" title="Create an ad group" caption="Optional" icon="create_new_folder" :done="step > 2">
                    <div>
                        <q-form>
                            <q-input dense v-model="form.nickname" label="Nickname" required/>
                            <q-input dense v-model="form.password" label="Contraseña" required/>
                            <q-input dense v-model="form.name" label="Nombre" required/>
                            <q-input dense v-model="form.surname_pat" label="Apellido paterno" required/>
                            <q-input dense v-model="form.surname_mat" label="Apellido materno"/>
                            <q-input dense v-model="form._wp_principal" label="Punto de trabajo principal" required/>
                            <q-input dense v-model="form._rol" label="Rol" required/>
                        </q-form>
                    </div>
                </q-step>
                <q-step :name="3" title="Create an ad" icon="add_comment">
                    <q-form class="q-mb-md">
                        <q-input dense v-model="form.nickname" label="Ingrese un nombre" required>
                            <template v-slot:append>
                                <q-icon name="search"/>
                            </template>
                        </q-input>
                    </q-form>
                    <q-list bordered padding>
                        <div v-for="i in 4" :key="i">
                            <q-item>
                                <q-item-section>
                                    <q-item-label overline>CARLOS HERNANDEZ</q-item-label>
                                    <!-- <q-item-label>------</q-item-label> -->
                                </q-item-section>
                            </q-item>
                            <q-separator inset="item" />
                        </div>
                    </q-list>
                </q-step>
                <template v-slot:navigation>
                    <q-stepper-navigation class="text-right">
                        <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Finish' : 'Continue'" />
                        <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                    </q-stepper-navigation>
                </template>
            </q-stepper>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
        return {
            step: 1,
            form: {
                name: '',
                surname_mat: '',
                surname_pat: '',
                password: '',
                nick: '',
                _wp_principal: 1,
                _rol: 1,
            },
            expanded: true
        }
    }
}
</script>