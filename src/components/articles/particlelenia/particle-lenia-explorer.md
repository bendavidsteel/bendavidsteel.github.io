# Particle Lenia Explorer

[Particle Lenia](https://google-research.github.io/self-organising-systems/particle-lenia/) is a recent iteration in the Lenia family. I extended the simple particle Lenia system proposed by Mordvintsev et al. to allow multiple kernels, growth functions, and particle types (species), in the same manner that Lenia has multiple kernels, growth functions, and layers. But this heavily expands the parameter search space when looking for interesting instantiations.

This demo creates an easy way to explore these instantiations. I generated hundreds of thousands of instantiations of particle Lenia with different parameters. These instantiations were rendered into video, and frames from the videos were passed through the CLIP image encoder to generate embeddings (inspired by [ASAL](https://pub.sakana.ai/asal/)). I saved these parameters, CLIP embeddings, and additional metrics.

I then created a simple life-like instantiation regressor by comparing the CLIP embeddings with text embedding descriptions of images of life, and kept the top 3000 most life-like parameter systems as deemed by this regressor. I then compute 2 dimensional coordinates for each instantiation from the embeddings using [PaCMAP](https://github.com/YingfanWang/PaCMAP), and cluster the parameter systems using [Toponymy](https://github.com/TutteInstitute/toponymy). The resulting map of systems is then displayed in web page form using [datamapplot](https://github.com/TutteInstitute/datamapplot). I contributed some additional features to datamapplot to allow the display of edges, showing similarities in the actual parameters of the parameter systems, and allowing a hover window to show the particle Lenia simulation using the corresponding parameters. The demo then allows clicking on the point to open a full simulation in a separate window.

The Particle Lenia WebGPU based simulation has been adapted from a particle life WebGPU simulation. I have begun adding real-time spatial audio synthesis to the simulation, but haven't achieved nice sounding audio in time for this submission.

There are many things to improve with this explorer! The life-like score provided by the CLIP regressor isn't perfect. Many high rated instantiations are not interesting, and many low ranked instantiations are very interesting. Additionally, the clustering is not currently working well. But I'm happy with this tool as a start for exploring the beautiful space of Particle Lenia. As the families of artificial life systems grow, I hope also to see that the accessibility of these systems and their linkages grow, such that we can explore them as we would while walking in a garden.

The datamap is available [here](/particle_lenia_datamap.html) and the particle lenia simulator is available [here](/particle_lenia.html).

Note that your browser must support WebGPU to allow the simulation to work. If there is a white screen, your browser version likely doesn't support WebGPU.

[![Particle Lenia Explorer](/images/leniaexplorer.png)](/particle_lenia_datamap.html)
