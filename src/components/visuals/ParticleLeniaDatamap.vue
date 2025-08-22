<template>
    <div class="visual-container">
        <div class="redirect-message">
            Loading Particle Lenia Datamap...
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Particle Lenia Datamap',
            slug: 'ParticleLeniaDatamap',
            image_path: '@/assets/visuals/particle_lenia_datamap.png'
        };
    },
    mounted() {
        window.location.href = '/particle_lenia_datamap.html';
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