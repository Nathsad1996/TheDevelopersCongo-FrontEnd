<template>
    <div class="font-sans grid md:grid-cols-2">
        <div class="flex h-screen">
            <div
                class="m-auto flex flex-col text-xs shadow-2xl border-2 border-opacity-50 rounded-3xl p-6 md:p-10"
            >
                <span class="text-lg md:text-2xl md:px-10 mb-8 text-center">TheDevelopersCongo</span>
                <input class="input-field" type="text" placeholder="Login" />
                <input class="input-field" type="text" placeholder="Mot de passe" />
                <button class="btn" @click="login">Login</button>
            </div>
        </div>
        <div class="w-full h-full hidden md:block bg-gray-400">

        </div>
    </div>
</template>


<script setup>

import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter()
const store = useStore()

const login = () => {
    store.dispatch('setLogin', true)
    router.push('/')
}
</script>


<style scoped>
</style>