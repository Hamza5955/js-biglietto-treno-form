var nome;
var km;
var count = 0;

document.getElementById("genera").addEventListener("click", function () {
  if (count == 0) {
    nome = document.getElementById("nome").value;
    km = parseInt(document.getElementById("km").value);

    if (isNaN(km)) {
      count = 0;

      if (isNaN(km)) {
        alert("Insarire input distanza valido");
        document.getElementById("km").value = "";
      }
    } else {
      document.getElementById("biglietto").classList.remove("_hidden");
      var sconto = 0;
      var prezzo = 0;
      // stampa nome
      document.getElementById("nomeOut").innerHTML = nome;
      prezzo = 0.21 * km;
      sconto = 0;
      var eta = document.getElementById("fascia-eta").value;
      // tipo offerta
      if (eta == "min") {
        prezzo = prezzo * 0.8;
        sconto = 1;
        document.getElementById("offerta").innerHTML = "Offerta minorenni";
      } else if (eta == "over") {
        prezzo = prezzo * 0.6;
        sconto = 2;
        document.getElementById("offerta").innerHTML = "Offerta over 65";
      } else {
        document.getElementById("offerta").innerHTML = "Nessuna offerta attiva";
      }

      var carrozza = Math.floor(Math.random() * 9) + 1;
      document.getElementById("carrozza").innerHTML = carrozza;

      var codiceT = Math.floor(Math.random() * 10000) + 90000;
      document.getElementById("cpc").innerHTML = codiceT;

      prezzo = Math.round(prezzo * 100) / 100;
      document.getElementById("totale").innerHTML = prezzo + "€";

      document.getElementById("nomeOut").innerHTML = nome;
      count = 1;
    }
  }
});

document.getElementById("annulla").addEventListener("click", function () {
  document.getElementById("nome").value = "";
  document.getElementById("km").value = "";
  document.getElementById("fascia-eta").value = "over";
  count = 0;
  document.getElementById("biglietto").classList.add("_hidden");
});
