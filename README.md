![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Rails](https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white)

---

<img src="https://github.com/AmelieLoulergue/Woovv/blob/main/app/assets/images/Logo_Woovv.jpg" width="20" /> [**WOOVV**](https://woovv-prod.herokuapp.com/) : Platform for connecting coworking spaces and teleworkers ! 💻

### WOOVV

---

Woovv is a platform to find the best workspaces all around you. Once you suscribed, you just need to specifiate the place you want to work and Woovv will display the closest coworking locations to the entered position. Then, you can directly book a place for the period you choosed.

## Useful

- Integration of JavaScript mapbox
  <br>
- Processing and verification of location data recorded in back (+ 2500 Coworking) via the government API
  <br>
- File app/db/scrapper.rb is a scrapper we developed to collect data from this [website](https://www.coworking-france.com/).
  We recover a csv file that we used in seed to create Coworkings in the database.
  It allows Woovv to propose +2500 reals coworkings in France.

## Technologies

A list of technologies used within the project:

- Ruby version : ruby '2.7.4'

- Rails version : rails '5.2.6'

- PostgreSQL version : PostgreSQL 13.3

## Use this app

- git clone https://github.com/AmelieLoulergue/Woovv
- bundle install
- rails db:create db:migrate db:seed
- rails server
  <br><br>
  You need to configure and have config vars in .env to use : mapbox feature, ActionMailer (Sendgrid use in this project), Stripe. 

## Contributors

- [Amélie Loulergue](https://github.com/AmelieLoulergue)
- [Jonathan Justman](https://github.com/justmanovic)
- [David Guetta](https://github.com/davguetta)
- [Marin Chrétien](https://github.com/marinmari)
- [Ambroise Bréant](https://github.com/Ambizance)

### R&D

We decided to do all of our commits in falafel•case, much more vegan, ecological, inclusive and performant for the planet than the kebab-case!
Be good with the Falafel, it will give it back to you &#129313; !
