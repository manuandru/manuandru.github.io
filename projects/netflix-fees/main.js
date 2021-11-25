const fees = [{
    name: 'Mala',
    lastPayment: '2021-05-24',
    reminder: -2
}, {
    name: 'Galva',
    lastPayment: '2020-09-24',
    reminder: -25
}, {
    name: 'Cecca',
    lastPayment: '2021-11-24',
    reminder: 0
}];

const netflixPrice = 4.5;

Date.prototype.getMonthName = function() {
    const Months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

    return Months[this.getMonth()];
}


class User {
    constructor(name, lastPaymentDate, reminder) {
        this.name = name;
        this.lastPaymentDate = new Date(lastPaymentDate);
        this.reminder = reminder;
    }

    oneMonth() {
        return 1000 * 3600 * 24 * 30;
    }
    
    /* return amount of money user have to pay */
    amount() {
        return this.getNumberOfMissingMonth() * netflixPrice + this.reminder;
    }

    /* return number of missing Month */
    getNumberOfMissingMonth() {
        const today = new Date();
        const lastPayment = new Date(this.lastPaymentDate);
        const diff = today.getTime() - lastPayment.getTime();
        const monthDiff =
            new Date().getDate() >= this.lastPaymentDate.getDate()
            ? Math.ceil(diff / this.oneMonth())
            : Math.floor(diff / this.oneMonth());
        return monthDiff;
    }

    /* return an Array of missing Month */
    getMissingMonths() {
        const missingMonth = [];
        /* the month decrement could be better cause
        it's made by a statistic of month in 30 days
        there's a bug if month >~ 30 */
        let today = new Date(
            new Date().getFullYear(),
            new Date().getDate() > this.lastPaymentDate.getDate() ? new Date().getMonth()+1 : new Date().getMonth(),
            1);
        for (let index = 0; index < this.getNumberOfMissingMonth(); index++) {
            missingMonth.push(today);
            today = new Date(today.getTime() - this.oneMonth());
        }
        return missingMonth;
    }

}

let totalAmount = 0;
const main = document.querySelector("main");
for (const key in fees) {
    const user = new User(fees[key].name, fees[key].lastPayment, fees[key].reminder);
    totalAmount += user.amount();
    main.innerHTML += 
    `<section>
        <h2>${user.name}</h2>
        <p>Payed up: <span>${user.lastPaymentDate.toLocaleDateString()}</span></p>
        <section>
            <p>Da Pagare: <span>${user.amount()} €</span></p>
            <p>Mesi mancati(${user.getMissingMonths().length}):</p>
            <ul>
            ${user.getMissingMonths().map(month => `<li>${month.getMonthName()} ${month.getFullYear()}</li>`).join(' ')}
            </ul>
        </section>
    </section>`;
}

document.querySelector("h1").innerHTML += ` (${totalAmount} €)`;

