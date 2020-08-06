// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// create a function that accepts a string
const codeMessage = (string) =>{
    // convert the string to all lowercase
    let newString = string.toLowerCase()
    
    // loop through the new string
    for (let i = 0; i < string.length; i++) {
        // if the character is an 'a' convert it to 4
        if (newString.charAt(i) == 'a'){
            newChar = '4'
            // and update the string and add the new character by slicing the string at the index location
            newString = newString.slice(0, i) + newChar + newString.slice(i+1)
        } else if (newString.charAt(i) == 'e'){
            // else if the character is an 'e' convert it to a 3
            newChar = '3'
            // and update the string and add the new character by slicing the string at the index location
            newString = newString.slice(0, i) + newChar + newString.slice(i+1)
        } else if (newString.charAt(i) == 'i'){
            // else if the character is an 'i' convert it to a 1
    
            newChar = '1'
            // and update the string and add the new character by slicing the string at the index location
            newString = newString.slice(0, i) + newChar + newString.slice(i+1)
        } else if (newString.charAt(i) == 'o'){
            // else if the character is an 'o' convert it to a 0
            newChar = '0'
            // and update the string and add the new character by slicing the string at the index location
            newString = newString.slice(0, i) + newChar + newString.slice(i+1)
        } 
    
    }
    // return the udpate new string
    return newString
}

console.log(codeMessage(secretCodeWord1))
console.log(codeMessage(secretCodeWord2))



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// create a function that takes in an array
const arrayOfAWords = (array) => {
    // filter through the array and isolate each word
    // change each word to lowercase
    // and return the word if it has an 'a' 
        return array.filter(word => word.toLowerCase().includes('a'))

}

console.log(arrayOfAWords(arrayOfWords))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

// create a function that takes in an array
const fullHouse = (array) => {
    // check if  input array has 5 numbers
    if (array.length == 5) {
        // create an empty array to count the frequency of each number
        let frequencies = []
        //loop through numbers 0 through 9
        for (let i = 0; i < 10; i++) {
            //count the occurences of each number (0 to 9) in the input array by looping through the input array
            let count = 0
            for (let j = 0; j < array.length; j++) {
                //if the value in the array is equal to the current number, add to the count
                if (i == array[j]){
                    count += 1
                }
            }
            //only add the number of occurrences if it's greater than 0
            if (count > 0) {
                frequencies.push(count)
            }   
            
        }
        

        // if there is a full house, 2 occurrences of one number and three of another
        if (frequencies.includes(2) && frequencies.includes(3)){
            // display true
            return true
        } else {
            return false
        }

    // if the array is not 5 numbers, it cannot be a full house
    } else {
        return false
    }
}

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))