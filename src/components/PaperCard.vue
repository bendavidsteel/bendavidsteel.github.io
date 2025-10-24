<template>
    <base-card :image_url="image_url" :imageAlt="title">
        <a v-if="url" :href="url" target="_blank" class="title-link">
            <h3 class="title">{{ title }}</h3>
        </a>
        <h3 v-else class="title">{{ title }}</h3>
        <p class="authors">{{ authors }}</p>
        <p class="venue">{{ venue }}<span v-if="year"> ({{ year }})</span></p>
        <div v-if="code_url" class="links">
            <a :href="code_url" class="link" target="_blank">Code</a>
        </div>
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
        authors: String,
        venue: String,
        year: Number,
        url: String,
        code_url: String,
        image_url: String
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

.authors {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
    font-style: italic;
}

.venue {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
}

.links {
    display: flex;
    gap: 15px;
    margin-top: 8px;
}

.link {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: darkmagenta;
    text-decoration: none;
    font-weight: bold;
}

.link:hover {
    text-decoration: underline;
}
</style>
