import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const ListView = ({ openModal }) => {
  const store = useSelector((store) => store);
  console.log(store.flight);

  const [itemOfset, setItemOfset] = useState(0);
  /*
    * pagination sistemi kurmak için gerekli değerler
    * sayfa sayısı
    * bir sayfada gösterilecek eleman sayısı
    * ve o anki sayfada gösterilecek itemler / elemanlar
  
  */

  // sayfa başına gösterilecek eleman sayısı
  const itemsPerPage = 10;

  // sonuncu elemanın değeri
  const endOfset = itemOfset + itemsPerPage;
  // sayfa başına o anda gösterilecek eleman dizisi
  const currentItems = store.flight.slice(itemOfset, endOfset);

  const pageCount = Math.ceil(store.flight.length / itemsPerPage);

  const handlePageClick = (e) => {
    console.log(e);
    const newOffset = (e.selected * itemsPerPage) % store.flight.length;
    setItemOfset(newOffset);
  };

  return (
    <div className="list-page">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th>Detay Bilgisi</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.code}</td>
              <td>{item.lat}</td>
              <td>{item.lng}</td>
              <td>
                <button onClick={() => openModal(item.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination"
        pageCount={pageCount}
        nextLabel="ileri >"
        previousLabel="< geri"
        activeClassName="active"
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default ListView;
