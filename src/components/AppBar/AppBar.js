import { AppBarWrapp, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarWrapp>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </AppBarWrapp>
  );
};
