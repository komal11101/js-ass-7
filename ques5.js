const obj = {
    name: "Utkarsh",
    rollNo : 129
};

const obj1 = {
    state : "Haryana",
    pincode : 121009
};

const obj2 = {...obj, ...obj1};
console.log(obj2);