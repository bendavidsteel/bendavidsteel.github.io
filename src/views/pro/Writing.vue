<template>
    <section class="content">
        <div class="sections-container">
            <section class="section">
                <h2 class="section-title">Writing</h2>
                <div class="section-content">
                    <div v-for="post in posts" v-bind:key="post.title">
                        <substack-card
                            :title="post.title"
                            :date="post.date"
                            :description="post.description"
                            :url="post.url"
                            :image_url="post.image_url">
                        </substack-card>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import SubstackCard from '@/components/SubstackCard'

export default {
    components: {
        SubstackCard
    },
    data() {
        return {
            posts: [
                {
                    title: "There's an easy solution to Canada's TikTok problem",
                    date: new Date(2026, 2, 6),
                    description: "TikTok is uniquely blocking research access in Canada for no apparent reason. We're in the dark when it comes to online harms.",
                    url: "https://bensteel.substack.com/p/theres-an-easy-solution-to-canadas",
                    image_url: "/images/tiktok-canada.webp"
                },
                {
                    title: "Moltbook is good, but should be better",
                    date: new Date(2026, 2, 16),
                    description: "We're under-valuing this glimpse into the future",
                    url: "https://bensteel.substack.com/p/moltbook-is-good-but-should-be-better",
                    image_url: "/images/moltbook.png"
                }
            ]
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

.section-content {
    display: flex;
    flex-direction: column;
}
</style>
