---
title: "Master's Thesis"
description: "A theoretical paper on a surprise-minimizing AIXI agent"
author: 'Michele Vannucci'
pubDate: 2026-03-06
tags: ['AI', 'AIXI', 'FEP']
cover: ./cover.png
download: /Michele_Masters_Thesis.pdf
---


For my Master's thesis, I studied an [**AIXI**](https://en.wikipedia.org/wiki/AIXI) agent under a surprise-minimization
objective, which is prescribed by the **Free Energy Principle**. This is opposed to the [Knowledge Seeking Agent](https://link.springer.com/chapter/10.1007/978-3-642-40935-6_12) (KSA): an AIXI agent which maximizes surprise to gather knowledge about its environment. The problem of KSA is that it surely dies if possible, as [demonstrated by Cohen et al](https://ieeexplore.ieee.org/document/9431093).


## Universal Surprise-Minimizing Agents
*Supervised by:*  [Peter Bloem](https://peterbloem.nl/)
## Abstract

We formally analyze a computationally unbounded agent whose goal is surprise minimization on incoming observations, within the framework of [Universal AI](https://hutter1.net/ai/uaibook2.html).
This objective is described by the [free energy principle](https://en.wikipedia.org/wiki/Free_energy_principle), which we reformulate for this setting.
Having removed the problem of computational constraints, we investigate whether the sole goal of surprise minimization leads to interesting or trivial behavior. As we will see, this heavily depends on the (Kolmogorov) complexity of the environment
%and how easy it is to predict with the universal mixture
.
We show that the optimal behavior for the agent is to enter a niche of its world that can be easily modeled, without altering the prior weight on simple environments significantly. Nonetheless, we prove bounds for the complexity of this niche and how it relates to the dimensionality of the action and observation spaces, horizon, and complexity of the true environment. This bound entails a counter-intuitive short term exploratory behavior and information gain in pursuit of reaching the niche.
Additionally, we argue how the agnostic agent, being intrinsically suboptimal, might explore beyond the optimal niche. We demonstrate both asymptotic optimality and sub-linear regret of our agent. Finally, we motivate how it controls the probability of dying, as opposed to the Knowledge-Seeking Agent (KSA), which, in contrast, maximizes surprise.


**This is the final version of my Master's thesis. The pre-print is coming soon!**