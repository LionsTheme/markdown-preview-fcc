"use client";

import { useState } from "react";

/**
 * Custom hook to clear the content of a textarea.
 * @param initialValue
 * @example const [value, clearTextarea, handleChange] = useClearTextarea();
 * @returns An array with the current value of the textarea, a function to clear the content, and a function to update the value.
 */
const useClearEditor = (
  initialValue = ""
): [string, () => void, (value: string) => void] => {
  const [value, setValue] = useState<string>(initialValue);

  /**
   * Function to clear the content of the textarea.
   */
  const clearTextarea = (): void => {
    setValue("");
  };

  /**
   * Function to update the value of the textarea.
   * @param newValue The new value of the textarea.
   */
  const handleChange = (newValue: string): void => {
    setValue(newValue);
  };

  return [value, clearTextarea, handleChange];
};

export default useClearEditor;
