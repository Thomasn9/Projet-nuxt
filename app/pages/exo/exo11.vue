<template>
    <div class="bg-base-200 min-h-screen p-6">
        <div class="container mx-auto max-w-4xl">
            <!-- Section Informations personnelles -->
            <div class="card bg-base-100 shadow-xl mb-8">
                <div class="card-body">
                    <h1 class="card-title text-3xl mb-6">Ici c'est le composant parent ExoPropsView</h1>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Name</span>
                            </label>
                            <input type="text" placeholder="votre nom" class="input input-bordered" />
                        </div>
                        
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Tél</span>
                            </label>
                            <input type="text" placeholder="Votre Tél" class="input input-bordered" />
                        </div>
                        
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Email</span>
                            </label>
                            <input type="email" placeholder="Votre EMAIL" class="input input-bordered" />
                        </div>
                    </div>
                    
                    <div class="divider my-8"></div>
                </div>
            </div>

            <!-- Section Ajouter Ami -->
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-2xl mb-6">Ajouter Ami</h2>
                    
                    <!-- Formulaire pour ajouter un ami -->
                    <div class="bg-base-200 p-6 rounded-lg mb-8">
                        <h3 class="text-lg font-semibold mb-4">Ajouter un nouvel ami</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Nom de l'ami" class="input input-bordered" />
                            <div class="flex items-center">
                                <input type="checkbox" class="checkbox checkbox-primary mr-2" />
                                <span>Ami premium</span>
                            </div>
                        </div>
                        <button class="btn btn-primary mt-4">Ajouter</button>
                    </div>
                    
                    <!-- Liste d'amis -->
                    <div class="space-y-6">
                        <div v-for="(friend, index) in friends" :key="index" class="bg-base-200 p-6 rounded-lg">
                            <h3 class="text-xl font-semibold mb-4">{{ friend.name }} <span v-if="friend.premium" class="badge badge-primary">Ami premium</span></h3>
                            
                            <div class="flex flex-wrap gap-4">
                                <label class="cursor-pointer label justify-start gap-2">
                                    <input type="checkbox" class="checkbox checkbox-primary" />
                                    <span class="label-text">Afficher Détails</span>
                                </label>
                                
                                <label class="cursor-pointer label justify-start gap-2">
                                    <input type="checkbox" :checked="friend.premium" class="checkbox checkbox-accent" />
                                    <span class="label-text">Premium</span>
                                </label>
                                
                                <button class="btn btn-outline btn-error btn-sm">Suppr.</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    // Données pour la liste d'amis
    const friends = [
        { name: 'COCO L ASTICOT', premium: true },
        { name: 'COCO L ASTICOT', premium: true },
        { name: 'Steven Seagal', premium: true },
        { name: 'JAROD', premium: true }
    ];
</script>
