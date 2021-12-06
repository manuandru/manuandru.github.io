'use strict';
const netflixPrice = 4.5;
const billingDay = 24;

const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let fees = JSON.parse(this.responseText);
        main(fees);
    }
};
xhttp.open("GET", "fees.json", true);
xhttp.send();

Date.prototype.getMonthName = function() {
    const Months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

    return Months[(this.getDate() >= billingDay ? this.getMonth() + 1 : this.getMonth()) % 12];
}

class User {
    constructor(name, payedUp, reminder) {
        this.name = name;
        this.payedUp = new Date(payedUp);
        this.reminder = reminder;
    }
    
    /* return amount of money user have to pay */
    amount() {
        return this.getNumberOfMissingMonth() * netflixPrice + this.reminder;
    }

    /* return number of missing Month */
    getNumberOfMissingMonth() {
        return this.getMissingMonths().length;
    }

    /* return an Array of missing Month */
    getMissingMonths() {
        const missingMonth = [];
        let today = new Date();
        while (today > this.payedUp) {
            missingMonth.push(today);
            today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        }

        return missingMonth;
    }

}

function main(fees) {
    let totalAmount = 0;
    const main = document.querySelector("main");
    for (const key in fees) {
        const user = new User(fees[key].name, fees[key].payedUp, fees[key].reminder);
        totalAmount += user.amount();
        main.innerHTML +=
        `<section>
            <h2>${user.name}</h2>
            <p>Payed up: <span>${user.payedUp.toLocaleDateString()}</span></p>
            <section>
                <p>Da Pagare: <span>${user.amount()} €</span></p>
                <p>Mesi mancati(${user.getMissingMonths().length}):</p>
                <ul>
                ${user.getMissingMonths().map(month =>
                    `<li>${month.getMonthName()}</li>`).join(' ')}
                </ul>
            </section>
        </section>`;
    }

    document.querySelector("h1").innerHTML += ` (${totalAmount} €)`;
}