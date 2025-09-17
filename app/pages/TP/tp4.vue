<template>
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


function modification(nom){
    console.log(nom)
    User.value
}

</script>
