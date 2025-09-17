<template>
    <div>
        <h3>Vous avez : {{ cumul }} clicks</h3>
        <button @click="augmentation" class="btn">Click (+{{ valeurClick }})</button>
        <button 
            @click="amelioration1" 
            class="btn"
            :disabled="cumul < prixAmelioration1">
            Amélioration (coût:{{ prixAmelioration1 }} ) - Click vaut {{ valeurClick }}
        </button>
    </div>
</template>

<script setup lang="js">

const cumul = ref(0)
const valeurClick = ref(1)
const prixAmelioration1 = ref(5)

function augmentation(){
    cumul.value += valeurClick.value; // Ajout de .value ici
    console.log(cumul.value)
}

function amelioration1(){
    if (cumul.value >= prixAmelioration1.value) {
        cumul.value -= prixAmelioration1.value;
        prixAmelioration1.value += prixAmelioration1.value;
        valeurClick.value += 1;
    }
}
</script>

<style>
</style>