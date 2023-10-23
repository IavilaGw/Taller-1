import { dataSeries } from "./data.js";
var seriesTbody = document.getElementById("series");
var averageSeasonsElm = document.getElementById("average-seasons");
var cardImagen = document.getElementById("imagen_serie");
var cardTitulo = document.getElementById("titulo_serie");
var cardDescripcion = document.getElementById("descripcion_serie");
var cardEnlace = document.getElementById("enlace_serie");
renderSeriesInTable(dataSeries);
averageSeasonsElm.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.className = "serie_tabulada";
        trElement.innerHTML = "<td>".concat(serie.indice, "</td>\n    <td>").concat(serie.name, "</td>\n    <td>").concat(serie.channel, "</td>\n    <td>").concat(serie.seasons, "</td>");
        var createClickHandler = function (row) {
            return function () {
                cardImagen.src = "".concat(serie.imagen);
                cardTitulo.innerHTML = "".concat(serie.name);
                cardDescripcion.innerHTML = "".concat(serie.description);
                cardEnlace.href = "".concat(serie.enlace);
                cardEnlace.innerHTML = "".concat(serie.enlace);
            };
        };
        trElement.onclick = createClickHandler(trElement);
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
