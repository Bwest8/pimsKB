import React, { useState, useRef, useEffect } from 'react';
import { AlertCircle, CircleDot, HelpCircle, Key, RefreshCw, Ruler } from 'lucide-react';

const colorTextMap = {
  required: 'Required',
  optional: 'Optional',
  conditional: 'Conditionally Required',
  key: 'Key',
  updateable: 'Updateable',
};

const tooltipTextMap = {
  required: 'This field is required and must be populated.\nLeaving it blank will result in an error.',
  optional: 'This field is optional.\nYou may choose to populate it or leave it blank.',
  conditional: 'This field is conditionally required.\nIf the condition is met, the field must be populated.\nOtherwise, leave it blank.',
  updateable: 'This field will be updated in the target table if the entry exists and the value of this field has changed.',
  key: 'Uniquely identifies the record. Cannot be changed.\nIf incorrect, delete and re-enter the entire record with PDE assistance.',
};

const colorClasses = {
  required: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  optional: 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300',
  conditional: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  key: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  updateable: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
};

const borderClasses = {
  required: 'border-red-800 dark:border-red-300',
  optional: 'border-gray-800 dark:border-gray-300',
  conditional: 'border-orange-800 dark:border-orange-300',
  key: 'border-yellow-800 dark:border-yellow-300',
  updateable: 'border-blue-800 dark:border-blue-300',
};

const iconMap = {
  required: AlertCircle,
  optional: CircleDot,
  conditional: HelpCircle,
  key: Key,
  updateable: RefreshCw,
  length: Ruler,
};

export default function Badge({ color = 'optional', children, length }) {
  const [tooltipPosition, setTooltipPosition] = useState('top');
  const [tooltipAlignment, setTooltipAlignment] = useState('center');
  const badgeRef = useRef(null);
  const tooltipRef = useRef(null);

  const Icon = length ? iconMap.length : iconMap[color];

  useEffect(() => {
    const updateTooltipPosition = () => {
      if (badgeRef.current && tooltipRef.current) {
        const badgeRect = badgeRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        setTooltipPosition(badgeRect.top > tooltipRect.height + 10 ? 'top' : 'bottom');

        const viewportWidth = window.innerWidth;
        if (badgeRect.left < tooltipRect.width / 2) {
          setTooltipAlignment('left');
        } else if (viewportWidth - badgeRect.right < tooltipRect.width / 2) {
          setTooltipAlignment('right');
        } else {
          setTooltipAlignment('center');
        }
      }
    };

    updateTooltipPosition();
    window.addEventListener('resize', updateTooltipPosition);
    return () => window.removeEventListener('resize', updateTooltipPosition);
  }, []);

  return (
    <style>{`
      @media screen and (max-width: 996px) {
        .badge-tooltip {
          display: none !important;
        }
        .badge-hover {
          cursor: default !important;
          transform: none !important;
          box-shadow: none !important;
        }
      }
    `}
    </style>,
    <span
      ref={badgeRef}
      className={`
        relative inline-flex items-center px-3 py-1 text-[0.7rem] font-bold rounded-md
        border border-solid
        ${colorClasses[color]}
        ${borderClasses[color]}
        transform transition-transform duration-200 ease-in-out
        hover:shadow-md hover:-translate-y-0.5 badge-hover
        cursor-help
        group
        mx-1 my-0.5
      `}
    >
      <Icon className="w-3.5 h-3.5 mr-1.5" />
      {length ? (
        <>
          Max Length: <code className="ml-1 font-mono">{length}</code>
        </>
      ) : (
        children || colorTextMap[color]
      )}
      <span
        ref={tooltipRef}
        className={`
          badge-tooltip
          absolute ${tooltipPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}
          ${tooltipAlignment === 'left' ? 'left-0' : tooltipAlignment === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2'}
          w-max max-w-xs px-3 py-2 text-[0.675rem] leading-5
          bg-gray-900 text-gray-100 rounded-md
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-opacity duration-200 ease-in-out
          dark:bg-gray-800 dark:text-gray-200
          z-10 shadow-lg
        `}
        role="tooltip"
      >
        {length ? `This field has a maximum length of: ${length}` : tooltipTextMap[color]}
        <span 
          className={`
            absolute ${tooltipPosition === 'top' ? 'bottom-0 -mb-2' : 'top-0 -mt-2'}
            left-1/2 -translate-x-1/2
            border-8 border-transparent
            ${tooltipPosition === 'top' ? 'border-t-gray-900 dark:border-t-gray-800' : 'border-b-gray-900 dark:border-b-gray-800'}
          `}
          aria-hidden="true"
        ></span>
      </span>
    </span>
  );
}