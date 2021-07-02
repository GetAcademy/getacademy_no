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
    <li class="news-card">
    <div class="content">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <time>{{post.date | date: "%b %-d, %Y %R"}}</time>
      <a href="{{ post.url | relative_url }}">{{ post.description | default: 'Trykk her for info'}}</a>
   
    </div>
    </li>
  {% endfor %}
</ul>