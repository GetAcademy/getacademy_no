---
layout: about-us
title: Om oss
permalink: /om-oss/
---

{% for ansatt in site.ansatte %}
![image](\assets\ansatt-bilder\{{ ansatt.profilbilde }}){:.view-profile-container}
<span>{{ansatt.name}}</span>
                <!-- <div class="person-name">
                  <span class="first-letter">{{ ansatt.navn[0] }}</span>
                  <span>{{ ansatt.navn }}</span>
                </div>
                <p class="person-info">{{ personDescription }}</p>
              <p class="person-info">{{ additionalDescription }}</p> -->
{% endfor %}


<style lang="scss" scoped>

.about-us-container {
  max-width: $content-max-width;
  margin: auto;
  padding: $global-padding;
}

.folkene-bak {
  text-align: center;
}

.text {
max-width: 1000px;
  margin: auto;
  margin-bottom: 60px;
}

.logos {
  padding: 3rem 1rem;
  text-align: center;
}

.card-container {
  display: flex;
  // justify-content: left;
  // gap: 0px;
  justify-content: space-evenly;
  margin-bottom: 60px;
}

img {
  filter: grayscale(100%);
  padding: 15px;
  width: 100px;
  height: 100%;
  vertical-align: middle;
}

h2 {
  text-align: center;
  padding-bottom: 1em;
}

.partner-description {
  margin: auto;
  max-width: $max-text-width-size;
}

@media only screen and (max-width: 768px) {
  .card-container {
    display: flex;
    flex-direction: column;
  }

  .logos {
    margin: 0;
    padding: 0;
  }

  h2 {
    text-align: left;
  }

  p {
    text-align: left;
  }
}
</style>
