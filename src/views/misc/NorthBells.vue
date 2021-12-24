<template>
    <section class="content">
        <div class="flex-box-page">
            <img :src="require('@/assets/northbells.jpg')" alt="Picture of the Northumbrian Bells performing" id="northbells">
            <div class="flex-box-col">
                <div class="text-box">
                    <h1 id='name'>
                        Northumbrian Bells
                    </h1>
                    <h4 id='descrip'>
                        Harp and Violin duo based in Northumberland <br>
                        Playing a variety of English and Scottish traditional folk music <br>
                        Available to play at weddings and events
                    </h4>
                </div>
                <div id="heather-div">
                    <img :src="require('@/assets/heather.jpg')" alt="Picture of the some bell heather" id="heather">
                </div>
            </div>
        </div>
    </section>
    <div class="footer">
        <div class="footer-gap"></div>
        <div class="main-footer">
            <div class="tabs">
                <div class="tab" >
                    <a class="link" href="https://encoremusicians.com/Northumbrian-Bells" target="_blank">
                        <b>Encore</b>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.content {
    height: 100%;
    width: 100%;
    overflow-x: hidden !important;
    padding: 0px;
    margin: 0px 0px 0px 0px;
    background-color: rgb(240, 198, 204);
}

.flex-box-page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
}

.flex-box-col {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    max-height: 90%;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

 #northbells {
    display: block;
    height: auto;
    min-width: 50%;
    max-height: 90%;
 }

#heather-div {
    width: 100%;
    height: 300px;
    margin-bottom: 0px;
}

#heather {
    height: 100%;
    width: 100%;
    margin-bottom: 0px;
}

.link {
    text-decoration: none;
}

.text-box {
    width: 100%;
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 0px;
}

.footer {
    height: 10%;
    width: 100%;
    position: fixed;
    bottom: 0;
}

.footer-gap {
    background-color: silver;
    height: 20%;
}

.main-footer {
    background-color: skyblue;
    height: 80%;
}

#name {
    font-family: Garamond, "Times New Roman", serif;
    font-size: 5.5em;
    color: darkorchid;
    text-shadow: -2px -2px 0 silver, 2px -2px 0 silver, -2px 2px 0 silver, 2px 2px 0 silver;
}

#descrip {
    font-family: Georgia, Verdana, sans-serif;
    font-size: 20px;
    color:darkslategray;
}

.tabs {
  padding-top: 5px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.tab {
  margin-right: 80px;
  padding: 10px;
}

.tab:hover {
    background-color: rgba(1, 1, 1, 0.1);
}

.link {
  font-size: 40px;
  font-family: "Times New Roman", serif;
  text-decoration: none;
  color: darkslategray;
}
</style>