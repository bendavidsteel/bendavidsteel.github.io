<template>
    <div class="base-card">
        <div class="card-content">
            <slot></slot>
        </div>
        <img v-if="image_url" :src="image_url" :alt="imageAlt" class="card-image" />
    </div>
</template>

<script lang="ts">
export default {
    props: {
        image_url: String,
        imageAlt: String
    }
}
</script>

<style scoped>
.base-card {
    background-color: lightskyblue;
    margin-bottom: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    align-items: stretch;
    max-height: 200px;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    min-width: 0;
    padding: 20px;
    overflow: hidden;
}

.card-image {
    width: 33.333%;
    max-width: 33.333%;
    min-height: 100%;
    object-fit: cover;
    object-position: center;
    flex-shrink: 0;
}
</style>
