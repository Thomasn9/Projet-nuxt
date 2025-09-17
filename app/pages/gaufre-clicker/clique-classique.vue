<template>
    <div>
        <h3>vous avez : {{ cumul }} clicks</h3>
        <button @click="augmentation" class="btn">click</button>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'

const cumul = ref(0)
const valeurClick = 1

function augmentation(){
    cumul.value += valeurClick;
    console.log(cumul.value)
}
</script>

<style>
</style>