// sidebar.js

module.exports = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      link: {
        type: "doc",
        id: "intro",
      },
      items: [
        "students-to-be-reported",
        "staff-to-be-reported",
        "courses-to-be-reported",
        "race-ethnicity-gender-standards",
        "curriculum-assessment-instruction",
      ],
    },
    {
      type: "category",
      label: "Templates",
      collapsed: false,
      link: {
        type: "doc",
        id: "templates/templates",
      },
      items: [
        {
          type: "category",
          label: "Child Accounting",
          link: {
            type: "doc",
            id: "templates/child-accounting/child-accounting-domain",
          },
          items: [
            "templates/child-accounting/school-calendar",
            "templates/child-accounting/student-calendar-fact",
          ],
        },
        {
          type: "category",
          label: "Course",
          link: {
            type: "doc",
            id: "templates/course/course-domain",
          },
          items: [
            "templates/course/course",
            "templates/course/course-instructor",
            "templates/course/student-course-enrollment",
          ],
        },
        {
          type: "category",
          label: "CTE",
          link: {
            type: "doc",
            id: "templates/cte/cte-domain",
          },
          items: [
            "templates/cte/cte-student-fact",
            "templates/cte/cte-student-industry-credential",
          ],
        },
        {
          type: "category",
          label: "Discipline",
          link: {
            type: "doc",
            id: "templates/discipline/discipline-domain",
          },
          items: [
            "templates/discipline/incident",
            "templates/discipline/person",
            "templates/discipline/incident-offender",
            "templates/discipline/incident-offender-infraction",
            "templates/discipline/incident-offender-infraction-weapon",
            "templates/discipline/incident-offender-disciplinary-action",
            "templates/discipline/incident-offender-parent-involvement",
            "templates/discipline/incident-victim",
          ],
        },
        {
          type: "category",
          label: "District",
          link: {
            type: "doc",
            id: "templates/district/district-domain",
          },
          items: [
            "templates/district/district-fact-safe-schools",
            "templates/district/district-fact-english-leaners",
            "templates/district/district-fact-title-i",
            "templates/district/district-snapshot",
            "templates/district/distract-fact-home-ed-private-tutoring",
            "templates/district/district-fact-staff-vacancies",
            "templates/district/district-fact-support-personnel",
            "templates/district/district-fact-act-35",
            "templates/district/district-fact-quarterly-vacancy-updates",
          ],
        },
        {
          type: "category",
          label: "Enrollment",
          link: {
            type: "doc",
            id: "templates/enrollment/enrollment-domain",
          },
          items: ["templates/enrollment/school-enrollment"],
        },
        {
          type: "category",
          label: "Location",
          link: {
            type: "doc",
            id: "templates/location/location-domain",
          },
          items: [
            "templates/location/location-fact-safe-schools",
            "templates/location/location-fact-bus-evacuation-drills",
            "templates/location/location-fact-fire-security-drills",
            "templates/location/location-fact-aed",
            "templates/location/location-fact-interscholastic-athletic-opportunities-data",
          ],
        },
        {
          type: "category",
          label: "Programs",
          link: {
            type: "doc",
            id: "templates/programs/programs-domain",
          },
          items: ["templates/programs/programs-fact"],
        },
        {
          type: "category",
          label: "Special Education",
          link: {
            type: "doc",
            id: "templates/special-ed/special-ed-domain",
          },
          items: [
            "templates/special-ed/special-education-snapshot",
            "templates/special-ed/student-fact-special-ed-act16",
          ],
        },
        {
          type: "category",
          label: "Staff",
          link: {
            type: "doc",
            id: "templates/staff/staff-domain",
          },
          items: [
            "templates/staff/staff",
            "templates/staff/staff-snapshot",
            "templates/staff/staff-assignment",
            "templates/staff/staff-development-fact",
            "templates/staff/person-el-coordinator",
            "templates/staff/person-role-el-coordinator",
          ],
        },
        {
          type: "category",
          label: "Student",
          link: {
            type: "doc",
            id: "templates/student/student-domain",
          },
          items: [
            "templates/student/student",
            "templates/student/student-snapshot",
            "templates/student/staff-student-subtest-act-13-educator-effectiveness",
            "templates/student/staff-student-subtest-teacher-student-linkages",
            "templates/student/student-award-fact-icn-wbl",
            "templates/student/student-fact-career-standards-benchmarks",
            "templates/student/student-local-assessment-subtest-early-indicators-success",
            "templates/student/student-local-assessment-subtest-reporting-analytics",
            "templates/student/student-fact-keystone-exemption",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Appendix",
      items: [
        "appendix/appendix-A",
        "appendix/appendix-B",
        "appendix/appendix-C",
        "appendix/appendix-D",
        "appendix/appendix-E",
        "appendix/appendix-F",
        "appendix/appendix-G",
        "appendix/appendix-H",
        "appendix/appendix-J",
        "appendix/appendix-K",
        "appendix/appendix-L",
        "appendix/appendix-M",
        "appendix/appendix-N",
        "appendix/appendix-O",
        "appendix/appendix-P",
        "appendix/appendix-Q",
        "appendix/appendix-R",
        "appendix/appendix-S",
        "appendix/appendix-U",
        "appendix/appendix-V",
        "appendix/appendix-X",
        "appendix/appendix-Y",
        "appendix/appendix-Z",
        "appendix/appendix-AA",
        "appendix/appendix-AB",
        "appendix/appendix-AE",
        "appendix/appendix-AF",
        "appendix/appendix-AH",
        "appendix/appendix-AI",
        "appendix/appendix-AJ",
        "appendix/appendix-AK",
        "appendix/appendix-AL",
        "appendix/appendix-AM",
        "appendix/appendix-AN",
        "appendix/appendix-AO",
        "appendix/appendix-AP",
        "appendix/appendix-AQ",
        "appendix/appendix-AR",
        "appendix/appendix-AS",
      ],
    },
  ],
  dqeRules: [
    {
      type: "autogenerated",
      dirName: "dqe-rules",
    },
  ],
  howToGuides: [
    {
      type: "category",
      label: "How-To Guides",
      items: [
        "how-to-guides/intro-pims-reporting/intro",
        {
          type: "autogenerated",
          dirName: "how-to-guides/october-staff-dataset",
        },
        {
          type: "autogenerated",
          dirName: "how-to-guides/october-student-dataset",
        },
        {
          type: "autogenerated",
          dirName: "how-to-guides/el-reporting-guide",
        },
      ],
    },
  ],
};
