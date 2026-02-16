---
layout: layout.njk
title: Sequence coverage plot
date: 2020-06-01
tags: project
permalink: /project/sequence-coverage-plot/
repo: https://github.com/jamilla-az/sequence-coverage-plot
excerpt: Python and Plotly implementation of an IGV-inspired sequence coverage plot. Computes coverage from read alignment and provides an interactive visualization annotated with mutations.
---

Python and Plotly implementation of an IGV-inspired sequence coverage plot. It efficiently computes sequence coverage from read alignment and provides an interactive visualization annotated with mutations, similar to the [Integrative Genome Viewer](https://software.broadinstitute.org/software/igv/UserGuide).

The plots below are interactive (zoom, pan, hover for values). They are hosted on the repo’s GitHub Pages.

## Small region of interest (&lt;100 bp)

<div class="interactive-plot-embed">
  <iframe src="https://jamilla-az.github.io/sequence-coverage-plot/small_region.html" title="Sequence coverage — small region" width="100%" height="420" frameborder="0" loading="lazy"></iframe>
</div>
<p class="interactive-plot-caption"><a href="https://jamilla-az.github.io/sequence-coverage-plot/small_region.html" target="_blank" rel="noopener">Open in new tab →</a></p>

## Large region of interest (5000 bp)

<div class="interactive-plot-embed">
  <iframe src="https://jamilla-az.github.io/sequence-coverage-plot/large_region.html" title="Sequence coverage — large region" width="100%" height="420" frameborder="0" loading="lazy"></iframe>
</div>
<p class="interactive-plot-caption"><a href="https://jamilla-az.github.io/sequence-coverage-plot/large_region.html" target="_blank" rel="noopener">Open in new tab →</a></p>

---

<a href="https://github.com/jamilla-az/sequence-coverage-plot">View on GitHub →</a>
