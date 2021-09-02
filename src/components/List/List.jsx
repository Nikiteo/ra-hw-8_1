import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useEffect, useState } from 'react';
import './List.css';

const URL = process.env.REACT_APP_LIST_URL;

export default function List(props) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(URL)
      .then((res) => setList(res.data))
      .then(setLoading(false))
      .catch((error) => setError(error.response.data));
  }, []);

  const getClassName = (id) => id === props.selected ? 'list-item selected' : 'list-item';

  return (
    <div>
      {loading && (
        <Loader
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
        />)}
      {error && (
        <div>{error}</div>
      )}
      {list && (
        <ul className="list-container">
          {list.map((item) => (
            <li
              className={getClassName(item.id)}
              key={item.id}
              onClick={() => props.changeSelected(item.id)}>{item.name}
            </li>)
          )}
        </ul>
      )}
    </div>
  );
}