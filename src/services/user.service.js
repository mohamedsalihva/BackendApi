const users = [];

exports.getAllUsers =()=>{
    return users;
}

exports.createUser =(userData)=>{
    const newUser ={
        id: users.length + 1,
        name:userData.name,
        email:userData.email
    };
    users.push(newUser);
    return newUser;
}