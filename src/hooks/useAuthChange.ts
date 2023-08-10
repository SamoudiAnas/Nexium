import { auth } from "@/firebase";
import { clearUserData, setUserData } from "@/features/user/user-slice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";

const useAuthChange = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribeAuthListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        // dispatch user with data
        dispatch(
          setUserData({
            isLoggedIn: true,
            user: {
              uid: user.uid ?? "",
              email: user.email ?? "",
              authority: "cashier",
            },
          })
        );
      } else {
        // dispatch logout and reset data
        dispatch(clearUserData({}));
      }
    });

    return () => unsubscribeAuthListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default useAuthChange;
