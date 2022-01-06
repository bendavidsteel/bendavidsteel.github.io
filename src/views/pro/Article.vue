<template>
  <component :is="slug"></component>
</template>

<script>
  import * as components from '@/components//articles/index'

  export default {

    components: {
      ...components
    },

    props: {
      slug: { type: String, required: true }
    },
  }
</script>