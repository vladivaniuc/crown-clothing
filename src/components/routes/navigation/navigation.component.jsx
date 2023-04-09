import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import "./navigation.styles.jsx";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log(currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN-OUT
            </NavLink>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
