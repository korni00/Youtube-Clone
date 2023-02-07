import { styled } from '@mui/material';

const HeaderTemplate = styled('div')`
  width: 100%;
  display: flex;
`;

function Header() {
  return (
    <HeaderTemplate>
      <h1>Store</h1>
    </HeaderTemplate>
  );
}

export default Header;
