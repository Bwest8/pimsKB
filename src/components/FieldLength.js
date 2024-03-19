// src/components/FieldLength.js
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const FieldLength = ({ length }) => {
  const { colorMode } = useColorMode();

  const lightFieldLengthStyles = {
    backgroundColor: 'rgb(248, 248, 248)',
    color: 'rgb(55, 65, 81)',
    borderColor: 'rgb(156, 163, 175)',
  };

  const darkFieldLengthStyles = {
    backgroundColor: 'rgb(31, 41, 55)',
    color: 'rgb(197, 204, 216)',
    borderColor: 'rgb(75, 85, 99)',
  };

  const fieldLengthStyles = colorMode === 'dark' ? darkFieldLengthStyles : lightFieldLengthStyles;

  return (
    <span
      style={{
        ...fieldLengthStyles,
        fontSize: '0.80rem',
        fontWeight: '700',
        padding: '0.25rem 0.625rem',
        borderRadius: '0.25rem',
        border: '1px solid',
        marginRight: '0.5rem',
      }}
    >
      Max Length: <code>{length}</code>
    </span>
  );
};

export default FieldLength;