import { Outlet } from "react-router-dom";
import { Fragment } from "react";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import { useSelector } from "react-redux";

import "./navigation.styles.jsx";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles.jsx";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useSelector(selectIsCartOpen);

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
