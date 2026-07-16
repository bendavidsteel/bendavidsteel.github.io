<template>
  <div class="paper-card-wrapper">
    <base-card :image_url="image_url" :imageAlt="title">
        <a v-if="url" :href="url" target="_blank" class="title-link">
            <h3 class="title">{{ title }}</h3>
        </a>
        <h3 v-else class="title">{{ title }}</h3>
        <span v-if="tag" class="tag" :class="'tag-' + tag">{{ tag }}</span>
        <p v-if="authors" class="authors">{{ authors }}</p>
        <p class="venue">{{ venue }}<span v-if="year"> ({{ year }})</span></p>
        <div v-if="code_url" class="links">
            <a :href="code_url" class="link" target="_blank">Code</a>
        </div>
        <div v-if="mentions && mentions.length" class="coverage">
            <span class="coverage-label">Coverage</span>
            <a
                v-for="mention in mentions"
                v-bind:key="mention.title"
                :href="mention.url"
                target="_blank"
                class="coverage-outlet">{{ mention.outlet }}</a>
        </div>
    </base-card>
  </div>
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
        image_url: String,
        tag: String,
        mentions: Array
    }
}
</script>

<style scoped>
.tag {
    align-self: flex-start;
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 2px 10px;
    border-radius: 999px;
    color: lightgoldenrodyellow;
}

.tag-paper {
    background-color: darkslateblue;
}

.tag-report {
    background-color: darkmagenta;
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

.coverage {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px 8px;
    margin-top: 10px;
}

.coverage-label {
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: darkslateblue;
}

.coverage-outlet {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: lightgoldenrodyellow;
    background-color: darkslateblue;
    text-decoration: none;
    padding: 2px 10px;
    border-radius: 999px;
}

.coverage-outlet:hover {
    text-decoration: underline;
}

/* allow cards to grow when they carry coverage instead of clipping */
:deep(.base-card) {
    max-height: none;
}
</style>
