<template>
    <section class="content" :style="{'background-image': 'url(/images/leniaexplorer.png)'}">
        <div class="sections-container">
            <section class="section">
                <h1 class="article-title">{{ title }}</h1>
                <h4 class="article-subtitle">{{ subtitle }}</h4>
                <p class="article-date">{{ formatDate(date) }}</p>
                <div class="article-content" v-html="renderedContent"></div>
            </section>
        </div>
    </section>
</template>

<script>
import MarkdownIt from 'markdown-it'
import mk from '@traptitech/markdown-it-katex'
import content from './particle-lenia-explorer.md'
import 'katex/dist/katex.min.css'

const md = new MarkdownIt()
md.use(mk)

export default {
    data() {
        return {
            title: "Particle Lenia Explorer",
            subtitle: "Mapping the space of extended particle Lenia",
            date: new Date('2025-08-20'),
            image_path: '/images/leniaexplorer.png',
            slug: 'ParticleLeniaExplorer'
        }
    },
    computed: {
        renderedContent() {
            return md.render(content)
        }
    },
    methods: {
        formatDate(date) {
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        }
    }
}
</script>

<style scoped>
.content {
    min-height: 100vh;
    margin-bottom: 0px;
    padding: 0px;
    padding-bottom: 40px;
    background-color: #000;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
}

.sections-container {
    margin: 40px 20%;
    display: flex;
    flex-direction: column;
    gap: 60px;
}

@media only screen and (max-width: 600px) {
    .sections-container {
        margin: 20px 5%;
    }
}

.section {
    background-color: lightgoldenrodyellow;
    padding: 30px 40px;
    border-radius: 8px;
}

.article-title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 36px;
    color: darkslateblue;
    text-shadow: -1px -1px 0 lightcoral, 1px -1px 0 lightcoral, -1px 1px 0 lightskyblue, 1px 1px 0 lightskyblue;
    margin-top: 0;
    margin-bottom: 5px;
}

.article-subtitle {
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 20px;
    color: darkmagenta;
    margin: 0;
}

.article-date {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: grey;
    margin-top: 5px;
    margin-bottom: 30px;
}

.article-content {
    color: #333;
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 16px;
    line-height: 1.7;
}

.article-content :deep(h1) {
    display: none;
}

.article-content :deep(h2) {
    font-family: 'Courier New', Courier, monospace;
    font-size: 28px;
    color: darkslateblue;
    text-shadow: -1px -1px 0 lightcoral, 1px -1px 0 lightcoral, -1px 1px 0 lightskyblue, 1px 1px 0 lightskyblue;
    margin-top: 2rem;
    margin-bottom: 10px;
}

.article-content :deep(p) {
    margin-bottom: 1rem;
}

.article-content :deep(a) {
    color: darkslateblue;
    text-decoration: none;
}

.article-content :deep(a:hover) {
    text-decoration: underline;
}

.article-content :deep(.katex-display) {
    margin: 1.5rem 0;
    overflow-x: auto;
}

.article-content :deep(img) {
    width: 100%;
    border-radius: 8px;
    display: block;
}
</style>
