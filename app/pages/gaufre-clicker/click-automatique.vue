<template>
    <div>
        <h3>Vous avez : {{ cumul }} clicks</h3>
        <button @click="augmentation" class="btn">Click (+{{ valeurClick }})</button>
        <button 
            @click="amelioration1" 
            class="btn"
            :disabled="cumul < prixAmelioration1">
            Amélioration 1 (coût:{{ prixAmelioration1 }} ) - Click vaudra {{ valeurClick + 1 }}
        </button>
        <button 
            @click="amelioration2" 
            class="btn"
            :disabled="cumul < prixAmelioration2">
            Amélioration 2 (coût:{{ prixAmelioration2 }} ) - Auto-Click (+{{ valeurAutoClick }}/s)
        </button>
    </div>
</template>

<script setup lang="js">
import { ref, onMounted, onUnmounted } from 'vue'

const cumul = ref(0)
const valeurClick = ref(1)

const prixAmelioration1 = ref(5)
const prixAmelioration2 = ref(20)

const valeurAutoClick = ref(1)
const valeurAmelioration2 = ref(5)

function augmentation(){
    cumul.value += valeurClick.value;
    console.log(cumul.value)
}

function amelioration1(){
    if (cumul.value >= prixAmelioration1.value) {
        cumul.value -= prixAmelioration1.value;
        prixAmelioration1.value = Math.floor(prixAmelioration1.value * 1.5); 
        valeurClick.value += 1;
    }
}

function amelioration2(){
    if (cumul.value >= prixAmelioration2.value) {
        cumul.value -= prixAmelioration2.value;
        prixAmelioration2.value = Math.floor(prixAmelioration2.value * 1.5); 
        valeurAutoClick.value += 1;

        if (valeurAmelioration2.value) {
        clearInterval(valeurAmelioration2.value);
        }
        
        //vitesse 
        valeurAmelioration2.value = setInterval(() => {
            cumul.value += valeurAutoClick.value;
        }, 1000);
    }
}


// Démarrer l'auto-click automatiquement si déjà acheté
onMounted(() => {
    if (valeurAutoClick.value > 1) {
        startAutoClick();
    }
})

// Nettoyer l'intervalle quand le composant est détruit
onUnmounted(() => {
    if (valeurAmelioration2.value) {
        clearInterval(valeurAmelioration2.value);
    }
})
</script>

<style>
.btn {
    margin: 5px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
}

.btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.btn.active {
    background-color: #28a745;
}
</style>