function LoginFormSelectButton(props){
    return(
        <div id='loginFormSelectButton'
        className='formSelectButton'
        data-is-form-selected={props.isFormSelected}
        onClick={props.onClick}>
            <div>
                Login
            </div>
        </div>
    );
}

export default LoginFormSelectButton;