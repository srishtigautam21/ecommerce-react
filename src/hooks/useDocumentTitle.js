import { useEffect } from "react";

/**
 * custom hook to change document title
 *
 * @param "string"- heading for the title
 * @returns none
 *
 */

const useDocumentTitle = (documentTitle) => {
  useEffect(() => {
    document.title = `nurish | ${documentTitle}`;
  }, [documentTitle]);
};

export { useDocumentTitle };
