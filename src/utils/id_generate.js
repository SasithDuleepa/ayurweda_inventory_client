

const IdGenerate = (name) => {
    const timestamp = Date.now().toString(); // Get current timestamp
    const random = Math.random().toString().substr(2, 4); // Get 4 random digits
    const uniqueID = timestamp.substr(-4) + random; // Combine timestamp and random digits
    const id = `${name}-${uniqueID}` ; // Combine name and unique ID
    return id;
}


    module.exports = IdGenerate;