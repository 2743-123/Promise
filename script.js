let mypromit = new Promise(function(resolve,reject){
let success = true;
if (success){
resolve("the operation was success full");
}else{
    reject("the operation failled")
}
});
mypromit
.then(function(result){
    console.log(result);

})
.catch(function(error){
console.log(error)
})