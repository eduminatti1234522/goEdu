import React,{useState, useEffect} from 'react'
import styles from "styled-components";
import ReactPaginate from 'react-paginate';

function PaginationCont({children,itemsPerPage,setCurrent,items,myRef=false}) {
       // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  useEffect(() =>{
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      const currentItems = items.slice(itemOffset, endOffset);
      setCurrent(currentItems);
    },[itemOffset])
    const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    myRef && myRef.current.scrollIntoView()
  };
  return (
    <MainCont>
        {
            children
        }
 
          <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        breakClassName={"dots"}
        breakLinkClassName={"li"}
        containerClassName={"container"}
        className={""}
        pageClassName={"li"}
      />
    </MainCont>
  )
}

export default PaginationCont


const MainCont = styles.div`
.container{
    display:flex;
    justify-content:space-between;
    padding: 0;
    max-width:350px;
    li{
        list-style-type: none;
        &.selected{
            transform:scale(1.1);
            a{
                color:#3E4D99;
            }
        }
        a{

            color:black;
        }
    }
}
`;