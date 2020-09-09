<template>
    <q-layout view="hHh lpR fFf">
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import auth from "../api/auth";
export default {
  name: 'AuthLayout',
  created (){
    this.init()
  },
  data () {
    return {
      isConfig: false,
    }
  },
  methods :{ 
    init () {
      console.log('----')
      auth.a()
    }
  }
}
</script>
