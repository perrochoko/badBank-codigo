import React, { createContext, useState, useContext} from "react";
import Swal from 'sweetalert2'
import logochanchito from "./logos/logo-chanchito.png";
import retirochanchito from "./logos/retiro-chanchito.png";
import logonomoney from "./logos/no-money-travolta.gif";

export const MyContext = createContext();

export function MyContextProvider({children}) {
//   //CREACION DE CUENTA DE USUARIO

    const [show, setShow]           = useState(true);
    const [name, setName]           = useState('');
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');
    const [password2, setPassword2] = useState('');
    const [button, setButton]       = useState(true);
    const [status, setStatus]       = useState('');
    const [users, setUsers]         = useState([]);

  
    // -------------------ALERTAS -----------------------------------
    function AlertName() {Swal.fire({
        title: 'Alerta de Nombre',
        text: 'OPS!!!!, debes escribir tu Nombe de Usuario, recuerda!!',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }

    function AlertEmail() {Swal.fire({
        title: 'Alerta de Email',
        text: 'OPS!!!!, Debes escribir un Email correctamente. Recuerda que debe ser del tipo textoenminusculas@proveedoremail.com!!!',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }

    function AlertPass() {Swal.fire({
        title: 'Alerta de Password',
        text: 'HEY!!!! Tu Pasword debe ser seguro, Recuerdas!!!. Minimo 8 caracteres ',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }

    function AlertPass2() {Swal.fire({
      title: 'Alerta de Password',
      text: 'Porfavor revisa tu constraseña de confirmación ',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
  }

    function AlertCuentaCreada() {Swal.fire({
        title: 'SUUUPER!!',
        text: 'Ya has creado tu Cuenta',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }

// ------------VALIDACIONES DE CAMPOS INPUT-----------------------------------------------

    function validate1(field){
        if (!field) {
           AlertName();
          return false;
          }
          return true;
    }

    function validate2(field, label){
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var esValido = expReg.test(field);

        if (!esValido == true) {
            AlertEmail();
            return false;
        } else {
            // AlertEmail2();
            return true;
        };
    };       

    function validate3(field, label){
        if (!field) {
        AlertPass()
          return false;
        }
        return true;
    }
// --------------------------------------------------------
 
// --------------------COMPROVACION DE VALIDACIONES Y CREACCION DE CUENTA----
    function handleCreate(){
        console.log(`password es ${password} y password2 es ${password2}`);

        if (!validate1(name, 'name'))           return;
        if (!validate2(email, 'email'))         return;
        if (password.length<8)                  return validate3();
        if (password == password2){
        if (!validate3(password, 'password'))   return;
            }else{
            setStatus('Las contraseñas ingresadas deben ser iguales!!!!');
            AlertPass2();
            return;
            };
        setStatus('');
        console.log(name,email,password);

        
        // envio de datos a AllData
            let newUser = {
                name: name,
                email: email,
                password: password,
              };
              setUsers(() => users.concat(newUser));

      AlertCuentaCreada();
      setShow(false);
    }    
//   -------------limpieza de fomrulario una vez creada la cuenta exitosa-------
    function clearForm(){
      setName(''); 
      setEmail('');
      setPassword('');
      setPassword2('');
      setStatus('');
      setShow(true);
      setButton(true)
    }

// ---------habilitacion o deshabilitacion de boton "Create Account"--------------
    function HandleName (e){
        if(e.currentTarget.value.length>0){
            setName(e.currentTarget.value);
            setButton(false)
        } else { 
            setName(e.currentTarget.value);
            setButton(true)
          }
        }

    function HandleEmail (e){
        if(e.currentTarget.value.length>0){
            setEmail(e.currentTarget.value);
            setButton(false);
        } else { 
            setEmail(e.currentTarget.value);
            setButton(true)
          }
        }
//-------------------------------------------------------------------------------

    
    
//   //FORMULARIO DE DEPOSITO Y RETIRO
// DEPOSITO
    const [deposit, setDeposit] = useState('');
    const [balance, setBalance] =  useState(0);
    const [button2, setButton2] = useState(true);
    let [depositArr, setDepositArr] = useState([]);


// -----alertas------

    function AlertNegativo() {Swal.fire({
        title: 'error',
        text: 'Recuerda ingresar SOLO NUMEROS mayores que 0',
        icon: 'error',
        confirmButtonText: 'OK'
    });
    return ;
    }


    // -----CONFIRMACION DE DEPOSITO-----
    function ConfirmacionDeposito() {

        const moneda = f.format(deposit);

            Swal.fire({
            title: 'CONFIRMACION DE DEPOSITO',
            text: "Estas a punto de realizar deposito por el siguiente monto: " + moneda,
            showCancelButton: true,
            cancelButtonText: 'Modificar',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const NewBalance = Number(balance); 
                setBalance(NewBalance + deposit);
                setDeposit('');
                setButton2(true);

                Swal.fire(
                    {   title: '¡DEPOSITO REALIZADO CON EXITO!',
                        imageUrl: logochanchito,
                        imageWidth: 250,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                    }
                );

                //envio de datos al AllData
                let newDeposit = {
                    deposit: deposit,
                };
                setDepositArr((depositArr) => depositArr.concat(newDeposit));

            } else if (result.isDenied) {
            Swal.fire('DEPOSITO CANCELADO', '', 'info');
            setDeposit('');
            setButton2(true);
            }
        });
    };

    
// ----habilitacion o deshabilitación de boton "Deposit"-----
    function HandleDeposit (e){
            if (isNaN(e.currentTarget.value)){
                // console.log ("valorchange no es un numero = "+ e)
                    AlertNegativo();
                    // setDeposit('');
                    setButton2(true);
                    return;
            } else {
                console.log("valorchange es un numero")
                if (e.currentTarget.value <= 0){
                    // console.log ("valorchange es menor que cero= "+ e)
                    AlertNegativo();
                    setDeposit('');
                    setButton2(true);
                    return;
        
                } else {
                    setDeposit(Number(e.currentTarget.value));
                    setButton2(false) 
                }

            }

    };

    // ________________________________________________________________

// RETIRO
    const [withdraw, setWithdraw] = useState('');
    // const [balance, setBalance] =  useState(10);
    const [button3, setButton3]     = useState(true);
    let [withdrawArr, setWithdrawArr] = useState([]);


// -----alertas------
    function sinSaldo (){
        Swal.fire(
            {   title: '¡NO HAY SALDO SUFICIENTE PARA RETIRO!',
                imageUrl: logonomoney,
                imageWidth: 300,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
        // setWithdraw('');
        setButton3(true);
        return;
        }


        function AlertNegativo2() {Swal.fire({
            title: 'error',
            text: 'Recuerda ingresar SOLO NUMEROS mayores que 0',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          return ;
        }
        


    // -----CONFIRMACION DE RETIRO-----

    function ConfirmacionRetiro() {           
        // formato moneda en la alerta delmonto a depositar
        const f = new Intl.NumberFormat(
            'es-CL', 
                {
                    style: 'currency',
                    currency: 'USD',
                // minimunFractionDigits: 1,
                });
        const moneda = f.format(withdraw);

            Swal.fire({
            title: 'CONFIRMACION DE RETIRO',
            text: "Estas a punto de realizar retiro por el siguiente monto: " + moneda,
            showCancelButton: true,
            cancelButtonText: 'Modificar',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const NewBalance = Number(balance); 
                setBalance(NewBalance - withdraw);
                setWithdraw('');
                setButton3(true);

                Swal.fire(
                    {   title: '¡RETIRO REALIZADO CON EXITO!',
                        imageUrl: retirochanchito,
                        imageWidth: 300,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                    }
                );

                //envio de datos al AllData
                    let newWithdraw = {
                        withdraw: withdraw,
                    };

                    setWithdrawArr((withdrawArr) => withdrawArr.concat(newWithdraw));

            } else if (result.isDenied) {
            Swal.fire('RETIRO CANCELADO', '', 'info');
            setWithdraw('');
            setButton3(true);
            }
        });
    };

    
// ----habilitacion o deshabilitación de boton "Retiro"-----
function HandleWithdraw (e){
    if(balance == 0){
         sinSaldo ();
        //  setWithdraw('');
    } else {
        if (isNaN(e.currentTarget.value) || e.currentTarget.value <= 0 ){
                AlertNegativo2();
                setWithdraw('');
                setButton3(true);
                return;
        } else {
            if (e.currentTarget.value > balance  ){
                sinSaldo ();
                // setWithdraw('');
                setButton3(true);
                return;
            } else {
                setWithdraw(Number(e.currentTarget.value));
                setButton3(false) 
            }

        }
    }
};


// cambio de formato en moneda USD
const f = new Intl.NumberFormat(
  'es-CL', 
      {
          style: 'currency',
          currency: 'USD',
      });

const balanceMoneda = f.format(balance);


  const defaultContext = {
    //CREAR CUENTA DE USUARIO
    //state:
    name,
    email,
    password,
    password2,
    button,
    status,
    show,
    users,
    //functions:
    setPassword,
    setPassword2,
    HandleName,
    HandleEmail,
    handleCreate,
    clearForm,
//----------------------------------
    //DEPOSITO y RETIRO
    balanceMoneda,
    deposit,
    button2,
    depositArr,
    withdrawArr,


    HandleDeposit,
    ConfirmacionDeposito,

    withdraw,
    button3,
    HandleWithdraw,
    ConfirmacionRetiro,


  };

  return (
    <MyContext.Provider value={defaultContext}>{children}</MyContext.Provider>
  );
};



