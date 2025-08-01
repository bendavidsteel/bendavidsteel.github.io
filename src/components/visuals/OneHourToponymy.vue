<template>
    <div class="visual-container">
        <iframe v-if="useIframe" :src="htmlPath" class="fullsize-frame" frameborder="0"></iframe>
        <div v-else ref="container" class="fullsize-container"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '1-Hour Toponymy Data Map',
            slug: 'OneHourToponymy',
            image_path: '@/assets/visuals/1hour_toponymy.png',
            useIframe: true,
            htmlPath: '/1hour_toponymy_datamapplot.html'
        };
    },
    mounted() {
        if (!this.useIframe) {
            this.loadHtmlContent();
        }
    },
    methods: {
        async loadHtmlContent() {
            try {
                const response = await fetch(this.htmlPath);
                const html = await response.text();
                
                this.$refs.container.innerHTML = html;
                
                const scripts = this.$refs.container.querySelectorAll('script');
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    
                    Array.from(oldScript.attributes).forEach(attr => {
                        newScript.setAttribute(attr.name, attr.value);
                    });
                    
                    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                    
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            } catch (error) {
                console.error('Error loading HTML content:', error);
            }
        }
    }
}
</script>

<style scoped>
.visual-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}

.fullsize-frame, .fullsize-container {
    height: 100%;
    width: 100%;
    border: none;
    overflow: hidden;
}
</style>