<template>
    <div>
        <a :href="(slug === 'TwentyFourHourToponymy' || slug === 'OneHourToponymy') ? 'fullscreen/visual/' + slug : 'visual/' + slug">
            <img :src="image_path" alt="Visual image">
            <h1>{{ title }}</h1>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        image_path: String,
        slug: String
    }
}
</script>
