/*Versão do StyleBoots 1.1.3*/

/*Tabela tabls001 */
var tabls001Cor = document.getElementById("minha-tabls001");
var linhaTabls001 = tabls001Cor.getElementsByTagName("td");

for (var i = 0; i < linhaTabls001.length; i++) {
    if(i % 2 === 1) {
        linhaTabls001[i].classList.add('tabls-cor');
    }
};

/*Fim Tabela tabls001 */

/*######################################## */

