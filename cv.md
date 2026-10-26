---
layout: default
title: "CV"
description: "CV for Øystein M. Hernæs, senior researcher at the Ragnar Frisch Centre for Economic Research: education, affiliations, work experience and languages."
permalink: /cv/
---

{% assign v = site.data.vita %}

<h1>CV</h1>

<section class="personalia">
  <h2>{{ v.personalia.full_name }}</h2>
  <p>
    <a href="{{ v.personalia.address_line1_url }}">{{ v.personalia.address_line1 }}</a><br>
    {{ v.personalia.address_line2 }}<br>
    Phone: {{ v.personalia.phone }}<br>
    E-mail: <a href="mailto:{{ v.personalia.email }}">{{ v.personalia.email }}</a><br>
    Nationality: {{ v.personalia.nationality }}
  </p>
</section>

<section>
  <h2>Education</h2>
  <ul class="cv-list">
    {% for e in v.education %}
    <li><span class="cv-years">{{ e.years }}:</span> {% if e.institution_url and e.institution_url != "" %}<a href="{{ e.institution_url }}">{{ e.institution }}</a>{% else %}{{ e.institution }}{% endif %} — {{ e.degree }}</li>
    {% endfor %}
  </ul>
</section>

<section>
  <h2>Academic affiliations</h2>
  <ul class="cv-list">
    {% for a in v.academic_affiliations %}
    <li><span class="cv-years">{{ a.years }}:</span> <a href="{{ a.institution_url }}">{{ a.institution }}</a> — {{ a.role }}</li>
    {% endfor %}
  </ul>
</section>

<section>
  <h2>Teaching experience</h2>
  <ul class="cv-list">
    {% for t in v.teaching_experience %}
    <li><span class="cv-years">{{ t.years }}:</span> {{ t.institution }} — {{ t.role }}</li>
    {% endfor %}
  </ul>
</section>

<section>
  <h2>Work experience</h2>
  <ul class="cv-list">
    {% for w in v.work_experience %}
    <li><span class="cv-years">{{ w.years }}:</span> {% if w.institution_url %}<a href="{{ w.institution_url }}">{{ w.institution }}</a>{% else %}{{ w.institution }}{% endif %} — {{ w.role }}</li>
    {% endfor %}
  </ul>
</section>

<section>
  <h2>Organisational work</h2>
  <ul class="cv-list">
    {% for o in v.organisational_work %}
    <li><span class="cv-years">{{ o.years }}:</span> {{ o.institution }} — {{ o.role }}</li>
    {% endfor %}
  </ul>
</section>

<section>
  <h2>Languages</h2>
  <ul class="cv-list">
    {% for l in v.languages %}
    <li>{{ l.level }}: {{ l.list }}</li>
    {% endfor %}
  </ul>
</section>
