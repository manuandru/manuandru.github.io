const fees = [{
    name: 'Mala',
    lastPayment: '2021-05-24',
    reminder: -2
}, {
    name: 'Galva',
    lastPayment: '2020-09-24',
    reminder: -20
}, {
    name: 'Cecca',
    lastPayment: '2020-09-24',
    reminder: -5
}];

const netflixPrice = 4.5;

Date.prototype.getMonthName = function() {
    const Months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

    return Months[this.getMonth()];
}


class User {
    constructor(name, lastDataPayment, reminder) {
        this.name = name;
        this.lastDataPayment = new Date(lastDataPayment);
        this.reminder = reminder;
    }

    oneMonth() {
        return 1000 * 3600 * 24 * 30;
    }
    
    /* Amount of money user have to pay */
    amount() {
        console.log(this.getNumberOfMissingMonth());
        return this.getNumberOfMissingMonth() * netflixPrice + this.reminder;
    }

    /* Number of  */
    getNumberOfMissingMonth() {
        const today = new Date();
        const lastPayment = new Date(this.lastDataPayment);
        const diff = today.getTime() - lastPayment.getTime();
        const monthDiff = Math.ceil(diff / this.oneMonth());
        return monthDiff;
    }

    getMissingMonths() {
        const missingMonth = [];
        let today = new Date();
        for (let index = 0; index < this.getNumberOfMissingMonth(); index++) {
            missingMonth.push(today);
            today = new Date(today.getTime() - this.oneMonth());
        }
        return missingMonth;
    }

    getMissingMonthsString() {
        return this.getMissingMonths().map(month => `<li>
        ${month.getMonthName()} ${month.getFullYear()}
        </li>`
        ).join(' ');
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
        <p>Ultimo pagamento: <span>${user.lastDataPayment.toLocaleDateString()}</span></p>
        <section>
            <p>Da Pagare: <span>${user.amount()} €</span></p>
            <p>Mesi mancati(${user.getMissingMonths().length}):</p>
            <ul>
            ${user.getMissingMonthsString()}
            </ul>
        </section>
    </section>`;
}

document.querySelector("h1").innerHTML += ` (${totalAmount} €)`;

