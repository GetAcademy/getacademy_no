 - Last ned og installer Ruby. Windows: https://rubyinstaller.org/
   Andre: https://www.ruby-lang.org/en/downloads/ 
 - Last ned og installer  RubyGems: https://rubygems.org/pages/download
 - Kjør `gem install jekyll bundler`  for å installere jekyll og bundler gems
 - (Start Visual Studio Code/terminalvinduet på nytt)
 - `bundle install`
 - Åpne opp prosjektet og kjør en av disse: 
   - `bundle exec jekyll serve` - med config for prod
   - `bundle exec jekyll serve --config _config.yml,_config_dev.yml` - med config for lokalt
 - Om du får `require: cannot load such file -- webrick (LoadError)` feilmelding så kan det å kjøre 
`bundle add webrick`
