<template>
    <div class="bg-base-200 min-h-screen p-6">
        <div class="container mx-auto max-w-4xl">
            <!-- Section Informations personnelles -->
            <div class="card bg-base-100 shadow-xl mb-8">
                <div class="card-body">
                    <h2 class="card-title text-3xl mb-6">Composant formulaire d'édition</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Name</span>
                            </label>
                            <input type="text" placeholder="votre nom" class="input input-bordered" v-model = "nouveauName" />
                        </div>
                        
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Age</span>
                            </label>
                            <input type="text" placeholder="Votre Age" class="input input-bordered" v-model = "nouveauAge"/>
                        </div>
                        <button class="btn btn-primary mt-4" @:click="modifier">Modifier</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">

const nouveauName = ref('');
const nouveauAge = ref('');

const emit = defineEmits(['modif'])

function modifier(){
    emit("modif",nouveauName.value,nouveauAge.value)
}


</script>