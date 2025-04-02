import { useContext } from "react";
import { HeaderContext } from "../app/providers/HeaderProvider";

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
};
