const age = 31              // age
const gender = 'm'          // 'm' or 'f'
const heightInM = 1.79      // height in m
const weightInKg = 82       // weight in kg
const dailyExercise = true  // true or false


const bmi = weightInKg / (heightInM * heightInM)

console.log(bmi) 

const idealWeight = 22.5 * (heightInM * heightInM)

console.log(idealWeight)

const gendermodifier = gender === 'm' ? 5 : -161
const bmr = 10 * weightInKg + 6.25 * (heightInM * 100) - 5 * age + gendermodifier

console.log(bmr)

const exerciseModifier = dailyExercise === true ? 1.5 : 1.2
const caloriesPerDay = bmr * exerciseModifier

console.log(caloriesPerDay)

const weightDifferenceToIdealWeight = idealWeight - weightInKg
const dietWeeks = Math.abs(weightDifferenceToIdealWeight / 0.5)
const dietModifier = weightDifferenceToIdealWeight < 0 ? -500 : 500
const dietCaloriesPerDay = caloriesPerDay + dietModifier

console.log(`If you want to get to your ideal weight: 
Eat ${Math.round(dietCaloriesPerDay)} calories a day for ${Math.round(dietWeeks)} weeks
`)





