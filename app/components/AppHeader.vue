<template>
  <div class="navbar bg-base-100 shadow-sm z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> 
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Les Exos</summary>
              <ul class="p-2">
                <li><NuxtLink to="/exo/exo1">Exos 1 : déclaration des types</NuxtLink></li>
                <li><NuxtLink to="/exo/exo2">Exos 2 : random nom de livre</NuxtLink></li>
                <li><NuxtLink to="/exo/exo3">Exos 3 : Bouton + et -</NuxtLink></li>
                <li><NuxtLink to="/exo/exo4">Exos 4 : Bouton + et - avec fonction</NuxtLink></li>
                <li><NuxtLink to="/exo/exo5">Exos 5 : Watcher</NuxtLink></li>
                <li><NuxtLink to="/exo/exo6">Exos 6 : Class dynamic</NuxtLink></li>
                <li><NuxtLink to="/exo/exo6v2">Exos 6 v2 : Class dynamic</NuxtLink></li>
                <li><NuxtLink to="/exo/exo6v3">Exos 6 v3 : Style dynamic</NuxtLink></li>
                <li><NuxtLink to="/exo/exo7">Exos 7 : V-if</NuxtLink></li>
                <li><NuxtLink to="/exo/exo8">Exos 8 : V-for</NuxtLink></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Lessons</summary>
              <ul class="p-2">
                <li><NuxtLink to="/lessons/v-bind">Les v-bind</NuxtLink></li>
                <li><NuxtLink to="/lessons/event-binding">Event-binding v-on</NuxtLink></li>
                <li><NuxtLink to="/lessons/v-model">Le V-Model</NuxtLink></li>
                <li><NuxtLink to="/lessons/text-interpolation">Text interpolation</NuxtLink></li>
                <li><NuxtLink to="/lessons/computed-properties">Les Computed Properties</NuxtLink></li>
                <li><NuxtLink to="/lessons/watchers">Les Watchers</NuxtLink></li>
                <li><NuxtLink to="/lessons/dynamic-styling">Dynamic-styling</NuxtLink></li>
                <li><NuxtLink to="/lessons/conditional-rendering">Conditional-rendering</NuxtLink></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>TP</summary>
              <ul class="p-2">
                <li><NuxtLink to="/TP/tp1">TP 1 : docteur mario !!!</NuxtLink></li>
                <li><NuxtLink to="/TP/tp2">TP 2 : V-on 2 !!!</NuxtLink></li>
                <li><NuxtLink to="/TP/tp3">TP 3 : Style Dynamic</NuxtLink></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Gaufre-Clicker</summary>
              <ul class="p-2">
                <li><NuxtLink to="/gaufre-clicker/compteur-bloquer">Compteur bloquer</NuxtLink></li>
              </ul>
            </details>
          </li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </div>
      <div id="blocLogo">
        <img id="logoHeader" src="/logo.png" alt="Logo" />
        <NuxtLink to="/" class="btn btn-ghost text-xl">Projet-Nuxt Thomas</NuxtLink>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Les Exos</summary>
            <ul class="p-2">
              <li><NuxtLink to="/exo/exo1">Exos 1 : déclaration des types</NuxtLink></li>
              <li><NuxtLink to="/exo/exo2">Exos 2 : random nom de livre</NuxtLink></li>
              <li><NuxtLink to="/exo/exo3">Exos 3 : Bouton + et -</NuxtLink></li>
              <li><NuxtLink to="/exo/exo4">Exos 4 : Bouton + et - avec fonction</NuxtLink></li>
              <li><NuxtLink to="/exo/exo5">Exos 5 : Watcher</NuxtLink></li>
              <li><NuxtLink to="/exo/exo6">Exos 6 : Class dynamic</NuxtLink></li>
              <li><NuxtLink to="/exo/exo6v2">Exos 6 v2 : Class dynamic</NuxtLink></li>
              <li><NuxtLink to="/exo/exo6v3">Exos 6 v3 : Style dynamic</NuxtLink></li>
              <li><NuxtLink to="/exo/exo7">Exos 7 : V-if</NuxtLink></li>
              <li><NuxtLink to="/exo/exo8">Exos 8 : V-for</NuxtLink></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Lessons</summary>
            <ul class="p-2">
              <li><NuxtLink to="/lessons/v-bind">Les v-bind</NuxtLink></li>
              <li><NuxtLink to="/lessons/event-binding">Event-binding v-on</NuxtLink></li>
              <li><NuxtLink to="/lessons/v-model">Le V-Model</NuxtLink></li>
              <li><NuxtLink to="/lessons/text-interpolation">Text interpolation</NuxtLink></li>
              <li><NuxtLink to="/lessons/computed-properties">Les Computed Properties</NuxtLink></li>
              <li><NuxtLink to="/lessons/watchers">Les Watchers</NuxtLink></li>
              <li><NuxtLink to="/lessons/dynamic-styling">Dynamic-styling</NuxtLink></li>
              <li><NuxtLink to="/lessons/conditional-rendering">Conditional-rendering</NuxtLink></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>TP</summary>
            <ul class="p-2">
              <li><NuxtLink to="/TP/tp1">TP 1 : docteur mario !!!</NuxtLink></li>
              <li><NuxtLink to="/TP/tp2">TP 2 : V-on 2 !!!</NuxtLink></li>
              <li><NuxtLink to="/TP/tp3">TP 3 : Style Dynamic</NuxtLink></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Gaufre-Clicker</summary>
            <ul class="p-2">
              <li><NuxtLink to="/gaufre-clicker/compteur-bloquer">Compteur bloquer</NuxtLink></li>
            </ul>
          </details>
        </li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
    </div>
  </div>
</template>

<script setup>
// Plus besoin d'importer RouterLink, NuxtLink est global
</script>

<style scoped>
/* Styles pour les liens NuxtLink pour qu'ils se comportent comme des liens normaux */
a.nuxt-link-active {
  font-weight: bold;
}

summary{
  margin: 0vw 2vw 0vw 2vw;
}

.p-2{
  background-color: rgb(19, 147, 104);
  border: solid 1px white;
}

a{
  background-color: rgb(19, 147, 104);
  color: black;
}
a:hover{
  background-color: rgba(255, 255, 255, 0.486);
  color: black;
}
</style>