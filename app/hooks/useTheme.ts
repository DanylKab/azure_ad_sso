"use client";

//@contexts
import { ThemeContext } from "@contexts";

//@hooks
import { useContext } from "react";

/**
 * Get theme configuration
 * @returns ThemeContext
 */
const useTheme = () => useContext(ThemeContext);

export default useTheme;
