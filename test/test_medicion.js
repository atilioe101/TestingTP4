const chai = require("chai");
const crypto = require("crypto");
chai.use(require("chai-sorted"));
const assert = chai.assert;
expect = chai.expect; 
const Medicion = require("../src/medicion.js");

describe("cuando se agrega una medición" , function() {
    var mediciones = new Medicion(crypto);
    mediciones.add("M1", new Date(), 1, 25);   

    it("se guarda con su valor hash", function() {
        expect(mediciones.find("M1").seq).not.to.be.NaN;
    })
})

describe("cuando se recupera una medición" , function() {
    var mediciones = new Medicion(crypto);
    mediciones.add("M1", new Date(), 1, 25);      
    
    it("Debe ser válida", function() { 
        var md = mediciones.find("M1");
        var id = md.cod_med + md.fecha.toISOString() + md.cod_param + md.valor;
        var hash = crypto.createHash('md5').update(id).digest("hex");
        assert.equal(md.seq, hash);       
    })    

})





