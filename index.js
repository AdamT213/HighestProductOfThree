function highestProductOf3(arrayOfInts) {
  //raise error if there are less than three ints
   if (arrayOfInts.length < 3) {
      raiseError('Less than 3 items!')
   }
  //initialize highestProductOfThree to the product of the first three ints
  let highestProductOfThree = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2]
  
  //if the array is length 3, the highest product is just the product of 
  //all the ints
  if (arrayOfInts.length == 3) { 
      return highestProductOfThree 
  } 
  //initialize highest to the max of the first two ints
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1])
  //initialize lowest to the lowest of the first two ints
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]) 
  //initialize highestProductOfTwo to the product of the first two ints
  let highestProductOfTwo = arrayOfInts[0] * arrayOfInts[1]  
  //initialize lowestProductOfTwo to the product of the first two ints
  let lowestProductOfTwo = highestProductOfTwo 
  
  for (let i = 2; i < arrayOfInts.length; i++) { 
      //at each step, set current to be the current value
      let current = arrayOfInts[i] 
      //check if highestproductofthree changes by comparing it to current 
      //* the current highestValueOfTwo & current * the current lowestValueOfTwo
      highestProductOfThree = Math.max(highestProductOfThree, current * 
      highestProductOfTwo, current * lowestProductOfTwo) 
      
      //check if highestProductOfTwo changes by comparing it to current * the 
      //current lowest and current * the current highest
      highestProductOfTwo = Math.max(highestProductOfTwo, current * highest, 
      current * lowest) 
      
      //check if lowestProductOfTwo changes by comparing it to current * the current
      //highest and current *  the current lowest
      lowestProductOfTwo = Math.min(lowestProductOfTwo, current * highest, 
      current * lowest)  
      
      //check if highest changes by comparing it to the current value
      highest = Math.max(highest, current) 
      
      //check if lowest changes by comparing it to the current value
      lowest = Math.min(lowest, current) 
  } 
  
  return highestProductOfThree
}
