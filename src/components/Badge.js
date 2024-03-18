// src/components/Badge.js
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';

const Badge = ({ color, children }) => {
  const { isDarkTheme } = useDocusaurusContext();
  const { colorMode } = useColorMode();

  const lightBadgeStyles = {
    default: {
      backgroundColor: 'rgb(219, 234, 254)', // bg-blue-100
      color: 'rgb(29, 78, 216)', // text-blue-800
      borderColor: 'rgb(96, 165, 250)', // border-blue-400
    },
    dark: {
      backgroundColor: 'rgb(243, 244, 246)',
      color: 'rgb(31, 41, 55)',
      borderColor: 'rgb(107, 114, 128)',
    },
    danger: {
      backgroundColor: 'rgb(254, 226, 226)',
      color: 'rgb(153, 27, 27)',
      borderColor: 'rgb(248, 113, 113)',
    },
    success: {
      backgroundColor: 'rgb(220, 252, 231)',
      color: 'rgb(22, 101, 52)',
      borderColor: 'rgb(74, 222, 128)',
    },
    warning: {
      backgroundColor: 'rgb(255, 248, 230)',
      color: 'rgb(146, 64, 14)',
      borderColor: 'rgb(253, 224, 71)',
    },
    info: {
      backgroundColor: 'rgb(224, 231, 255)',
      color: 'rgb(55, 48, 163)',
      borderColor: 'rgb(129, 140, 248)',
    },
    purple: {
      backgroundColor: 'rgb(237, 233, 254)',
      color: 'rgb(109, 40, 217)',
      borderColor: 'rgb(192, 132, 252)',
    },
    pink: {
      backgroundColor: 'rgb(253, 232, 255)',
      color: 'rgb(190, 24, 93)',
      borderColor: 'rgb(244, 114, 182)',
    },
    conditional: {
      backgroundColor: 'rgb(255, 237, 213)',
      color: 'rgb(154, 52, 18)',
      borderColor: 'rgb(255, 152, 0)',
    },
  };

  const darkBadgeStyles = {
    default: {
      backgroundColor: 'rgb(55, 65, 81)', // dark:bg-gray-700
      color: 'rgb(96, 165, 250)', // dark:text-blue-400
      borderColor: 'rgb(96, 165, 250)', // border-blue-400
    },
    dark: {
      backgroundColor: 'rgb(17, 24, 39)',
      color: 'rgb(209, 213, 219)',
      borderColor: 'rgb(75, 85, 99)',
    },
    danger: {
      backgroundColor: 'rgb(127, 29, 29)',
      color: 'rgb(252, 165, 165)',
      borderColor: 'rgb(220, 38, 38)',
    },
    success: {
      backgroundColor: 'rgb(6, 95, 70)',
      color: 'rgb(167, 243, 208)',
      borderColor: 'rgb(16, 185, 129)',
    },
    warning: {
      backgroundColor: 'rgb(74, 58, 5)',
      color: 'rgb(254, 243, 199)',
      borderColor: 'rgb(217, 119, 6)',
    },
    info: {
      backgroundColor: 'rgb(49, 46, 129)',
      color: 'rgb(191, 219, 254)',
      borderColor: 'rgb(99, 102, 241)',
    },
    purple: {
      backgroundColor: 'rgb(88, 28, 135)',
      color: 'rgb(221, 214, 254)',
      borderColor: 'rgb(168, 85, 247)',
    },
    pink: {
      backgroundColor: 'rgb(131, 24, 67)',
      color: 'rgb(253, 242, 248)',
      borderColor: 'rgb(236, 72, 153)',
    },
    conditional: {
      backgroundColor: 'rgb(120, 53, 15)',
      color: 'rgb(254, 215, 170)',
      borderColor: 'rgb(249, 115, 22)',
    },
  };

  const badgeStyles = colorMode === 'dark' ? darkBadgeStyles : lightBadgeStyles;

  return (
    <span
      style={{
        ...badgeStyles[color],
        fontSize: '0.80rem',
        fontWeight: '700',
        padding: '0.25rem 0.625rem',
        borderRadius: '0.25rem',
        border: '1px solid',
        marginRight: '0.5rem',
      }}
    >
      {children}
    </span>
  );
};

export default Badge;