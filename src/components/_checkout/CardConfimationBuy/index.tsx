import "./style.css"

interface TypeCardConfirmationBuy{
    message: string;
    codeOrde: string;
    name: string;
    date: string;
}

const CardConfirmationBuy:React.FC<TypeCardConfirmationBuy> = ({codeOrde,date,message,name}) => {
    return(
        <div className="cardConfirmation">  
            <h1 className="cardConfirmation__message">{message}</h1>
            <p>{codeOrde}</p>
            <p>{name}</p>
            <p>{date}</p>
        </div>
    )
}


export default CardConfirmationBuy