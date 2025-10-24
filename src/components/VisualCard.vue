<template>
    <base-card :image_url="image_path" :imageAlt="title">
        <a :href="'fullscreen/visual/' + slug" class="title-link">
            <h3 class="title">{{ title }}</h3>
        </a>
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
        slug: String
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
</style>
