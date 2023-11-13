import styled from 'styled-components';
import { Link } from 'react-router-dom';




export const Poster = styled.img`

  width: 304px;
  height: 400px;
`;

export const Container = styled.section`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const AdditionlInfo = styled.section`
  padding: 20px;
  box-shadow: inset rgb(73, 72, 40) 0px -1px 0px, rgb(73, 72, 40) 0px -1px 0px;
`;

export const InfoLinks = styled(Link)`
  display: block;
  margin: 5px;
`;