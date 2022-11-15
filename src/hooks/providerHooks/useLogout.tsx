import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const useAuth = () => useContext(AuthContext);

export const useLogout = () => {
    const { logout, error, loading, setError } = useAuth();
    return { logout, error, loading, setError };
};