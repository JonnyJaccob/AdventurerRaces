let razasAventureros = [
    "Nuevos Seres Humanos",
    "Gente de los escombros",
    "Barbaro",
    "Nuevos Barbaros",
    "Intelectual"
]

function GetRazaAventurero(indice) {
    return razasAventureros(indice);
}

//console.log(module);

//Es un modulo CommunJs
module.exports.GetRazaAventurero = GetRazaAventurero;