import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export function EScholar({ fieldName }) {
  const { colorMode } = useColorMode();
  const [showTooltip, setShowTooltip] = useState(false);

  const isDarkTheme = colorMode === 'dark';

  return (
    <div className={`inline-flex items-center text-sm rounded-md ${
      isDarkTheme ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'
    } border px-2 py-1 mb-2`}>
      <span className={`font-semibold mr-2 ${
        isDarkTheme ? 'text-gray-300' : 'text-gray-700'
      }`}>
        eScholar Name:
      </span>
      <code className={`font-mono px-1 rounded ${
        isDarkTheme ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-800'
      }`}>
        {fieldName}
      </code>
      <div
        className={`relative ml-2 w-4 h-4 rounded-full ${
          isDarkTheme ? 'bg-gray-300 text-gray-700' : 'bg-gray-300 text-gray-700'
        } flex items-center justify-center text-xs font-bold cursor-help`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        i
        {showTooltip && (
          <div className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-1 px-2 py-1 text-xs rounded-md whitespace-nowrap z-10 ${
            isDarkTheme ? 'bg-gray-800 text-gray-200' : 'bg-gray-700 text-gray-100'
          }`}>
            Unique identifier for the eScholar CDW™
          </div>
        )}
      </div>
    </div>
  );
}

