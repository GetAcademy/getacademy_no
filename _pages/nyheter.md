---
layout: page
title: Nyheter
permalink: /nyheter/
nav: true
excerpt_separator: <!--slutt-->
---
<main id="news-container">
<section class="info">
  <h1>{{ page.title }}</h1>
</section>
  <section class="cards-wrapper">
    {% for post in site.posts %}
    <div class="card-grid-space">
      <!-- bilde -->
      {% if post.picture != unknown %}
      <a class="card" href="{{ post.url | relative_url }}" style="--bg-img: url({{ post.picture | relative_url }})">
      {% endif %}
      {% if post.picture == "" or post.picture == unknown %}
      <a class="card" href="{{ post.url | relative_url }}" style="--bg-img: linear-gradient(145deg, #EE7100 83%, #FF8B00 17%); --bg-filter-opacity: 0">
      {% endif %}
      <!---->
        <div>
          <h1></h1>
          <p>{{ post.title }}</p>
          <div class="date">{{post.date | date: "%d/%m/%Y"}}</div>
          <div class="tags">
            <div class="tag">{{post.tags}}</div>
          </div>
        </div>
      </a>
    </div>
      {% endfor %}
  </section>
</main>