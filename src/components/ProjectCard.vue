<template>
    <div class="project-card">
        <div class="project-content">
            <h3 class="project-title">{{ title }}</h3>
            <p class="project-description">{{ description }}</p>
            <div class="project-links">
                <a v-if="url" :href="url" class="project-link" target="_blank">View Project</a>
                <a v-if="code_url" :href="code_url" class="project-link" target="_blank">Code</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        title: String,
        description: String,
        url: String,
        code_url: String
    }
}
</script>

<style scoped>
.project-card {
    background-color: lightskyblue;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
}

.project-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.project-title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 22px;
    margin: 0;
    color: darkslateblue;
}

.project-description {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 0;
}

.project-links {
    display: flex;
    gap: 15px;
    margin-top: 8px;
}

.project-link {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: darkmagenta;
    text-decoration: none;
    font-weight: bold;
}

.project-link:hover {
    text-decoration: underline;
}
</style>
