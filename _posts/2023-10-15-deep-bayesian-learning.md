---
layout: post
title: Bayesian Deep Learning as Deep Gaussian Processes
date: 2025-01-21 11:46:00
description: Deep Neural Networks (DNNs) are powerful tools capable of 
  capturing intricate patterns in large datasets, but lack the ability to provide uncertainty 
  estimation. To learn rich, hierarchical representations from data with proper interpretability 
  and uncertainty estimation, efficient Bayesian deep learning gain considerable attention in a 
  variety of real-world tasks, especially when uncertainty quantification is critical.
tags: Machine-Learning
thumbnail: assets/img/9.jpg
images:
  compare: true
  slider: true
---

## Deep Additive Kernel Learning

With the strengths of both deep learning and kernel methods like Gaussian Processes (GPs), 
Deep Kernel Learning (DKL) has gained considerable attention in recent years. From the 
computational perspective, however, DKL becomes challenging when the input dimension of the 
last-layer GP is high. To address this challenge, we propose the Deep Additive Kernel (DAK) 
model, which incorporates i) an additive structure for the last-layer GP; and ii) induced 
prior approximation for each GP component. This naturally leads to a last-layer Bayesian neural 
network (BNN) architecture. The proposed method enjoys the interpretability of DKL as well as 
the computational advantages of BNN. Empirical results show that the proposed approach outperforms 
state-of-the-art DKL methods in both regression and classification tasks.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dak.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

Check our latest paper "From deep additive kernel learning to last-layer Bayesian neural networks 
via induced prior approximation" at 2025 International Conference on Artificial Intelligence and 
Statistics (AISTATS)

## Deep Markov Gaussian Processes

Deep Gaussian Processes (DGPs) are a powerful class of probabilistic models that extend traditional 
GPs by stacking multiple GP layers. We develop software based on a class of DGPs with 
sparse structure, referred to as Deep Markov GPs (DMGPs). More specifically, we implement DMGPs as 
sparsely activated Bayesian Neural Networks (BNNs) with learnable weights and biases, which can be 
used in a wide range of deep learning applications. The depth of DGPs enables them to model intricate 
dependencies and variations, making them suitable for tasks such as regression, classification, and 
time-series analysis. The DMGP software can provide not only uncertainty quantification for 
predictions, but also interpretability by incorporating the neural additive structure. Our evaluation 
across various tabular datasets and visual object tasks shows that DMGPs not only match but often 
surpasses the performance of traditional DGP methods, all while significantly reducing the number 
of parameters. Due to the strong connection to deep neural networks, DMGPs can be easily extended 
to other state-of-art deep learning architectures and applications. 

DMGP package is available at https://github.com/warrenzha/dmgp. 

- [Documentation, examples, tutorials](https://dmgp.readthedocs.io) on how to construct all sorts of DMGP models.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tmgp.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
