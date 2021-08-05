---
layout: page
title: Nyheter
permalink: /nyheter/
nav: true
excerpt_separator: <!--slutt-->
---
<h2 style="text-align:center;">{{ page.title }}</h2>
<ul class ="news-container">
  {% for post in site.posts %}
    <a class="news-card" href="{{ post.url | relative_url }}">
    <div class="content">
      <p>{{ post.title }}</p>
      <time>{{post.date | date: "%b %-d, %Y %R"}}</time>
      <p>{{ post.description | default: 'Trykk her for info'}}</p>
    </div>
    </a>
  {% endfor %}
</ul>