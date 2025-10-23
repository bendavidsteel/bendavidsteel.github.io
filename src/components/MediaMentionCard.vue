<template>
    <div class="media-card">
        <div class="media-content">
            <h3 class="media-title">{{ title }}</h3>
            <p class="media-outlet">{{ outlet }}<span v-if="date"> - {{ formatDate(date) }}</span></p>
            <p v-if="description" class="media-description">{{ description }}</p>
            <a v-if="url" :href="url" class="media-link" target="_blank">Read More</a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: String,
        outlet: String,
        date: Date,
        description: String,
        url: String
    },
    methods: {
        formatDate(date: Date) {
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        }
    }
}
</script>

<style scoped>
.media-card {
    background-color: lightskyblue;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
}

.media-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.media-title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 22px;
    margin: 0;
    color: darkslateblue;
}

.media-outlet {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
    font-weight: bold;
}

.media-description {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
}

.media-link {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: darkmagenta;
    text-decoration: none;
    font-weight: bold;
}

.media-link:hover {
    text-decoration: underline;
}
</style>
