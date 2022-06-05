const Express = require('Express');
const app = Express();

app.listen(3000, ()=>{
  console.log('server is started');
});

const user = [
  [0, "Leila", 35],
  [1, "Aysu", 12],
  [2, "Ferid", 45],
  [3, "Huseynov", 55]
];

app.get('/', (req, res) => {
  res.json(user);
});
