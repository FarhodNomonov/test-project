// App.jsx
import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import DataTable from "./components/dataTable";
import Pagination from "./components/pagination";
import SearchBar from "./components/searchBar";
import "./App.css";
import { usePosts } from "./redux/selector";
import { setPosts } from "./redux/postsSlice";

const App = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const data = usePosts();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch(
          setPosts(
            response.data.map((item) => {
              delete item.userId;
              return item;
            })
          )
        );
        setTotalPages(Math.ceil(response.data.length / 10));
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  }, [data, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginateData = useMemo(() => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    return filteredData.slice(startIndex, endIndex);
  }, [currentPage, filteredData]);

  return (
    <div className="app">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <DataTable data={paginateData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
