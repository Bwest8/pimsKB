// sidebar.js

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'intro',
      },
      items: [
        'courses-to-be-reported',
        'curriculum-assessment-instruction',
        'race-ethnicity-gender-standards',
        'staff-to-be-reported',
        'students-to-be-reported',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      link: {
        type: 'doc',
        id: 'templates/intro',
      },
      items: [
        {
          type: 'category',
          label: 'Child Accounting',
          link: {
            type: 'doc',
            id: 'templates/child-accounting/intro',
          },
          items: [
            'templates/child-accounting/school-calendar-template',
            'templates/child-accounting/student-calendar-fact-template',
          ],
        },
        {
          type: 'category',
          label: 'Course',
          link: {
            type: 'doc',
            id: 'templates/course/intro',
          },
          items: [
            'templates/course/course-instructor',
            'templates/course/course-template',
            'templates/course/student-course-enrollment',
          ],
        },
        // ... (rest of the categories and items)
      ],
    },
    {
      type: 'category',
      label: 'Appendix',
      items: [
        'appendix/appendix-A',
        'appendix/appendix-B',
        'appendix/appendix-C',
        'appendix/appendix-D',
        'appendix/appendix-E',
        'appendix/appendix-F',
        'appendix/appendix-G',
        'appendix/appendix-H',
        'appendix/appendix-J',
        'appendix/appendix-K',
        'appendix/appendix-L',
        'appendix/appendix-M',
        'appendix/appendix-N',
        'appendix/appendix-O',
        'appendix/appendix-P',
        'appendix/appendix-Q',
        'appendix/appendix-R',
        'appendix/appendix-S',
        'appendix/appendix-U',
        'appendix/appendix-V',
        'appendix/appendix-X',
        'appendix/appendix-Y',
        'appendix/appendix-Z',
        'appendix/appendix-AA',
        'appendix/appendix-AB',
        'appendix/appendix-AE',
        'appendix/appendix-AF',
        'appendix/appendix-AH',
        'appendix/appendix-AI',
        'appendix/appendix-AJ',
        'appendix/appendix-AK',
        'appendix/appendix-AL',
        'appendix/appendix-AM',
        'appendix/appendix-AN',
        'appendix/appendix-AO',
        'appendix/appendix-AP',
        'appendix/appendix-AQ',
        'appendix/appendix-AR',
        'appendix/appendix-AS',

      ],
    },
  ],
};