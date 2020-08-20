<template>
    <q-layout view="hHh lpR fFf">
        <q-drawer show-if-above v-model="isConfig" side="right" elevated>
        </q-drawer>
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
