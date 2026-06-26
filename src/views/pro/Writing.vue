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
                            :image_url="post.image_url"
                            :category="post.category">
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
                    title: "Break-even Viewership on YouTube is in Free-Fall",
                    date: new Date(2026, 4, 25),
                    description: "What happens when content producers can break-even for a video on one viewer?",
                    url: "https://bensteel.substack.com/p/break-even-viewership-on-youtube",
                    image_url: "/images/youtube-breakeven.png",
                    category: "substack"
                },
                {
                    title: "YouTube's Algorithm turned Dutch people into Alberta separatists",
                    date: new Date(2026, 3, 27),
                    description: "In which I marvel at the power of social networks to connect people with mutually empowering interests",
                    url: "https://bensteel.substack.com/p/youtubes-algorithm-turned-dutch-people",
                    image_url: "/images/youtube-alberta.png",
                    category: "substack"
                },
                {
                    title: "The future of AI-generated media",
                    date: new Date(2026, 2, 11),
                    description: "My speculation on what is to come",
                    url: "https://bensteel.substack.com/p/the-future-of-ai-generated-media",
                    image_url: "/images/ai-generated-media.png",
                    category: "substack"
                },
                {
                    title: "The Sun",
                    date: new Date(2026, 2, 1),
                    description: "A short story about a whale and the sun",
                    url: "/articles/TheSun",
                    image_url: "/images/asahi.webp",
                    category: "fiction"
                },
                {
                    title: "Implicit evolution extension to particle life",
                    date: new Date(2026, 1, 21),
                    description: "Evolving interaction rules in particle life simulations",
                    url: "/articles/ImplicitEvoParticleLife",
                    image_url: "/images/evo_particle_life.png",
                    category: "blog"
                },
                {
                    title: "Moltbook is good, but should be better",
                    date: new Date(2026, 1, 16),
                    description: "Eliciting AI capabilities through social media is good, and should be improved.",
                    url: "https://bensteel.substack.com/p/moltbook-is-good-but-should-be-better",
                    image_url: "/images/moltbook.png",
                    category: "substack"
                },
                {
                    title: "There's an easy solution to Canada's TikTok problem",
                    date: new Date(2026, 1, 6),
                    description: "TikTok is uniquely blocking research access in Canada for no apparent reason. We're in the dark when it comes to online harms.",
                    url: "https://bensteel.substack.com/p/theres-an-easy-solution-to-canadas",
                    image_url: "/images/tiktok-canada.webp",
                    category: "substack"
                },
                {
                    title: "Particle Lenia Explorer",
                    date: new Date(2025, 7, 20),
                    description: "Mapping the space of extended particle Lenia using CLIP embeddings, PaCMAP, and Toponymy.",
                    url: "/articles/ParticleLeniaExplorer",
                    image_url: "/images/leniaexplorer.png",
                    category: "blog"
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
