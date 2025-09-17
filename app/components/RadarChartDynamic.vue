<template>
    <div class="card bg-base-200 shadow-xl p-6 max-w-xl mx-auto">
        <h2 class="text-2xl font-bold text-primary mb-4">🌐 Radar Dynamique</h2>

        <div class="h-96">
            <!-- Composant Radar -->
            <Radar :data="chartData" :options="chartOptions" />
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
            <button class="btn btn-primary" @click="randomize">
                🔄 Randomiser les données
            </button>
            <button class="btn btn-outline" @click="reset">
                ♻️ Reset
            </button>
        </div>
    </div>
</template>

<script setup lang="js">
/**
 * 1. Importer Chart.js + vue-chartjs
 */
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler
} from 'chart.js'
import { Radar } from 'vue-chartjs'

/**
 * 2. Enregistrer les modules nécessaires
 */
ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler)

/**
 * 3. Définir nos données dynamiques
 */
const dynamicValues = ref([65, 59, 90, 81, 56, 55])

/**
 * 4. Générer aléatoirement des valeurs
 */
function randomize() {
    dynamicValues.value = dynamicValues.value.map(() => Math.floor(Math.random() * 100))
}

function reset() {
    dynamicValues.value = [65, 59, 90, 81, 56, 55]
}

/**
 * 5. Chart Data via computed
 */
const chartData = computed(() => ({
    labels: ['HTML', 'CSS', 'JS', 'Vue', 'Nuxt', 'Tailwind'],
    datasets: [
        {
            label: 'Compétences (%)',
            data: dynamicValues.value,
            backgroundColor: 'rgba(59,130,246,0.2)', // bleu avec transparence
            borderColor: '#3b82f6',
            borderWidth: 2,
            pointBackgroundColor: '#3b82f6'
        }
    ]
}))

/**
 * 6. Chart Options via computed
 */
const chartOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            angleLines: { color: '#e5e7eb' },
            grid: { color: '#d1d5db' },
            pointLabels: {
                color: '#374151', // texte des labels
                font: { size: 14 }
            },
            ticks: {
                backdropColor: 'transparent',
                color: '#374151'
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            labels: { color: '#374151' }
        },
        title: {
            display: true,
            text: 'Radar des Compétences',
            color: '#111827',
            font: { size: 18 }
        }
    }
}))
</script>