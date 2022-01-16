import React, { useContext } from "react";
import { MyContext } from "./globalcontext";

// import React from "react";
import Card from "./card";
// import Swal from 'sweetalert2';
import depositicon from "./logos/deposit-icon.png";
// import logochanchito from "./logos/logo-chanchito.png";

function Deposit(){
    const {
        // state
        balanceMoneda,
        deposit,
        HandleDeposit,
        button2,
        ConfirmacionDeposito
        // functions
        
    
      } = useContext(MyContext);

//     const [deposit, setDeposit] = useState('');
//     const [balance, setBalance] =  useState(0);
//     const [button2, setButton2] = useState(true);

// // ----------- formato moneda en el formulario-----
//     const f = new Intl.NumberFormat(
//         'es-CL', 
//             {
//                 style: 'currency',
//                 currency: 'USD',
//             });
//     const balanceMoneda = f.format(balance);


// // -----alertas------
//     function ConfirmacionDeposito() {
//         // console.log("el valor de deposit es: " + deposit);
        
//         // formato moneda en la alerta delmonto a depositar
//         const f = new Intl.NumberFormat(
//             'es-CL', 
//                 {
//                     style: 'currency',
//                     currency: 'USD',
//                 // minimunFractionDigits: 1,
//                 });
//         const moneda = f.format(deposit);

//             Swal.fire({
//             title: 'CONFIRMACION DE DEPOSITO',
//             text: "Estas a punto de realizar deposito por el siguiente monto: " + moneda,
//             showCancelButton: true,
//             cancelButtonText: 'Modificar',
//             showDenyButton: true,
//             confirmButtonText: 'Confirmar',
//             denyButtonText: `Cancelar`,
//         }).then((result) => {
//             /* Read more about isConfirmed, isDenied below */
//             if (result.isConfirmed) {
//                 const NewBalance = Number(balance); 
//                 setBalance(NewBalance + deposit);
//                 setDeposit('');
//                 setButton2(true);

//                 Swal.fire(
//                     {   title: '¡DEPOSITO REALIZADO CON EXITO!',
//                         imageUrl: logochanchito,
//                         imageWidth: 250,
//                         imageHeight: 200,
//                         imageAlt: 'Custom image',
//                     }
//                 );

//             } else if (result.isDenied) {
//             Swal.fire('DEPOSITO CANCELADO', '', 'info');
//             setDeposit('');
//             setButton2(true);
//             }
//         });
//     };

    
// // ----habilitacion o deshabilitación de boton "Deposit"-----
//     function HandleDeposit (e){
//         if(e.currentTarget.value <= 0){
//             setDeposit('');
//             setButton2(true)
//         } else {
//             setDeposit(Number(e.currentTarget.value));
//             setButton2(false) 
//         };
//     };


return(
        <Card
        bgcolor="success"
        header="DEPOSITO"
        title={(<img src={depositicon} className="img-fluid" alt="Responsive" />)}
        body={(  
            <>
            <h3>Balance : {balanceMoneda}</h3>
            <div>Monto a Depositar</div>

            {/* <input type="input" className="form-control" id="deposit" placeholder="$ Ingrese Monto"  value="" onChange={HandleDeposit}/> 
            <br/> */}

            <input type="input" className="form-control" id="deposit" placeholder="$ Ingrese Monto" value={deposit}  onChange={HandleDeposit}    /> 
            
            <br/>
            <button type="submit" className="btn btn-warning" onClick={ConfirmacionDeposito} disabled={button2} >Realizar Deposito</button>
            </>
            )}
        />
    );
}

export default Deposit;