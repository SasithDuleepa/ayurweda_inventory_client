import { MD5 } from 'crypto-js';

const IdGenerate =(args) =>{
    const currentDate = new Date();
        
    // Numeric part based on date and time components
    const numericPart = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}${currentDate.getHours().toString().padStart(2, '0')}${currentDate.getMinutes().toString().padStart(2, '0')}${currentDate.getSeconds().toString().padStart(2, '0')}`;
  
    // Alphanumeric part (including both numbers and letters)
    const alphanumericPart = Math.random().toString(36).substr(2, 4).toUpperCase(); // Adjust to get a 4-character alphanumeric part
  
    // Combine the numeric and alphanumeric parts to get a 6-character item code
    const itemCode = `${numericPart}${alphanumericPart}`;
  
    // Use md5 hash to shorten the item code
    const shortItemCode = MD5(itemCode).toString().substr(0, 8).toUpperCase(); // Adjust to get the desired length

    const finalCode = `${args}-${shortItemCode}`;
  
    return finalCode;
}

export default IdGenerate;