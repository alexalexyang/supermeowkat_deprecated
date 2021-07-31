# Todo

## Milestones

### 1.21

- Profile
  - Get city from browser

### 1.22

- WebRTC for text-messaging between clients
- General clean-up, make sure everything works

### 1.23

- Create page to display costs of running an app
- Set up Patreon/buymeacoffee/other for cash
- Add cookie with ttl of one month to disable likes on client for already liked movies
- Do something with the no button, esp. on item pages

### 1.3:

- Add tracker permissions banner
- Commission assets like logo, FB and Twitter banners
- Commission other designs like buttons, colour scheme, layout, font, etc

### 2.1:

- Settings
- Match people if they like at least 5 of the same movies
  - Match by age and city
- Verify auth CRUD
  - Remember to set up which Auth0 tenant to add user to and delete from.
  - Delete is in [hooks](https://manage.auth0.com/dashboard/eu/alexalexyang/hooks)

### 2.2:

- Allow users to match only after age and city are filled in
- Buy ads on different platforms in a sequential manner to study their effectiveness
- Allow accounts for Sweden and Germany
- Set up other payment systems

## TODO:

- Get random few vignettes to display on top of ordered ones
- Allow saving vignette entry as draft

## Long term TODO:

- Research Calibre for books
- Maybe add academic papers?
- Add food. Take photos, tag them, upload to backblaze. Collaborate with influencers to get photos of diverse cuisine. Or just get recipes from some recipes API and cross-reference by keyword to OSM data on restaurants.

# References

[Next function component type](https://stackoverflow.com/questions/49929268/using-getinitialprops-in-next-js-with-typescript/57441122#57441122)

[node-auth0's other docs](https://auth0.github.io/node-auth0/module-management.ClientGrantsManager.html#create)

Mongoose kept breaking with this [problem](https://github.com/vercel/next.js/discussions/12229) so I went directly with the MongoDB client according to [this](https://vercel.com/guides/deploying-a-mongodb-powered-api-with-node-and-vercel) solution instead.

# Licenses

[Font Awesome Creative Commons Attribution 4.0 International license](https://fontawesome.com/license)
