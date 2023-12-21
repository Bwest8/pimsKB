# School Calendar Template
**(21 Fields, 19 Collected, Delimited)** 

**Target Table: `PIMS_SCHOOL_CALENDAR`** 

This domain applies to the following organizational types only: School Districts, Intermediate Units, Career and Technical Centers, Charter Schools, Private Residential Rehabilitation Institutions (PRRI), and Approved Private Schools (APS). 

**Template Description** 

This template is used to identify each unique calendar associated with a student or group of students. One School Calendar can be submitted for multiple schools with the same days in session, the same number of PDE approved Act 80 days, and the same total instructional time. 

The information collected will be used to calculate the total days in session and total instructional time for each calendar as follows: 

- **Days in Session** = Number of Scheduled School Days *minus* Total Days in Session Lost Due to Strike *minus* Total Days in Session Lost Due to Act 80 *minus* Total Days in Session Lost Due to Other Reasons *plus* Total Make-Up Days. 
- **Total Instructional Time** = Days in Session *times* Instructional Minutes in Standard Day *minus* Total Instructional Minutes Lost Due to Planned Shortened Days and PDE Emergency Waiver. 

See sections 1501 and 1504 of the Pennsylvania School Code (24 P.S. § 15-1501 and 1504) for required instructional days and hours. The required number of instructional days is 180 (or 180 minus full Act 80 days) and the required instructional hours for each grade are as follows: 450 hours for half- time kindergarten; 900 hours for full-time kindergarten and grades 1-6; and 990 hours for grades 7-12. School districts, intermediate units, and CTCs/AVTS may apply for Act 80 exceptions. 

The Days in Session is used to calculate average daily membership (ADM) for students associated with each calendar. It is important to verify the ADM by Calendar Program Code on the Accuracy Certification Statement (ACS). 

The Days in Session calculated with School Calendar data must agree with the actual number of student days used by your student information system to generate attendance and membership. The Days in Session or actual number of student days may or may not be the same for all buildings or grade levels. 

## Additional Information


