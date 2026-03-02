<template>
    <section class="content">
        <canvas ref="shaderCanvas" class="shader-bg"></canvas>
        <div class="sections-container">
            <section class="section">
                <h1 class="article-title">{{ title }}</h1>
                <h4 class="article-subtitle">{{ subtitle }}</h4>
                <p class="article-date">{{ formatDate(date) }}</p>
                <div class="article-content" v-html="renderedContent"></div>
            </section>
        </div>
    </section>
</template>

<script>
import MarkdownIt from 'markdown-it'
import content from './the-sun.md'

const md = new MarkdownIt()

const vertexShaderSource = `
attribute vec2 aPosition;
void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
}
`

const fragmentShaderSource = `
precision highp float;
uniform vec2 iResolution;
uniform float iTime;

// CC0 license https://creativecommons.org/share-your-work/public-domain/cc0/
vec4 permute(vec4 t) {
    return t * (t * 34.0 + 133.0);
}

vec3 grad(float hash) {
    vec3 cube = mod(floor(hash / vec3(1.0, 2.0, 4.0)), 2.0) * 2.0 - 1.0;
    vec3 cuboct = cube;
    int idx = int(hash / 16.0);
    if (idx == 0) cuboct.x = 0.0;
    else if (idx == 1) cuboct.y = 0.0;
    else cuboct.z = 0.0;
    float type = mod(floor(hash / 8.0), 2.0);
    vec3 rhomb = (1.0 - type) * cube + type * (cuboct + cross(cube, cuboct));
    vec3 g = cuboct * 1.22474487139 + rhomb;
    g *= (1.0 - 0.042942436724648037 * type) * 3.5946317686139184;
    return g;
}

vec4 os2NoiseWithDerivativesPart(vec3 X) {
    vec3 b = floor(X);
    vec4 i4 = vec4(X - b, 2.5);

    vec3 v1 = b + floor(dot(i4, vec4(.25)));
    vec3 v2 = b + vec3(1, 0, 0) + vec3(-1, 1, 1) * floor(dot(i4, vec4(-.25, .25, .25, .35)));
    vec3 v3 = b + vec3(0, 1, 0) + vec3(1, -1, 1) * floor(dot(i4, vec4(.25, -.25, .25, .35)));
    vec3 v4 = b + vec3(0, 0, 1) + vec3(1, 1, -1) * floor(dot(i4, vec4(.25, .25, -.25, .35)));

    vec4 hashes = permute(mod(vec4(v1.x, v2.x, v3.x, v4.x), 289.0));
    hashes = permute(mod(hashes + vec4(v1.y, v2.y, v3.y, v4.y), 289.0));
    hashes = mod(permute(mod(hashes + vec4(v1.z, v2.z, v3.z, v4.z), 289.0)), 48.0);

    vec3 d1 = X - v1; vec3 d2 = X - v2; vec3 d3 = X - v3; vec3 d4 = X - v4;
    vec4 a = max(0.75 - vec4(dot(d1, d1), dot(d2, d2), dot(d3, d3), dot(d4, d4)), 0.0);
    vec4 aa = a * a; vec4 aaaa = aa * aa;
    vec3 g1 = grad(hashes.x); vec3 g2 = grad(hashes.y);
    vec3 g3 = grad(hashes.z); vec3 g4 = grad(hashes.w);
    vec4 extrapolations = vec4(dot(d1, g1), dot(d2, g2), dot(d3, g3), dot(d4, g4));

    vec3 derivative = -8.0 * (
        d1 * (aa.x * a.x * extrapolations.x) +
        d2 * (aa.y * a.y * extrapolations.y) +
        d3 * (aa.z * a.z * extrapolations.z) +
        d4 * (aa.w * a.w * extrapolations.w)
    ) + (
        g1 * aaaa.x +
        g2 * aaaa.y +
        g3 * aaaa.z +
        g4 * aaaa.w
    );

    return vec4(derivative, dot(aaaa, extrapolations));
}

vec4 os2NoiseWithDerivatives_ImproveXY(vec3 X) {
    mat3 orthonormalMap = mat3(
        0.788675134594813, -0.211324865405187, -0.577350269189626,
        -0.211324865405187, 0.788675134594813, -0.577350269189626,
        0.577350269189626, 0.577350269189626, 0.577350269189626);

    X = orthonormalMap * X;
    vec4 result = os2NoiseWithDerivativesPart(X) + os2NoiseWithDerivativesPart(X + 144.5);

    return vec4(result.xyz * orthonormalMap, result.w);
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / max(iResolution.x, iResolution.y) * 8.0;
    vec3 X = vec3(uv, mod(iTime * 0.3, 578.0) * 0.8660254037844386);
    vec4 noiseResult = os2NoiseWithDerivatives_ImproveXY(X);
    noiseResult = os2NoiseWithDerivatives_ImproveXY(X - noiseResult.xyz / 16.0);
    float value = noiseResult.w;
    vec3 col = mix(vec3(0.08, 0.05, 0.2), vec3(1.0, 0.75, 0.3), 0.5 + 0.5 * value);
    fragColor = vec4(col, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`

