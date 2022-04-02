const Teaching= require('../models/teaching');

const teaching = [
    {
        year: 2022,
        info:[
            {
                status:"On Going",
                semester: "Even",
                courseCode: "xyz",
                courseName: "XYZ",
                level:"XYZ",
                courseLink:"xyz"
            }
        ]
    },
    {
        year: 2021,
        info:[
            {
                status:"On Going",
                semester: "Even",
                courseCode: "xyz",
                courseName: "XYZ",
                level:"XYZ",
                courseLink:"xyz"
            }
        ]
    }
];

const Teach = async()=>{
   await Teaching.insertMany(teaching);
};
module.exports = Teach;