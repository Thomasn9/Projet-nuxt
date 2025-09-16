<template>
    <div class="card w-full max-w-md bg-base-200 shadow-xl my-4">
        <div class="card-body">
            <h2 class="card-title text-primary">
                👤 {{ unAmiName }}
                <div class="badge" :class="premium ? 'badge-success' : 'badge-ghost'">
                    {{ premium ? 'Premium' : 'Standard' }}
                </div>

                <button class="btn btn-active btn-secondary" @click="modif" > Changer status</button>
                
            </h2>

            <div class="space-y-2 text-base-content">
                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-primary">ID</span>
                    {{ id }}
                </p>

                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-secondary">📞</span>
                    {{ unAmiPhone }}
                </p>

                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-accent">📧</span>
                    {{ unAmiMail }}
                </p>

                <button class="flex items-center gap-2 px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200" @click="supp">
                    <span class="text-sm">🗑️</span>
                    
                </button>


            </div>

            <!-- <div class="card-actions justify-end mt-4">
                <button class="btn btn-sm btn-primary">Contacter</button>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="js">

const emit = defineEmits(['supprimer','modif'])

function supp(){
    emit("supprimer",props.id)
}

function modif(){
    emit("modif",props.id)
}

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    unAmiName: {
        type: String,
        required: true,
    },
    unAmiPhone: {
        type: String,
        required: true,
    },
    unAmiMail: {
        type: String,
        required: true,
    },
    premium: {
        type: Boolean,
        required: false,
        default: false,
    },
})
</script>