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
                        PhD student with <a class="link" href="https://derekruths.com/">Derek Ruths</a> in the <a class="link" href="http://networkdynamics.org/">Network Dynamics Lab</a> at McGill<br>
                        former data developer <a class="link" href="https://www.ubisoft.com/en-gb/">Ubisoft</a><br>
                        data science for social science<br>
                        climber | skier | backpacker
                    </h4>
                </div>
            </div>
        </div>
        <div class="article-list">
            <div v-for="post in posts" v-bind:key="post.id">
                {{ post.text }}
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            posts: [
                {
                    id: "demo-diff",
                    text: 'Democracy Diffusion'
                }
            ]
        }
    }
}
</script>

<style scoped>

.content {
    min-height: 100%;
    margin: 0px;
    margin-top: 100px;
    padding: 0px;
    background-color: lightgoldenrodyellow;
}

.article-list {
    margin-top: 0;
}

.content-body {
  background-repeat: no-repeat;
  background-size: contain;
  background-color: cornflowerblue;
  height: 100%;
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
    font-family: Georgia, Verdana, sans-serif;
    font-size: 54px;
    color: lightgoldenrodyellow;
    text-shadow: -1px -1px 0 lightcoral, 1px -1px 0 lightcoral, -1px 1px 0 lightskyblue, 1px 1px 0 lightskyblue;
}

#descrip {
    font-family: Georgia, Verdana, sans-serif;
    font-size: 26px;
    text-shadow: -0.5px -0.5px 0 lightcoral, 0.5px -0.5px 0 lightcoral, -0.5px 0.5px 0 lightskyblue, 0.5px 0.5px 0 lightskyblue;
    color:darkmagenta;
    text-align: right;
}
</style>