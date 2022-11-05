import { AppBarWrapp, StyledLink } from './AppBar.styled';

// const navItems = [
//   { href: 'home', text: 'Home' },
//   { href: 'movies', text: 'Movies' },
// ];

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
