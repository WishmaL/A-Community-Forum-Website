import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Container } from 'react-bootstrap';

const Pagination_ = ({ articlesPerPage, totalPosts, paginate, activePage }) => {
  const [num, setNum] = useState(1);
  // following is perfectly fine
  // const Pagination_ = ({ articlesPerPage, totalPosts, paginate }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  // console.log(activePage);
  // console.log(pageNumbers);

  // const pageClickHandler = (num) => {
  //   paginate(num);
  //   // console.log(num);
  //   setNum(num);
  // };

  return (
    <Container>
      <nav>
        {/* Following is normally works
         */}
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>

        {/* {pageNumbers.length <= 3 ? (
          <Pagination>
            {pageNumbers.map((number) =>
              
              number === num ? (
                
                <Pagination.Item active>
                  <a onClick={() => pageClickHandler(number)}>{number}</a>
                </Pagination.Item>
              ) : (
                <Pagination.Item>
                  <a onClick={() => pageClickHandler(number)}>{number}</a>
                </Pagination.Item>
              )
            )}
          </Pagination>
        ) : (
          <Pagination>
            <Pagination.First onClick={() => paginate(1)} />
            {activePage !== 1 ? (
              <>
                <Pagination.Prev
                  active="true"
                  onClick={() => paginate(activePage - 1)}
                />
                </>
            ) : null}
            {pageNumbers.map((number) =>
              number === num ? (
                
                <Pagination.Item active>
                  <a onClick={() => pageClickHandler(number)}>{number}</a>
                </Pagination.Item>
              ) : (
                <Pagination.Item>
                  <a onClick={() => pageClickHandler(number)}>{number}</a>
                </Pagination.Item>
              )
            )}
            {activePage !== pageNumbers.length ? (
              <Pagination.Next onClick={() => paginate(activePage + 1)} />
            ) : null}
            <Pagination.Last onClick={() => paginate(pageNumbers.length)} />
          </Pagination>
        )} */}
      </nav>
    </Container>
  );
};

export default Pagination_;
