# Template Submissions by LEA Type

???+ note "Child Accounting"
    - School Districts
    - Intermediate Units
    - Career and Technical Centers (CTC)
    - Charter Schools
    - Private Residential Rehabilitation Institutions (PPRI)
    - Approved Private Schools (APS)

??? note "Course"
    - School Districts
    - Intermediate Units
    - Career and Technical Centers (CTC)
    - Charter Schools
    - State Juvenile Correctional Institutions (SJCI)

... (and so on for the rest of the sections)

## Field Information

### Field No. 1 - SUBMITTING AUN
The unique, 9-digit Administrative Unit Number (AUN) assigned by the PDE.

???+ info "Field Details"
    - **Max Length**: `9`
    - **Code**: `K`
    - **Business Rules**: None.
    - **eScholar Name**: DISTRICT CODE OF INSTRUCTION

???+ example "Sample / Valid Value"
    All LEA and School Numbers can be found on the [EdNA website](http://www.edna.pa.gov/Screens/wfHome.aspx).
    
    - **Example**: `123456789`

`Lorem ipsum dolor sit amet`

:   Sed sagittis eleifend rutrum. Donec vitae suscipit est. Nullam tempus
    tellus non sem sollicitudin, quis rutrum leo facilisis.

### Field No. 2 - SCHOOL YEAR DATE
A single date (June 30), the last day of the current school year indicating the whole school year.

???+ info "Field Details"
    - **Max Length**: `10`
    - **Code**: `K`
    - **Business Rules**: None.

???+ example "Sample / Valid Value"
    - **Example**: `2024-06-30`

### Field No. 3 - CALENDAR ID
A unique numeric and/or alphabetical unit used to identify this calendar.

???+ info "Field Details"
    - **Max Length**: `12`
    - **Code**: `K`
    - **Business Rules**: To the extent possible, create a CALENDAR ID that is descriptive of the unique calendar.

???+ example "Sample / Valid Value"
    - **Examples**: `ABCElemKHT`, `WPMS6-7-8`, `CTCAM`



### 4 - CALENDAR DESCRIPTION
Free-form text description of the calendar; its purpose is to target student population.

!!! danger "Required"
    This field is mandatory.

!!! info "Field Details"
    - **Updateable**: Yes
    - **Max Length**: `100`

**Business Rules**: A detailed description for the student or group of students for this calendar. IU may include school district name to designate location of IU classroom.

???+ example "Sample / Valid Value"
    - `ABC_Elementary_KHT`
    - `William-Penn-Middle School`
    - `CTC_all-AM-Sessions`

---

### 41…62
<span style="color: grey; font-weight: bold;">:material-block-helper: These fields are not collected.</span>

---

### 63 - END OF COURSE EXAM
Provide an indication that the reported course culminates in a Keystone exam.

!!! warning "<span style='color: red;'>Conditionally Required</span> | Updateable | Max Length: `4`"
    **Business Rules**: This field is required for any course that culminates in a Keystone exam.
    **eScholar Name**: END OF COURSE EXAM REQUIRED CODE

???+ example "Sample / Valid Value"
    - Valid Values: KLIT, KBIO, KALG

---

### 64
<span style="color: grey; font-weight: bold;">:material-block-helper: This field is not collected.</span>

---

### 65
<span style="color: grey; font-weight: bold;">:material-block-helper: This field is not collected.</span>

---

### 66 - ORGANIZATION DEFINING COURSE
AUN of entity with Dual Credit Agreement. [Dual Credit Agreements between School Entities and Institutions of Higher Education (pa.gov)](https://www.education.pa.gov/Policy-Funding/BECS/Purdons/Pages/DualCreditAgreements.aspx)

!!! warning "<span style='color: red;'>Conditionally Required</span> | Updateable | Max Length: `9`"
    **Business Rules**: Must be valid IHE in EdNA. Required if DUAL CREDIT (field 32) = Y

???+ example "Sample / Valid Value"
    - All LEA and School Numbers can be found on the [EdNA website](http://www.edna.pa.gov/). Example: 123456789

---

### 67…78
<span style="color: grey; font-weight: bold;">:material-block-helper: These fields are not collected.</span>

---

### 79 - CAMBRIDGE ADVANCED COURSE INDICATOR
An indication of whether a course is a Cambridge Advanced course.

!!! info "<span style='color: red;'>Required</span> | Updateable | Max Length: `1`"
    **eScholar Name**: OTHER CHARACTERISTIC INDICATOR

???+ example "Sample / Valid Value"
    - Valid Value: Y or N


### 63 - END OF COURSE EXAM
Provide an indication that the reported course culminates in a Keystone exam.

!!! tip "Optional | Updateable | Max Length: `4`"
    **Business Rules**: This field is required for any course that culminates in a Keystone exam.
    **eScholar Name**: END OF COURSE EXAM REQUIRED CODE

???+ example "Sample / Valid Value"
    - Valid Values: KLIT, KBIO, KALG



!!! optional "Optional | Updateable | Max Length: `4`"
    **Business Rules**: This field is required for any course that culminates in a Keystone exam.
    **eScholar Name**: END OF COURSE EXAM REQUIRED CODE

???+ example "Sample / Valid Value"
    - Valid Values: KLIT, KBIO, KALG


??? optional "This is optional"
    This content is not required.
