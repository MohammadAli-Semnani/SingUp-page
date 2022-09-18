export const validata = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 
      "Username is required";
    } else {
      delete errors.name;
    }


    if (!data.email) {
      errors.email = 
      "email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
    ) {
      errors.email = 
      "Email address is invalid";
    } else {
      delete errors.email;
    }


    if (!data.password) {
      errors.password = 
      "password is required";
    } else if (data.password.length < 6) {
      errors.password = 
      "be should 6 charector or more";
    } else {
      delete errors.password;
    }


    if (!data.confirmPassword) {
        errors.confirmPassword =
            "please confirm above password";
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword =
            "password don't match";
    } else {
    delete errors.confirmPassword;
    }  


    if (data.isAccepted) {
        delete errors.isAccepted
    } else { 
        errors.isAccepted =
          "accept our regulation";
    }


    return errors;
};
