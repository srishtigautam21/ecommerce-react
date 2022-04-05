import { useEffect } from "react";

const useDocumentTitle = (documentTitle) => {
  useEffect(() => {
    document.title = `nurish | ${documentTitle}`;
  }, [documentTitle]);
};

export { useDocumentTitle };
