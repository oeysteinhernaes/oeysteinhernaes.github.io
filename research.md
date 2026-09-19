---
layout: default
title: "Research"
permalink: /research/
---

{% assign papers = site.data.papers %}
{% assign google_scholar = site.data.profile.socials | where: "label", "Google Scholar" | first %}

<h1>Research</h1>

<p>Full publication list also on <a href="{{ google_scholar.url }}">Google Scholar</a>.</p>

<p class="jump-nav">
  <a href="#working-papers">Working papers</a> ·
  <a href="#international-publications">International publications</a> ·
  <a href="#norwegian-publications">Norwegian publications</a> ·
  <a href="#discussions">Discussions</a> ·
  <a href="#popular-writing">Popular writing</a>
</p>

<section>
  <h2 id="working-papers">Working papers and work in progress</h2>
  {% assign items = papers | where: "section", "working_papers" %}
  {% for paper in items %}{% include paper.html paper=paper %}{% endfor %}
</section>

<section>
  <h2 id="international-publications">International publications</h2>
  {% assign items = papers | where: "section", "international_publications" %}
  {% for paper in items %}{% include paper.html paper=paper %}{% endfor %}
</section>

<section>
  <h2 id="norwegian-publications">Publications, reports and talks in Norwegian</h2>
  {% assign items = papers | where: "section", "norwegian_publications" %}
  {% for paper in items %}{% include paper.html paper=paper %}{% endfor %}
</section>

<section>
  <h2 id="discussions">Discussions</h2>
  {% assign items = papers | where: "section", "discussions" %}
  {% for paper in items %}{% include paper.html paper=paper %}{% endfor %}
</section>

<section>
  <h2 id="popular-writing">Popular writing in Norwegian</h2>
  {% assign items = papers | where: "section", "popular_writing" %}
  {% for paper in items %}{% include paper.html paper=paper %}{% endfor %}
</section>
