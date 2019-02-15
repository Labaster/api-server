const router = require('koa-router')();
const {
    indexAction, getCityAction, saveTicketAction,
    saveTicketApiAction, addTicket, getTicket
} = require('../controllers/indexController');

router
    .get('/', indexAction)
    .get('/api/v1/cities/:id?', getCityAction)
    .get('/add/ticket', addTicket)
    .get('/get/ticket/:id?', getTicket)
    .post('/v1/save', saveTicketAction)
    .post('/api/v1/save', saveTicketApiAction)
    .all('**', async (ctx) => {
        ctx.body = 'Sorry can\'t find route';
    })
;

module.exports = router.routes();
