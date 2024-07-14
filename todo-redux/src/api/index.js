import Chance from "chance";
 
const chance = Chance();

export const fakeUsereData = () => {
    
    return chance.name({middle : true})
}