module.exports = class Lista {    
    #mediciones;
    #crypto;

    constructor(crypto) {
        this.#mediciones = [];
        this.#crypto = crypto;
    }    

    find(clave) {
        var index = this.#mediciones.findIndex((o => o.cod_med == clave));        
        if (index < 0) return NaN; 
        return this.#mediciones[index];       
    }   

    add(cm, fecha, cp, valor) {   
        var hash = this.#crypto.createHash('md5').update(cm + fecha.toISOString() + cp + valor).digest("hex");        
        this.#mediciones.push({'cod_med': cm,'fecha': fecha, 'cod_param': cp, 'valor': valor, 'seq': hash });        
        return true;
    }
    
};

