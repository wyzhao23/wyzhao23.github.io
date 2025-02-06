---
layout: post
title: AI-driven Dynamic mmWave Networking
date: 2023-06-15 11:46:00
description: Integrated Access and Backhaul (IAB) is an emerging technique to enable cost-effective 
  deployment of dense 5G networks that utilize emerging millimeter-wavelength (mmWave) spectrum. Existing 
  heuristic-based network control/management frameworks are not well-suited for the increasing complexity 
  and uncertainty introduced by mmWave IAB. Machine learning (ML) can help automate network control 
  decisions, but its practical deployment faces new system-level challenges in 5G IAB, including accurate 
  simulation-based training, resolving conflicting objectives from heterogeneous network slices, and 
  efficiently collecting observations for run-time decision-making.
tags: communications machine-learning
thumbnail: assets/img/publication_preview/mesh.jpg
images:
  lightbox2: true
  photoswipe: true
  spotlight: true
  venobox: true
toc:
  sidebar: left
---

## Dynamic mmWave Mesh Network

Millimeter-wavelength (mmWave) mesh network can provide multi-Gbps transmission but with large path loss and
heterogeneous objectives which is hard to solve by heuristic models. Machine learning (ML) techniques,
especially reinforcement learning (RL), have great potential in solving multi-objective, non-linear, and non-convex
problems that often happen in mmWave mesh network configuration. On the other hand, network configuration policies 
learned from simulations cannot always help physical networks meet performance requirements due to sim2real
gap. In this work, we develop a reinforcement learning (RL) model to train a policy for dynamic topology management
and a self-supervised policy adaptation algorithm to bridge the domain gap. The experimental results shows that our
RL agent can learn a policy to avoid blockage links and self-supervised learning model can help to eliminate domain gaps.
The testbed we built can establish multiple routes and can be controlled effectively by a central controller. We 
successfully ran the simulation-trained RL policy and self-supervision agent on the real testbed.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dymesh.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
