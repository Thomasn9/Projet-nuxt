<template>
    <div class="card bg-base-100 shadow-xl border border-base-300">
        <div class="card-body p-6">
            <h3 class="card-title text-lg font-semibold text-base-content mb-4">
                Composant affichage des données utilisateur
            </h3>
            
            <div class="space-y-3">
                <div class="flex justify-between items-center py-2 border-b border-base-200">
                    <span class="font-medium text-base-content">Nom :</span>
                    <span class="text-base-content">{{sonNom}}</span>
                </div>
                
                <div class="flex justify-between items-center py-2 border-b border-base-200">
                    <span class="font-medium text-base-content">Age :</span>
                    <span class="text-base-content">{{sonAge}} ans</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">

const props = defineProps({
    sonNom: {
        type: String,
        required: true,
    },
    sonAge: {
        type: String,
        required: true,
    },
})


</script>