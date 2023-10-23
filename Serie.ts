export class Serie {
  indice: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  enlace: string;
  imagen: string;

  constructor(
    indice: number,
    name: string,
    channel: string,
    seasons: number,
    description: string,
    enlace: string,
    imagen: string
  ) {
    this.indice = indice;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.enlace = enlace;
    this.imagen = imagen;
  }
}