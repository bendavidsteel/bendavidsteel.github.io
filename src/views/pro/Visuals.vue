<template>
    <section class="content">
        <div class="sections-container">
            <section class="section">
                <h2 class="section-title">Visuals</h2>
                <p class="section-description">
                    These are some visualisations/visual experiments I've done!
                </p>
                <div class="section-content">
                    <div v-for="visual in visuals" v-bind:key="visual.slug">
                        <visual-card
                            :title="visual.title"
                            :image_path="visual.image_path"
                            :slug="visual.slug">
                        </visual-card>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import VisualCard from '@/components/VisualCard'

export default {
    components: {
        VisualCard
    },
    data() {
        const req = require.context('@/components/visuals/', true, /\.vue$/i);
        const visual_data = req.keys().map(key => {
                return req(key).default.data()
            });
        return {
            visuals: visual_data
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
    background-color: lightgoldenrodyellow;
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
    background-color: darkslateblue;
    padding: 30px;
    border-radius: 8px;
}

.section-title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 36px;
    color: lightgoldenrodyellow;
    text-shadow: -1px -1px 0 lightcoral, 1px -1px 0 lightcoral, -1px 1px 0 lightskyblue, 1px 1px 0 lightskyblue;
    margin-top: 0;
    margin-bottom: 20px;
}

.section-description {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: lightgoldenrodyellow;
    margin-bottom: 20px;
}

.section-content {
    display: flex;
    flex-direction: column;
}
</style>