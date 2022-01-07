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
                        former data developer <a class="link" href="https://www.ubisoft.com/en-gb/">Ubisoft</a><br>
                        data science for social science<br>
                        climber | skier | backpacker
                    </h4>
                </div>
            </div>
        </div>
        <div class="article-list">
            <div v-for="post in posts" v-bind:key="post.id" class="post-card">
                <article-card :title="post.title" :subtitle="post.subtitle" :date="post.date" :image_path="post.image_path" :slug="post.slug">
                </article-card>
            </div>
        </div>
    </section>
</template>
<script>
import ArticleCard from '@/components/ArticleCard'

export default {
    components: {
        ArticleCard
    },
    data() {
        const req = require.context('@/components/articles/', true, /\.vue$/i);
        const article_data = req.keys().map(key => {
                return req(key).default.data()
            });
        return {
            posts: article_data
        }
    }
}
</script>

<style scoped>

.content {
    height: 100%;
    margin-bottom: 0px;
    padding: 0px;
    background-color: lightgoldenrodyellow;
    display: flex;
    flex-direction: column;
}

.article-list {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 20%;
    margin-left: 20%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: darkslateblue;
}

.post-card {
    margin-left: 20px;
    margin-right: 20px;
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