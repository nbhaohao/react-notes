import React from "react";
import PrismLight from "react-syntax-highlighter/dist/esm/prism-light";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
PrismLight.registerLanguage("jsx", jsx);

export const CodeViewer = ({ codeString }) => {
  return (
    <PrismLight language="jsx" style={darcula}>
      {codeString}
    </PrismLight>
  );
};
