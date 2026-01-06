export const loadState=()=>{
    try{
       const savedData=localStorage.getItem("appData");
        return savedData?JSON.parse(savedData):undefined

    }
    catch(err){
        return undefined
    }
}


