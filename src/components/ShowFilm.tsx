import { useSelector } from 'react-redux'
import { ApiPeople } from '../api/getPeople'
import { selectFilms } from '../redux/slices/films'

export default function ShowFilm() {
  const films = useSelector(selectFilms)
  return (
    <div>
      {JSON.stringify(films)}
    </div>
  )
}
