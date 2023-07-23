import React, { useState, useEffect } from "react";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Notif from "../../components/notif/Notif";
import ProgramSearch from "../../components/programs/ProgramSearch";
import ProgramTable from "../../components/programs/ProgramTable";
import { data } from "../../data";
import { applyFilters } from "../../utils";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Main = () => {
  let url = new URL(window.location.href);
  let urlPage = url.searchParams.get("page");
  let urlFiltersJson = url.searchParams.get("q");
  let urlFilters = JSON.parse(urlFiltersJson);

  const [page, setPage] = useState(urlPage ? parseInt(urlPage) : 0);
  const [rows, setRows] = useState([]);
  const [filter, setFilter] = useState(
    urlFilters
      ? urlFilters
      : {
          search: "",
          level: [],
          format: [],
          leaderships: [],
        }
  );

  // let url = new URL(window.location.href);
  // let urlFilters = url.searchParams.get("filters");

  // const [filters, setFilters] = useState(urlFilters ? parseInt(urlFilters) : 0);

  useEffect(() => {
    setRows(applyFilters(filter, data));
  }, [filter]);

  return (
    <>
      <Navbar />
      {/* <Notif /> */}
      <ProgramSearch
        filter={filter}
        setFilter={setFilter}
        setPage={setPage}
        page={page}
      />
      <ProgramTable rows={rows} setPage={setPage} page={page} />

      <Footer />
    </>
  );
};

export default Main;
