import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import Form from './components/Form';

let itemsPerPage = 10;

function App() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [formClicked, setFormClicked] = useState(false);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => {
        setData(res.data)
        setRecords(res.data)
      })
      .catch(err => console.log(err));
  }, [])

  const Filter = (event) => {
    const searchValue = event.target.value.trim();
    if (searchValue === "") {
      setRecords(data);
    } else {
      const searchId = parseInt(searchValue);
      setRecords(data.filter(f => f.userId === searchId));
    }
  }
  // Handle Form
  const handleForm = () => {
    setFormClicked(!formClicked);
  }
  // Pagination
  const [itemOffset, setOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = records.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(records.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageCount) % records.length;
    setOffset(newOffset);
  }
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((user, index) => {
            return <tr key={index}>
              <td className="m-3 p-3 text-center bg-white border border-slate-300">{user.userId}</td>
              <td className="m-3 p-3 text-center bg-white border border-slate-300">{user.id} </td>
              <td className="m-3 p-3 text-center bg-white border border-slate-300">{user.title} </td>
            </tr>
          })
        }
      </>
    );
  }
  return (
    <>
      <div className="container w-full p-5 bg-black flex flex-row justify-center">
        <div className="mt-3 rounded-2xl bg-white shadow border justify-center">

          <h1 className="text-center m-4 font-serif font-extrabold">LynkInfinite Investment Mock</h1>

          <input type="text" className='form-control m-2 outline-none w-3/4 font-semibold font-serif justify-center p-3' onChange={Filter} placeholder='Search...' />
          <button className="bg-stone-500 text-yellow-50 p-2 font-semibold font-serif rounded-lg" onClick={handleForm}>Add Details</button>

          <div>
            <table className="m-2 p-3 rounded-xl font-serif table-auto bg-slate-500 border-separate border-spacing-2 border border-slate-400">
              <thead>
                <tr>
                  <th className="m-3 p-3 justify-center bg-black text-white border border-slate-300">UserId</th>
                  <th className="m-3 p-3 justify-center bg-black text-white border border-slate-300">ID</th>
                  <th className="m-3 p-3 justify-center bg-black text-white border border-slate-300">Title</th>
                </tr>
              </thead>
              <tbody>
                <Items currentItems={currentItems} />
              </tbody>
            </table>
            <div><ReactPaginate
              breakLabel="..."
              nextLabel=">>"
              onPageChange={handlePageClick}
              pageCount={pageCount}
              previousLabel="<<"
              renderOnZeroPageCount={null}
            /></div>
          </div>
        </div>
        {(formClicked) ? <div><Form /></div> : ""}
      </div>
    </>
  )
}

export default App
