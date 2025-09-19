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
            Amélioration 2 (coût:{{ prixAmelioration2 }} ) - Auto-Click (+{{ valeurAutoClick2}}/s)
        </button>
        <button 
            @click="amelioration3" 
            class="btn"
            :disabled="cumul < prixAmelioration3">
            Amélioration 3 (coût:{{ prixAmelioration3 }} ) - Auto-Click (+{{ valeurAutoClick3}}/s)
        </button>
    </div>
</template>

<script setup lang="js">

const cumul = ref(0)
const valeurClick = ref(1)

const prixAmelioration1 = ref(5)
const prixAmelioration2 = ref(20)
const prixAmelioration3 = ref(50)

const valeurAutoClick2 = ref(1)
const valeurAutoClick3 = ref(5)


// Valeur de base de l'auto-click
const autoClickInterval2 = ref(null)
const autoClickInterval3 = ref(null)

function augmentation(){
    cumul.value += valeurClick.value;
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
        valeurAutoClick2.value += 1; 
        
        // Arrêter l'ancien intervalle si il existe
        if (autoClickInterval2.value) {
            clearInterval(autoClickInterval2.value);
        }
        
        // Démarrer le nouvel intervalle avec la nouvelle valeur
        autoClickInterval2.value = setInterval(() => {
            cumul.value += 1;
        }, 1000);
    }
}

function amelioration3(){
    if (cumul.value >= prixAmelioration3.value) {
        cumul.value -= prixAmelioration3.value;
        prixAmelioration3.value = Math.floor(prixAmelioration3.value * 1.5); 
        valeurAutoClick3.value += 5; 
        
        if (autoClickInterval3.value) {
            clearInterval(autoClickInterval3.value);
        }
        
        // Démarrer le nouvel intervalle avec la nouvelle valeur
        autoClickInterval3.value = setInterval(() => {
            cumul.value += 1;
        }, 1000);
    }
}

// Nettoyage
onUnmounted(() => {
    if (autoClickInterval.value) {
        clearInterval(autoClickInterval.value);
    }
})


const upgrades = [{
    name: "la premiere",
    prixAmelioration: 5,
    nombreAchat: 0,
    valeurAmelioration: 1
}]
</script>