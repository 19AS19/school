# Information Systems

> * An Information System is a combination of software and hardware designed for creating, reocording, storing, processing and communicating information.
> * Information systems allow for data analysis which can extract knowledge from data and information, which is otherwise difficult to visualize.

## Example of information systems

* The systems in schools and colleges which have information about:
    * Teachers' and Studens' Timetabels
    * Teachers; class groups
    * Students' academic record
    * Facility for Teachers to enter data on Students' performance and behaviour
    * Bookngs for labs, libraries, computer rooms

Behind the one front end there are multiple files some of which are databases.

# Database
A collection of data stored in an organised or logical manner, which can be managed, accessed and updated.

* **Advantages of Databases**
    * Easily store large amounts of data.
    * Multiple users can access the data at the same time.
    * Improved security - data is encrypted and password protected.
    * Can interact with multiple systems: mobile phones, business software, webpages.

## Terminology
* **Table:** A collection of related data made up of rows and columns
* **Record or Instance:** One row in the table, holds data about some entity - object, person, thing
* **Attributes or Fields:** The cuolumns of your database and the data in contains.

| Title | First name | Surname | Address        | City   | Poscode | Telephone |
|-------|------------|---------|----------------|--------|---------|-----------|
| Ms    | Tom        | Smith   | 42 Mill Street | London | We130W  | 012093209 |
| Mrs   | Sandra     | Jones   | 10 Low Lane    | Null   | HE234U  | 129391203 |
| Mr    | Superman   | Smith   | Albarequue Mex | London | H21992  | 19929491  |

Each attribute has a piece of data about an individual, each attribute/field has a description outlining the data type associated with it.

## Datatypes
* Examples of Datatypes
    * **CHAR(size)** - for a fixed length string
    * **VCHAR(size)** - for a variable length string
    * **BOOL** - stores a true or false value
    * **NUMBER** - for strong a number
    * **DATE** - Dates can be stored in different formats depending on the databse but generally it is in the form day/month/year

## Datatypes - types
* Flat file database
* Raltional databae (e.g mySQL)
* Non-relational database(e.g. Firebase)

## Flat file databases
* A flat file database is just a single table each row in the table is called a record and each column is an attribute, Think of a flat file database as a single page in an excel file.
* Flat file databases can also be represented in CSV files.
* A CSV (Comma Seperated Values) is a file that represents a table by seperating each column with a deliminator typically a comma and each row with a newline
* CSV files are typically used for importing and exporting data from different types of databases.

## Why we need relational databases
Flat file systems:
 *  Can result in duplication of records, so take up unnecessary space
 * Can be time consuming to update as the same information may need to be entered multiple times, this can also give rise to errors in the data and effect the integrity of the database.
 * Can be difficult to extract relevant data

## Data Integrity
* All data in the database is up to date
* There is no repeating data
* There is no old data that should have been over-written for example a customer address
* If we upddate information in one table, it is updated where necessary in all linked tables - don't have multiple contact numbers for a customer when there should only be one.

## Primary Key and Foreign Key
* A primary key is a **field** in a database table that acts as a **unique** identifier for each **record**
* The value stored in a primary key field can never be repeated in another record in the table; this ensures that each record in the table is unique.
* If there is no unique field that will make a primary key, a composite primary key made of a selection of fields can be used.
<br><br>
* A foreign key is the primary key of one table that appears in another able to make a link between the tables. Foreign keys are used to form relationships between tables.
* Each table can have 1 primary key but many foreign keys.

## Database management systems
* A Database Managment System (DBMS) is a **software system used to store, retrieve, and run queries on data.** A DBMS serves, as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the database.
* Database management systems help to maintain the integrity of the system.
* Types of DBMS:
    * Access
    * MySQL
    * Mariadb
### Transactions
* A transaction can be a single operation but most transactions have multiple steps.
* An example of a transtion with multiple steps it that of transferring money from a current bank account to a savings account. Ther is a debit operation, that removes the money from the current accuont, and a credit operation, that puts money into the savings account. Finally a message is sent to the user confirming the transfer. The three operations make up the transaction.

# ACID - Database Managment Systems
* A DBMS shold display ACID properties (Atomicity, Consistency, Isolation, Durability)
* **Atomicity:**
    * the concept that the components of a transaction are atomic, i.e. indivisible. The whole transaction must succeed or fail, a partial transaction cannot occur.
    * **Example:** You can not move money from a current accountto a savings account and have it leave the former but not appear in the latter due to a system fault.
* **Consistency:**
    * This refers to the fact that the database must be in a consistent state before and after the transaction. It ensures that an illegal transaction is rejected so that the integrity of the database is upheld.
* **Isolation:**
    * Ensures that multiple transactions can occur concurrently without leading to the inconsistency of the database state. Each transaction is isolated and dealt with in a way that does not affect others.
* **Durability:**
    * Ensures that data is saved once a transaction has been completed. Even if there is a hardware failure immediately after a transaction, the data will be safe.