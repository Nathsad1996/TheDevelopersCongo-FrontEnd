<template>
  <div class="font-sans">
    <nav
      v-show="!wantToLogin"
      class="absolute text-white flex justify-between top-0 w-full h-16 border-transparent border-b-4 shadow-lg bg-black"
    >
      <div class="flex m-3 px-2 py-1 text-sm md:text-xl cursor-pointer">
        <span>TheDevelopersCongo</span>
      </div>
      <ul class="flex flex-row mr-10">
        <router-link to="/">
          <li class="menu-item m-3 px-2 py-1 hover:text-gray-500">Accueil</li>
        </router-link>
        <router-link to="/find-dev">
          <li class="menu-item m-3 px-2 py-1 hover:text-gray-500">Trouver un développeur ?</li>
        </router-link>
        <li
          class="menu-item m-3 px-4 pb-1 border-2 rounded-xl hover:text-black hover:bg-white"
          @click="loginOptions"
        >Se connecter</li>
        <router-link to="/profile">
          <svg
            class="w-8 h-8 m-3 transition ease-in-out duration-500 cursor-pointer hover:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </router-link>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()

const wantToLogin = store.state.wantToLogin


const loginOptions = () => {
  store.dispatch('setWantToLogin', true)
  router.push('/login')
}


</script>
