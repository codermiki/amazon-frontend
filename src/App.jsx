import React, { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { ACTION } from "./Utility/action.type";
import { DataContext } from "./components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";

const App = () => {
  const [state, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: ACTION.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: ACTION.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
