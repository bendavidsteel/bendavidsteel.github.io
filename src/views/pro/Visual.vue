<template>
    <div class="visual-div">
        <component :is="slug"></component>
    </div>
</template>

<script>
  import * as components from '@/components/visuals/index'

  export default {

    components: {
      ...components
    },

    props: {
      slug: { type: String, required: true }
    },
  }
</script>

<style scoped>
.visual-div {
    height: 100%;
    width: 100%;
}
</style>