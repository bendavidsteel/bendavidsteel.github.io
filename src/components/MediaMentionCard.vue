<template>
    <div class="mention-card">
        <a v-if="url" :href="url" target="_blank" class="title-link">
            <span class="title">{{ title }}</span>
        </a>
        <span v-else class="title">{{ title }}</span>
        <span class="meta"> — {{ outlet }}<span v-if="date">, {{ formatDate(date) }}</span></span>
    </div>
</template>

<script lang="ts">
export default {
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
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
        }
    }
}
</script>

<style scoped>
.mention-card {
    background-color: lightskyblue;
    margin-bottom: 8px;
    border-radius: 4px;
    padding: 10px 16px;
}

.title-link {
    text-decoration: none;
    color: inherit;
}

.title-link:hover .title {
    text-decoration: underline;
}

.title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    color: darkslateblue;
    font-weight: bold;
}

.meta {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #444;
}
</style>
