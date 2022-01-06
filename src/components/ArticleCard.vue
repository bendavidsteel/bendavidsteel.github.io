<template>
    <div :style="{'background-image': 'url(' + image_path + ')'}" class="background">
        <a :href="link"><h1>{{title}}</h1></a>
        <div class="details">
            <h3>{{formatDate(date)}}</h3>
            <h3>{{subtitle}}</h3>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        subtitle: String,
        date: Date,
        image_path: String,
        link: String
    },
    methods: {
        formatDate(date) {
            return new Intl.DateTimeFormat('default', {dateStyle: 'short'}).format(date);
        }
    }
}
</script>
<style scoped>
.background {
    background-color: lightskyblue;
}

.details {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
