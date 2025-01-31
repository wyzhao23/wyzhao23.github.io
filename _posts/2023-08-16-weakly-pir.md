---
layout: post
title: Private Information Retrieval
date: 2024-01-15 11:46:00
description: Private information retrieval (PIR) systems are motivated by the necessity to safeguard 
  user privacy during information retrieval. In the canonical PIR framework, a user wishes to retrieve a 
  message from N independent servers, each holding a complete set of K messages. The message’s identity 
  must remain hidden from any individual server. This privacy requirement necessarily incurs higher 
  download costs than a protocol without such a requirement, which requires effort to improve the code 
  construction of PIR systems.
tags: [information-theory]
thumbnail: assets/img/wpir.png
images:
  lightbox2: true
  photoswipe: true
  spotlight: true
  venobox: true
---

## Leaky Private Information Retrieval

We study the problem of leaky private information retrieval (L-PIR), where the amount of privacy leakage is
measured by the pure differential privacy parameter, referred to as the leakage ratio exponent. Unlike the 
previous L-PIR scheme proposed by Samy et al., which only adjusted the probability allocation to the clean 
(low-cost) retrieval pattern, we optimize the probabilities assigned to all the retrieval patterns jointly. 
It is demonstrated that the optimal retrieval pattern probability distribution is quite sophisticated and 
has a layered structure: the retrieval patterns associated with the random key values of lower Hamming weights 
should be assigned higher probabilities. This new scheme provides a significant improvement, leading to
an O(log K) leakage ratio exponent with fixed download cost D and number of servers N, in contrast to the previous art
that only achieves a Θ(K) exponent, where K is the number of messages.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wpir.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pirdp.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

## Weakly Private Information Retrieval

Private information retrieval (PIR) systems were motivated by the necessity to safeguard user privacy 
during information retrieval. In the standard PIR framework, a user wishes to retrieve a desired message 
from N non-colluding servers efficiently, such that the identity of the desired message is not leaked in 
a significant manner. We study the problem of weakly PIR when there is heterogeneity in servers' 
trustfulness, i.e. some servers can be more trustworthy than others, under the maximal leakage (Max-L) 
metric and mutual information (MI) metric. A code construction is proposed for this setting and optimized 
the probability distribution for this construction.

Check our latest paper:

- **ISIT 2024**: [Weakly Private Information Retrieval from Heterogeneously Trusted Servers](https://arxiv.org/pdf/2402.17940)
