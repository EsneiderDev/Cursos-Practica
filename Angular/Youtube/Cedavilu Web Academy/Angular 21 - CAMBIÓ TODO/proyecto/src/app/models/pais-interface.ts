export interface Pais {
  names: {
    common: string;
    official: string;
  };
  capitals?: Array<{
    name: string;
  }>;
  population: number;
  flag: {
    url_png: string;
    url_svg: string;
  };
  region: string;
  area: {
    kilometers: number;
  };
}