
<template>
    <section>
        <p>How does democracy diffuse? Its origins are well known, with liberal democracy considered to 
        date back to Athens and the Roman Republic, and its rich history is marked by the many revolutions leading up to the present day. But due 
        to its nebulous, sociological nature, the means by which it occurs don't seem to be well understood. Some casuality can be inferred from looking at 
        individual cultural groups, but a unified theory of how deomcracy diffuses between people and nations seems far off. 
        Nonetheless, I'd like to dive into possible factors of democracy, and here will attempt to produce a simple blackbox model of how 
        geo-political systems affect its spread and growth.</p>

        <p>For someone with no academic background in political science this probably seems a bit ambitious, but there is some precedent here: 
        the <a href="https://www.v-dem.net/en/our-work/research-projects/explaining-democratization/" target="_blank">Varieties of Democracy (VDem) project</a> is focused on 
        understanding democracy, and has published an incredibly comprehensive dataset that acts as an index of democracy for the vast majority of 
        nations over the last two centuries. They have previously published studies using their dataset showing a colonial relationship between two 
        countries leads to a converging level of democratization. 
        <a href="https://www.theglobalist.com/does-trade-promote-democracy/" target="_blank">Work has also been done</a> showing a positive correlation between openness to 
        trade and political freedom.</p>

        <p>The other thing driving this work is my interest in data science, and its applications. Geometric learning is a relatively recent 
        branch of machine learning that allows a vector representation of a graph to be learned, in the same way that convolutional 
        networks allow vector representations of structured dimensional content such as images to be learned. The most obvious applications 
        of graph learning are to social media, allowing analysis of the complex social interactions which can be naturally represented as 
        graphs. Social media networks present large quantities of data which is great if you're a mega-corporation with your own datacentres 
        to process all that data, but make it hard to get comparable results for independent practioners like myself.</p>

        <p>The one thing I have to give me a bit of computational power is Google Colaboratory, which provides free GPU instances from 
        Google's compute service. <a href="https://www.polemicdigital.com/google-amp-go-to-hell/" target="_blank">As much</a>
        <a href="https://www.theguardian.com/business/2018/jul/18/google-faces-record-multibillion-fine-from-eu-over-android" target="_blank">as I</a>
        <a href="https://www.wired.com/story/google-privacy-data/" target="_blank">hate to use</a>) a Google product, I'm really not sure my laptop could 
        take many more overnight training sessions as it did when it was young. The instances even come with an optional TPU if the library you're 
        using supports that. The library I'll be using for this project is PyTorch Geometric. This extension provides loads of graph learning 
        methods, built on top of PyTorch.</p>

        <p>The first step for this project was finding a good dataset to train the model on. The 
        <a href="https://www.v-dem.net/en/data/data-version-10/" target="_blank">VDem dataset</a> will provide the measure of democracy over time for each country. 
        We then need a dataset providing data on international relationships. To this end, I found the 
        Centre d'Etudes Prospectives et d'Information Internationales (CEPII) 
        <a href="http://www.cepii.fr/CEPII/en/bdd_modele/presentation.asp?id=32" target="_blank">trade history dataset</a>, which presents an incredible 1.9 million 
        bilateral trade flow observations. The dataset also bilateral features common factors of trade, including geographical distance, 
        common borders, colonial and linguistic links, alongside GDP and population measures, all for the last 200 years.  This provided a 
        very strong basis on which to create a model.</p>

        <p>The tricky thing with using two datasets however is cross-indexing them. The VDem dataset uses a country code roughly per geographic 
        area, therefore providing a continuous democracy index for both the Soviet Union and for Russia, whereas the CEPII dataset encodes 
        these two sets of data separately. Creating a mapping from the USSR to Russia in this case is a no brainer, as the population and regime 
        of the two countries is continuous. However mapping for example the British South Africa Company owned Rhodesia to what is now Zimbabwe is
        more tricky. The VDem dataset provides a continuous democracy index for Rhodesia and Zimbabwe, despite the difference in regime. 
        However do we consider trade with Rhodesia to be more relevant to the regime, Britain? Or to the general populace, who will later be 
        the citizens of Zimbabwe? </p>

        <p>I opted for associating the trade with the population, with the potentially naive rationale that seeing as the population 
        producing and consuming the traded goods would be the most suscetible to its cultural impacts, or as succintly put in an 
        <a href="https://www.theglobalist.com/does-trade-promote-democracy/" target="_blank">article</a> on the subject by Daniel Griswold: </p>

        <blockquote cite="https://www.theglobalist.com/does-trade-promote-democracy/">...governments that grant their citizens a large measure 
        of freedom to engage in international commerce find it dauntingly difficult to simultaneously deprive them of political and civil 
        liberties.</blockquote>

        <p>This general rule falls down a bit in some cases like the Tangier International Zone, which was a small area of Tangier, Morocco, 
        jointly ruled by France, Spain and the UK. The population of this area was mostly international, and therefore I didn't include the trade 
        data from this area.</p>

        <p>To understand the data a little better, I've created two visualisations, one for trade, and one for colonization status:</p>

        <div class="graphic">{% include trade-dataset-globe.html %}</div>

        <div class="graphic" height="1000px">{% include colonization-visual.html %}</div>

        <p>With a cohesive dataset created, all that was left was to define and train the model. The model takes the GDP and population of the 
        country, and the bilateral relationships with the countries it trades with, as input, and predicts the index of democratization for 
        that year. I initially defined a simple non-recurrent model that predicts only using one years worth of data, but this turned out to 
        be pants, so I quickly switched to a recurrent model. The results were... pretty good! I ran the model on the data of three particularly 
        historically interesting countries, and here are the results:</p>

        <p>I kind of fell of the band wagon with this project, but I'm quite proud of this work, so I'm going to finish it in this rather underwhelming way
        and leave it up here. To wrap it up with a big picture note, whether or not the processes by which societies democratize and become autocratic are 
        ever fully understood is unclear. But if we keep on trying, using the modern techniques of the day, we may yet surprise ourselves.
        </p>
    </section>
</template>
<script>
export default {
    data() {
        return {
            title: "Diffusion of Democracy",
            subtitle: "How does democracy diffuse",
            date: new Date('2020-09-29T21:45:13'),
            image_path: '@/assets/globe_pic.jpg',
            slug: 'DiffDemo'
        }
    }
}
</script>