function createShader(gl, type, source) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
    }
    return shader
}

function initWebGL(canvas) {
    const gl = canvas.getContext('webgl')
    if (!gl) return null

    const vs = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
    if (!vs || !fs) return null

    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program))
        return null
    }

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW)

    const aPosition = gl.getAttribLocation(program, 'aPosition')
    gl.enableVertexAttribArray(aPosition)
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)

    gl.useProgram(program)

    return {
        gl,
        program,
        uResolution: gl.getUniformLocation(program, 'iResolution'),
        uTime: gl.getUniformLocation(program, 'iTime')
    }
}

export default {
    data() {
        return {
            title: "The Whale and the Sun",
            subtitle: "A short story about a whale and the sun",
            date: new Date('2026-03-01'),
            image_path: '',
            slug: 'TheSun',
            glCtx: null,
            animFrame: null
        }
    },
    computed: {
        renderedContent() {
            return md.render(content)
        }
    },
    mounted() {
        this.initShader()
        window.addEventListener('resize', this.resizeCanvas)
    },
    beforeUnmount() {
        if (this.animFrame) cancelAnimationFrame(this.animFrame)
        window.removeEventListener('resize', this.resizeCanvas)
    },
    methods: {
        formatDate(date) {
            return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        },
        resizeCanvas() {
            const canvas = this.$refs.shaderCanvas
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            if (this.glCtx) {
                this.glCtx.gl.viewport(0, 0, canvas.width, canvas.height)
            }
        },
        initShader() {
            const canvas = this.$refs.shaderCanvas
            if (!canvas) return

            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            this.glCtx = initWebGL(canvas)
            if (!this.glCtx) return

            const startTime = performance.now()
            const render = () => {
                const { gl, uResolution, uTime } = this.glCtx
                const time = (performance.now() - startTime) / 1000.0
                gl.uniform2f(uResolution, canvas.width, canvas.height)
                gl.uniform1f(uTime, time)
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
                this.animFrame = requestAnimationFrame(render)
            }
            render()
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
    background-color: #000;
    display: flex;
    flex-direction: column;
    position: relative;
}

.shader-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.sections-container {
    margin: 40px 20%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    position: relative;
    z-index: 1;
}

@media only screen and (max-width: 600px) {
    .sections-container {
        margin: 20px 5%;
    }
}

.section {
    background-color: lightgoldenrodyellow;
    padding: 30px 40px;
    border-radius: 8px;
}

.article-title {
    font-family: 'Courier New', Courier, monospace;
    font-size: 36px;
    color: darkslateblue;
    text-shadow: -1px -1px 0 lightcoral, 1px -1px 0 lightcoral, -1px 1px 0 lightskyblue, 1px 1px 0 lightskyblue;
    margin-top: 0;
    margin-bottom: 5px;
}

.article-subtitle {
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 20px;
    color: darkmagenta;
    margin: 0;
}

.article-date {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: grey;
    margin-top: 5px;
    margin-bottom: 30px;
}

.article-content {
    color: #333;
    font-family: Verdana, Tahoma, sans-serif;
    font-size: 16px;
    line-height: 1.7;
}

.article-content :deep(h1) {
    display: none;
}

.article-content :deep(h2) {
    font-family: 'Courier New', Courier, monospace;
    font-size: 28px;
    color: darkslateblue;
    text-shadow: -1px -1px 0 lightcoral, 1px -1px 0 lightcoral, -1px 1px 0 lightskyblue, 1px 1px 0 lightskyblue;
    margin-top: 2rem;
    margin-bottom: 10px;
}

.article-content :deep(p) {
    margin-bottom: 1rem;
}

.article-content :deep(a) {
    color: darkslateblue;
    text-decoration: none;
}

.article-content :deep(a:hover) {
    text-decoration: underline;
}

.article-content :deep(img) {
    width: 100%;
    border-radius: 8px;
    display: block;
}
</style>
