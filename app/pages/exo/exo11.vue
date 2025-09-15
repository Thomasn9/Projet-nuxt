<template>
<main class="container mx-auto p-6">
<!-- Titre -->
<header>
    <h1 class="text-2xl font-bold text-center mb-6">
    Ici c'est le composant parent ExoPropsView
    </h1>
</header>

<!-- Formulaire -->
<section class="card bg-base-200 shadow-md p-6 mb-8">
    <form class="space-y-4">
    <!-- Nom -->
    <div class="form-control">
        <label class="label" for="name">
        <span class="label-text">Name</span>
        </label>
        <input
        id="name"
        type="text"
        placeholder="Votre nom"
        class="input input-bordered w-full"
        />
    </div>

    <!-- Téléphone -->
    <div class="form-control">
        <label class="label" for="tel">
        <span class="label-text">Tél</span>
        </label>
        <input
        id="tel"
        type="tel"
        placeholder="Votre Tél"
        class="input input-bordered w-full"
        />
    </div>

    <!-- Email -->
    <div class="form-control">
        <label class="label" for="email">
        <span class="label-text">Email</span>
        </label>
        <input
        id="email"
        type="email"
        placeholder="Votre EMAIL"
        class="input input-bordered w-full"
        />
    </div>

    <!-- Bouton Ajouter -->
    <div class="flex justify-center">
        <button type="submit" class="btn btn-primary w-full sm:w-auto">
        Ajouter Ami
        </button>
    </div>
    </form>
</section>

<!-- Liste des amis -->
<section class="space-y-4">
    <!-- Exemple d’un ami -->
    <div
    class="card bg-base-100 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between"
    >
    <!-- Nom -->
    <h2 class="font-semibold text-lg">
        <Amis id="" phone="" />
    </h2>

    <!-- Actions -->
    <div class="mt-3 sm:mt-0 flex flex-wrap gap-2">
        <button class="btn btn-outline btn-sm">Afficher détails</button>

        <span class="badge badge-success gap-1">
        ⭐ Premium
        </span>

        <button class="btn btn-error btn-sm flex items-center gap-1">
        <!-- Icône poubelle -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
        >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
            />
        </svg>
        Suppr.
        </button>
    </div>
    </div>

    <!-- Tu peux dupliquer ce bloc pour chaque ami -->
</section>
</main>
</template>

<script setup lang="js">

import Amis from './exo/exo11data.vue';

</script>