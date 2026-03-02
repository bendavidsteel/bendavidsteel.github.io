<template>
    <base-card :image_url="image_path" :imageAlt="title">
        <a :href="'fullscreen/visual/' + slug" class="title-link">
            <h3 class="title">{{ title }}</h3>
        </a>
        <p v-if="desc" class="desc">{{ desc }}</p>
        <div v-if="category" class="links">
            <span class="link">{{ category }}</span>
        </div>
    </base-card>
</template>

<script>
import BaseCard from './BaseCard.vue'

export default {
    components: {
        BaseCard
    },
    props: {
        title: String,
        image_path: String,
        slug: String,
        desc: String,
        category: String
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

.desc {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    margin: 8px 0 0 0;
    color: #555;
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
</style>
