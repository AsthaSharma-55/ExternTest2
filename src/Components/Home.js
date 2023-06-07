import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const navigate=useNavigate()
  const FilterOption = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  const [currentPage, setCurrentpage] = useState(1);
  const [search, setSearch] = useState("");
  const [filterdata, setfilterdata] = useState("");

  const recordsperpage = 10;
  const lastIndex = currentPage * recordsperpage;
  const firstIndex = lastIndex - recordsperpage;
  const filteredData = search
    ? data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    : data;
  const records = filteredData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredData.length / recordsperpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const getData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setData(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const handleProductDetails = (index) => {
    const isLoggedIn = false; // Replace with your logic to check if the user is logged in

    if (isLoggedIn) {
        navigate(`/description/${index}`);
    } else {
      // Redirect the user to the login page
      navigate('/login');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filterdata === "smartphones") {
      const filteredData = data.filter((item) => item.category === "smartphones");
      setData(filteredData);
    } else if (filterdata === "laptops") {
      const filteredData = data.filter((item) => item.category === "laptops");
      setData(filteredData);
    } else {
      getData();
    }
  }, [filterdata]);

  const handleSort = (event) => {
    const selectedFilter = event.target.value;
    setfilterdata(selectedFilter);
    setSearch("");
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentpage(1);
  };

  const perPage = () => {
    if (currentPage !== 1) {
      setCurrentpage(currentPage - 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentpage(id);
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentpage(currentPage + 1);
    }
  };

  return (
    <>
      <select onChange={handleSort} value={filterdata}>
        <option>Filter</option>
        {FilterOption.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>

      <input type="text" placeholder="Search by title" value={search} onChange={handleSearch} />

      <div>
        {records.map((item, index) => (
          <div
            class="card"
            style={{ width: "18rem", display: "inline-block", margin: "10px" }}
            key={item.id}
          >
            <img src={""} class="card-img-top" alt="images" />
            <div class="card-body">
              <h5>{item.title}</h5>
              <p class="card-text">{item.description}</p>
              <Link to={`/description/${index}`}>
                <button>Product Details</button>
              </Link>
            </div>
          </div>
        ))}

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" onClick={perPage}>
                Previous
              </a>
            </li>
            {numbers.map((n, i) => (
              <li class="page-item" key={i}>
                <a class="page-link" href="#" onClick={() => changeCurrentPage(n)}>
                  {n}
                </a>
              </li>
            ))}
            <li class="page-item">
              <a class="page-link" href="#" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;
