<template>
    <div>
        <h3>vous avez : {{ cumul }} clicks</h3>
        <button @click="augmentation" class="btn">click</button>
    </div>


</template>

<script setup lang="js">

// const cumul = ref(1)
let cumul = 0;
const valeurClick = 1;
// const valeurClick = ref("")


function augmentation(){
    cumul ++;
    console.log(cumul)
    return cumul
}

</script>


<style>

</style>