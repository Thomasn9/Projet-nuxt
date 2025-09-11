<template>
  <div class="navbar bg-base-100 shadow-sm">
    
    <div id="blocLogo">
      <img id="logoHeader" src="/logo.png" alt="Logo" />
      <NuxtLink to="/">Projet VUE Thomas</NuxtLink>
    </div>
    
<!-- =====================================================\\EXO//====================================================================== -->
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">Les Exos</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow">
        <li><NuxtLink to="/exo/exo1">Exos 1 : déclaration des types</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/exo/exo2">Exos 2 : random nom de livre</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/exo/exo3">Exos 3 : Bouton + et -</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/exo/exo4">Exos 4 : Bouton + et - avec fonction</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/exo/exo5">Exos 5 : Watcher</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/exo/exo6">Exos 6 : Class dynamic</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/exo/exo6v2">Exos 6 v2 : Class dynamic</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/exo/exo6v3">Exos 6 v3 : Style dynamic</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/exo/exo7">Exos 7 : V-if</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/exo/exo8">Exos 8 : V-for</NuxtLink></li>
      </ul>
    </div>

    <!-- =====================================================\\LESSONS//====================================================================== -->
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">Lessons</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
        <li><NuxtLink to="/lessons/v-bind">Les v-bind</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/lessons/event-binding">Event-binding v-on</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/lesson/v-model">Le V-Model</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/lessons/text-interpolation">Text interpolation</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/lessons/computed-properties">Les Computed Properties</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/lessons/watchers">Les Watchers</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/lessons/dynamic-styling">Dynamic-styling</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/lessons/conditional-rendering">Conditional-rendering</NuxtLink></li>
      </ul>
    </div>

<!-- =====================================================\\TP//====================================================================== -->
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">TP</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
        <li><NuxtLink to="/TP/tp1">TP 1 : docteur mario !!!</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/TP/tp2">TP 2 : V-on 2 !!!</NuxtLink></li>
        <hr>
        <li><NuxtLink to="/TP/tp3">TP 3 : Style Dynamic</NuxtLink></li>
      </ul>
    </div>

<!-- =====================================================\\GAUFRE-CLICKER//====================================================================== -->
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-soft btn-accent">Gaufre-Clicker</div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
        <li><NuxtLink to="/gaufre-clicker/compteur-bloquer">Compteur bloquer</NuxtLink></li>
      </ul>
    </div>

<!-- =====================================================\\ABOUT//====================================================================== -->
    <NuxtLink to="/about" class="btn btn-soft btn-accent">About</NuxtLink>
  </div>
  <hr>
</template>

<script setup>
// Plus besoin d'importer RouterLink, NuxtLink est global
</script>

<style scoped>
#blocLogo {
  display: flex;
  align-items: center;
  gap: 10px;
}

#logoHeader {
  width: 40px;
  height: 40px;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
}

.dropdown:focus-within .dropdown-content,
.dropdown:hover .dropdown-content {
  display: block;
}

.navbar {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 1rem;
}

.navbar a {
  text-decoration: none;
}
</style>