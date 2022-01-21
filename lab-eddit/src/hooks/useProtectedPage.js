import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToLogin, goToFeed} from "../rotes/Coordinator";

export const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      goToLogin(history)
    }
  }, [history]);
};

// Lógica de não solicitar senha se ja estiver logado

export const useUnprotectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      goToLogin(history)
    } else {
      goToFeed(history)
    }
  }, [history]);
};
