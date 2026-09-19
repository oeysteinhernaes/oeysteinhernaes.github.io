---
layout: default
seo:
  type: Person
---

{% assign p = site.data.profile %}

<section class="hero">
  <img class="portrait" src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="{{ p.name }}" width="190" height="190">
  <h1>{{ p.name }}</h1>
  <p class="position">
    <a href="{{ p.current_position.institution_url }}">{{ p.current_position.institution }}</a>, {{ p.current_position.title }}
  </p>
  <p class="previous-list">
    Previous: {% for a in p.previous_affiliations %}<a href="{{ a.url }}">{{ a.name }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}
  </p>
</section>

<section>
  <h2>Research interests</h2>
  <p>{{ p.research_interests }}</p>
</section>

<section>
  <h2><a href="{{ p.ki_indeksen.url }}">{{ p.ki_indeksen.label }}</a></h2>
  <p>{{ p.ki_indeksen.description }} <a href="{{ p.ki_indeksen.collaborator.url }}">{{ p.ki_indeksen.collaborator.name }}</a>.</p>
</section>

<section>
  <h2><a href="{{ p.led_project.url }}">{{ p.led_project.label }}</a></h2>
  <p>{{ p.led_project.description }}</p>
</section>

<section>
  <h2><a href="{{ p.arbeidsfradrag.url }}">{{ p.arbeidsfradrag.label }}</a></h2>
  <p>
    {{ p.arbeidsfradrag.description }} I am part of the research group working on it, together with
    {%- assign n = p.arbeidsfradrag.team.size %}
    {%- for m in p.arbeidsfradrag.team %}
      {% if m.url %}<a href="{{ m.url }}">{{ m.name }}</a>{% else %}{{ m.name }}{% endif -%}
      {%- assign remaining = n | minus: forloop.index -%}
      {%- if remaining == 1 %} and {% elsif remaining > 1 %}, {% endif -%}
    {%- endfor %}.
  </p>
</section>

<section>
  <h2>Conferences and workshops</h2>
  <p>
    <a href="{{ p.conferences_list.url }}">{{ p.conferences_list.label }}</a>
    (Inspired by the <a href="{{ p.conferences_list.inspired_by_url }}">{{ p.conferences_list.inspired_by_label }}</a>.)
  </p>
</section>

<section>
  <h2>Contact</h2>
  <ul class="social-list">
    {% for s in p.socials %}
      <li>
        {% if s.url and s.url != "" %}<a href="{{ s.url }}">{{ s.label }}</a>{% else %}{{ s.label }}{% if s.handle %}: {{ s.handle }}{% endif %}{% endif %}
      </li>
    {% endfor %}
    <li>{{ p.email }}</li>
  </ul>
  <p><a href="{{ site.data.links.blog.url }}">{{ site.data.links.blog.label }}</a></p>
</section>
