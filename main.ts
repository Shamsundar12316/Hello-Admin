// part 25// question 30 
// make array of your five username

let users: string[] = ["sham","radai","kirshana","lal","admin"]
for(let user of users)
    if(user === `admin`){
        console.log(`Hello admin, would you like to see  a status report`)
    }
    else{
        console.log(`Hello ${user}, thank you for logging in again`)
    }
