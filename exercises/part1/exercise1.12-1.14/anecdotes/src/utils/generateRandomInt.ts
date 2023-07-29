//cc. Mozilla Developer Network
//Generate random integer between two numbers [min, max]
//Both Min and Max number are inclusive
function getRandomInt(min:number, max:number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}
  
export default getRandomInt