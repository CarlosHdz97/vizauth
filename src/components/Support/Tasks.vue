<template>
    <q-list bordered separator class="col-12 col-md-4">
        <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
            <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
                {{ contact.letter }}
            </q-avatar>
            </q-item-section>

            <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            </q-item-section>

            <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
            </q-item-section>
        </q-item>
    </q-list>
</template>