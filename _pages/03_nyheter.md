---
layout: page
title: Nyheter
permalink: /nyheter/
excerpt_separator: <!--slutt-->
---
<ul class ="news-container">
  {% for post in site.posts %}
    <li class="news-card">
      <a href="{{ post.url }}">{{ post.title }}</a>
      <time>{{post.date | date: "%b %-d, %Y %R"}}</time>
    {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>