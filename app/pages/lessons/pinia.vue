<template>
    <div class="space-y-8">
        <!-- 🔹 INTRO -->
        <div class="card bg-base-200 shadow-xl p-6 max-w-3xl mx-auto">
            <h1 class="text-3xl font-bold text-primary mb-4">
                🚀 Découverte de Pinia
            </h1>
            <p class="mb-4 text-base-content">
                Pinia est la solution officielle de <strong>gestion d’état</strong> pour Vue 3 et Nuxt.
                Elle remplace naturellement Vuex avec une API moderne, simple et typée.
            </p>

            <div class="alert alert-info mb-4">
                <span>
                    <strong>À retenir :</strong> Pinia centralise l’état de l’application, le rend
                    accessible à tous les composants et simplifie le partage des données.
                </span>
            </div>
        </div>

        <!-- 🔹 POURQUOI UTILISER PINIA -->
        <div class="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div class="card bg-base-100 p-4 shadow-md">
                <h3 class="text-lg font-semibold mb-2">🎯 Centralisation</h3>
                <p>
                    Conservez toutes vos données globales (utilisateur, panier, préférences…) dans des
                    <strong>stores</strong>
                    faciles à maintenir.
                </p>
            </div>
            <div class="card bg-base-100 p-4 shadow-md">
                <h3 class="text-lg font-semibold mb-2">⚡ Simplicité</h3>
                <p>
                    Une API intuitive : <code>state</code>, <code>getters</code> et <code>actions</code>.
                    Plus besoin de mutations complexes comme dans Vuex.
                </p>
            </div>
            <div class="card bg-base-100 p-4 shadow-md">
                <h3 class="text-lg font-semibold mb-2">🧩 Compatibilité</h3>
                <p>
                    Fonctionne parfaitement avec la <strong>Composition API</strong> et Nuxt.
                    SSR-ready et support TypeScript natif.
                </p>
            </div>
        </div>

        <!-- 🔹 DEMO INTERACTIVE -->
        <div class="card bg-base-200 shadow-xl p-6 max-w-md mx-auto">
            <h2 class="text-2xl font-bold text-primary mb-4">
                🧪 Démonstration interactive
            </h2>
            <p class="mb-4 text-base-content">{{ demo.message }}</p>

            <div class="stats shadow w-full mb-4">
                <div class="stat">
                    <div class="stat-title">Compteur</div>
                    <div class="stat-value text-primary">{{ count }}</div>
                    <div class="stat-desc">Valeur doublée : {{ double }}</div>
                </div>
            </div>

            <div class="flex gap-2">
                <button class="btn btn-primary" @click="demo.increment">
                    Incrémenter
                </button>
                <button class="btn btn-outline" @click="demo.reset">
                    Reset
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
// Avec Nuxt + Pinia : auto-import des composables
const demo = useDemoStore() // Récupération du store
const { count, double } = storeToRefs(demo) // Reactive destructuring
</script>