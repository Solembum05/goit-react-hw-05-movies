import React, { Suspense } from 'react'
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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default Layout;
