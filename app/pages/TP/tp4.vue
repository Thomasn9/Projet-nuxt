<template>
    <h1>Ce TP fonctionne avec les component UserData.vue / USerActive. vue / tp4.vue</h1>
    <UserActive
    :sonNom="User.nom"
    :sonAge="User.age">
    </UserActive>
    <UserData
    v-on:modif = modification>

    </UserData>

</template>

<script setup lang="js">

const User = ref(
    {
        nom: 'jean',
        age: '12'
    }
)


function modification(nomEvent, ageEvent){
    console.log(nomEvent)
    User.value = {
        nom: nomEvent,
        age: ageEvent
    }
    
}

</script>
