const obj = {
    name : "komal",
    id : 21241
};

function check(obj, new_name, ID)

{
    
if(new_name == obj.name && ID == obj.id)
{
    return true;
}
else
{
    return false;
}
}

const new_name = "komal";
const ID = 21241;

const result = check(obj,new_name,ID);
console.log(result);
