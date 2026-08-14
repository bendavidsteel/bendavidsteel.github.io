<template>
    <div class="visual-container">
        <div class="redirect-message">
            Loading Fluoddity Datamap...
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Fluoddity Datamap',
            slug: 'FluoddityDatamap',
            desc: 'A datamap of 25,000 randomly generated Fluoddity behaviours, positioned by what they rendered. Hover a point to run that simulation live in WebGPU, click to open it in the full app. Requires WebGPU.',
            image_path: '/images/fluoddity_datamap.jpg',
            date: '2026-08-14',
            category: 'alife sim'
        };
    },
    mounted() {
        window.location.href = '/fluoddity_datamap.html';
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
