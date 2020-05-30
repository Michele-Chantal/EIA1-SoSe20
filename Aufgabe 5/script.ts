// tslint:disable-next-line: variable-name
var Europa: number = 4965.7 + 4616.4 + 4705.8 + 4615.2 + 4541.5 + 4436.9 + 4202 + 4191.6 + 4247.3 + 4278.7 + 4209.3;
var EU: number = 4209.3 - 4965.7;
var EUP: number = (EU / Europa) * 100;

// tslint:disable-next-line: variable-name
var Asien: number = 12954.7 + 13246.6 + 13986.8 + 14860.1 + 15308.8 + 15660.2 + 15787.7 + 15877 + 15984 + 16274.3 + 16274.1;
var AU: number = 16274.1 - 12954.7;
var AUP: number = (AU / Asien) * 100;

// tslint:disable-next-line: variable-name
var Afrika: number = 1028 + 1041.9 + 1072.1 + 1073.7 + 1107.1 + 1134.4 + 1167.1 + 1174.5 + 1192.1 + 1207 + 1235.5;
var AAU: number = 1235.5 - 1028;
var AAUP: number = (AAU / Afrika) * 100;

// tslint:disable-next-line: variable-name
var SüdA: number = 1132.6 + 1093.1 + 1164.2 + 1215.5 + 1262 + 1308.9 + 1331.3 + 1321.7 + 1294.7 + 1279.2 + 1261.5;
var SAU: number = 1261.5 - 1132.6;
var SAUP: number = (SAU / SüdA) * 100;

// tslint:disable-next-line: variable-name
var NordA: number = 6600.4 + 6139.9 + 6375.8 + 6262.8 + 5998.9 + 6167 + 6268.9 + 6048.7 + 5938.3 + 5920.5 + 6035.6;
var NAU: number = 6035.6 - 6600.4;
var NAUP: number = (NAU / NordA) * 100;

// tslint:disable-next-line: variable-name
var Australien: number = 1993 + 1875.7 + 1939.1 + 2035.2 + 2063.2 + 2014.7 + 2027.6 + 1986.8 + 1997.4 + 2001.3 + 2100.5;
var AUSU: number = 2100.5 - 1993;
var AUSUP: number = (AUSU / Australien) * 100;


// tslint:disable-next-line: variable-name
var Welt: number = Europa + Asien + Afrika + SüdA + NordA + Australien;
var EPW: number = (Europa / Welt) * 100;
var APW: number = (Asien / Welt) * 100;
var AAPW: number = (Afrika / Welt) * 100;
var SAPW: number = (SüdA / Welt) * 100;
var NAPW: number = (NordA / Welt) * 100;
var AUSPW: number = (Australien / Welt) * 100;


console.log(`Die Emission von Europa ist: ${Europa} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Europa damit ${EPW}%`);
console.log(`Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ${EUP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${EU} kg CO2`);

console.log(`Die Emission von Asien ist: ${Asien} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Asien damit ${APW}%`);
console.log(`Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ${AUP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${AU} kg CO2`);

console.log(`Die Emission von Afrika ist: ${Afrika} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Afrika damit ${AAPW}%`);
console.log(`Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ${AAUP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${AAU} kg CO2`);

console.log(`Die Emission von Südamerika ist: ${SüdA} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Südamerika damit ${SAPW}%`);
console.log(`Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ${SAUP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${SAU} kg CO2`);

console.log(`Die Emission von Nordamerika ist: ${NordA} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ${NAPW}%`);
console.log(`Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ${NAUP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${NAU} kg CO2`);

console.log(`Die Emission von Australien ist: ${Australien} kg CO2.`);
console.log(`Relativ zur Gesamtemission der Welt verursacht Australien damit ${AUSPW}%`);
console.log(`Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ${AUSUP}% verändert`);
console.log(`2018 im Vergleich zu 2008 sind das ${AUSU} kg CO2`);