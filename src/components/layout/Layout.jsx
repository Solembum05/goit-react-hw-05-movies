import React from 'react'
import { Container, Header, Link } from './Layout.styled';
import { Outlet } from 'react-router-dom';
const Layout = () => {

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/"> HomePage</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
        <Outlet />
    </Container>
  );
}

export default Layout;
