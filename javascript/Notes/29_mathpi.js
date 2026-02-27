const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

const car = {
    name: 'Virtus',
    price: '15 lakh',
    isAvailable: true,

    booking: function (){
        console.log(`not done yet`);
    }

}
console.log(Object.getOwnPropertyDescriptor(car, "isAvailable"));

Object.defineProperty(car, 'name', {
    // writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(car, 'name'));

for (const [key, value] of Object.entries(car)) {
    if(typeof value !== 'function') {
    console.log(`${key} : ${value}`);
    }
    
}