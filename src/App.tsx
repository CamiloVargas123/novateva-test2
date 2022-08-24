import { useEffect, useState } from 'react'
import './App.css'
import DataTable, { TableColumn } from 'react-data-table-component';
import { ApiReponse, getPeopleApi } from './api/getPeople';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, selectUser } from './redux/slices/users';
import Seach from './components/Seach';
import { selectSearch } from './redux/slices/search';
import ShowFilm from './components/ShowFilm';
import { addFilms } from './redux/slices/films';

interface DataRow {
  name: string;
  height: number;
  mass: number
  hair_color: string
  skin_color: string
  films: string[]
}

const columns: TableColumn<DataRow>[] = [
  {
    name: 'Title',
    selector: row => row.name,
  },
  {
    name: 'Height',
    selector: row => row.height,
  },
  {
    name: 'Mass',
    selector: row => row.mass,
  },
  {
    name: 'Hair color',
    selector: row => row.hair_color,
  },
  {
    name: 'Skin color',
    selector: row => row.skin_color,
  },
];

function App() {
  const [data, setData] = useState<DataRow[]>()
  const [openFilms, setopenFilms] = useState(false)
  const dispatch = useDispatch()
  const onSearch = useSelector(selectSearch)
  const users = useSelector(selectUser)

  const getPeople = async () => {
    const result = await getPeopleApi()
    setData(result.results ?? [])
    dispatch(createUser(result))
  };

  useEffect(() => {
    getPeople()
  }, [])

  useEffect(() => {
    if (onSearch.value) {
      setData(users.results?.filter(value => {
        if (value.name.toLocaleLowerCase().includes(onSearch.value?.toLocaleLowerCase() ?? '')) return value
      }))
    }
    if (!onSearch.value && users.results) setData(users.results)
  }, [onSearch.value])

  return (
    <div className="App">
      <Seach />
      {
        data ?
          <DataTable
            data={data}
            columns={columns}
            onRowClicked={e => dispatch(addFilms(e.films))}
          />
          : <p>no data</p>
      }
      {
        openFilms && <ShowFilm />
      }
    </div>
  )
}

export default App
