const Talk = require('../models/talk');

const TalkList = [
    {
        year:2021,
        info:[
            {
                title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque nisi ad, corporis praesentium dicta necessitatibus hic, minima, repellendus aliquid quas ipsa sint ex? Hic in quam impedit illum tempore!",
                place:"XYZ",
                date:"XYZ"
            }
        ]
    },
    {
        year:2020,
        info:[
            {
                title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque nisi ad, corporis praesentium dicta necessitatibus hic, minima, repellendus aliquid quas ipsa sint ex? Hic in quam impedit illum tempore!",
                place:"XYZ",
                date:"XYZ"
            }
        ]
        
    }
]

const talk = async()=>{
    await Talk.insertMany(TalkList);
}
module.exports = talk;