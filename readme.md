 - Last ned og installer Ruby. Windows: https://rubyinstaller.org/
   Andre: https://www.ruby-lang.org/en/downloads/ 
 - Last ned og installer  RubyGems: https://rubygems.org/pages/download
 - Kjør `gem install jekyll bundler`  for å installere jekyll og bundler gems
 - Åpne opp prosjektet og kjør `bundle exec jekyll serve`  eller `bundle exec jekyll serve --config _config.yml,_config_dev.yml`  for å kjøre lokalt, da det er  en config.yml filer for local
 - Om du får `require: cannot load such file -- webrick (LoadError)` feilmelding så kan det å kjøre 
`bundle add webrick`
