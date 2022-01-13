// eslint-disable-next-line
import React, { useEffect, useState, useMemo } from "react";
import './Reports.css'

import useFullPageLoader from "./Component/hooks/useFullPageLoader";
import { TableHeader, Pagination, Search } from "./Component/DataTable";
import axios from "axios";


const DataTable = () => {
  const [comments, setComments] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  
 

  const ITEMS_PER_PAGE = 10;

 

  const headers = [
    { name: "Register Number", field: "Register Number", sortable: false },
    { name: "Mobile Number", field: "Mobile Number", sortable: false },
    { name: "Name", field: "Name", sortable: false },
    { name: "Created Date", field: "created Date", sortable: false },
   
  ];

  const commentsData = useMemo(() => {
    let computedComments = comments;

    if (search) {
      computedComments = computedComments.filter(
        (comment) =>
          comment.PHONE_NUMBER.toLowerCase().includes(search.toLowerCase()) ||
          comment.NAMe.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedComments.length);

    //Sorting comments
    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedComments = computedComments.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    //Current Page slice
    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [comments, currentPage, search, sorting]);

  return (
    <>
      <div class="scrollbar square scrollbar-lady-lips thin">
        <div
          class="container"
          style={{ paddingTop: "3px", paddingLeft: "5px" }}
        >
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Reports</h3>
            </div>
          </div>
         

          <div className="row w-100">
            <div className="col mb-3 col-12 text-center">
              <div className="row">
                <div
                  className="col-md-6 d-flex flex-row-reverse"
                  style={{ marginBottom: "30px", marginLeft: "340px" }}
                >
                  <Search
                    onSearch={(value) => {
                      setSearch(value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
              </div>

              <div class="table-responsive">
<table class="table-hover table">
                <TableHeader
                  headers={headers}
                  onSorting={(field, order) => setSorting({ field, order })}
               />
            
                <tbody>
                {commentsData.map((comment) => (
               
               
                   
                 
                
                  
               
                    
                   
                  
                    <tr>
                      <th scope="row">
                    sssssssssss
                      </th>
                      <td
                      
                        style={{ cursor: "pointer" }}
                      >
                      ddddddddddd
                      </td>
                      <td>ddddddddddd</td>
                      <td>ddddddddddddddddddddddddddddddddd</td>
                     
                    </tr>
                     

                     
      
                ))}
                </tbody>
                      
              </table>
              </div>
            </div>
            <div className="col-md-12">
            <Pagination
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
      {loader}
    </>
  );
};

export default DataTable;