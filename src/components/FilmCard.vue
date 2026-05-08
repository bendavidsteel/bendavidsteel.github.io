<template>
    <base-card :image_url="thumbnailUrl" :imageAlt="title">
        <a :href="youtube_url" target="_blank" class="title-link">
            <h3 class="title">{{ title }}</h3>
        </a>
        <p v-if="date" class="date">{{ formatDate(date) }}</p>
        <p v-if="description" class="description">{{ description }}</p>
    </base-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseCard from './BaseCard.vue'

export default defineComponent({
    components: {
        BaseCard
    },
    props: {
        title: String,
        date: Date,
        description: String,
        youtube_url: String
    },
    computed: {
        videoId(): string | null {
            if (!this.youtube_url) return null;
            const url = new URL(this.youtube_url);
            if (url.hostname === 'youtu.be') {
                return url.pathname.slice(1);
            }
            return url.searchParams.get('v');
        },
        thumbnailUrl(): string | null {
            if (!this.videoId) return null;
            return `https://img.youtube.com/vi/${this.videoId}/hqdefault.jpg`;
        }
    },
    methods: {
        formatDate(date: Date) {
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        }
    }
})
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

.date {
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
