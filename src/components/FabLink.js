/** 
 * @author: alexandercds
 * @description: 
 * @date: 12/septiembre/2021
**/  

const FabLink = (props) => {
    const { className, children, handleClick } = props 
    return (
        <div 
        className="btn-fab" 
        onClick={handleClick}>  
            <a 
            href="#"
            className={`${className}`} >
                {children}
            </a> 
        </div>
    );
}
  
export default FabLink;