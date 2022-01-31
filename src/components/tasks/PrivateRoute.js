import React from "react";
import { Redirect, Route } from "react-router-dom";
import {AuthenticationService} from "../../services/AuthenticationService";

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (

  <Route
    {...rest}
    render={(props) => {
      const role = AuthenticationService.getRole();
      if (!role) {
        return <Redirect to={{ pathname: "/login" }} />;
      }

      if (roles && !roles.includes(role)) {
        // Ako je korisnik ulogovan ali nema dozvolu pristupa zaštićenoj stranici - vrati ga na glavnu stranicu
        return <Redirect to={{ pathname: "/home" }} />;
      }

      // Vrati stranicu koja se traži
      return <Component {...props} />;
    }}
  />
);