**[CALENDAR ID](#3-calendar-id) and [CALENDAR DESCRIPTION](#4-calendar-description)**


The Calendar ID provides a unique identifier for each different calendar that will be linked to each student on the Student Calendar Fact Template. Therefore, it is important to create a Calendar ID that is easily identifiable. The Calendar Description field may be used to provide a more detailed description.  

**Rotation Pattern Code (Field 7)** 

This field is populated for half-day or alternate-day pre-kindergarten and kindergarten School Calendars. It also is populated for School Calendars created for students in part-time CTC/AVTS vocational programs (half-day and semester-about). 

**Calendar Programs Code (Field 8) – Refer to Appendix R in the PIMS User Manual, Volume 2** This field is required in the School Calendar created for students in the following situations: 

- Institutionalized Children’s Program (ICP) 
- Juveniles incarcerated in adult facilities 
- Students at a CTC/AVTS in an approved vocational program 
- Students at a school district or charter school in an approved career and technical program 
- Students in an alternative education for disruptive youth program 
- Students placed out-of-state 
- School-age students in an early intervention program 
- Students educated/uploaded by an APS 
- Students educated/uploaded by a PRRI 

!!! note "Note:"

      School Calendars for semester-about rotation at CTC/AVTS must have Rotation Pattern Code of S and Calendar Program Code of CTE-PT or CTE-PT-H to receive accurate State subsidies. 

**Instruction Start Date and Instruction End Date (Fields 11 and 12)** 

For a part-time semester-about rotation CTC/AVTS calendar, enter the Instruction Start and End Date for the semester. 

If a program was added after the school year began or cancelled before the school year ended, enter these dates as if the program operated the entire school year. For example, a full-time kindergarten program was added in October or an alternative education program for disruptive youth was cancelled in April; enter the same Instruction Start and End Date as it applies to the majority of the students in that grade level or building. 

**Number of Scheduled School Days (Field 14)** 

The Number of Scheduled School Days is the number of instructional days on the original calendar or revised original calendar (planned student days plus PDE-approved, full-day Act 80 dismissals). Revisions for any rescheduling to accommodate days lost or made up are entered in the Total Days in Session Lost or Total Make-Up Days fields. 

- For alternate-day pre-kindergarten and alternate-day kindergarten or part-time semester-about CTC/AVTS calendars, the Number of Scheduled School Days will be approximately 90 days. 
- For school-age early intervention programs, the Number of Scheduled School Days must be 180 days. 
- For programs that were added after the school year began or cancelled before the school year ended, enter the Number of Scheduled School Days as if the program operated the entire school year. 
- If a School Calendar is created for one student, the Number of Scheduled School Days is NOT the number of days a student is enrolled.  Use the number of instructional days on the original calendar for this school year. 
- For IUs with classrooms located in school district buildings and following that building’s calendar, enter the number of instructional days provided.  DO NOT POPULATE Fields 16, 17, 18, and 19 for lost days and make-up days. Indicate the name of the school district where IU classroom is located in 

Calendar Description, Field 4. 

**Instructional Minutes in Standard Day (Field 15)** 

Enter the actual instructional minutes in a regular school day (not clock hours). Refer to Basic Education Circular 24 P. S. § 15-1504, Instructional Time and Act 80 Exceptions, for a list of activities that may be included in the calculation of instructional time. 

If the number of Instructional Minutes in a Standard School Day was not the same for the entire school year, then calculate an average based on the total instructional days. For example, a group that received 310 instructional minutes for 140 days and 330 instructional minutes for 40 days would be reported with 314 instructional minutes calculated as follows: 

[310 x 140 days] + [330 x 40 days] = 56,600 total instructional minutes       56,600 ÷ 180 total instructional days = 314 average minutes in a standard day 

**Total Instructional Minutes Lost to Planned Shortened Days and PDE Emergency Waiver (Field 20)** 

Enter the actual instructional time lost due to planned early dismissals (not clock hours). Do not report time lost for full-day dismissals (strike, Act 80, etc.). Also include in total the number of instructional minutes lost due to emergency school closing when the instructional day is waived by PDE. 

**Act 80 Group (Field 21)** 

Act 80 is applicable to school districts, career and technical centers, and intermediate units. If Total Days in Session Lost Due to Act 80 (Field 17) is greater than zero, then enter the unique alphanumeric identifier used in the Act 80 application to link this School Calendar to a particular Act 80 approval.  

**NOTE**: The Act 80 Group label must be entered exactly, or the School Calendar will not properly upload. Examples: SRVTAM ≠ SR VT-AM or ELEM ≠ Elem.  

## Template Specifications

### 1 - **SUBMITTING AUN**
The unique, 9-digit Administrative Unit Number (AUN) assigned by the PDE.

???+ info "Field Details"
      :octicons-key-asterisk-16: Required  | :material-key: Key  |  **Max Length**: `9`
    
    **eScholar Name**: `DISTRICT CODE OF INSTRUCTION`

???+ example "Sample / Valid Value"
        123456789
  
    All LEA and School Numbers can be found on the [EdNA website](http://www.edna.pa.gov/Screens/wfHome.aspx).

    
---
### 2 - **SCHOOL YEAR DATE**
- :octicons-key-asterisk-16: Required  | :material-key: Key  |  **Max Length**: `10` | **Format**: (YYYY-MM-DD)

**Description:** 
A single date (June 30), the last day of the current school year indicating the whole school year.

???+ example "Sample / Valid Value"
        2024-06-30
---
### 3 - **CALENDAR ID**
A unique numeric and/or alphabetical unit used to identify this calendar.

!!! info "Field Details: :octicons-key-asterisk-16: Required  | :material-key: Key  |  **Max Length**: `12`"
    **Business Rules**: To the extent possible, create a CALENDAR ID that is descriptive of the unique calendar.

???+ example "Sample / Valid Value"
    - `ABCElemKHT`
    - `WPMS6-7-8`
    - `CTCAM`
---
### 4 - **CALENDAR DESCRIPTION**
**Free-form text description of the calendar; its purpose is to target student population.**

!!! info " Required  |  Updateable  |  Max Length: `100`"
    **Business Rules**: A detailed description for the student or group of students for this calendar. IU may include school district name to designate location of IU classroom.

???+ example "Sample / Valid Value"
    - `ABC_Elementary_KHT`
    - `William-Penn-Middle School`
    - `CTC_all-AM-Sessions`
---
### **5, 6**
:material-block-helper: These fields are not collected.

---
### 7 - **ROTATION PATTERN CODE**
For part-time CTC/AVTS programs enter code for half-day, one-week, two-week, three-week, nine-week, semester rotation, or other. For part-time pre-kindergarten or kindergarten enter code for half-day or alternate day.

???+ warning ":material-asterisk: Conditionally Required  | :material-update: Updateable  |  **Max Length**: `100`"
    **Business Rules**: Required only for part-time CTC/AVTS programs, and for part-time pre-kindergarten and kindergarten programs. 
    
    If 'H', Field 15 (`INSTRUCTIONAL MINUTES IN STANDARD DAY`) must be between 30 and 270.

???+ example "Sample / Valid Value"
    **For CTC/AVTS programs:**

    | Code | Description   |
    |------|---------------|
    | `H`  | half day      |
    | `1`  | one-week      |
    | `2`  | two-week      |
    | `3`  | three-week    |
    | `9`  | nine-week     |
    | `S`  | semester      |
    | `O`  | other         |
  
    **For part-time Pre-K or kindergarten programs:**
  
    | Code | Description   |
    |------|---------------|
    | `H`  | half day      |
    | `A`  | alternate day |

---
### 8 - **CALENDAR PROGRAMS CODE**
Provides additional context for calendars created by LEAs for students in certain special situations.

???+ warning "Conditional Requirement"
    - **Max Length**: `8`
    - **Code**: `U`
    - **R/O/CR**: Conditionally Required
    - **Business Rules**: Required for CTC, PRRI, APS. Conditionally Required for all other LEA types.

???+ example "Sample / Valid Value"
    See Appendix R in Volume 2 of the PIMS User Manual for a complete list of valid values.

---
### 9 - **CALENDAR START DATE**
The date of the first day on the original calendar; this date could be a PDE approved full-day Act 80 day prior to the first day of instruction.

???+ info "Field Details"
    - **Max Length**: `10`
    - **Code**: `U`
    - **R/O/CR**: Required
    - **Business Rules**: Must be within the range of 2023-06-25 to 2024-01-31.

???+ example "Sample / Valid Value"
    - **Example**: `2023-08-22`

---

## Rules
*See the Rules Section of the Template Domain for rules consistent throughout all templates*

1. Fields 16, 17, 18, 19 and 20 must be greater than or equal to zero. 
2. The sum of TOTAL DAYS LOST in Fields 16, 17, and 18 must be less than or equal to NUMBER OF SCHEDULED SCHOOL DAYS and greater than or equal to TOTAL MAKE-UP DAYS. 
3. TOT\_DAYS\_IN\_SESSION is derived using the following formula:  
    NUMBER OF SCHEDULED SCHOOL DAYS + TOTAL MAKEUP DAYS – (sum of TOTAL DAYS LOST in Fields 16, 17, and 18)
    
**The total number of school days is calculated by the formula:**

`NUMBER OF SCHEDULED SCHOOL DAYS` + `TOTAL MAKEUP DAYS` – (`TOTAL DAYS LOST DUE TO STRIKE` + `TOTAL DAYS LOST DUE TO ACT 80` + `TOTAL DAYS LOST DUE TO OTHER REASONS`)

Where:

- `NUMBER OF SCHEDULED SCHOOL DAYS` is from Field 14.

- `TOTAL MAKEUP DAYS` is from Field 19.

- `TOTAL DAYS LOST DUE TO STRIKE` is from Field 16.

- `TOTAL DAYS LOST DUE TO ACT 80` is from Field 17.

- `TOTAL DAYS LOST DUE TO OTHER REASONS` is from Field 18.



**Load Sequence/Dependencies** 

No Dependencies
