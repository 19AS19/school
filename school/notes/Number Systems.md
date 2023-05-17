 # Number Systems
 * The Binary Number system was invented in 
    * Binary number systems have two values - 1 or 0
    * The number of digits in a number system is its base
    * Binary is base 2 - {0,1}
    * Decimal is base 10 - {0,1,2,3,4,5,6,7,8,9}

 **Why do we care?**
 
 >* We care because the binary nymber system is the foundation of all computer systems and operations
>* George Boole devised a way of representing philosophical logic as mathematical logic.
 >* He invented Boolean Logic which is a logical theory which is centered around three simple words known as Boolean Operators: "Or", "And" and "Not".
 >* George Boole also invented symbolic logic, now known as Boolean Algebra which is a branch in algebra where values are either true or false, usually denoted by 1 and 0.
 >* Alan Turing, pointed out in the 1930s that, with Boolean algebra and only three logical functions, OR, AND, NOT all computer calculations can be carried out.

 **Binary Addition**
 
 MOST IMPORANT CONCEPT

                                            0+0=0
                                            0+1=1
                                            1+0=1
                                            1+1+10
                                           1+1+1=11

**Convert Binary to Decimal (ase 2 to Base 10)**
| 2^3 | 2^2 | 2^1 | 2^0 |
|-----|-----|-----|-----|
| 1   | 0   | 1   | 1   |

= 8 + 0 + 2 + 1 == 11


**Convert Decimal to Binary**
* Given a decimal number N:
    1. Divide the number by 2 - N/2
    2. The remainder is the first digit of our binary number
    3. Divide the quotient by 2 - this is the second digit of our binary number 
    4. Repeat step 3 until the qutient is 0
    5. Write the number from bottom to top

    
| 2 | 4 | 0 |
|---|---|---|
| 2 | 2 | 0 |
| 2 | 1 | 1 |
|   | 0 |   |

* Convert 25 from Decimal to Binary


| 2 | 25 | 1 |
|---|----|---|
| 2 | 12 | 0 |
| 2 | 6  | 0 |
| 2 | 3  | 1 |
| 2 | 1  | 1 |

**Hexadecimal number system (base 16)**
* Hexadecimal is base 16 - {0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F}

**Why do we care?**
* Hexadecimal generally:
    * Is easier for humans to read
    * Shorter to write
    * Has less chance of transcription errors

| 16^3 | 16^2 | 16^1 | 16^0 |
|------|------|------|------|
| 1    | 0    | 1    | 1    |

= 4096 + 0 + 16 + 1 = 4113

**Convert the followibng from Hexadecimal to Decimal:**

| 16^2 | 16^1 | 16^0 |
|------|------|------|
| 4    | C    | D    |

= (4x16^2) + (12x16^1) + (13x16^0) = 1217

| 16^2 | 16^1 | 16^0 |
|------|------|------|
| 1    | A    | B    |

= (1x16^2) + (10x16^1) + 1 = 256 + 176 + 1 = 427 

**Convert Decimal to Hexadecimal**
* Given a decimal number N:
    1. Divide the number by 16 - N/16
    2. The remainder is the first digit of our binary number
    3. Divide the quotient by 16 - this is the second digit of our binary number 
    4. Repeat step 3 until the quotient is 0
    5. Write the number from bottom to top

**Convert Hexadecimal to Binary:**
 * Take each digit in the hexadecimal number
 * Write each digit as it base 10 value
 * Convert each digit to binary
 * Note: Every hex digit needs to be epresetnted by 4 binary digits. If your conversion has less than 4 digits, pad it to the left with 0s.

 **Convert binary to hexadecimal:**
 * Take each group of four binary digits - if short add extra 0's to the left
 * Write each digit as its base 10 value
 * Write each base 10 digit as its Hexadecimal value


 **Why do computers use binary?**
 * The computer processors is built of transistors which have an on-off state
 * The on state represents a 1 in Boolean algebra or electricity flowing above a certain voltage level in our curcuit
 * vice verca for 0
 * Computers can transmit and receive binary data easily