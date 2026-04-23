<template>
    <section class="content">
        <div class="sections-container">
            <section class="section">
                <h2 class="section-title">Films</h2>
                <div class="section-content">
                    <div v-for="film in sortedFilms" v-bind:key="film.youtube_url">
                        <film-card
                            :title="film.title"
                            :date="film.date"
                            :description="film.description"
                            :youtube_url="film.youtube_url">
                        </film-card>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import FilmCard from '@/components/FilmCard'

export default {
    components: {
        FilmCard
    },
    data() {
        return {
            films: [
                {
                    title: "We attempted to cross the island of Montreal without using a single road",
                    date: new Date(2026, 4, 17),
                    description: "Self-explantory",
                    youtube_url: "https://www.youtube.com/watch?v=AAD0BuItMgE"
                },
                {
                    title: "A City With No Cars",
                    date: new Date(2023, 11, 28),
                    description: "Semi-satirical version of Connor O'Malley's Endorphin Port, except calling for pedestrianization of Ave. Mont-Royal",
                    youtube_url: "https://www.youtube.com/watch?v=YZS0BvAAn1U"
                },
                {
                    title: "Top Rope (a Free Solo parody)",
                    date: new Date(2022, 11, 19),
                    description: "Self-explantory",
                    youtube_url: "https://www.youtube.com/watch?v=FYDZAmi4N2U"
                }
            ]
        }
    },
    computed: {
        sortedFilms() {
            return [...this.films].sort((a, b) => b.date - a.date);
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
