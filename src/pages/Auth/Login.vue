<template>
    <q-page class="row flex-center justify-center">
        <q-card class="col-11 col-md-4" flat>
            <div class="text-weight-bold text-h4 text-center">VIZAPP</div>
            <div class="text-subtitle2 text-center">¡Bienvenido!</div>
            <q-form class="q-pa-md text-right">
                <q-input v-model="form.nick" label="Usuario" color="black" required />
                <q-input v-model="form.password" label="Contraseña" color="black" type="password" required />
                <div class="text-overline text-grey-7">Olvide mi contraseña</div>
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
          }
      }
  }
}
</script>