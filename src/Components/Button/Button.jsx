

const Button = ({children}) => {
    return (
        <div className="bg-blue-500 text-white w-full text-xl p-2 rounded inline">
           <button>{children}</button> 
        </div>
    );
};

export default Button;