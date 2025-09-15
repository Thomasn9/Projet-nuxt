<template>
    <div class="flex gap-2">
        <button class="btn btn-success" @click="like">Like</button>
        <button class="btn btn-error" @click="unlike">Unlike</button>
    </div>
</template>

<script setup>
// import { defineEmits } from "vue";

// Définition des événements émis par le composant
const emit = defineEmits(["liked", "unliked"]);

function like() {
    emit("liked");
}

function unlike() {
    emit("unliked");
}
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>