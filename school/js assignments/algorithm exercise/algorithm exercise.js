/* perimeter and area of square
step.1 => start
step.2 => input length of square as 'L'
step.3 => perimeter = (L * 4); area = (L**2)
step.4 => display perimeter and area in prefered unit
step.5 => stop
*/

const perimeterAreaSquare = L => console.log(`perimeter = ${L * 4}cm, area = ${L ** 2}cm²`);

/* perimeter and area of rectangle
step.1 => start
step.2 => input length of rectangle as 'L', input width of rectangle as 'W'
step.3 => perimeter = ((L*2)+(W*2)); area = (L*W)
step.4 => display perimeter and area in prefered unit
step.5 => stop
*/

const perimeterAreaRectangle = (L, W) => console.log(`perimeter = ${L * 2 + W * 2}cm, area = ${L * W}cm²`);

/* calculating simple interest
step.1 => start
step.2 => input variables P, N, R and SI. P = Principle Amount, N = time in years, R = % annual rate of interest
          SI = simple interest
step.3 => SI = P*(1 + (R*N))
step.4 => display simple interest in prefered monitary unit
step.5 => stop
*/

const simpleInterestCalc = (P, N, R) => console.log(`your final amount after ${N} years = $${(P * (1 + ((R / 100) * N))) - P}.`);

/* check if user input is a consonant or vowel
step.1 => start
step.2 => input varter as 'input'
step.3 => display if 'input' is either a vowel or a consonant
step.4 => stop
*/

const vowelCheck = input => "aeiouAEIOU".indexOf(input) ? console.log(`${input} is a consonant`) : console.log(`${input} is a vowel`);