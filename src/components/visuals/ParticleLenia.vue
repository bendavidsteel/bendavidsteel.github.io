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
            image_path: '/images/lenia.png'
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