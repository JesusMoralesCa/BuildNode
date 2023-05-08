const generatedPassword = (base) => {
  let password = "";
  for(let x = 0; x < 12; x++){
      let random = Math.floor(Math.random() * base.lenght);
      password += base.charAt(random);
  }
  return password;
};

const generate = () => {
    let base = "abcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ";
    const numbers = "0123456789";
    const symbols = ".,;-_¡!¿?*%&$()[]{}|@><";
    
    base += numbers;
    base += symbols;
    
    return generatePassword(base);
};

export default generate;
