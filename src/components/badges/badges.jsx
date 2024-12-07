import React from 'react';
import { Tooltip } from 'react-tooltip';
import { AlertCircle, CircleDot, HelpCircle, Key, RefreshCw, Ruler, Database } from 'lucide-react';

const colorTextMap = {
  required: 'Required',
  optional: 'Optional',
  conditional: 'Conditionally Required',
  key: 'Key',
  updateable: 'Updateable',
  escholar: 'eScholar',
};

const tooltipTextMap = {
  required: 'A value is needed.\nLeaving this blank will cause an error.',
  optional: 'You can provide a value or leave it blank.\nBoth are acceptable.',
  conditional: 'Sometimes required.\nIf certain conditions apply, fill this out;\notherwise, leave it blank.',
  updateable: 'If this record already exists,\nupdating this field will overwrite the current value.',
  key: 'This field uniquely identifies the record\nand cannot be changed.\nIf it\'s wrong, remove the entire record\nand recreate it with help from PDE.',
  escholar: 'Unique identifier from the eScholar CDW™.\nThe displayed field name may differ\nfrom the PIMS documentation.'
};


const colorClasses = {
  required: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  optional: 'bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300',
  conditional: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  key: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  updateable: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  escholar: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
};

const borderClasses = {
  required: 'border-red-800 dark:border-red-300',
  optional: 'border-gray-800 dark:border-gray-300',
  conditional: 'border-orange-800 dark:border-orange-300',
  key: 'border-yellow-800 dark:border-yellow-300',
  updateable: 'border-blue-800 dark:border-blue-300',
  escholar: 'border-violet-800 dark:border-violet-300',
};

const iconMap = {
  required: AlertCircle,
  optional: CircleDot,
  conditional: HelpCircle,
  key: Key,
  updateable: RefreshCw,
  length: Ruler,
  escholar: Database,
};

export default function Badge({ color = 'optional', children, length, fieldName }) {
  const Icon = length ? iconMap.length : iconMap[color];
  const tooltipId = `tooltip-${color}-${length || 'default'}-${fieldName || ''}`;

  const getTooltipContent = () => {
    if (length) {
      return `This field has a maximum length of: ${length}`;
    }
    if (color === 'escholar' && fieldName) {
      return `${tooltipTextMap[color]} Field Name: ${fieldName}`;
    }
    return tooltipTextMap[color];
  };

  const getBadgeContent = () => {
    if (length) {
      return (
        <>
          Max Length: <code className="ml-1 font-mono">{length}</code>
        </>
      );
    }
    if (color === 'escholar' && fieldName) {
      return 'eScholar';
    }
    return children || colorTextMap[color];
  };

  return (
    <>
      <span
        data-tooltip-id={tooltipId}
        className={`
          badge
          inline-flex items-center px-2 py-1 text-xs font-medium rounded-md
          border border-solid
          ${colorClasses[color]}
          ${borderClasses[color]}
          transition-all duration-200 ease-in-out
          hover:shadow-md hover:-translate-y-0.5
          cursor-help
          mx-1 my-0.5
        `}
        role="button"
        tabIndex={0}
        aria-label={`${length ? 'Length' : colorTextMap[color]} badge${fieldName ? `: ${fieldName}` : ''}`}
      >
        <Icon className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">
          {getBadgeContent()}
        </span>
      </span>
      <Tooltip
        id={tooltipId}
        place="top"
        content={getTooltipContent()}
        className="badge-tooltip"
        delayShow={300}
        delayHide={150}
      />
    </>
  );
}

