import axios from "axios";

export interface ApiPeople {
  name: string;
  height: number;
  mass: number
  hair_color: string
  skin_color: string
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string
  films: string[]
  species: [],
  vehicles: string[]
  starships: string[]
  created: string
  edited: string[]
  url: string[]
}
export interface ApiReponse {
  count: number,
  next: string | null,
  previous: null | string,
  results: ApiPeople[] | null
}
export async function getPeopleApi(): Promise<ApiReponse> {
  return (await axios.get('/people')).data
}