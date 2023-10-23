import { dataSeries } from "./data.js";
var seriesTbody = document.getElementById("series");
var averageSeasonsElm = document.getElementById("average-seasons");
renderSeriesInTable(dataSeries);
averageSeasonsElm.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.indice, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (serie) {
        totalSeasons += serie.seasons;
        totalSeries += 1;
    });
    return totalSeasons / totalSeries;
}
