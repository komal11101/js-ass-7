const obj1 = {
    id : 12,
    houseno : 122
};

function multiply(N)
{
    obj1.id *= N;
    obj1.houseno *=N;

    console.log(obj1.id);
    console.log(obj1.houseno);
}

multiply(2);
