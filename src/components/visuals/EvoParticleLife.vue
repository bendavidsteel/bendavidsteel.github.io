<template>
    <div class="visual-container">
        <div class="redirect-message">
            Loading Evo Particle Life...
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Evo Particle Life',
            slug: 'EvoParticleLife',
            desc: 'An implicit evolution extension to particle life, built with Bevy and WebGPU, featuring emergent lifelike behaviors from simple interaction rules.',
            image_path: '/images/evo_particle_life.png',
            date: '2026-02-16'
        };
    },
    mounted() {
        window.location.href = '/evo_particle_life.html';
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

.redirect-message {
    color: white;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
