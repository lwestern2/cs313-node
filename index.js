const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get("/getRate", calculateRate )

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  function calculateRate(request, response) {
    var weight = Number(request.query.weight);
    var mail = request.query.mail;
    var pieces = Number(request.query.quantity);
    console.log("weight" + weight + "mail" + mail + "quantity" + pieces);
    var price;
    var cost = 0;
    switch (mail) {
      case "lettersStamp":
        if (weight == 1) {
          cost = .5;
        } else if (weight == 2) {
          cost = .71;
        } else if (weight == 3) {
          cost = .92;
        } else if (weight > 3.5) {
          cost = 1.13;
        }        
        console.log("cost = " + cost + " weight  = " + weight);
        price = pieces * cost;
        break;
      case "lettersMetered":
        if (weight == 1) {
          cost = .47;
        } else if (weight == 2) {
          cost = .68;
        } else if (weight == 3) {
          cost = .89;
        } else if (weight > 3.5) {
          cost = 1.10;
        }
        console.log("cost  = " + cost + " weight  = " + weight);
         price = pieces * cost;
        console.log("price = " + price);
        break;
      case "largeEnvelopsFlats":
        switch (weight) {
          case 1:
            cost = 1;
            console.log("cost  = " + cost + " weight  = " + weight);
            price = pieces * cost;
            console.log("price = " + price);
            break;
           
          case 2:
            cost = 1.21;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 3:
            cost = 1.42
            console.log("cost  = " + cost + " weight  = " + weight);
            price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 4:
            cost = 1.63;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 5:
            cost = 1.84;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 6:
            cost = 2.05;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 7:
            cost = 2.26;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 8:
            cost = 2.47;
            console.log("cost  = " + cost + " weight  = " + weight);
           price = pieces * cost;
            console.log("price = " + price);
            break;
           
          case 9:
            cost = 2.68;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 10:
            cost = 2.89;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 11:
            cost = 3.10;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 12:
            cost = 3.31;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          default:
            cost = 3.52;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;            
        }

      case "firstClassPackageService":
        switch (weight) {
          case 1:
            cost = 3.5;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 2:
            cost = 3.50;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
          
          case 3:
            cost = 3.5;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 4:
            cost = 3.5;
            console.log("cost  = " + cost + " weight  = " + weight);
           price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 5:
            cost = 3.75;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 6:
            cost = 3.75;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 7:
            cost = 3.75;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 8:
            cost = 3.75;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          case 9:
            cost = 4.10;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
          
          case 10:
            cost = 4.45;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;   

          case 11:
            cost = 4.80;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
           
          case 12:
            cost = 5.15;
            console.log("cost  = " + cost + " weight  = " + weight);
             price = pieces * cost;
            console.log("price = " + price);
            break;
            
          default:
            cost = 5.50;
            console.log("cost  = " + cost + " weight  = " + weight);
            price = pieces * cost;
            console.log("price = " + price);
            break;            
        }
    }

    console.log(price);
    var params = {
        weight: weight,
        mail: mail,
        price: price,
        quantity: pieces
    };
    response.render("result", params);
        
  };
