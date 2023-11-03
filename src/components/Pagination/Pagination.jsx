import React, { useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  let page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;
  let limit = 40;

  useEffect(() => {
    handleSearchParams(page);
  }, [searchParams]);

  const handleSearchParams = (page) => {
    setSearchParams({ page });
  };

  const handlePageChange = (data) => {
    let selected = data.selected + 1;
    handleSearchParams(selected);
  };

  return (
    <div className="w-full flex justify-center my-[25px] text-cyan-50 text-primary items-center gap-3">
      <ReactPaginate
        className="flex gap-3"
        pageCount={Math.ceil(count / limit)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        forcePage={page - 1}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        pageClassName={"page"}
        activeClassName={"active"}
        breakClassName={"break"}
        nextLabel={"next page"}
        previousLabel={"previous page"}
      />
    </div>
  );
}

export default Pagination;
