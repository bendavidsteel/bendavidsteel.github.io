# Implicit evolution extension to Particle Life

[Particle life](https://particle-life.com/about/project.html) (sometimes known as "clusters") is a particle system that uses asymmetric interaction forces to create beautiful behaviour. The original implementation defines particles as N discrete species, and uses an NxN matrix to define the interaction forces between them.

$$F_{ij} = M_{s_i s_j}$$

I wanted to change this system to support implicit evolution, where particles compete over parameters, in the same way that Flow Lenia works, to allow interesting evolution to occur. [Some people](https://www.youtube.com/watch?v=Nor4FxoLT9U) have adapted particle life to support evolution by adding food and particle death. This is an example of explicit evolution. But I wanted a simpler system.

I did so by adding two simple changes. 
First, instead of a particle's interaction forces being defined by its lookup values in a matrix, each particle has a species vector, and an interaction vector. Interaction forces are determined via the dot product of a particle's species vector and the interaction vector of the other particle. 

$$F_{ij} = s_i \cdot a_j$$

Second, particles can copy other particles' species/interaction vectors. Interesting patterns form in particle life when multiple species group together in a stable form, so I wante to preserve this behaviour, and also allow for local evolutionary niches. The solution to this is to only allow copying when particles are near, and when their species vectors are similar. This allows for local evolution to occur, and for stable forms to emerge.

$$\text{copy}(i, j) = \begin{cases}
s_j, a_j & \text{if } \|p_i - p_j\| < r \text{ and } \frac{s_i \cdot s_j}{\|s_i\| \|s_j\|} > \epsilon \\
s_i, a_i & \text{otherwise}
\end{cases}$$

I've implemented this system in [python + JAX](https://github.com/bendavidsteel/evoparticlelife) and an interaction version you can play with [here](/evo_particle_life.html) using nannou + WebGPU + WASM. I'm planning on adding a more thorough explanation of the system parameter soon.

[![Evo Particle Life](/images/evo_particle_life.png)](/evo_particle_life.html)
