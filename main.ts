import { Serie } from "./Serie.js";

import { dataSeries } from "./data.js";

let seriesTbody: HTMLElement = document.getElementById("series")!;
const averageSeasonsElm: HTMLElement =
  document.getElementById("average-seasons")!;

renderSeriesInTable(dataSeries);

averageSeasonsElm.innerHTML = `${getAverageSeasons(dataSeries)}`;

function renderSeriesInTable(series: Serie[]): void {
  console.log("Desplegando series");
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.indice}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  let totalSeries: number = 0;
  series.forEach((serie) => {
    totalSeasons += serie.seasons;
    totalSeries += 1;
  });
  return totalSeasons / totalSeries;
}