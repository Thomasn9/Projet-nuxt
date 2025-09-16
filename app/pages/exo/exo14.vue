    <!-- Maintenant on va faire l'exercice sur les events avec $emit phase 1 :  -->
    <!-- Dans le composant OneFriend.vue on va ajouter un bouton ou icone "Delete" qui va émettre un event "deleteFriend" -->
    <!--Dans OnFriend.vue -->
    <!-- il faut ajouter un bouton ou icone "Delete" quand on click dessus on va émettre un event "deleteFriend" qui contiendra la props (l'id de l'ami)  -->
    <!-- Dans FriendsList.vue ou ici /exercices/emit.vue-->
    <!-- on va écouter (v-on) l'event "deleteFriend" qui va faire une FONCCION deleteInLesAmis-->
    <!-- dans deleteInLesAmis on va recevoir en paramètre l'id de l'ami et on va se débrouiller pour supprimer l'ami du tableau (filter, splice, etc...) -->

    <template>
    <h1>Ici La page des Copains ! </h1>
    <h2>Cette exercices fonctionne avec le fichier exo 13 et le component OneFriendV2.vue et le component AddOneFriend.vue</h2>
    <AddOneFriend></AddOneFriend>


    <!-- On arrive a l'utiliser une fois on va le répéter plusieurs fois (cf autant de fois qu'on a des elements dans le tableau) -->
    <OneFriendV2 
    v-for="ami in lesAmis"
    :id="ami.id"
    :unAmiName="ami.name"
    :unAmiPhone="ami.phone"
    :unAmiMail="ami.email"
    :premium="ami.premium"
    v-on:supprimer = degage
    v-on:modif = modifier
    ></OneFriendV2>
</template>

<script setup lang='js'>

const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: false
    }
]);

// ici je recupere l'id du props pour affectuer le plice
function degage(idFromEventOneFriend){
    console.log(idFromEventOneFriend);
    lesAmis.value.splice(idFromEventOneFriend,1)
}

function modifier(idUser){
    console.log(idUser)
    const leGarsATrouver = lesAmis.value.find((leBlaze) => leBlaze.id === idUser);
    leGarsATrouver.premium = !leGarsATrouver.premium;
    console.log(leGarsATrouver.premium);
}
</script>