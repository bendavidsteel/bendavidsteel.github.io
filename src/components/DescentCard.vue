<template>
    <base-card :image_url="image_url" :imageAlt="title">
        <h3 class="title">{{ title }}</h3>
        <p class="description">{{ description }}</p>
        <p v-if="date" class="date">{{ formatDate(date) }}</p>
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
        description: String,
        date: Date,
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
.title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 22px;
    margin: 0;
    color: darkslateblue;
}

.description {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
}

.date {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
    font-style: italic;
}
</style>
