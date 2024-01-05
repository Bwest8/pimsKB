# Welcome to PIMS Knowledge Base

The Pennsylvania Information Management System (PIMS) is a collaborative effort of the Pennsylvania Department of Education (PDE) and Local Education Agencies (LEA) across the commonwealth. PIMS is a statewide, longitudinal data system (SLDS) that efficiently and accurately manages, analyzes, disaggregates, and uses individual data for each student served by Pennsylvania’s pre-K through grade 12 public education system.

PIMS uses the eScholar data warehouse model, which stores data in a relational database. eScholar uses a standard set of templates that provides a consistent format for loading data from various information systems into the warehouse. By using templates, LEAs are not required to purchase new hardware or software. Modifications to information system software will be necessary to format data to meet template standards for file transmission. For additional information on eScholar, visit the [eScholar website](https://escholar.com/).

PIMS serves many purposes, including:
- Meeting current state and federal reporting requirements;
- Improving education decision-making through the use of high-quality data and decision support tools;
- Providing longitudinal tracking of education progress over time and across LEAs;
- Reporting timely and accurate education data through standardized and ad hoc reporting capabilities.

## PIMS Manuals Year Definition:
| Previous Year | Current Year |
|---------------|--------------|
| 2022-2023     | 2023-2024    |


## The following are significant initiatives for reporting:

### Every Student Succeeds Act

The federal Every Student Succeeds Act (ESSA) reauthorizes the Elementary and Secondary Education Act (ESEA), first passed in 1965. ESSA replaced the No Child Left Behind Act (NCLB), passed in 2002. The federal law advances ESEA’s promise of ensuring that all students – from pre-kindergarten to postsecondary, and especially low-income students, students of color, students with disabilities, English Learners, and other historically marginalized students – have access to a world-class education that prepares them for postsecondary education, career, and life.

On January 16, 2018, Pennsylvania’s Consolidated State ESSA Plan was approved by the U.S. Department of Education (USDE). Pennsylvania’s guiding principles within the State ESSA plan focus on transparency, equity, and innovative practices. An amended plan was approved by USDE on January 20, 2023.

As required by ESSA, Pennsylvania developed an accountability system using multiple academic indicators to determine Annual Meaningful Differentiation of all public schools in the commonwealth. Pennsylvania’s accountability plan is outlined in the Pennsylvania Consolidated State Plan. As part of the annual State Report Card, performance on the ESSA indicators will be posted for all students, as well as for multiple student groups, including economically disadvantaged students, English Learners, students receiving special education services, and major racial and ethnic groups. Specific to ESSA reporting, indicators for students in foster care, experiencing homelessness, and from military families will also be collected and reported as part of the State Report Card.

### Future Ready PA Index
An important component of Pennsylvania’s ESSA Consolidated State Plan is the Future Ready PA Index, a 
comprehensive, public-facing school progress report that includes a wide range of meaningful, evidence-based 
indicators. The Future Ready PA Index moves beyond a single, summative score to increase transparency 
around school and student group performance.

The Future Ready PA Index includes three main categories:

1. State Assessment Measures
2. On-Track Measures
3. College and Career Measures

**Future Ready PA Index data comes from the following sources:**

!!! info "**The following LEA reported PIMS templates or tables:**"

    - `Course`
    - `Course Enrollment`
    - `Course Instructor Snapshot`
    - `Student`
    - `Student Fact`
    - `Student Snapshot`
    - `CTE Student Fact`
    - `Student Calendar Fact`
    - `CTE Student Industry Credential`
    - `Student Award Fact`
    - `Frozen Grad Cohort`
    - `Student Local Assessment Subtest`

!!! info "**External sources:**" 

    - Pennsylvania Department of Labor and Industry
    - Service Members Civil Relief Act (SCRA)
    - Data Recognition Corporation (DRC)
    - National Student Clearinghouse (NSC)
    - Student Assessment System (SAS)

## Students to be Reported in PIMS

All Pre-K through grade 12 and Adult Affidavit Program (AAP) students enrolled in a public school and students enrolled in an Approved Private School (APS) or Private Residential Rehabilitation Institution (PRRI) in Pennsylvania shall be reported in PIMS. Student data will be submitted through templates. See the template section of this document for more information.

It is important to note that Keystone State ChalleNGe Academy membership and attendance should be excluded from the child accounting data in the `Student Calendar Fact` template.

**NOTE:** The term “grade” is used in this document to imply the instructional levels from Pre-K through grade 12, including the adult instructional level for career and technical education registered Adult Affidavit Programs. For Special Education students, see the paragraph "Reporting Exceptional Students."

The following grade levels are collected in PIMS:

- `Pre-K, half-day, morning`
- `Pre-K, half-day, afternoon`
- `Pre-K, full day`
- `K4, half-day, morning`
- `K4, half-day, afternoon`
- `K4, full day`
- `K5, half-day, morning`
- `K5, half-day, afternoon`
- `K5, full day`
- `Grade 1`
- `Grade 2`
- `AAP (Adult Affidavit Program student)`
- `Grade 3`
- `Grade 4`
- `Grade 5`
- `Grade 6`
- `Grade 7`
- `Grade 8`
- `Grade 9`
- `Grade 10`
- `Grade 11`
- `Grade 12`



## PIMS Template Dependency

| Load This | Before These |
|-----------|--------------|
| **Student** | - Student Snapshot<br>- Student Course Enrollment<br>- CTE Student Fact<br>- CTE Student Industry Credential<br>- Staff Student Subset<br>- Programs Fact<br>- Student Calendar Fact<br>- School Enrollment<br>- Special Education Snapshot<br>- Student Award Fact for Industry-Recognized Credentials and Work-Based Learning Experiences for Non-CTE Students<br>- Student Fact for Career Standards Benchmarks<br>- Student Local Assessment Subset for Early Indicators of Success<br>- Student Local Assessment Subset for Reporting and Analytics<br>- Person (see note on page with table of Load Sequence/Dependencies) |
| **Course** | - Course Instructor<br>- Student Course Enrollment |
| **Course Instructor** | - Student Course Enrollment |
| **Staff** | - Staff Snapshot<br>- Staff Assignment<br>- Staff Development Fact<br>- Course Instructor<br>- Staff Student Subset |


``` py linenums="1"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```