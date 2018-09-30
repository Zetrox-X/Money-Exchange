module.exports = function makeExchange(currency) {

    coins = new Object ();

    if (currency >= 10000) {
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
        return coins;
    }
    if (currency < 0) {
        return coins;
    }

    let H = 0, Q = 0, D = 0, N = 0, P = 0;

    while (currency != 0) {
        while (currency >= 50) {
            currency -= 50;
            H++;
            coins.H = H;
        }
        while (currency >= 25) {
            currency -= 25;
            Q++;
            coins.Q = Q;
        }
        while (currency >= 10) {
            currency -= 10;
            D++;
            coins.D = D;
        }
        while (currency >= 5) {
            currency -= 5;
            N++;
            coins.N = N;
        }
        while (currency >= 1) {
            currency -= 1;
            P++;
            coins.P = P;
        }
    }

    return coins;
}