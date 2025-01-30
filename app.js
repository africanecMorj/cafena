const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require(`body-parser`);
const fs = require(`fs`);
const path = require(`path`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, `public`)))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html').status(200);
});

app.get('/popularProduct', (req, res) => {
    res.sendFile(__dirname + '/public/popularProduct.html');
});

app.get('/book', (req, res) => {
    res.sendFile(__dirname + '/public/book.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/getuserspg', (req, res) => {
  res.sendFile(__dirname + '/public/users.html');
});

app.post('/signup', (req, res) => {
  const login = req.body.userName;
  console.log(req)
  fs.appendFile('./public/users.txt', `${login}\n`, (err) => {
      console.log(`Новий користувач ${login} зареєстрований`);
  });
});


app.get('/getusers', (req, res) => {
  fs.readFile('./public/users.txt', 'utf8', (err, data) => {
      let tempUsers = data.split('\n');
      let users = [];
      for(let el of tempUsers){
          if(el != ``){
              users.push(el);
          }
      }
      let usersArr = [];
      for(let el of users){
          login = el;
          usersArr.push(login);
      }
     res.json(usersArr);
     console.log(usersArr)
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);

});