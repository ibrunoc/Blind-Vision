import Glasses from "../../Assets/Glasses.svg"
import Visa from "../../Assets/VISA.svg"
import AmericanExpress from "../../Assets/AmericanExpress.svg"
import Paypal from "../../Assets/paypal.svg"
import {Background,PaymentsArea} from "./style"

export function Banner() {

  return (
   <>
      <Background>
        <div className="Container">
            <div className="TextArea">
              <h1>Bem <br/> vindo</h1 >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam integer iaculis sollicitudin turpis proin maecenas. Quis potenti dignissim cras volutpat quis faucibus id hac. Turpis pellentesque bibendum nibh faucibus pretium nec. Nulla natoque montes, suspendisse suspendisse.</p>
            </div>

            <div className="Image">
              <img  className="ImgGlass"src={ Glasses } alt="Payment"/>
    
            </div>
        </div>
      </Background>
      <PaymentsArea>
        <img  className="imgpayment"src={ Visa } alt="Payment"/>
            <img className="imgpayment" src={AmericanExpress} alt="Payment" />
              <img  className="imgpayment"src={ Paypal } alt="Payment"/>
              <img  className="imgpayment"src={ Visa } alt="Payment"/>
            <img className="imgpayment" src={AmericanExpress} alt="Payment" />
              <img  className="imgpayment"src={ Paypal } alt="Payment"/>
      </PaymentsArea>
    </>
  );
  
  }