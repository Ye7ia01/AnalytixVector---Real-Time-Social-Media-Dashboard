import React from "react";
import { NavLink } from "react-router";
import { LinksNav } from "../../APIS/APIS";
const Navbar = ({ ChangeStyle }) => {
  console.log(ChangeStyle);
  return (
    <div>
      <nav>
        {/* <button onClick={onClickEvent}>Change</button> */}
        <div className="container">
          <ul className={ChangeStyle ? "changeStyleUl" : ""}>
            {LinksNav?.map((e, index) => (
              <li key={index} >
                <NavLink to={e.path} className={ChangeStyle ? "changeLi" : ""}>
                  <img src={e.image} alt="Erorr-Image" /> <span className={ChangeStyle ? "show" : ""}>{e.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
