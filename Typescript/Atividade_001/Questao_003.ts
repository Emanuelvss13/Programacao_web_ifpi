enum States {
    PI,
    CE,
    MA
}

//a
for(let i = 0; i < 3 ; i++){
    console.log(States[i])
}

//b
for(let i = 0; i < 3 ; i++){
    console.log(States[States[i]])
}