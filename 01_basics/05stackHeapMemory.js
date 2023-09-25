let user1Name = "shawon"
let user2Name = user1Name
user2Name = "nowshad"// this won't change value of  user1Name (stack memory) 
//console.log(user1Name);
const user1Info = {
    Name: "Shawon",
    email: "shawon@gmail.com"
}
const user2Info = user1Info
// const user2Info{
//     Name: "Nowshad";
//     email: "nowshad@gmail.com"
// }
user2Info.email = "nowshadislam@gmail.com"// this will change user1Info.email (heap memory)
console.log(user2Info.email)
console.log(user2Info.email)
/* Primitive data types use Stack Memory & Non-primitive data types use Heap Memory */
// copy of value VS direct memory reference
