import React from "react";

import cn from "classnames";
import styles from "./paragraphe-text.module.css";

function ParagrapheText({
  children,
}) {
  return (
    <p
      className={cn(
        styles.prgText
      )}
    >
      {children}
    </p>
  );
}

export default ParagrapheText;