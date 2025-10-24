<template>
    <div class="content">
        <div id="globeViz"></div>
        <div id="graphic-slider-div">
            <input type="range" min="0" max="113" value="0" step="1" id="graphic-slider" class="slider">
            <p id="slider-text">Year: <span id="slider-num"></span></p>
        </div>

        <svg width="800" height="60" id="legendWrapper"></svg>
    </div>
</template>
<script>
import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import ThreeGlobe from 'three-globe'
import * as d3 from 'd3'

export default {
    data() {
        
        
        return {
            title: 'Global Trade',
            slug: 'GlobalTrade',
            image_path: '/images/trade.png'
        }
    },
    mounted() {
        let color = d3.scaleOrdinal(["1E+11", "1E+10", "1E+9", "1E+8", "1E+7", "1E+6", "1E+5", "1E+4", "1E+3"],
                                    [
                                        "rgba(255, 120, 0, 1)",
                                        "rgba(255, 60, 0, 1)",
                                        "rgba(255, 0, 0, 1)",
                                        "rgba(255, 0, 127, 1)",
                                        "rgba(255, 0, 223, 1)",
                                        "rgba(127, 0, 255, 1)",
                                        "rgba(0, 0, 255, 1)",
                                        "rgba(0, 127, 255, 1)",
                                        "rgba(0, 255, 255, 1)",
                                    ])

        let scaleTitle = "Trade Flow (USD)"

        let width = 40
        let height = 480
        let marginTop = 0
        let marginRight = 20
        let marginBottom = 0
        let marginLeft = 10

        let y = d3.scaleBand()
            .domain(color.domain())
            .rangeRound([marginTop, height - marginBottom]);

        const svg = d3.select('#legendWrapper')
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .style("overflow", "visible")
            .style("display", "block");

        svg.append("g")
            .selectAll("rect")
            .data(color.domain())
            .join("rect")
                .attr("x", marginRight)
                .attr("y", y)
                .attr("width", width - marginLeft - marginRight)
                .attr("height", Math.max(0, y.bandwidth() - 1))
                .attr("fill", color);
        
        var axis = svg.append("g")
            .attr("fill", "white")
            .attr("transform", `translate(0,0)`)
            .call(d3.axisLeft(y))
            .call(g => g.append("text")
                .attr("x", -60)
                .attr("y", -10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .attr("font-weight", "bold")
                .attr("color", "white")
                .style("font-size", "18px")
                .text(scaleTitle));

        axis.selectAll("text")
            .style("fill", "white")
            .style("font-size", "14px")

        axis.selectAll("line")
            .style("stroke", "white")

        axis.selectAll("path")
            .style("stroke", "white")

        let renderGlobe = async () => {
            const Globe = new ThreeGlobe()
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .arcsTransitionDuration(0)
            .arcAltitudeAutoScale(1)

            var slider = document.getElementById("graphic-slider");
            var output = document.getElementById("slider-num");

            (async () => {
                let tradeData = await getCountryTradeData();
                let capitalLocations = await getCapitalLocationData();

                output.innerHTML = tradeData[slider.value].year;
                setTradeData(slider.value, tradeData, capitalLocations, Globe);
        
                slider.oninput = function() {
                    output.innerHTML = tradeData[this.value].year;
                }

                slider.onmouseup = function() {
                    setTradeData(this.value, tradeData, capitalLocations, Globe);
                }
            })();

            // Setup renderer
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('globeViz').appendChild(renderer.domElement);

            // Setup scene
            const scene = new THREE.Scene();
            scene.add(Globe);
            scene.add(new THREE.AmbientLight(0xbbbbbb));
            scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

            // Setup camera
            const camera = new THREE.PerspectiveCamera();
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            camera.position.z = 500;

            // Add camera controls
            const tbControls = new TrackballControls(camera, renderer.domElement);
            tbControls.minDistance = 0;
            tbControls.maxDistance = 350;
            tbControls.rotateSpeed = 5;

            // Kick-off renderer
            (function animate() { // IIFE
                // Frame cycle
                tbControls.update();
                renderer.render(scene, camera);
                setTimeout( function() {
                    requestAnimationFrame( animate );
                }, 1000 / 24 );
            })();
        };
        renderGlobe();
    }
}
async function getCapitalLocationData() {
    return require('@/assets/visuals/data/capitals.json')
    //var countriesRes = await fetch('./src/assets/visuals/data/capitals.geojson');
    //return countriesRes.json();
}

async function getCountryTradeData() {
    return require('@/assets/visuals/data/newCountryTrade.json')
    //var countriesRes = await fetch('./src/assets/visuals/data/newCountryTrade.json');
    //return countriesRes.json();
}


function heatMap(idx, alpha) {
    const heatMap = [
        "rgba(0, 255, 255, " + 0.05 * Math.pow(alpha, 4) + ")",
        "rgba(0, 127, 255, " + 0.05 * Math.pow(alpha, 4) + ")",
        "rgba(0, 0, 255, " + 0.1 * Math.pow(alpha, 3) + ")",
        "rgba(127, 0, 255, " + 0.1 * Math.pow(alpha, 2.2) + ")",
        "rgba(255, 0, 223, " + 0.3 * Math.pow(alpha, 1.7) + ")",
        "rgba(255, 0, 127, " + 0.6 * Math.pow(alpha, 1.2) + ")",
        "rgba(255, 0, 0, " + 0.8 * Math.pow(alpha, 0.8) + ")",
        "rgba(255, 60, 0, " + 1 * Math.pow(alpha, 0.1) + ")",
        "rgba(255, 120, 0, " + 1 * Math.pow(alpha, 0.1) + ")"
    ]
    return heatMap[idx];
}

function setTradeData(idx, tradeData, capitalLocations, globe) {
    let arcsData = tradeData[idx].trade_data.map((trade_link) => ({
        startLat: capitalLocations.features[trade_link[0]].geometry.coordinates[1],
        startLng: capitalLocations.features[trade_link[0]].geometry.coordinates[0],
        endLat: capitalLocations.features[trade_link[1]].geometry.coordinates[1],
        endLng: capitalLocations.features[trade_link[1]].geometry.coordinates[0],
        color: heatMap(Math.round(Math.log10(trade_link[2])), 1 - (idx / (1.5 * tradeData.length))),
        dashLen: (Math.log10(trade_link[2]) + 1) / 640,
        dashGap: (Math.log10(trade_link[2]) + 1) / 160,
        animateTime: 640000 / (Math.log(trade_link[2]))
    }));

    globe
    .arcsData(arcsData)
    .arcColor('color')
    .arcDashLength('dashLen')
    .arcDashGap('dashGap')
    .arcDashAnimateTime('animateTime')
}
</script>

<style scoped>
.content { 
    margin: 0;
    height: 100%;
    width: 100%;
}

#globeViz {
    height: 100%;
    width: 100%;
}

#graphic-slider-div {
    position: absolute;
    top: 50%;
    left: 5%;
    text-align: center;
    width: 20%;
}

#graphic-slider {
    position: relative;
    display: block;
    margin : auto;
}

#slider-text {
    color: white;
}

#legendWrapper {
    position: absolute;
    top: 80%;
    right: 5%;
}
</style>