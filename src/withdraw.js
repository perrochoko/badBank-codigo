import React, { useContext } from "react";
import { MyContext } from "./globalcontext";

// import React from "react";
import Card from "./card";
// import Swal from 'sweetalert2';
import withdrawicon from "./logos/withdraw-icon.png"
// import retirochanchito from "./logos/retiro-chanchito.png";
// import logonomoney from "./logos/no-money-travolta.gif";

function Withdraw(){
    const {
        // state
        balanceMoneda,
        withdraw,
        HandleWithdraw,
        ConfirmacionRetiro,
        button3
 
      } = useContext(MyContext);

    //     const [withdraw, setWithdraw] = useState('');
    //     const [balance, setBalance] =  useState(10);
    //     const [button3, setButton3]     = useState(true);
    
    // // ----------- formato moneda en el formulario-----
    //     const f = new Intl.NumberFormat(
    //         'es-CL', 
    //             {
    //                 style: 'currency',
    //                 currency: 'USD',
    //             });
    //     const balanceMoneda = f.format(balance);
    
    // // -----alertas------

    //     function sinSaldo (){
    //         Swal.fire(
    //             {   title: '¡NO HAY SALDO PARA RETIRO!',
    //                 imageUrl: logonomoney,
    //                 imageWidth: 300,
    //                 imageHeight: 200,
    //                 imageAlt: 'Custom image',
    //             });
    //         setWithdraw('');
    //         setButton3(true);
    //         }


    //     function ConfirmacionRetiro() {           
    //         // formato moneda en la alerta delmonto a depositar
    //         const f = new Intl.NumberFormat(
    //             'es-CL', 
    //                 {
    //                     style: 'currency',
    //                     currency: 'USD',
    //                 // minimunFractionDigits: 1,
    //                 });
    //         const moneda = f.format(withdraw);
    
    //             Swal.fire({
    //             title: 'CONFIRMACION DE RETIRO',
    //             text: "Estas a punto de realizar retiro por el siguiente monto: " + moneda,
    //             showCancelButton: true,
    //             cancelButtonText: 'Modificar',
    //             showDenyButton: true,
    //             confirmButtonText: 'Confirmar',
    //             denyButtonText: `Cancelar`,
    //         }).then((result) => {
    //             /* Read more about isConfirmed, isDenied below */
    //             if (result.isConfirmed) {
    //                 const NewBalance = Number(balance); 
    //                 setBalance(NewBalance - withdraw);
    //                 setWithdraw('');
    //                 setButton3(true);
    
    //                 Swal.fire(
    //                     {   title: '¡RETIRO REALIZADO CON EXITO!',
    //                         imageUrl: retirochanchito,
    //                         imageWidth: 300,
    //                         imageHeight: 200,
    //                         imageAlt: 'Custom image',
    //                     }
    //                 );
    
    //             } else if (result.isDenied) {
    //             Swal.fire('RETIRO CANCELADO', '', 'info');
    //             setWithdraw('');
    //             setButton3(true);
    //             }
    //         });
    //     };
    
        
    // // ----habilitacion o deshabilitación de boton "Deposit"-----
    // function HandleWithdraw (e){
    //     if(balance == 0){
    //          sinSaldo ();
    //          setWithdraw('');
    //     } else {
    //         if(e.currentTarget.value > 0 || e.currentTarget.value <= balance){
    //             setWithdraw(Number(e.currentTarget.value));
    //             setButton3(false) 
    //         };

    //         if(e.currentTarget.value <= 0){
    //             setWithdraw('');
    //             setButton3(true)
    //         } else {
    //             if(e.currentTarget.value > balance){
    //                 setWithdraw(balance);
    //                 setButton3(true)
    //             }
    //         }
    //     }
    // };

    return(
            <Card
            bgcolor= "danger"
            header="RETIRO"
            title={(<img src={withdrawicon} className="img-fluid" alt="Responsive" />)}
    
            body={(  
                <>
                <h3>Balance : {balanceMoneda}</h3>
                <div>Monto a Retirar</div>
                <input type="input" className="form-control" id="Withdraw" placeholder="$ Ingrese Monto" value={withdraw}  onChange={HandleWithdraw}/> 
                <br/>
                <button type="submit" className="btn btn-warning" onClick={ConfirmacionRetiro} disabled={button3} >Realizar Retiro</button>
                </>
                )}
            />
        );
    }

export default Withdraw;
