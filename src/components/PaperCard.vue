<template>
    <div class="paper-card">
        <div class="paper-content">
            <h3 class="paper-title">{{ title }}</h3>
            <p class="paper-authors">{{ authors }}</p>
            <p class="paper-venue">{{ venue }}<span v-if="year"> ({{ year }})</span></p>
            <div class="paper-links">
                <a v-if="url" :href="url" class="paper-link" target="_blank">Paper</a>
                <a v-if="code_url" :href="code_url" class="paper-link" target="_blank">Code</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: String,
        authors: String,
        venue: String,
        year: Number,
        url: String,
        code_url: String
    }
}
</script>

<style scoped>
.paper-card {
    background-color: lightskyblue;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
}

.paper-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.paper-title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 22px;
    margin: 0;
    color: darkslateblue;
}

.paper-authors {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
    font-style: italic;
}

.paper-venue {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
}

.paper-links {
    display: flex;
    gap: 15px;
    margin-top: 8px;
}

.paper-link {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: darkmagenta;
    text-decoration: none;
    font-weight: bold;
}

.paper-link:hover {
    text-decoration: underline;
}
</style>
