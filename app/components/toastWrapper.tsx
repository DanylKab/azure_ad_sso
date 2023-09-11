"use client";

//@components
import { ToastContainer } from "react-toastify";

//@hooks
import { useTheme } from "@hooks";

/**
 * Returns the wrapper for ToastContainer with global styles applied
 * @returns JSX.Element
 */
const ToastWrapper = () => {
  const { isDark } = useTheme();

  return (
    <ToastContainer
      theme={isDark ? "dark" : "light"}
      hideProgressBar={true}
      autoClose={2000}
    />
  );
};

export default ToastWrapper;
