// Code your solution here
function findMatching(driversArray,nameToFind){
    let listOfDrivers = [];
    driversArray.filter(function(nm){
        // mke sure the case matches by compatring both to lower case versions
        if (nm.toLowerCase() === nameToFind.toLowerCase())
            listOfDrivers.push(nm); // push to the list of drivers
    });
    return listOfDrivers;
}

function fuzzyMatch(driversArray, nameToFind){
    let listOfDrivers = [];
    driversArray.filter(function(nm){
        if ( nm.slice(0, 2).toLowerCase() === nameToFind.slice(0, 2).toLowerCase() )
            listOfDrivers.push(nm);
            // console.log(`Trying to fuzzy match ${nameToFind.slice(0, 2).toLowerCase()} to name: ${nm.slice(0, 2).toLowerCase()}`);
            // reference - I tried changing nameToFind into an array, but didnt' keep it as a string
            // ^^ In the end it was easier to compare both names as arrays
            // ^^ The .slice() method was super valuable here
    })
    // console.log(listOfDrivers);
    return listOfDrivers;
}

function matchName(driversArray, nameToFind){
    let listOfDrivers = [];
    // we have to change the whole condition for this one
    // driversArray returns an array of objects this time
    // ^^ each object has a 'name' and 'hometown'
    driversArray.filter(function(driverObj){
        // return each element whose name property matches the name to find
        // gotta access the driver objects' names
        if(driverObj.name.toLowerCase() === nameToFind.toLowerCase())
            listOfDrivers.push(driverObj);
            // console.log(`trying to find ${nameToFind}, comparing with driver ${driverObj.name}`)
    })
    return listOfDrivers;
}