<template>
    <q-page class="row flex-center justify-center">
        <q-card class="col-11 col-md-4 text-center" flat v-if="!success">
            <div class="text-weight-bold text-h4">VIZAPP</div>
            <div class="text-subtitle1">¡Recuperación de contraseña!</div>
            <div v-if="msg_err">
                <q-chip color="red-10" text-color="white" icon="warning" :label="msg_err" />
            </div>
            <q-form class="q-pa-sm text-right">
                <q-input outlined v-model="form.nick" label="Usuario" color="black" required />
                <q-btn type="submit" rounded class="full-width q-mt-lg" color="dark" label="Enviar solicitud"/>
            </q-form>
        </q-card>
        <q-card flat v-if="success">
            <q-card-section class="text-center q-gutter-sm">
                <q-avatar color="green-7" text-color="white" icon="check" />
                <div class="text-subtitle1">
                    Se ha enviado su solicitud de cambio de contraseña para:
                    <span class="text-bold text-h6">{{form.nick}}</span>
                </div>
                <q-btn rounded class="full-width" color="dark" label="Volver al inicio de sesión"/>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
export default {
  name: 'PageUsers',
  data () {
      return {
          form: {
              nick: ''
          },
          showingPassword: false,
          msg_err: '',
          success: false
      }
  }
}
</script>