interface SubmitProps {
    children : string;
    onClick: () => void;
}

const Button = ({ children, onClick }: SubmitProps ) => {
       return(
        <button className='btn btn-primary' onClick={onClick}>{children}</button>
        
       )
}

export default Button