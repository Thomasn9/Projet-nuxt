<template>
<h1>Météo de :{{ city }}</h1>
<h2>température max : {{ tempMax }}</h2>
<h2>Température min: {{ tempMin }}</h2>
<h2>Température Actuel: {{ tempAct }}</h2>

</template>

<script setup lang="js">

// déclaration de la constante pour la ville
const city = ref(null);
// déclaration de la constante pour la températur max
const tempMax= ref(null);
// déclaration de la constante pour la températur max
const tempMin = ref(null);
// déclaration de la constante pour la températur max
const tempAct = ref(null);

const contactApi =  async () => {
    //Data va récup Toutes les données de l'api
    const response = await fetch('https://prevision-meteo.ch/services/json/toulouse');
    console.log(response);
    console.log(response.status);

    // ici je transforme les data en json pour les lire 
    const dataTransformed = await response.json();
    console.log(dataTransformed);

    // ici je vais chercher les infos précise que je veut 
    city.value = dataTransformed.city_info.name;
    console.log(dataTransformed.city_info.name);

    tempMax.value = dataTransformed.fcst_day_0.tmax;
    console.log(dataTransformed.fcst_day_0.tmax);

    tempMin.value = dataTransformed.fcst_day_0.tmin;
    console.log(dataTransformed.fcst_day_0.tmin);

    tempAct.value = dataTransformed.current_condition.tmp;
    console.log(dataTransformed.current_condition.tmp);
}

onMounted(() => {
    console.log('✅ Le composant est monté : on peut faire des appels API.')
    contactApi();
})

</script>

<style >

</style>