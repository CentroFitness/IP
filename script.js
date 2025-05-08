
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const altezza = parseFloat(document.getElementById("altezza").value);
    const obiettivo = document.getElementById("obiettivo").value;

    const risultato = document.getElementById("risultato");
    let output = `<h2>Risultato per Obiettivo: ${obiettivo.charAt(0).toUpperCase() + obiettivo.slice(1)}</h2>`;

    const integratori = {
        massa: [
            ["Whey Protein", `${(2 * peso).toFixed(1)} g/giorno`, "Post workout e colazione"],
            ["Creatina Monoidrato", "5 g/giorno", "Pre/Post workout"],
            ["BCAA", `${(peso * 0.1).toFixed(1)} g/intra workout`, "Durante allenamento"],
            ["Vitamina D3", "2000–4000 UI", "Colazione"],
            ["ZMA", "1 dose", "30 min prima di dormire"]
        ],
        dimagrimento: [
            ["Proteine Isolate", `${(2 * peso).toFixed(1)} g/giorno`, "Colazione e post workout"],
            ["L-Carnitina", "2–3 g", "Pre-cardio"],
            ["Omega 3", "2–3 g", "Pasti principali"],
            ["Tè Verde Estratto", "400–600 mg", "Metà mattina"],
            ["CLA", "3–4 g", "Durante i pasti"]
        ],
        forza: [
            ["Creatina Monoidrato", "5 g", "Post workout"],
            ["Beta-Alanina", "3–4 g", "Pre workout"],
            ["Caffeina", `${(peso * 3).toFixed(0)}–${(peso * 6).toFixed(0)} mg`, "Pre workout"],
            ["Ashwagandha", "600 mg", "Mattina e sera"],
            ["Magnesio", "350–450 mg", "Sera"]
        ],
        definizione: [
            ["CLA", "3 g", "Pasti principali"],
            ["BCAA", `${(peso * 0.1).toFixed(1)} g`, "Pre + intra workout"],
            ["Omega 3", "2 g", "Cena"],
            ["Tè Verde", "400 mg", "Mattina"],
            ["Drenanti Naturali", "2 infusi", "Mattina e pomeriggio"]
        ],
        resistenza: [
            ["Beta-Alanina", "3–4 g", "Divisa in 2 dosi"],
            ["Elettroliti", "1 dose", "Durante workout"],
            ["Vitamina C", "1000 mg", "Post workout"],
            ["Maltodestrine", "20–40 g", "Durante sforzo prolungato"]
        ],
        benessere: [
            ["Multivitaminico", "1 dose", "Colazione"],
            ["Omega 3", "2 g", "Pasti principali"],
            ["Vitamina D3", "2000–4000 UI", "Con pasti grassi"],
            ["Magnesio", "300–400 mg", "Sera"],
            ["Probiotici + Zinco", "1 dose", "Mattina"]
        ]
    };

    output += "<ul>";
    integratori[obiettivo].forEach(([nome, dose, timing]) => {
        output += `<li><strong>${nome}</strong>: ${dose} — <em>${timing}</em></li>`;
    });
    output += "</ul>";

    risultato.innerHTML = output;
});
