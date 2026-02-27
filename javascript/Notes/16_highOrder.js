
// ["", "", ""]
// [{}, {}, {}]

// For of 

const arr1 = [ 1, 2, 3, 4, 5]
for (const num of arr1) {
    // console.log(num);   
}

const location = "Jawala Ji"
for (const loc of location) {
    if (loc == " ") {
        break
    }
    // console.log(`Each char is ${loc}`)
}

 
// Maps 
const map = new Map()            // Map are the objects that hold key value pairs
map.set('IN', "India")           // iteratable by for of loop
map.set('UK', "United Kingdom")
map.set('UAE', "United Arab Emirates")
map.set('RS', "Russia")
map.set('IN', "India")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ': ', value);
    
}

// for (const key in map) {
//     console.log(key);
// }





// Objects can be iterated using [For In] loop 
const HPBeautifulPlaces = {
    loc1: "Dharamshala",
    loc2: "Kaza",
    loc3: "Leh",
    loc4: "Jibhi"
}

for (const key in HPBeautifulPlaces) {
    console.log(`${key} is ${HPBeautifulPlaces[key]}`);
    
}



const PLanguages = ["js", "cpp", "dbms", "C"]
for (const key in PLanguages) {
    // console.log(PLanguages[key]);
}





// Array - forEach
const HPdistt = ["Chamba", "Kangra", "Hamirpur", "Sirmour","Kinnaur", "Shimla",
                 "Lahaul & Spiti", "Bilaspur", "UNA", "Solan", "Mandi", "Kullu" ]

// 1.
HPdistt.forEach( function (distt) {
    // console.log(distt);
} )


// 2.
HPdistt.forEach( (distt)=>{
    // console.log(distt);
} )


// 3.
function printit(distt) {
    // console.log(distt);
}
HPdistt.forEach(printit)


// 4.
HPdistt.forEach( (val, index, array) => {
    console.log(val, index, array);    
} )




const coding = [                         // Array k andar Object
    {
        languageName: "Javascript",
        languageFileNmae: ".js"
    },
    {
        languageName: "Java",
        languageFileNmae: ".java"
    },
    {
        languageName: "Python",
        languageFileNmae: ".py"
    }
]

coding.forEach( (item) => {
    // console.log(`Extention of ${item.languageName} file is ${item.languageFileNmae}`);
    
} )




const Depot = ["Parwano", "Una", "Taradevi", "Reckong Peo", "Nalagarh"]

const values = Depot.forEach( (places) => {      // for each loop do not returns in a function
    // console.log(places);
    return places

} )

// console.log(values);
