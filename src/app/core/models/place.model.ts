export class Place {
  constructor(
    public name: string,
    public stars: string[],
    public rating: number,
    public yelpUrl: string,
    public phone: string,
    public snippet: string,
    public image: string,
    public address: string[],
    public people: number,
    public going: boolean
  ) { }
}
