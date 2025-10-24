<template>
    <base-card :image_url="image_url" :imageAlt="title">
        <a v-if="url" :href="url" target="_blank" class="title-link">
            <h3 class="title">{{ title }}</h3>
        </a>
        <h3 v-else class="title">{{ title }}</h3>
        <p class="outlet">{{ outlet }}<span v-if="date"> - {{ formatDate(date) }}</span></p>
        <p v-if="description" class="description">{{ description }}</p>
    </base-card>
</template>

<script lang="ts">
import BaseCard from './BaseCard.vue'

export default {
    components: {
        BaseCard
    },
    props: {
        title: String,
        outlet: String,
        date: Date,
        description: String,
        url: String,
        image_url: String
    },
    methods: {
        formatDate(date: Date) {
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        }
    }
}
</script>

<style scoped>
.title-link {
    text-decoration: none;
    color: inherit;
}

.title-link:hover .title {
    text-decoration: underline;
}

.title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 22px;
    margin: 0;
    color: darkslateblue;
}

.outlet {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
    font-weight: bold;
}

.description {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
}
</style>
