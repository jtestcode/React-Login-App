import database from '../database/database.js';

let inputValidation = {
    //actually don't need stateValue here for validating email input, but will need it for checking valid login
    checkIfEmailIsValidAndPrintError : function(userEmailInput/*, stateValue*/){
        if(userEmailInput === ''){
            return 'empty';
        }
        if(!/(?=^(.{1,64})[@](.{1,})[\.]([^\.]{1,})$)(?=^.{0,254}$)/.test(userEmailInput)){
            return 'invalid';
                // regex info:
                // checks basic format of something@something.something (@ and . must be present, with any characters following and proceeding them)
                // checks that it doesn't end with a period .
                // checks that the local-part (the part before @) is at least 1 but no more than 64 characters
                // checks that the entire e-mail address is no more than 254 characters
        }
        else{
            return '';
        }
    },

    //actually don't need stateValue here for validating username input, but will need it for checking valid login
    checkIfUsernameIsValidAndPrintError : function(usernameInput/*, stateValue*/){
        if(usernameInput === ''){
            return 'empty';
        }
        if(!/^[A-Za-z0-9]{3,24}$/.test(usernameInput)){
            return 'invalid';
                // regex info:
                // checks that the username is 3 to 24 characters with only letters and/or numbers (uppercase or lowercase)
        }
        else{
            return '';
        }
    },

    //actually don't need stateValue here for validating email input, but will need it for checking valid login
    checkIfPasswordIsValidAndPrintError : function(userPasswordInput/*, stateValue*/){
        if(userPasswordInput === ''){
            return 'empty';
        }
        if(!/(?=^.{8,64}$)(?=.*\d)(?=.*[A-Za-z])/.test(userPasswordInput)){
            return 'invalid';
                // regex info:
                // checks that the password is 8 to 64 characters and has at least 1 digit, has at least one letter (uppercase or lowercase)
        }
        else{
            return '';
        }
    },

    validateInputUpdateErrorAndReturnIfValid : function(inputValue, inputField, formInstance){
        let isInputValid = true;

        if(inputField === 'userEmail'){
            let inputError = inputValidation.checkIfEmailIsValidAndPrintError(inputValue);
            formInstance.setState(
                { 
                    userEmailInputError : inputError
                }
            );
            if(inputError){
                isInputValid = false;
            }
        }
        else if(inputField === 'userPassword'){
            let inputError = inputValidation.checkIfPasswordIsValidAndPrintError(inputValue);
            formInstance.setState(
                { 
                    userPasswordInputError : inputError
                }
            );
            if(inputError){
                isInputValid = false;
            }
        }
        else if(inputField === 'username'){
            let inputError = inputValidation.checkIfUsernameIsValidAndPrintError(inputValue);
            formInstance.setState(
                { 
                    usernameInputError : inputError
                }
            );
            if(inputError){
                isInputValid = false;
            }
        }

        return isInputValid;
    },

    validateAllInputsUpdateErrorsAndReturnIfSubmitValid : function(formInstance){
        let isSubmitValid = true;

        if(formInstance.state.userEmail !== undefined){
            if(!this.validateInputUpdateErrorAndReturnIfValid(formInstance.state.userEmail, 'userEmail', formInstance)){
                isSubmitValid = false;
            }
        }

        if(formInstance.state.userPassword !== undefined){
            if(!this.validateInputUpdateErrorAndReturnIfValid(formInstance.state.userPassword, 'userPassword', formInstance)){
                isSubmitValid = false;
            }
        }

        if(formInstance.state.userPassword !== undefined){
            if(!this.validateInputUpdateErrorAndReturnIfValid(formInstance.state.username, 'username', formInstance)){
                isSubmitValid = false;
            }
        }

        return isSubmitValid;
    },

    isSignUpEmailUnique : function(formInstance){
        let isSignUpEmailUnique = true;

        database.users.map(function(item){
            if(item.email === formInstance.state.userEmail){
                return isSignUpEmailUnique = false;
            }
        });

        return isSignUpEmailUnique;
    },

    doLoginEmailAndPasswordMatchDatabase: function(formInstance){
        let isThereMatchInDatabase = false;

        database.users.map(function(item){
            if(item.email === formInstance.state.userEmail &&
            item.password === formInstance.state.userPassword){
                return isThereMatchInDatabase = true;
            }
        });

        return isThereMatchInDatabase;

    },

    checkEmailAndPasswordAgainstDatabaseUpdateSubmitErrorAndReturnIfMatch: function(formInstance){
        let doEmailAndPasswordMatchDatabase = this.doLoginEmailAndPasswordMatchDatabase(formInstance);

        console.log('doEmailAndPasswordMatchDatabase:', doEmailAndPasswordMatchDatabase);

        if(!doEmailAndPasswordMatchDatabase){
            if(formInstance.state.userEmail === '' || formInstance.state.userPassword === ''){
                formInstance.setState(
                    { submitError : 'empty field' }
                );
                return false;
            }
            else{
                formInstance.setState(
                    { submitError : 'no database match' }
                );
                return false;
            }
        }

        formInstance.setState(
            { submitError : '' }
        );
        return true;

    },

    checkEmailAgainstDatabaseUpdateSubmitErrorAndReturnIfUnique : function(formInstance){
        let isEmailUnique = this.isSignUpEmailUnique(formInstance);
        
        if(!isEmailUnique){
            formInstance.setState(
                { submitError : 'email already registered' }
            );
            return false;
        }

        formInstance.setState(
            { submitError : '' }
        );
        database.users.push(
            {
                username: formInstance.state.username, 
                email: formInstance.state.userEmail,
                password: formInstance.state.userPassword
            }
        );

        console.log('database:', database);
        return true;

    },

    returnUsernameFromEmailAndPassword : function(email, password){

        let username;
        
        database.users.map(function(item){
            if(item.email === email &&
            item.password === password){
                 username = item.username;
            }
        });

        return username;

    }

}

export default inputValidation;
