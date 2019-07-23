interface vehicle{
    color:string
    engine:number
    mirror:boolean
}

let BMW={
    color:"Red",
    engine:1000,
    mirror:true
}

let Benz={
    color:"Blue",
    engine:1500,
    mirror:false
}

function validateVehicle(car:vehicle):void{
    console.log(car.color)
    console.log(car.engine)
    console.log(car.mirror)
}

validateVehicle(BMW)
validateVehicle(Benz)