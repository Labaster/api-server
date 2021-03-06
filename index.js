const Koa = require('koa');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const routes = require('./routs/routes');
const path = require('path');

const app = new Koa();
app.use(bodyParser());
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'ejs',
});

app.use(routes);

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
