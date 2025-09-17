<template>
    <div class="card bg-base-200 shadow-xl p-6 max-w-xl mx-auto">
        <h2 class="text-2xl font-bold text-primary mb-4">📊 Exemple Chart.js</h2>

        <div class="h-72">
            <!-- On affiche le graphique Bar de vue-chartjs -->
            <Bar :data="chartData" :options="chartOptions" />
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * 1. Importer Chart.js et vue-chartjs
 */
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

/**
 * 2. Enregistrer les modules Chart.js (obligatoire)
 */
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
/**
 * 3. Définir les données du graphique
 */
const chartData = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
    datasets: [
        {
            label: 'Ventes (€)',
            data: [1200, 1500, 900, 2000, 1800],
            backgroundColor: '#3b82f6' // couleur bleue Tailwind/DaisyUI
        }
    ]
}

/**
 * 4. Définir les options
 */
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            labels: {
                color: '#374151'
            }
        },
        title: {
            display: true,
            text: 'Evolution des ventes par mois'
        }
    },
    scales: {
        x: {
            ticks: { color: '#374151' }
        },
        y: {
            ticks: { color: '#374151' }
        }
    }
}
</script>