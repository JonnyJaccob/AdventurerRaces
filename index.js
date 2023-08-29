//adventurer_races
let razasAventureros = [
    "Nuevos Seres Humanos",
    "Gente de los escombros",
    "Barbaro",
    "Nuevos Barbaros",
    "Intelectual"
]
/**
 * Obtiene la raza de un aventurero basada en el índice proporcionado.
 * @param {number} indice - El índice que representa la posición de la raza en el array.
 * @returns {string} La raza de aventurero correspondiente al índice.
 * @throws {Error} Si el índice no es un valor entero.
 */
function GetRazaAventurero(indice) {
    // Asegúrate de que el índice sea un valor entero
    if (Number.isInteger(indice)) {
        return razasAventureros[indice];
    } else {
        throw new Error("El índice debe ser un valor entero.");
    }
}

//console.log(module);

//Es un modulo CommunJs
module.exports.GetRazaAventurero = GetRazaAventurero;