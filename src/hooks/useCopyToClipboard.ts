"use client";

import { useRef, useState, useEffect, RefObject } from "react";

type RefTextOpject = RefObject<HTMLDivElement>;

interface UseCopyToClipboardHook {
  divRef: RefTextOpject;
  copyToClipboard: () => void;
  copied: boolean;
}

/**
 * This custom hook is used to copy the content of an HTML element to the clipboard.
 *
 * @param textContent The text content to be copied to the clipboard.
 * @returns An object with the reference to the HTML element, the function to copy to the clipboard, and a flag indicating if the copy was successful.
 */
function useCopyToClipboard(
  textContent?: string | null
): UseCopyToClipboardHook {
  const divRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (): void => {
    const text = divRef.current?.innerHTML || textContent;

    if (!text) {
      throw new Error("Copy to clipboard error.");
    }

    const blob = new Blob([text], { type: "text/plain" });
    const data = [new ClipboardItem({ "text/plain": blob })];

    navigator.clipboard.write(data).then(
      function () {
        setCopied(true);
      },
      function () {
        throw new Error("Copy to clipboard error.");
      }
    );
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [copied]);

  return { divRef, copyToClipboard, copied };
}
export default useCopyToClipboard;
