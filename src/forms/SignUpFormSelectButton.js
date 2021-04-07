function SignUpFormSelectButton(props){
    return(
        <div id='signUpFormSelectButton'
        className='formSelectButton'
        data-is-form-selected={props.isFormSelected}
        onClick={props.onClick}>
            <div>
                Sign Up
            </div>
        </div>
    );
}

export default SignUpFormSelectButton;