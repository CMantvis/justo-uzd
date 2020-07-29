import React from 'react'

export default function paginate({pageSize, totalCharacters, onPageChange, currentPage}) {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalCharacters/ pageSize); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
          <ul className="pagination">
            {pageNumbers.map(page => (
              <li
                key={page}
                className={page === currentPage ? "page-item active" : "page-item"}
              >
                <a className="page-link" onClick={() => onPageChange(page)}>
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
    };