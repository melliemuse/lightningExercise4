const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(nashvilleSoftwareSchool.instructors.partTime)

const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime

for(let i = 0, i < partTimeInstructors.length, i++) {
    console.log(partTimeInstructors[i])
}

const fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime

for(let i = 0, i < fullTimeInstructors.length, i++) {
    console.log(fullTimeInstructors[i])
}


// For in loop //

const instructorsObj = nashvilleSoftwareSchool.instructors 
for (let key in instructorsObj)[key] {
for (let i = 0; i < fullTimeInstructors.length, i++) {
  
}
}


// Just output Andy and Zoe to the console //

console.log("Andy: ", fullTimeInstructors[fullTimeInstructors.length-1]);
console.log("Zoe: ", nashvilleSoftwareSchool.instructors.partTime[0])