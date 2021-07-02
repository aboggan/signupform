# Sign up form

You can see a working example [here](https://signupform-mu.vercel.app/)

## Instalation

    $ npm install && npm start

Simple page created with create react app.

#### Components used:
- Form and form validation: [react hook form](https://react-hook-form.com/)
- Input texts: Basic html and sass.
- Dropdown: [React Select](https://moderncss.dev/pure-css-custom-checkbox-style/)
- Checkbox: Followed [this guidelines](https://moderncss.dev/pure-css-custom-checkbox-style/)
- For styling, grids, and utils: [React Bootstrap](https://react-bootstrap.github.io/)
- Api mockup: [Miraje Js](https://miragejs.com/)

## Comments, know issues and others
####  As part of wcag validation:
The Select has an error on focus, probably for lacking of contrast.
Checkbox when checked doesn´t have the "square" arround it. This is something I didn't see in the mock. 

#### Error Handling:
I putted an extra checkbox who is triggering an error in the api. I putted two errors msg (bootstrap alert) in the top and bottom.

#### Still room for improvements:
When developing this I came across with many doubts. Regarding wich tools could be the best, technical implementatios, style fine tunning, and  so on. 
I would like to disscuss what others improvements I have in mind. 