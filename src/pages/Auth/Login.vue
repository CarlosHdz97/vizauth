<template>
    <q-page class="row flex-center justify-center">
        <q-card class="col-11 col-md-4 text-center" flat>
            <div class="text-weight-bold text-h4">VIZAPP</div>
            <div class="text-subtitle1">¡Bienvenido!</div>
            <div v-if="msg_err">
                <q-chip color="red-10" text-color="white" icon="warning" :label="msg_err" />
            </div>
            <q-form class="q-pa-sm text-right">
                <q-input v-model="form.nick" label="Usuario" color="black" required />
                <q-input v-model="form.password" label="Contraseña" color="black" :type="showingPassword ? 'text' : 'password'" required>
                    <template v-slot:append>
                        <q-icon :name="showingPassword ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="showingPassword = !showingPassword"/>
                    </template>
                </q-input>
                <q-btn class="text-overline text-grey-7" label="Olvide mi contraseña" :to="{path: '/auth/recoveryPassword'}" flat dense/>
                <q-btn type="submit" rounded="" class="full-width q-mt-lg" color="dark" label="Iniciar sesión"/>
            </q-form>
        </q-card>
    </q-page>
</template>

<script>
export default {
  name: 'PageUsers',
  data () {
      return {
          form: {
              nick: '',
              password: ''
          },
          showingPassword: false,
          msg_err: ''
      }
  }
}
</script>