import { useState, useEffect, useCallback, useRef } from "react";
import { baseApiUrl } from "utils/config";
import UserData from "interfaces/UserData";
import userMapper from "mapper/userMapper";

const useUser = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const prevUserDataRef = useRef<UserData | null>(null);

  const fetchRandomUser = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(baseApiUrl);

      if (!response || !response.ok) {
        throw new Error("Error fetching data");
      }

      const data = await response.json();

      if (!data || !data.results || !data.results[0]) {
        throw new Error("Error fetching data");
      }
      const newUser: UserData = userMapper(data.results[0]);

      prevUserDataRef.current = userData;
      setUserData(newUser);
    } catch (error) {
      console.error("Error fetching random user");
    }
    finally {
        setIsLoading(false);
    }

  }, [userData]);

  useEffect(() => {
    fetchRandomUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isFieldChanged = useCallback(
    (field: keyof UserData) => {
      return (
        prevUserDataRef.current &&
        prevUserDataRef.current[field] !== userData?.[field]
      );
    },
    [userData]
  );

  return {
    isLoading,
    userData,
    fetchRandomUser,
    isFieldChanged,
  };
};
export default useUser;
