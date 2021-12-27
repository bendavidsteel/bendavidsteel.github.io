<template>
    dearest ellie <br>
    <br>
    i love u so so so so much, and so for your bday, and seeing as we're both feeling a lil cyber right now, i thought i'd make an extra lil something for u, my soul mate, my good time girl, my sweet pea. <br>
    <br>
    i can't believe we've been together for more than 4 years. you're definitely the best thing in my life, and i feel like we've grown together over the last 4 years and both become our own independent people while simultaneously forming a bond between our souls like that of a gnarled, knotted and nourishing oak branch. <br>
    <br>
    i know what's you're thinking, that's not the most favourable comparison haha, but i really think the hard times we've had like being long distance, open relationship stuff and the pandemic have made our bond so strong, and just make it so clear to me that you're kind and loyal and amazing.<br>
    <br>
    being with u makes me so happy, i can't really put it into words. i constantly scroll through pictures of you and messages you've sent, unbelieving that you actually love me. <br>
    <br>
    you're so smart, kind, strong willed, sassy, sweet and beautiful, and you're cool as hell.<br>
    <br>
    we've done some sick ass things together, but also being with you makes even heinously shit things wonderful (see: bikepacking in the rain, backtracking in the alps, miles and miles of ontario) <br>
    <br>
    here are some of my favourite pictures of you and us doing things:<br>
    <div class="flex-row">
        <figure>
            <img :src="require('@/assets/forellie/lostandalone.jpg')" alt="lostandalone">
            <figcaption>lost and alone in the woods</figcaption>
        </figure> 
        <figure>
            <img :src="require('@/assets/forellie/eyes.jpg')" alt="crazyeyes">
            <figcaption>crazy eyes!! (sorry couldn't find actual pic)</figcaption>
        </figure> 
        <figure>
            <img :src="require('@/assets/forellie/wragglin.jpg')" alt="wragglin">
            <figcaption>doin some wragglin</figcaption>
        </figure> 
        <figure>
            <img :src="require('@/assets/forellie/swattin.jpg')" alt="swattin">
            <figcaption>me lookin dumb and u lookin cute while swattin</figcaption>
        </figure> 
        <figure>
            <img :src="require('@/assets/forellie/cutebutfrowny.jpg')" alt="cutebutfrowny">
            <figcaption>frownin on the pont</figcaption>
        </figure> 
        <figure>
            <img :src="require('@/assets/forellie/traincute.jpg')" alt="traincute">
            <figcaption>u lookin hot in the cold</figcaption>
        </figure> 
        <figure>
            <img :src="require('@/assets/forellie/lookin.jpg')" alt="lostandalone">
            <figcaption>taking a look at each other</figcaption>
        </figure> 
        <figure>
            <img :src="require('@/assets/forellie/chicaago.jpg')" alt="chicaago">
            <figcaption>just a great picture</figcaption>
        </figure> 
        <figure>
            <img :src="require('@/assets/forellie/lyinghug.jpg')" alt="lyinghug">
            <figcaption>trapped</figcaption>
        </figure>
    </div>
    <br>
    i'm super excited to see you in the boots, i have a fantasy of fucking you in a toilet cubicle on mdma with you wearing them. but aside from fetishizing them haha i think they're cool as hell and i'm glad they're comfy!<br>
    <br>
    i wanted to get u one more thing, something that you've been passionate about recently, because it makes me so happy when you get really into things.<br>
    <br>
    so (click anywhere to proceed, but also watch first!)(.net domain because all the cool hackerz are on .net):
    <br>
    <a href='http://nectomire.net/'>
        <canvas class="nectobox">
        </canvas>
    </a>
    <br>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            amount: 200,
			speed: 2.5,
			image: null,
			zIndex: null,
			resize: true
        };
    },
    mounted() {
        var self = this;
        const CANVAS = $(".nectobox").get(0);
        const CONTEXT = CANVAS.getContext('2d');
        var canvasHeight = CANVAS.offsetHeight;
        var canvasWidth = CANVAS.offsetWidth;
        var flakes = [];
        const turnSpeed = 1 / 32;
        const detectDist = 100;
        const numTrack = 3;

        const memory = 30;
        var textStates = [];
        const jitter = 0.8;
        const speed = 2.0;
        const text = 'nectomire.net';

        CANVAS.height = canvasHeight;
        CANVAS.width = canvasWidth;
        CANVAS.style.zIndex = self.zIndex ? self.zIndex : 'auto';
        function init() {
            for (var i = 0; i < self.amount; i++) {
                let x = random(0, canvasWidth);
                let y = random(0, canvasHeight);
                let theta = random(0, Math.PI * 2);
                flakes.push({
                    x: x,
                    y: y,
                    theta: theta
                });
            }
            textStates.push({
                theta: Math.random() * Math.PI * 2,
                x: canvasWidth / 2,
                y: canvasHeight / 2,
                s: 1.0 + Math.sin(performance.now() / 1000) * 0.3,
                r: Math.sin(performance.now() / 2000) * 0.12,
                over: Math.random() < 0.5
            });
            draw();
        }
        function draw() {
            CONTEXT.clearRect(0, 0, canvasWidth, canvasHeight);
            for (var i = 0; i < self.amount; i++) {
                var flake = flakes[i];

                let velX = self.speed * Math.sin(flake.theta);
                let velY = self.speed * Math.cos(flake.theta);
                let normBackX = flake.x - ((velX / self.speed) * 5);
                let normBackY = flake.y - ((velY / self.speed) * 5);

                CONTEXT.save();
                CONTEXT.beginPath();
                CONTEXT.strokeStyle = '#000';
                CONTEXT.lineWidth = 2;
                CONTEXT.moveTo(flake.x, flake.y);
                CONTEXT.lineTo(normBackX, normBackY);
                CONTEXT.stroke();
                //CONTEXT.closePath();
                CONTEXT.restore();

                flake.theta = normTheta(random(flake.theta - (Math.PI * turnSpeed), flake.theta + (Math.PI * turnSpeed)));
                
                let neighbourFlakes = rankNeighbours(flake, flakes, detectDist);
                // only checking closest
                for (let m = 0; m < Math.min(numTrack, neighbourFlakes.length); m++) {
                    let neighbourFlake = neighbourFlakes[m];
                    let avoidTheta = getAvoidTheta(flake, neighbourFlake);
                    flake.theta += avoidTheta / 1.6;

                    // turn in same direction as neighbours
                    let flakeThetaDiff = getThetaDiff(flake.theta, neighbourFlake.flakeTheta);
                    flake.theta += flakeThetaDiff / 4;
                }

                // turn in direction of centroid
                let centroidX = 0;
                let centroidY = 0;
                for (let m = 0; m < neighbourFlakes.length; m++) {
                    centroidX += neighbourFlakes[m].x / neighbourFlakes.length;
                    centroidY += neighbourFlakes[m].y / neighbourFlakes.length;
                }
                let centroidTheta = thetaBetweenPoints(centroidX - flake.x, centroidY - flake.y);
                let centroidThetaDiff = getThetaDiff(flake.theta, centroidTheta);
                flake.theta += centroidThetaDiff / 14;

                // avoid text
                let lastState = textStates[textStates.length - 1];
                flake.theta += getAvoidTheta(flake, {dist: objDist(flake, lastState), theta: objTheta(flake, lastState)}) / 32;

                flake.theta = normTheta(flake.theta);
                velX = self.speed * Math.sin(flake.theta);
                velY = self.speed * Math.cos(flake.theta);
                flake.y += velY;
                flake.x += velX;
                checkReset(flake);
            }
            
            if (textStates.length == memory) {
                textStates.shift();
            }
            let lastState = textStates[textStates.length - 1];
            let theta = lastState.theta + (Math.random() - 0.5) * jitter;
            let halfCanvasWidth = canvasWidth / 2;
            let halfCanvasHeight = canvasHeight / 2;
            let x = lastState.x + (Math.cos(theta) * speed) + ((halfCanvasWidth - lastState.x) / halfCanvasWidth);
            let y = lastState.y + (Math.sin(theta) * speed) + ((halfCanvasHeight - lastState.y) / halfCanvasHeight);

            if (x < 0 || x > canvasWidth || y < 0 || y > canvasHeight) {
                x = halfCanvasWidth;
                y = halfCanvasHeight
            }
            let s = 1.0 + Math.sin(performance.now() / 1000) * 0.3;
            let r = Math.sin(performance.now() / 2000) * 0.12;
            let over = lastState.over;
            if (Math.random() < 0.01) {
                over = Math.random() < 0.5;
            }
            textStates.push({
                theta: theta,
                x: x,
                y: y,
                s: s,
                r: r,
                over: over
            });
            for (let i = 0; i < textStates.length; i++) {
                let textState = textStates[i];
                CONTEXT.lineWidth = textState.over ? 0.5 : 1.5;
                CONTEXT.globalCompositeOperation = textState.over ? "source-over" : "destination-over";
                CONTEXT.save();
                CONTEXT.translate(textState.x, textState.y);
                CONTEXT.scale(textState.s, textState.s);
                CONTEXT.rotate(textState.r);
                CONTEXT.textAlign = "center";
                CONTEXT.textBaseline = "middle";
                CONTEXT.font = "bold 94px Courier New";
                CONTEXT.fillStyle = "#fff";
                CONTEXT.strokeStyle = "#000";
                CONTEXT.fillText(text, 0, 0);
                CONTEXT.strokeText(text, 0, 0);
                CONTEXT.restore();
                
            }
            requestAnimationFrame(draw);
        }
        function checkReset(flake) {
            if (flake.x > canvasWidth) {
                flake.x = 0;
            }
            else if (flake.x < 0) {
                flake.x = canvasWidth;
            }
            if (flake.y > canvasHeight) {
                flake.y = 0;
            }
            else if (flake.y < 0) {
                flake.y = canvasHeight;
            }
        }
        init();
        if (self.resize) {
            window.addEventListener('resize', function() {
                var H0 = CANVAS.height,
                        W0 = CANVAS.width,
                        H1 = CANVAS.offsetHeight,
                        W1 = CANVAS.offsetWidth;
                CANVAS.height = canvasHeight = H1;
                CANVAS.width = canvasWidth = W1;
                for (var i = 0; i < self.amount; i++) {
                    var flake = flakes[i];
                    flake.x = flake.x / W0 * W1;
                    flake.y = flake.y / H0 * H1;
                }
            });
        }
    }
}
function random(min, max) {
    var delta = max - min;
    return max === min ? min : Math.random() * delta + min;
}
function normTheta(theta) {
    while (theta < 0) {
        theta += 2 * Math.PI;
    }
    while (theta >= (2 * Math.PI)) {
        theta -= 2 * Math.PI;
    }
    return theta;
}
function thetaBetweenPoints(x, y) {
    let theta = -Math.atan2(y, x) + (Math.PI / 2);
    let normedTheta = normTheta(theta);
    return normedTheta;
}
function objTheta(objA, objB) {
    return thetaBetweenPoints(objB.x - objA.x, objB.y - objA.y);
}
function objDist(objA, objB) {
    return Math.sqrt((objB.x - objA.x) ** 2 + (objB.y - objA.y) ** 2);
}
function rankNeighbours(flake, flakes, detectDist) {
    let neighbours = [];
    for (let i = 0; i < flakes.length; i++) {
        let flakeNeighbour = flakes[i];
        let dist = objDist(flake, flakeNeighbour);
        if (dist < detectDist) {
            neighbours.push({
                x: flakeNeighbour.x,
                y: flakeNeighbour.y,
                dist: dist,
                theta: objTheta(flake, flakeNeighbour),
                flakeTheta: flakeNeighbour.theta,
                idx: i
            });
        }
    }
    neighbours.sort((a, b) => a.dist - b.dist);
    return neighbours;
}
function getThetaDiff(thetaA, thetaB) {
    if (thetaB > thetaA) {
        if (thetaB < thetaA + Math.PI) {
            return thetaB - thetaA;
        }
        else if (thetaB > thetaA + Math.PI) {
            return -(thetaA + ((2 * Math.PI) - thetaB));
        }
        else {
            return Math.PI;
        }
    }
    else if (thetaB < thetaA) {
        if (thetaB > thetaA - Math.PI) {
            return thetaB - thetaA;
        }
        else if (thetaB < thetaA - Math.PI) {
            return thetaB + ((2 * Math.PI) - thetaA);
        }
        else {
            return Math.PI;
        }
    }
    else {
        return 0;
    }
}
function getAvoidTheta(flake, obj) {
    // if already collided just carry on
    if (obj.dist == 0) {
        return 0;
    }

    let thetaDiff = getThetaDiff(flake.theta, obj.theta);

    // check if in sight
    let absThetaDiff = Math.abs(thetaDiff);
    let avoidDir = 0;
    if (thetaDiff == 0) {
        avoidDir = Math.random() < 0.5 ? 1 : -1;
    }
    else if (absThetaDiff < (2 * Math.PI / 3)) {
        // weight by angle
        // is 1 or 
        avoidDir = (-1 * thetaDiff) / absThetaDiff;
    }
    return avoidDir * (Math.PI / Math.min(obj.dist, 8)) * Math.cos(thetaDiff / 2);
}
</script>


<style scoped>

.nectobox {
    height: 500px;
    width: 100%;
}

.flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>