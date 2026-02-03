import { createContext } from "react";
import type { AuthContextType } from "@/model/login.model";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
