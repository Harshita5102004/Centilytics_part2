
// first Promise
// create a Normal Promise
let myPromise = new Promise((resolve, reject) => {
   
    let success = true; 
    if (success) {
        resolve("Operation Successful!");
    } else {
        reject("Operation Failed!");
    }
});


myPromise.then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promise completed.");
    });


  

// second promise
// Real world example of Promise
    function fetchUserData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = { id: 1, name: "Harshita Nagar" };
                resolve(user);
            }, 2000);
        });
    }
    
    fetchUserData().then((user) => console.log("User Data:", user));
    





  
 // third Promise

    let Promise1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("This is my first promise");
        },9000)
     })
    
    
     Promise1.then(function(){
        console.log("outputis:");
     })