const apiManager = require('../managers/apiManager');

async function indexAction(ctx) {
    const viewVariables = {
        title: 'Congrats on our server!'
    };
    await ctx.render('main', viewVariables);
}

async function getCityAction(ctx) {
    const { id } = ctx.params;
    ctx.body = JSON.stringify(await apiManager.getCityById(id));
}

async function saveTicketAction(ctx) {
    const { departure, destination } = await ctx.request.body;
    apiManager.saveTicket({ departure, destination });
    ctx.redirect('/add/ticket');
}

async function saveTicketApiAction(ctx) {
    const newTicket = await ctx.query;
    apiManager.saveTicket(newTicket);
    ctx.body = "Data saved!";
}

async function addTicket(ctx) {
    await ctx.render('addTicket');
}

async function getTicket(ctx) {
    const { id } = ctx.params;
    ctx.body = JSON.stringify(await apiManager.getPurchasedTickets(id));
}

module.exports = {
    indexAction,
    getCityAction,
    saveTicketAction,
    addTicket,
    getTicket,
    saveTicketApiAction
};
