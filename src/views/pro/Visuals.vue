<template>
    <div>
        <p>
            These are some visualisations/visual experiments I've done!
        </p>
        <div class="visuals">
            <div v-for="visual in visuals" v-bind:key="visual.id" class="visual-card-container">
                <visual-card :title="visual.title" :image_path="visual.image_path" :slug="visual.slug">
                </visual-card>
            </div>
        </div>
    </div>
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
.visuals {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>