/*
'''
Tax Calculator

You are given a list of tax brackets, each defined by a range of taxable income and a marginal tax rate
 Your task is to write a function that takes in a taxable income and returns the amount of tax payable on 
 that income based on the given tax brackets.

Write a function that takes the following parameters:

taxable_income: a float representing the amount of taxable income
brackets: a list of tuples, where each tuple contains three floats: the lower limit of the bracket (exclusive),
the upper limit (inclusive), and the marginal tax rate for that bracket. The first tuple should represent the lowest
bracket with a lower limit of 0 and an upper one greater than 0.

The function should return the total amount of tax payable on the taxable_income, calculated as the sum of the 
tax payable for each bracket.

[Optional]: How would you account for deductions? What about tax credits?

Further reading: https://www.nerdwallet.com/article/taxes/federal-income-tax-brackets
 

EXAMPLE(S)
If the taxable income is $80,000 and the tax brackets are:
[(0, 10000, 0.10), (10000, 30000, 0.15), (30000, 60000, 0.25), (60,000, float('inf'), 0.35)]

The function should return 18500 because of the following calculation:

The first $10,000 is taxed at 10%, which is $1,000
The next $20,000 is taxed at 15%, which is $3,000 // 70,000
The next $30,000 is taxed at 25%, which is $7,500 // 50,000
The remaining $20,000 is taxed at 35%, which is $7,000 // 20,000
The total tax payable is $1,000 + $3,000 + $7,500 + $7,000 = $18,500
 

FUNCTION SIGNATURE
function calculate_tax(taxable_income, brackets) {
def calculate_tax(taxable_income: float, brackets: List[Tuple[float, float, float]]) -> float:
'''

- requiremetns
taxable_income: a float representing the amount of taxable income
brackets: a list of tuples, where each tuple contains three floats: the lower limit of the bracket (exclusive),
the upper limit (inclusive), and the marginal tax rate for that bracket. The first tuple should represent the lowest
bracket with a lower limit of 0 and an upper one greater than 0.

Special Cases:
- 
income 90,000
[(0, 10000, 0.10), (10000, 30000, 0.15), (40000, 90000, 0.25), (90,000, float('inf'), 0.35)]

The first $10,000 is taxed at 10%, which is $1,000 // 80,000
The next $20,000 is taxed at 15%, which is $3,000 // 60,000
The next $30,000 is taxed at 25%, which is $7,500 // 30,000
The remaining $20,000 is taxed at 35%, which is $7,000
The total tax payable is $1,000 + $3,000 + $7,500 + $7,000 = $18,500


income: 80,000
remaining: income -> know when to stop applying tax brackets
1st: 0 - 10,000 => 10k * 10% => 1000


taxSum = 1000


// If income is not within range of hte first bracket => return 0
income 20,000
[(20,000, 50,000, 0.10)]
tax = 0


pusedocode

Rule:
taxSum = 0;
taxableIncome = income;

while(
  taxableIncome > 0;
 
) {


 currentBracket
 [lowerBound, upperbound, rate] = currentBracket
 if (income < lowerBound ) {
  return taxSum
  }
 
 else
 difference = upperbound - lowerbound
  // 

  taxSum += calculate the tax (difference)
  update taxableIncome with(deduct upperbound from ther taxableIncome)

  iterate until we don't have any taxableIncome
  }

  last bucket lower = 90k 
  buycket before tghe last upper = 70k - 75k
  50-70
  income = 80k

*/

function calculate_tax(taxable_income, brackets) {
  let taxSum = 0, taxableIncome = taxable_income;

  for (const [lowerBound, upperBound, rate] of brackets) {
    if (taxable_income <= lowerBound) {   
      return taxSum;
    } else {
      const difference = upperBound - lowerBound; // 60,000
      const offset = Math.min(difference, taxableIncome); // 20,000
      taxSum += offset * rate;
      taxableIncome -= offset;
    }
  }
  return taxSum;
}

// time: O(n)
// space: O(1)



console.assert(
  calculate_tax(
    80000,
    [[0, 10000, 0.10], [10000, 30000, 0.15], [30000, 60000, 0.25], [60000, Number.MAX_SAFE_INTEGER, 0.35]]
  ) === 18500,
  'Example 1 failed'
);



console.assert(
  calculate_tax(
    20000,
    [[20000, 25000, 0.10], [25000, 30000, 0.15], [30000, 60000, 0.25], [60000, Number.MAX_SAFE_INTEGER, 0.35]]
  ) === 0,
  'Case, where tax should be 0'
);

console.log(
   calculate_tax(
    25001,
    [[0, 25000, 0.10], [25000, 30000, 0.15], [30000, 60000, 0.25], [60000, Number.MAX_SAFE_INTEGER, 0.35]]
  ) 
)

console.assert(
  calculate_tax(
    20000,
    [[20000, 25000, 0.10], [25000, 30000, 0.15], [30000, 60000, 0.25], [60000, Number.MAX_SAFE_INTEGER, 0.35]]
  ) === 0,
  'Case, where tax should be 0'
);