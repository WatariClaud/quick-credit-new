const userModel = [
    {
        id: 1,
        Name: 'Claud Watari',
        Email: 'claudwatari95@gmail.com',
        Password: '$2b$12$3Kc4bZccBtX0ADAyvg6VFeReLO5E9KlhheIlOVAvOEbdEaNqukAvC',
        Phone: '+254 705 724562',
        Total: 90000,
        Paid: 10000,
        get Balance() {
            return this.Total - this.Paid
        },
        isVerified: true
    },
    {
        id: 2,
        Name: 'Joseph Njuguna',
        Email: 'josealan@gmail.com',
        Password: 'otherpassword',
        Phone: '+254 700 123456',
        Total: 780000,
        Paid: 3000,
        get Balance() {
            return this.Total - this.Paid
        },
        isVerified: true
    },
    {
        id: 3,
        Name: 'Suleiman Yunus',
        Email: 'suleyun@gmail.com',
        Password: 'ispassword',
        Phone: '+254 711 789012',
        Total: 41000,
        Paid: 700,
        get Balance() {
            return this.Total - this.Paid
        },
        isVerified: true
    },
];

module.exports = userModel;