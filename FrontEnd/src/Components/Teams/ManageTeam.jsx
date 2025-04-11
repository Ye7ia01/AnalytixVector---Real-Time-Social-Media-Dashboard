import React, { useState } from 'react';
import './ManageTeam.css';

const teamData = [
  { id: 1, name: 'Ali Sayed', email: 'ali@gmail.com', age: 18, phone: '01143219323', access: 'Admin' },
  { id: 2, name: 'Sara Ala', email: 'sara@gmail.com', age: 22, phone: '0123124454', access: 'Admin' },
  { id: 3, name: 'Hager Ali', email: 'hager@gmail.com', age: 33, phone: '0102423423', access: 'User' },
  { id: 4, name: 'Khaled Ahmed', email: 'khaled@gmail.com', age: 20, phone: '01184319323', access: 'User' },
  { id: 5, name: 'Ahmed Ali', email: 'ahmed@gmail.com', age: 32, phone: '01243219323', access: 'Admin' },
  { id: 6, name: 'Ali Sayed', email: 'ali@gmail.com', age: 25, phone: '0102219323', access: 'Admin' },
  { id: 7, name: 'Mohamed Ali', email: 'mohamed@gmail.com', age: 18, phone: '01053219323', access: 'Admin' },
  { id: 8, name: 'Sara Sayed', email: 'sara@gmail.com', age: 26, phone: '013214723', access: 'User' },
];

const searchOptions = ['Name', 'Email', 'Age', 'Phone', 'Access'];

function ManageTeam() {
  const [searchField, setSearchField] = useState('Name');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const itemsPerPage = 8;

  const filteredTeam = teamData.filter((member) =>
    member[searchField.toLowerCase()].toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredTeam.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <div className="header">
        <h2 className="title">Manage Team</h2>
        <p className="subtitle">Managing The Team Members</p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder={`Search of team by ( ${searchField.toLowerCase()} )`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
          {dropdownOpen ? '\u25B2' : '\u25BC'}
        </button>
        {dropdownOpen && (
          <div className="dropdown">
            {searchOptions.map((option) => (
              <div key={option} className="dropdown-item" onClick={() => { setSearchField(option); setDropdownOpen(false); }}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.age}</td>
              <td>{member.phone}</td>
              <td>{member.access}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="page-button" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>{'<'}</button>
        {[1, 2].map((page, idx) => (
          <button
            key={idx}
            className={`page-button ${page === currentPage ? 'active' : ''}`}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button className="page-button" onClick={() => setCurrentPage((p) => p + 1)}>{'>'}</button>
      </div>
    </div>
  );
}

export default ManageTeam;
