const Workshop = require('../models/guidance');


const guidance = [
    {
    degree: "phd",
    info:[
        {
            name:"xyz",
            title:"xyz",
            time:"xyz",
            project:"ZYX",
            duration:"xyz",
            affiliation:"XYZ",
            status:"xyz"
        }
    ]
    },
    {
        degree:"master",
        info:[
            {
                name:"xyz",
                title:"xyz",
                time:"xyz",
                project:"ZYX",
                duration:"xyz",
                affiliation:"XYZ",
                status:"xyz"
            }
        ]
    },
    {
        degree:"bachelor",
        info:[
            {
                name:"xyz",
                title:"xyz",
                time:"xyz",
                project:"ZYX",
                duration:"xyz",
                affiliation:"XYZ",
                status:"xyz"
            }
        ]
    },
    {
        degree:"intern",
        info:[
            {
                name:"xyz",
                title:"xyz",
                time:"xyz",
                project:"ZYX",
                duration:"xyz",
            }
        ]
    }
]
const guidanceSeed = async()=>{
    await Workshop.insertMany(guidance);
}
module.exports = guidanceSeed;