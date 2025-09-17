<template>
    <div class="bg-base-200 min-h-screen p-6">
        <div class="container mx-auto max-w-4xl">
            <!-- Section Informations personnelles -->
            <div class="card bg-base-100 shadow-xl mb-8">
                <div class="card-body">
                    <h1 class="card-title text-3xl mb-6">Ta pas d'amis ? Remplie un formulaire !</h1>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Name</span>
                            </label>
                            <input type="text" placeholder="votre nom" class="input input-bordered" v-model = "nameFriend" />
                        </div>
                        
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Tél</span>
                            </label>
                            <input type="text" placeholder="Votre Tél" class="input input-bordered" v-model = "telFriend"/>
                        </div>
                        
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Email</span>
                            </label>
                            <input type="email" placeholder="Votre EMAIL" class="input input-bordered" v-model = "emailFriend" />
                        </div>

                        <button class="btn btn-primary mt-4" @:click="ajout">Ajouter</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">


const nameFriend = ref("");
const telFriend = ref("");
const emailFriend = ref("");

const emit = defineEmits(['ajoutAmis'])

function ajout(){
    emit('ajoutAmis',{
        name:nameFriend.value,
        id:Math.random().toString(),
        phone:telFriend.value,
        email:emailFriend.value,
        premium : false
    }
    )
}



</script>