export default class Pokemon {
    /* privát adattagok */
    #nev=""
    #kep=""
    #mondat=""

    constructor(nev, kep, mondat, szuloElem) {
        /* Ez hívódik meg a példányosításkor */
        /* beállítja az adattagokat */
        /* this mindig az aktuális objektumra fog mutatni */
        this.#nev=nev;
        this.#kep=kep;
        this.#mondat=mondat; /* privát */
        this.szuloElem=szuloElem /* publikus */
        this.#megjelenit()
    }

    get nev() {
        return this.#nev
    }

    set mondat(szoveg) {
        this.#mondat=szoveg
    }

    beszel() {
        console.log(this.#mondat)
    }

    #htmlOsszeallit() {
        let txt=`
            <div class="poki">
                <h3>${this.#nev}</h3>
                <img src="${this.#kep}" alt="${this.#nev}">
            </div>`

        return txt
    }
    #megjelenit() {
        this.szuloElem.append(this.#htmlOsszeallit())
    }

}