<template>
    <section class="content">
        <div class="content-body" :style="{'background-image': 'url(' + require('@/assets/mountains.jpg') + ')'}">
            <div class="flex">
                <div class="flex-box">
                    <h1 id='name'>
                        Benjamin David Steel
                    </h1>
                </div>
                <div>
                    <h4 id='descrip'>
                        PhD candidate with <a class="link" href="https://derekruths.com/">Derek Ruths</a> in the <a class="link" href="http://networkdynamics.org/">Network Dynamics Lab</a><br>
                        researcher @ <a class="link" href="https://meo.ca/">Media Ecosystem Observatory</a><br>
                        former dev @ <a class="link" href="https://www.mayahtt.com/">MayaHTT</a> and <a class="link" href="https://www.ubisoft.com/en-gb/">Ubisoft</a><br>
                        computational social science<br>
                        climber | skier | backpacker
                    </h4>
                </div>
            </div>
        </div>

        <div class="sections-container">
            <section class="section">
                <h2 class="section-title">Selected Papers</h2>
                <div class="section-content">
                    <div v-for="paper in papers" v-bind:key="paper.title">
                        <paper-card
                            :title="paper.title"
                            :authors="paper.authors"
                            :venue="paper.venue"
                            :year="paper.year"
                            :url="paper.url"
                            :code_url="paper.code_url"
                            :image_url="paper.image_url">
                        </paper-card>
                    </div>
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">Art</h2>
                <div class="section-content">
                    <div v-for="project in projects" v-bind:key="project.title">
                        <project-card
                            :title="project.title"
                            :description="project.description"
                            :url="project.url"
                            :code_url="project.code_url"
                            :image_url="project.image_url">
                        </project-card>
                    </div>
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">Media Mentions</h2>
                <div class="section-content">
                    <div v-for="mention in media_mentions" v-bind:key="mention.title">
                        <media-mention-card
                            :title="mention.title"
                            :outlet="mention.outlet"
                            :date="mention.date"
                            :description="mention.description"
                            :url="mention.url"
                            :image_url="mention.image_url">
                        </media-mention-card>
                    </div>
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">Fav Ascents</h2>
                <div class="section-content">
                    <div v-for="ascent in ascents" v-bind:key="ascent.title">
                        <ascent-card
                            :title="ascent.title"
                            :description="ascent.description"
                            :date="ascent.date"
                            :image_url="ascent.image_url">
                        </ascent-card>
                    </div>
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">Fav Descents</h2>
                <div class="section-content">
                    <div v-for="descent in descents" v-bind:key="descent.title">
                        <descent-card
                            :title="descent.title"
                            :description="descent.description"
                            :date="descent.date"
                            :image_url="descent.image_url">
                        </descent-card>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>
<script>
// import ArticleCard from '@/components/ArticleCard'
import PaperCard from '@/components/PaperCard'
import ProjectCard from '@/components/ProjectCard'
import MediaMentionCard from '@/components/MediaMentionCard'
import AscentCard from '@/components/AscentCard'
import DescentCard from '@/components/DescentCard'

