---
title: "EL Reasoner"
description: "I implemented a reasoner which uses EL description logic rules to compute the subsumers of a class inside a OWL ontology"
author: 'Michele Vannucci'
tags: ['AI', 'Logic']
pubDate: 2023-12-04
download: '/Michele_EL_Reasoner.pdf'
---

For the Knowledge Representation course, I implemented a reasoner which uses EL description logic rules to compute the subsumers of a class inside an OWL ontology. The reasoner algorithm applies the classical EL reasoning rules (top rule, subsumption rule, the two conjunction rules and the two existential rules), considering newly genereated nodes edges or concepts of the graph. This way it does not waste computational resources appling rules between nodes on which they have already been applied.

Repository: [GitHub](https://github.com/michelexyz/EL_reasoning_assignment)

The following report was made in collaboration with two fellows students: Eli Partodikromo and Mirthe Kemp.
