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
objective, which is prescribed by the **Free Energy Principle**. This is opposed to the [Knowledge Seeking Agent](https://link.springer.com/chapter/10.1007/978-3-642-40935-6_12) (KSA): an AIXI which maximizes surprise to gather knowledge about its environment. The problem of KSA is that it surely dies if possible, as [demonstrated by Cohen et al](https://ieeexplore.ieee.org/document/9431093).


## Universal Surprise-Minimizing Agents
*Supervised by:*  [Peter Bloem](https://peterbloem.nl/)
## Abstract

We define a Surprise-Minimizing Agent (SMA), within the framework of [Universal AI](https://hutter1.net/ai/uaibook2.htm), with the goal of surprise minimization on incoming observations.
This objective is prescribed by the [Free Energy Principle](https://en.wikipedia.org/wiki/Free_energy_principle), which we reformulate for this setting.
Having removed the problem of computational constraints, we investigate whether the sole goal of surprise minimization leads to interesting or trivial behavior. As we will see, this heavily depends on the Kolmogorov complexity of the environment and how easy it is to predict with the universal mixture.
We show that the optimal behavior would be for the agent (AI$\mu$) to find a niche which can be easily modeled, without altering the prior weight on simpler environments significantly. Nonetheless, we prove bounds for the complexity of a niche and how it relates to the dimensionality of the action and observation spaces, horizon, and complexity of the true environment. This implies an exploratory behavior and information gain up to the complexity of the niche itself.
We argue how, instead, the agnostic agent (AI$\xi$) might explore beyond the optimal niche. We demonstrate both asymptotic optimality and sub-linear regret of SMA. Finally, we motivate how this agent controls the probability of dying, as opposed to the [Knowledge-Seeking Agent](https://link.springer.com/chapter/10.1007/978-3-642-40935-6_12).

**This project has not yet been completed. You can download a near-final draft below. Red text indicates TODOs.**