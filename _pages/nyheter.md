---
layout: page
title: Nyheter
permalink: /nyheter/
nav: true
excerpt_separator: <!--slutt-->
---
<div class="news-content-container">
<h1 style="text-align:center;">{{ page.title }}</h1>
<ul class="news-container">
  {% for post in site.posts %}
    <a class="news-card" href="{{ post.url | relative_url }}" >
    <div class="content">
    {% if post.picture != unknown %}
      <img src="{{ post.picture | relative_url}}"/>
    {% endif %}
      {% if post.picture == "" or post.picture == unknown %}
        <img src="{{'/assets/get-academy.png' | relative_url }}" />
      {% endif %}
      <p class="news-title">{{ post.title }}</p>
      <div class="subinfo-container">
        <span class="news-tag"> <i class="fas fa-tags"></i> {{post.tags}}</span>
        <time>{{post.date | date: "%d/%m/%Y %H:%M"}}</time>
      </div>
    </div>
    </a>
  {% endfor %}
</ul>
</div>