<template>
    <div :style="{'background-image': 'url(' + image_path + ')'}" class="background">
        <div id="title-section">
            <a :href="'articles/' + slug" id="title-link">
                <h1 id="title-text">
                    {{title}}
                </h1>
            </a>
        </div>
        <div class="details">
            <h3 id="date-text">{{formatDate(date)}}</h3>
            <h3 id="sub-text">{{subtitle}}</h3>
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
        slug: String
    },
    methods: {
        formatDate(date) {
            return new Intl.DateTimeFormat('default', {dateStyle: 'short'}).format(date);
        }
    }
}
</script>
<style scoped>

#title-section {
    margin-left: 40px;
    padding-top: 25px;
}

#title-link {
    text-decoration: none;
}

#title-text {
    font-family: 'Courier New', Courier, monospace;
    font-size: 32px;
}

#date-text {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 26px;
}

#sub-text {
    font-size: 24px;
}

.background {
    background-color: lightskyblue;
}

.details {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 20px; 
    margin-right: 20px;
}
</style>
