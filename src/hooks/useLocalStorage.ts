import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setStorage] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const storedValue = window.localStorage.getItem(key);
      if (!storedValue) {
        throw new Error(`Stored value not found for key ${key}`);
      }
      return JSON.parse(storedValue);
    } catch (err) {
      // console.error(err);
      return initialValue;
    }
  });

  const setValue = (newValue: T | ((newValue: T) => T)) => {
    try {
      // Allowing value to be a fn so that API is same as useState
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;

      setStorage(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (err) {
      // console.error(`Unable to set value for key ${key}`);
    }
  };

  const removeValue = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);
      }
    } catch (err) {
      // console.error(`Unable to remove key ${key}`);
    }
  };

  return [value, setValue, removeValue] as const;
}

export function getLocalStorage(key: string) {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const storedValue = window.localStorage.getItem(key);
    if (!storedValue) {
      throw new Error(`Stored value not found for key ${key}`);
    }
    return JSON.parse(storedValue);
  } catch (err) {
    // console.error(err);
    return {};
  }
}

export default useLocalStorage;
