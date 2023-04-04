import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/camnangkienthuc" activeStyle>
            Cẩm nang kiến thức
          </NavLink>
          <NavLink to="/saleoff" activeStyle>
            Sale off
          </NavLink>
          <NavLink to="/bosuutap" activeStyle>
            Bộ sưu tập
          </NavLink>
          <NavLink to="/sanphammoi" activeStyle>
            Sản phẩm mới
          </NavLink>
          <NavLink to="/trangsuc" activeStyle>
            Trang sức
          </NavLink>
          <NavLink to="/quatang" activeStyle>
            Quà tặng
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;