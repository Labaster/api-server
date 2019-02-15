const cities = {
    "1": "Vinnytsia",
    "2": "Kiev",
    "3": "Zhmerynka",
};

const tickets = [];

function getCityById(id) {

    if(!id) {
        return cities;
    }
    if(cities.hasOwnProperty(id)) {
        return(cities[id]);
    }
    return ("Wrong id!");
}

function saveTicket({ departure, destination }, newTicket = {}) {

    const ticket = {};

    if(departure && destination) {
        ticket.id = tickets.length;
        ticket.departure = departure;
        ticket.destination = destination;
        ticket.timeCreation = new Date();
        tickets.push(ticket);
    } else {
        ticket = {...newTicket};
        ticket.id = tickets.length;
        tickets.push(ticket);
    }
}

function getPurchasedTickets(id) {

    if(tickets.length === 0) {
        return ("Data base is empty");
    }

    if(!id) {
        return tickets;
    }

    const ticketsObj = {...tickets};
    if(ticketsObj.hasOwnProperty(id)) {
        return(ticketsObj[id]);
    } else {
        return ("Wrong id!");
    }

}

module.exports = {
    getCityById,
    saveTicket,
    getPurchasedTickets
};
