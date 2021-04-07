var today = new Date();
const options = {day: 'numeric', month: 'numeric', year: 'numeric' };

console.log(today.toLocaleDateString('fr-FR', options));
