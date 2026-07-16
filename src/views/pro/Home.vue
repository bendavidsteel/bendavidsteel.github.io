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
                        computational social science<br>
                        climber | skier | backpacker
                    </h4>
                </div>
            </div>
        </div>

        <div class="sections-container">
            <section class="section">
                <h2 class="section-title">Work</h2>
                <div class="section-content">
                    <div v-for="item in work" v-bind:key="item.title">
                        <paper-card
                            :title="item.title"
                            :authors="item.authors"
                            :venue="item.venue"
                            :year="item.year"
                            :url="item.url"
                            :code_url="item.code_url"
                            :image_url="item.image_url"
                            :tag="item.tag"
                            :mentions="item.mentions">
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
                            :url="mention.url">
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
    computed: {
        work() {
            const papers = this.papers.map(p => ({ ...p, tag: 'paper' }));
            const reports = this.reports.map(r => ({
                title: r.title,
                authors: r.authors,
                venue: r.outlet,
                year: r.date.getFullYear(),
                url: r.url,
                image_url: r.image_url,
                date: r.date,
                mentions: r.mentions,
                tag: 'report'
            }));
            return [...papers, ...reports].sort((a, b) => b.date - a.date);
        }
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
                    venue: "Journal of Quantitative Description: Digital Media",
                    year: 2025,
                    date: new Date(2025, 2, 1),
                    url: "https://journalqd.org/article/view/9514",
                    code_url: "https://github.com/bendavidsteel/tiktok-slice",
                    image_url: "/images/24tiktok.png",
                    mentions: [
                        {
                            title: "What Are TikTok's New Owners Buying?",
                            outlet: "The Economist",
                            date: new Date(2025, 9, 26),
                            url: "https://www.economist.com/graphic-detail/2025/09/26/what-are-tiktoks-new-owners-buying"
                        },
                        {
                            title: "TikTok im Fokus der Wissenschaft",
                            outlet: "Deutschlandfunk",
                            date: new Date(2025, 5, 16),
                            url: "https://www.deutschlandfunk.de/social-media-digitale-oeffentlichkeit-tiktok-forschung-100.html"
                        },
                        {
                            title: "Inside a Single Day on TikTok: 117 Million Videos, Billions of Views",
                            outlet: "Fast Company",
                            date: new Date(2025, 4, 28),
                            url: "https://www.fastcompany.com/91323722/inside-a-single-day-on-tiktok-117-million-videos-billions-of-views"
                        }
                    ]
                },
                {
                    title: "Corpus-Oriented Stance Target Extraction",
                    authors: "B. Steel, D. Ruths",
                    venue: "CODI-CRAC @ EMNLP 2025",
                    year: 2025,
                    date: new Date(2025, 10, 1),
                    url: "https://aclanthology.org/2025.codi-1.18/",
                    code_url: "https://github.com/bendavidsteel/stancemining",
                    image_url: "/images/costex.png",
                },
                {
                    title: "Can-PolNews: A Multi-Platform Dataset of Political Discourse in Canada",
                    authors: "Z. Pehlivan, S. Park, A. Abrahams, M. Desblancs-Patel, B. Steel, A. Bridgman",
                    venue: "ICWSM 2025",
                    year: 2025,
                    date: new Date(2025, 5, 1),
                    url: "https://ojs.aaai.org/index.php/ICWSM/article/view/35956"
                },
                {
                    title: "Multi-Target User Stance Discovery on Reddit",
                    authors: "B. Steel, D. Ruths",
                    venue: "WASSA @ ACL 2024",
                    year: 2024,
                    date: new Date(2024, 7, 1),
                    url: "https://aclanthology.org/2024.wassa-1.16/",
                    image_url: "/images/redditstance.png"
                }
            ],
            projects: [
                {
                    title: "Pond",
                    description: "Projecting my imaginary pond into the world, debuted at Friends Film Fest 2026",
                    url: "https://www.youtube.com/watch?v=qB9Cer8rzaQ",
                    code_url: "https://github.com/bendavidsteel/mysarum/tree/main/rust/pond",
                    image_url: "/images/pond.png"
                },
                {
                    title: "Extended Particle Lenia Explorer",
                    description: "Interactive web app to explore instantiations of extended particle lenia",
                    url: "https://bendavidsteel.github.io/particle_lenia_datamap.html",
                    code_url: "https://github.com/bendavidsteel/mysarum/tree/main/python/particlelife",
                    image_url: "/images/leniaexplorer.png"
                },
                {
                    title: "The Grove",
                    description: "3D physarum, 3D boids, and self-organising trees in a procedurally generated grove, shown at the Friends Film Fest 2023",
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
                    title: "My Newsreel Now",
                    outlet: "Newsreel",
                    date: new Date(2026, 6, 9),
                    url: "https://www.youtube.com/watch?v=q3U9sLWa90o"
                },
                {
                    title: "Fact File: As Iran war escalates, fake videos and images proliferate online",
                    outlet: "The Canadian Press",
                    date: new Date(2026, 2, 11),
                    url: "https://www.thecanadianpressnews.ca/science/fact-file-as-iran-war-escalates-fake-videos-and-images-proliferate-online/article_ee6cadb5-9e1f-5a99-a37d-3552e1580a9e.html"
                },
                {
                    title: "Have TikTok content creators influenced the Canadian election?",
                    outlet: "CBC News on TikTok",
                    date: new Date(2025, 4, 26),
                    url: "https://www.tiktok.com/@cbcnews/video/7497427834483248439"
                }
            ],
            reports: [
                {
                    title: "Online Harms AI Audit: Technical Brief",
                    authors: "B. Steel, T. Owen, A. Bridgman",
                    outlet: "Centre for Media, Technology and Democracy",
                    date: new Date(2026, 5, 25),
                    url: "https://www.mediatechdemocracy.com/s/ai-online-harms-brief_V2.pdf",
                    image_url: "/images/ohaudit-brief.png",
                    mentions: [
                        {
                            title: "Some AI chatbots are much better at blocking harmful content than others, audit shows",
                            outlet: "The Logic",
                            date: new Date(2026, 5, 29),
                            url: "https://thelogic.co/briefing/some-ai-chatbots-are-much-better-at-blocking-harmful-content-than-others-audit-shows/"
                        }
                    ]
                },
                {
                    title: "Online Harms AI Audit: Policy Memo",
                    authors: "B. Steel, T. Owen, A. Bridgman",
                    outlet: "Centre for Media, Technology and Democracy",
                    date: new Date(2026, 5, 1),
                    url: "https://www.mediatechdemocracy.com/s/ai-online-harms-policy-memo_V2.pdf",
                    image_url: "/images/ohaudit-policy.png"
                },
                {
                    title: "Slopaganda: The Inauthentic YouTube Network Selling Secession to Albertans",
                    authors: "C. Ross, B. Steel, Z. Pehlivan, M. Desblancs-Patel, A. Bridgman",
                    outlet: "MEO",
                    date: new Date(2026, 4, 23),
                    url: "https://www.cdmrn.ca/slopaganda-the-inauthentic-youtube-network-selling-secession-to-albertans",
                    image_url: "/images/slopaganda.png",
                    mentions: [
                        {
                            title: "The Goose (YouTube)",
                            outlet: "The Goose",
                            date: new Date(2026, 4, 21),
                            url: "https://www.youtube.com/watch?v=WX2o2dwEiDk"
                        },
                        {
                            title: "A network of YouTube accounts is promoting U.S. annexation to Albertans, researchers say. It has 40 million views",
                            outlet: "Toronto Star",
                            date: new Date(2026, 4, 21),
                            url: "https://www.thestar.com/news/investigations/a-network-of-youtube-accounts-is-promoting-us-annexation-to-albertans-researchers-say-it-has-40m-views/article_b26d9311-f3f1-4304-a443-360f51f6a558.html"
                        },
                        {
                            title: "Dutch YouTube creators behind Alberta separatist videos getting millions of views",
                            outlet: "CBC News",
                            date: new Date(2026, 3, 23),
                            url: "https://www.cbc.ca/news/canada/alberta-separatist-youtube-channels-netherlands-9.7174719"
                        },
                        {
                            title: "Alberta separatism disinformation on YouTube",
                            outlet: "National Observer",
                            date: new Date(2026, 4, 6),
                            url: "https://www.nationalobserver.com/2026/05/06/opinion/alberta-separatism-disinformation-youtube"
                        },
                        {
                            title: "Canadaland",
                            outlet: "Canadaland",
                            date: new Date(2026, 4, 6),
                            url: "https://podcasts.apple.com/ca/podcast/canadaland/id721048994?l=fr&i=1000763960600"
                        },
                        {
                            title: "Co-ordinated network of fake YouTube channels pushing Alberta secession and U.S. annexation narrative, report finds",
                            outlet: "CTV News",
                            date: new Date(2026, 4, 21),
                            url: "https://www.ctvnews.ca/canada/article/co-ordinated-network-of-fake-youtube-channels-pushing-alberta-secession-and-us-annexation-narrative-report-finds/"
                        }
                    ]
                },
                {
                    title: "Conspiratorial Claims and Institutional Distrust in Canada's Online Ecosystem",
                    authors: "M. Desblancs-Patel, E. Chan, M. Lavigne, C. Ross, D. Hobson, B. Steel, H. A. Hayes",
                    outlet: "MEO",
                    date: new Date(2026, 1, 23),
                    url: "https://meo.ca/work/conspiratorial-claims-and-institutional-distrust-in-canadas-online-ecosystem",
                    image_url: "/images/conspiratorial-claims.png",
                    mentions: [
                        {
                            title: "Researchers studied who's spreading the most conspiracy theories in Canada. Here's what they found",
                            outlet: "CTV News",
                            date: new Date(2026, 1, 25),
                            url: "https://www.ctvnews.ca/montreal/article/researchers-studied-whos-spreading-the-most-conspiracy-theories-in-canada-heres-what-they-found/"
                        },
                        {
                            title: "Social Media Accounts and Canadian Conspiracy Content",
                            outlet: "The Tyee",
                            date: new Date(2026, 1, 25),
                            url: "https://thetyee.ca/News/2026/02/25/Social-Media-Accounts-Canadian-Conspiracy-Content/"
                        },
                        {
                            title: "Conspiracy content report Canada",
                            outlet: "National Observer",
                            date: new Date(2026, 1, 25),
                            url: "https://www.nationalobserver.com/2026/02/25/news/conspiracy-content-report-canada"
                        }
                    ]
                },
                {
                    title: "Shockwaves on TikTok: Understanding the international reaction to the assassination of Charlie Kirk",
                    authors: "B. Steel, D. Jiang, M. Lavigne",
                    outlet: "MEO",
                    date: new Date(2025, 10, 26),
                    url: "https://www.cdmrn.ca/publications/understanding-the-international-reaction-to-the-assassination-of-charlie-kirk",
                    image_url: "/images/shockwaves-tiktok.webp"
                },
                {
                    title: "The relevance and role of Tenet Media personalities in Canadian political discussion",
                    authors: "D. Hobson, J.-R. Roy, B. Steel, A. Bridgman",
                    outlet: "MEO",
                    date: new Date(2024, 10, 5),
                    url: "https://www.cdmrn.ca/publications/russianfundingcanadianinfluencers/iu6-relevance-role-of-tenet-media-personalities-in-cdn-political-discussion",
                    image_url: "/images/tenet-media.webp"
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
                    title: "La Grande Cuve, Gaspesie",
                    description: "Terrible crust but beautiful place, with Kate, Joe, and Mike",
                    date: new Date(2026, 4, 7),
                    image_url: "/images/lagrandecuve.jpg"
                },
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