<template>
    <q-layout view="hHh lpR fFf">
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
  name: 'AccountLayout',
  data () {
    return {
      isConfig: false,
    }
  }
}
</script>
