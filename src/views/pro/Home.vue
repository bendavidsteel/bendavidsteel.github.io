<template>
    <section class="content">
        <div class="content-body" :style="{'background-image': 'url(' + require('@/assets/mountains.jpg') + ')'}">
            <h1 class='title'>
                Ben Steel
            </h1>
        </div>
        <div v-for="post in posts" v-bind:key="post.id">
            {{ post.text }}
        </div>
    </section>
</template>
<script>
export default {
    posts: [
        {
            id: "demo-diff",
            text: 'Democracy Diffusion'
        }
    ]
}
</script>

<style scoped>
.content {
  display: table-row;
  height: 100%;
}

.content-body {
  display: table-cell;
  padding: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 613px;
  /* (img-height / img-width * container-width) */
            /* (513 / 1465 * 100) */
}

.title {
    line-height: 350px;
    font-size: 54px;
    color:darkslategray;
}
</style>