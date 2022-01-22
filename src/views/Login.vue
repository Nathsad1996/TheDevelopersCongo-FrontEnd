<template>
    <div class="container font-sans">
        <div class="flex justify-center">
            <div
                class="grid grid-rows-4 text-xs shadow-xl border-2 border-opacity-50 rounded-3xl p-6 md:p-10 mt-20 grid-flow-col gap-2"
            >
                <span class="text-xs md:text-2xl md:px-10 mb-8 text-center">TheDevelopersCongo</span>
                <input class="input-field" type="text" placeholder="Login" />
                <input class="input-field" type="text" placeholder="Mot de passe" />
                <button class="btn" @click="login">Login</button>
            </div>
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