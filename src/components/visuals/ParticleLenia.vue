<template>
    <div class="visual-container">
        <div class="redirect-message">
            Loading Particle Lenia 2D...
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Particle Lenia 2D',
            slug: 'ParticleLenia',
            desc: 'An interactive 2D simulation of Particle Lenia, a continuous cellular automaton that exhibits lifelike behaviors.',
            image_path: '/images/lenia.png',
            date: '2025-09-10'
        };
    },
    mounted() {
        window.location.href = '/particle_lenia.html';
    }
}
</script>

<style scoped>
.visual-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}

.fullsize-frame, .fullsize-container {
    height: 100%;
    width: 100%;
    border: none;
    overflow: hidden;
}
</style>