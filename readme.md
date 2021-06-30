
# HVA ER JEKYLL
- Jekyll står bak GitHub Pages der du gjøre nettsiden din tilgjengelig for offentligheten rett fra github-repository.
  Jekyll er en static site generator som bruker Liquid og Markdown og gjengir dette til HTML og CSS. ***(les mer om dette her: https://shopify.github.io/liquid/)***.

 # INSTALLASJON
 
 - Last ned og installer Ruby. Windows: https://rubyinstaller.org/
   Andre: https://www.ruby-lang.org/en/downloads/ 
 - Last ned og installer  RubyGems: https://rubygems.org/pages/download
 - Kjør `gem install jekyll bundler`  for å installere jekyll og bundler gems
 - (Start Visual Studio Code/terminalvinduet på nytt)
 - `bundle install`
 - Åpne opp prosjektet og kjør en av disse: 
   - `bundle exec jekyll serve` - med config for prod
   - `bundle exec jekyll serve --config _config.yml,_config_dev.yml` - med config for lokalt
 - Om du får `require: cannot load such file -- webrick (LoadError)` feilmelding så kan det å kjøre `bundle add webrick` - hjelpe


# LEGGE OG ELLER ENDRE INNHOLD

### Ansatte
  - Legge til ny ansatt
    - i folderen /_ansatte: kopier eksempel.md filen som er der, endre navn og data slik at den samsvarer med ansatte som skal legges til, husk at path: sin verdi skal samsvare med punkt 2 sin perma-lenke.
    - i folderen /_pages/profil gjør det samme som punkt 2, kopier denne sin eksempel.md fil, rename og endre det slik at det samsvarer med ansatte som skal legges til.
    -  Husk å legg til /assets/ansatt-bilder/navn-på-ansatt.filformat
    -  Fjern eller sett published: **true**