export default {
    components: {
        // ArticleCard,
        PaperCard,
        ProjectCard,
        MediaMentionCard,
        AscentCard,
        DescentCard
    },
    data() {
        const req = require.context('@/components/articles/', true, /\.vue$/i);
        const article_data = req.keys().map(key => {
                return req(key).default.data()
            });
        return {
            posts: article_data,
            papers: [
                {
                    title: "Just Another Hour on TikTok: ID sampling to obtain a complete slice of TikTok",
                    authors: "B. Steel, M. Schirmer, D. Ruths, J. Pfeffer",
                    venue: "under review, pre-print on arxiv",
                    year: 2025,
                    url: "https://arxiv.org/pdf/2504.13279",
                    code_url: "https://github.com/bendavidsteel/tiktok-slice",
                    image_url: "/images/24tiktok.png"
                },
                {
                    title: "Corpus-Oriented Stance Target Extraction",
                    authors: "B. Steel, D. Ruths",
                    venue: "CODI-CRAC @ EMNLP 2025",
                    year: 2025,
                    code_url: "https://github.com/bendavidsteel/stancemining",
                    image_url: "/images/costex.png",
                },
                {
                    title: "Can-PolNews: A Multi-Platform Dataset of Political Discourse in Canada",
                    authors: "Z. Pehlivan, S. Park, A. Abrahams, M. Desblancs-Patel, B. Steel, A. Bridgman",
                    venue: "ICWSM 2025",
                    year: 2025,
                    url: "https://ojs.aaai.org/index.php/ICWSM/article/view/35956"
                },
                {
                    title: "Multi-Target User Stance Discovery on Reddit",
                    authors: "B. Steel, D. Ruths",
                    venue: "WASSA @ ACL 2024",
                    year: 2024,
                    url: "https://aclanthology.org/2024.wassa-1.16/",
                    image_url: "/images/redditstance.png"
                }
            ],
            projects: [
                {
                    title: "Extended Particle Lenia Explorer",
                    description: "Interactive web app to explore instantiations of extended particle lenia",
                    url: "https://bendavidsteel.github.io/particle_lenia_datamap.html",
                    code_url: "https://github.com/bendavidsteel/mysarum/tree/main/python/particlelife",
                    image_url: "/images/leniaexplorer.png"
                },
                {
                    title: "The Grove",
                    description: "3D physarum, 3D boids, and self-organising trees in a procedurally generated grove",
                    url: "https://www.youtube.com/watch?v=foZvAobP6Pg",
                    code_url: "https://github.com/bendavidsteel/mysarum/tree/main/openframeworks/thegrove",
                    image_url: "/images/thegrove.png"
                },
                {
                    title: "A City with No Cars",
                    description: "Semi-satirical year round pedestrianization of Mont-Royal call for arms based on Connor O'Malley's Endorphin Port, winner of best film and best special effects at Friends Film Fest 2023",
                    url: "https://www.youtube.com/watch?v=YZS0BvAAn1U",
                    image_url: "/images/citywithnocars.png"
                },
                {
                    title: "Biomass",
                    description: "2D physarum + reaction diffusion made into a world, shown at Sam's art night and Boheme Systeme",
                    url: "https://www.instagram.com/p/Cq3PrTjptFB/?img_index=1",
                    code_url: "https://github.com/bendavidsteel/mysarum/tree/main/openframeworks/biomass",
                    image_url: "/images/biomass.jpg"
                }
            ],
            media_mentions: [
                {
                    title: "What Are TikTok's New Owners Buying?",
                    outlet: "The Economist",
                    date: new Date(2025, 9, 26),
                    description: "Use of our data to describe TikTok content",
                    url: "https://www.economist.com/graphic-detail/2025/09/26/what-are-tiktoks-new-owners-buying"
                },
                {
                    title: "Inside a Single Day on TikTok: 117 Million Videos, Billions of Views",
                    outlet: "Fast Company",
                    date: new Date(2025, 4, 28),
                    description: "Coverage of our paper",
                    url: "https://www.fastcompany.com/91323722/inside-a-single-day-on-tiktok-117-million-videos-billions-of-views"
                },
                {
                    title: "Have TikTok content creators influenced the Canadian election?",
                    outlet: "CBC News on TikTok",
                    date: new Date(2025, 4, 26),
                    description: "Talking about the Canadian election x TikTok",
                    url: "https://www.tiktok.com/@cbcnews/video/7497427834483248439"
                }
            ],
            ascents: [
                {
                    title: "Hairpin + Skywalker in a day",
                    description: "My 2nd 10a trad multi + fun runout links on Skywalker to finish the day with Hannah. (pic from a different route on the same Squamish holiday because we were hustling and it's a good pic)",
                    date: new Date(2025, 8, 24),
                    image_url: "/images/warfare.jpg"
                },
                {
                    title: "The Armadillo",
                    description: "4 hour bushwack walk-in to an incred alpine-esque route in Maine with Ben and Mike",
                    date: new Date(2025, 8, 9),
                    image_url: "/images/armadillo.png"
                },
                {
                    title: "Moby Grape",
                    description: "Classic big 5.8 trad multi on Cannon in the Whites with Ben. (not my pic because we were hustling)",
                    date: new Date(2025, 7, 20),
                    image_url: "/images/mobygrape.jpg"
                }
            ],
            descents: [
                {
                    title: "Gulf of Slides, Main Slide",
                    description: "Amazing corn snow, with Joe and Mike",
                    date: new Date(2025, 4, 10),
                    image_url: "/images/gulfofslides.jpg"
                },
                {
                    title: "Hellman's Highway",
                    description: "Sick descent after a beautiful walk over the ridge with Joe and Mike",
                    date: new Date(2025, 4, 10),
                    image_url: "/images/hellmans.png"
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

.post-card {
    margin-bottom: 20px;
}

.content-body {
  background-repeat: no-repeat;
  background-size: contain;
  background-color: cornflowerblue;
  width: 100%;
  padding-top: 35.017%;
}

.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right: 2%;
    margin-left: 2%;
    padding-top: 60px;
    margin-top: -35.017%
}

@media only screen and (max-width: 600px) {
  .flex {
    margin-top: 0;
    padding-top: 0px;
  }
}

.link {
    text-decoration: none;
}

#name {
    font-family: 'Courier New', Courier, monospace;
    font-size: 60px;
    color: lightgoldenrodyellow;
    text-shadow: -1px -1px 0 lightcoral, 1px -1px 0 lightcoral, -1px 1px 0 lightskyblue, 1px 1px 0 lightskyblue;
}

#descrip {
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 26px;
    text-shadow: -0.5px -0.5px 0 lightcoral, 0.5px -0.5px 0 lightcoral, -0.5px 0.5px 0 lightskyblue, 0.5px 0.5px 0 lightskyblue;
    color:darkmagenta;
    text-align: right;
}
</style>