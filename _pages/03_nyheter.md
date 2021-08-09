---
layout: page
title: Nyheter
permalink: /nyheter/
nav: true
excerpt_separator: <!--slutt-->
---
<div class="news-content-container">
<h2>{{ page.title }}</h2>
<ul class="news-container">
  {% for post in site.posts %}
    <a class="news-card" href="{{ post.url | relative_url }}" >
    <div class="content">
      <img src="{{ post.picture }}"/>
      {% if post.picture == "" or post.picture == unknown %}
      <img src="/assets/get-academy.png" />
      {% endif %}
      <p class="news-title">{{ post.title }}</p>
      <br />
      <div class="subinfo-container">
      <span class="category"> {{post.category}}</span>
      <time>{{post.date | date: "%d/%m/%Y %H:%M"}}</time>
      <!-- <p>{{ post.description | default: 'Trykk her for info'}}</p> -->
    </div>
    </div>
    </a>
  {% endfor %}
</ul>
</div>