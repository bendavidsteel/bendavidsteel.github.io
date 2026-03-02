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
            desc: 'A datamap visualization of instantiations of Particle Lenia, discovered using vision/text encoders.',
            image_path: '/images/leniaexplorer.png',
            date: '2025-09-10',
            category: 'alife sim'
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