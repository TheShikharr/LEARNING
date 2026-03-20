/*
1)

function checkResult() {
    return new Promise((resolve,reject) => {
        let pass = true;
        setTimeout(() => {
            if(!pass) {
            resolve("🎉 You passed the exam")
        } else {
            reject(new Error("❌ You failed the exam"))
        }
        }, 2000)
    })
}

async function showResult() {
    try{
         console.log("loading...")

         const result = await checkResult()
         console.log(result)

         console.log("Good Job")
    }    
    catch (e) {
        console.log(e.message);
        console.log("Better Luck next time");
        
    }
}
showResult()
*/



/*
2) 

function checkStock() {
    return new Promise((resolve, reject) => {
        let inStock = true

        setTimeout(() => {
            if(inStock) {
            resolve("Item in Stock")
        } else {
            reject("Item out of Stock")
        }
        }, 1000)

    })
}


function processPayment() {
    return new Promise((resolve, reject) => {

        let paymentSuccess = true

        setTimeout(() => {
            if(paymentSuccess) {
            resolve("Payment Successful")
        } else {
            reject("Payment Failed")
        }
        }, 2000)


    })
}


function generateOrder() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve("Order Confirmed")
        }, 1000)

    })
}


async function checkout() {
    try{
        console.log("checking item availability")

        const stock = await checkStock()
        console.log(stock);
        

        const payment = await processPayment()
        console.log(payment);


        const order = await generateOrder()
        console.log(order);


        console.log("Checkout completed!")

    }
    catch (e) {
        console.log("checkout failed: ", e);
        
    }
    
}
checkout()

*/

async function getWeather(latitude, longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
);

    if(!response.ok) {
        throw new Error(`ERROR: ${response.status}`)
    }

    const data = await response.json()
    const temperature = data.current_weather.temperature
    return temperature
}

const cities = {
    delhi: { lat: 28.6139, lon: 77.2090 },
    mumbai: { lat: 19.0760, lon: 72.8777 },
    london: { lat: 51.5072, lon: -0.1276 },
    chandigarh: { lat: 30.7333, lon: 76.7794 },
    shimla: { lat: 31.1048, lon: 77.1734 }
};


async function showWeather(city) {
city = city.toLowerCase();

    try{

    if (!cities[city]) {
    throw new Error("City not found");
    }

    const { lat, lon } = cities[city];
    const temperature = await getWeather(lat, lon);

    console.log(`Fetching weather for ${city}...`);
    console.log("Temperature: ",temperature);
    console.log("Done");
    
            
    }
    catch(e) {
        console.log("Network issue", e);
        
    }
}

showWeather("Mumbai")
showWeather("Delhi")
showWeather("Shimla")
showWeather("Chandigarh")

