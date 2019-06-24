const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get("/getRate", calculateRate)

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function calculateRate(request, response) {
  var weight = Number(request.query.weight);
  var mail = request.query.mail;
  var pieces = Number(request.query.quantity);
  var price;
  var cost = 0;
  switch (mail) {
    case "Letters Stamped":
      if (weight == 1) {
        cost = .55;
      } else if (weight == 2) {
        cost = .70;
      } else if (weight == 3) {
        cost = .85;
      } else if (weight > 3.5) {
        cost = 1.00;
      }
      price = pieces * cost;
      break;
    case "Letters Metered":
      if (weight == 1) {
        cost = .50;
      } else if (weight == 2) {
        cost = .65;
      } else if (weight == 3) {
        cost = .80;
      } else if (weight > 3.5) {
        cost = .95;
      }
      price = pieces * cost;
      break;
    case "Large Envelopes Flats":
      switch (weight) {
        case 1:
          cost = 1;
          price = pieces * cost;
          break;

        case 2:
          cost = 1.15;
          price = pieces * cost;
          break;

        case 3:
          cost = 1.30;
          price = pieces * cost;
          break;

        case 4:
          cost = 1.45;
          price = pieces * cost;
          break;

        case 5:
          cost = 1.60;
          price = pieces * cost;
          break;

        case 6:
          cost = 1.75;
          price = pieces * cost;
          break;

        case 7:
          cost = 1.90;
          price = pieces * cost;
          break;

        case 8:
          cost = 2.05;
          price = pieces * cost;
          break;

        case 9:
          cost = 2.20;
          price = pieces * cost;
          break;

        case 10:
          cost = 2.35;
          price = pieces * cost;
          break;

        case 11:
          cost = 2.50;
          price = pieces * cost;
          break;

        case 12:
          cost = 2.65;
          price = pieces * cost;
          break;

        default:
          cost = 2.80;
          price = pieces * cost;
          break;
      }
      break;

    case "First Class Package Service":
      switch (weight) {
        case 1:
          cost = 3.66;
          price = pieces * cost;
          break;

        case 2:
          cost = 3.66;
          price = pieces * cost;
          break;

        case 3:
          cost = 3.66;
          price = pieces * cost;
          break;

        case 4:
          cost = 3.66;
          price = pieces * cost;
          break;

        case 5:
          cost = 4.39;
          price = pieces * cost;
          break;

        case 6:
          cost = 4.39;
          price = pieces * cost;
          break;

        case 7:
          cost = 4.39;
          price = pieces * cost;
          break;

        case 8:
          cost = 4.39;
          price = pieces * cost;
          break;

        case 9:
          cost = 5.19;
          price = pieces * cost;
          break;

        case 10:
          cost = 5.19;
          price = pieces * cost;
          break;

        case 11:
          cost = 5.19;
          price = pieces * cost;
          break;

        case 12:
          cost = 5.19;
          price = pieces * cost;
          break;

        default:
          cost = 5.71;
          price = pieces * cost;
          break;
      }
      break;
  }

  console.log(price);
  var params = {
    weight: weight,
    mail: mail,
    price: price,
    quantity: pieces
  };
  response.render("pages/result", params);

};