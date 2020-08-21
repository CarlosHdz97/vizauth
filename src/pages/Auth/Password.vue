<template>
    <q-page class="row flex-center justify-center">
        <q-card class="col-11 col-md-4 q-pa-sm" flat>
            <q-form class="q-pa-md text-center">
                <div class="text-h6 q-mb-md">Cambio de contraseña</div>
                <!-- <q-avatar icon="verified_user" size="85px"/> -->
                <q-chip>
                    <q-avatar icon="warning" color="red" text-color="white"/>
                    Debe cambiar su contraseña
                </q-chip>
                <q-input v-model="form.password" label="Contraseña actual" label-color="teal" color="black" :type="showingPassword ? 'text' : 'password'" required :error="!isPasswordMessage" hide-bottom-space>
                    <template v-slot:append>
                        <q-icon :name="showingPassword ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showingPassword = !showingPassword"/>
                    </template>
                    <template v-slot:error v-if="!isPasswordMessage">
                        {{msgPassword }}
                    </template>
                </q-input>
                <q-input v-model="form.new_password" label="Contraseña nueva" color="black" :type="showingConfirmation ? 'text' : 'password'" required :error="!isEqualPassword" hide-bottom-space>
                    <template v-slot:append>
                        <q-icon :name="showingConfirmation ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showingConfirmation = !showingConfirmation"/>
                    </template>
                    <template v-slot:error v-if="!isEqualPassword">
                        {{msgNewPassword ? msgNewPassword : 'Las contraseñas no coinciden'}}
                    </template>
                </q-input>
                <q-input v-model="confirmPassword" label="Confirmación de contraseña" color="black" :type="showingConfirmation ? 'text' : 'password'" required>
                    <template v-slot:append>
                        <q-icon :name="showingConfirmation ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showingConfirmation = !showingConfirmation"/>
                    </template>
                </q-input>
                <!-- <q-input v-model="form.new_password" label="Confirmación de contraseña" color="black" type="password" required /> -->
                <div class="row">
                    <div class="col-3">
                        <q-btn rounded class="q-mt-lg" color="grey-8" icon="arrow_left"/>
                    </div>
                    <div class="col-9">
                        <q-btn type="submit" rounded class="full-width q-mt-lg" color="dark" label="Cambiar contraseña"/>
                    </div>
                </div>
            </q-form>
        </q-card>
    </q-page>
</template>

<script>
export default {
    name: 'PagePassword',
    created (){
        /* this.showAlert() */
    },
    data () {
        return {
            form: {
                password: '',
                new_password: ''
            },
            confirmPassword: '',
            showingPassword: false,
            showingConfirmation: false,
            msgPassword: '',
            msgNewPassword: '',
        }
    },
    methods: {
        /* showAlert(){
            this.$q.notify({
                'color': 'red-10',
                'text-color': 'white',
                'icon': 'warning',
                'message': 'Debe cambiar su contraseña',
                'position': 'top',
            });
        } */
    },
    computed: {
        isEqualPassword () {
            if(this.form.new_password.length>0 && this.confirmPassword.length>0){
                return this.form.new_password == this.confirmPassword
            }else if(this.msgNewPassword.length>0){
                return false
            }
            return true
        },
        isPasswordMessage () {
            return this.msgPassword.length==0
        }
    }
}
</script>