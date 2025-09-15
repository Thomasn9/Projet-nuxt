# 📝 Fiche Vue.js

## 🚀 Résumé rapide

- **`{{ }}`** → afficher une donnée

- **`v-model`** → lier une donnée ↔ input

- **`v-bind`** (`:`) → insérer une donnée dans un attribut HTML

- **`v-on`** (`@`) → écouter un événement (click, input, …)

- **`v-if / v-else / v-else-if`** → afficher selon condition

- **`v-show`** → afficher/cacher mais garder l’élément

- **`v-for`** → répéter une liste

- **`ref`** → accéder directement à un élément HTML

- **`computed`** → créer une valeur calculée automatiquement

- **`watch`** → réagir quand une donnée change

- **`scoped`** → styles appliqués uniquement au composant

- v-html


## 1. Afficher des données

- **`{{ }}` (interpolation)**  
  Sert à afficher une donnée du script dans ton HTML.

  ```vue
  <p> {{ message }} </p>
  ```

    Exemple : si message = "Bonjour", alors l’écran affichera :
    Bonjour

## 2. Lier les données au HTML

- **`v-model`**

    Lie une donnée à un champ. Quand tu modifies le champ, la donnée change, et inversement.

    ```vue
    <input v-model="nom">
        <p> Ton nom est : {{ nom }} </p>
    ```

    → Tu tapes "Lucas", et le texte s’actualise automatiquement.

    ---

- **`v-bind` (ou `:` raccourci)**

    Sert à lier une donnée à un attribut HTML (comme `src`, `href`, `id`, etc.).

    ```vue
    <img :src="imageUrl">
    ```

    Si `imageUrl = "photo.png"`, alors l’image affichée sera `photo.png`.

    ---

- **`v-on` (ou `@` raccourci)**

    Sert à écouter un événement (clic, saisie, survol…).

    ```vue
    <button @click="direBonjour">
        Clique-moi
    </button>
    ```

    → Quand tu cliques, la fonction `direBonjour` s’exécute.

## 3. Conditions (afficher / cacher)

- **`v-if`**

    Affiche seulement si la condition est vraie.

    ```vue
    <p v-if="isLoggedIn">
        Bienvenue 
    !</p>
    ```

    → S’affiche uniquement si `isLoggedIn = true`.

    ---

- **`v-else`**

    Affiche un élément si la condition du v-if est fausse

    ```vue
    <p v-if="isLoggedIn">
        Bienvenue 
    !</p>
    <p v-else>
        Connecte-toi 
    !</p>
    ```

    ---

- **`v-else-if`**

    Sert à ajouter un autre cas.

    ```vue
    <p v-if="age < 13">
        Enfant
    </p>
    <p v-else-if="age < 18">
        Adolescent
    </p>
    <p v-else>
        Adulte
    </p>
    ```

    ---

- **`v-show`**

    Comme `v-if`, mais garde l’élément dans le HTML (juste caché en `display: none`).

    ```vue
    <p v-show="isVisible">
        Coucou
    </p>
    ```

## 4. Répéter des éléments

- **`v-for`**

    Répète un élément pour chaque item d’une liste ou Tableau.

    ```vue
    <ul>
        <li v-for="film in films" :key="film">
            {{ film }}
        </li>
    </ul>
    ```

    Exemple si `films = ["Matrix", "Avatar", "Inception"]`, tu auras :

    - Matrix

    - Avatar

    - Inception

## 5. Références et valeurs calculées

- **`ref`**

    Sert à pointer un élément HTML pour le manipuler directement.

    ```vue
    <input ref="monInput">
    <button @click="$refs.monInput.focus()">
        Focus sur l’input
    </button>
    ```

- **`computed`**

    Crée une valeur calculée automatiquement à partir d’autres données.

    ```vue
    const prix = ref(10) 
    const quantite = ref(3) 
    
    const total =  computed(() => prix.value * quantite.value)
    ```

    → Si `prix = 10` et `quantite = 3`, alors `total = 30`.

- **`watch`**

    Observe une donnée et exécute une fonction quand elle change.

    ```vue
    watch(prix, (nouveau, ancien) => { 
        console.log("Le prix a   changé de", ancien,"à", nouveau) 
    })
    ```

## 6. Styles et organisation

- **`scoped` (dans `<style>`)**

    Permet que tes styles n’agissent que dans ton composant, pas ailleurs.

    ```vue
    <style scoped>
        p {
        color: red;
        }
    </style>
    ```

    → Les `<p>` de ce composant seront rouges, mais pas dans les autres composants.
