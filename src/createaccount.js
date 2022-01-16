import React, { useContext } from "react";
import { MyContext } from "./globalcontext";
// import Swal from 'sweetalert2'
import Card from "./card";
import createaccounticon from "./logos/createaccount-icon.png";

 function CreateAccount() {

    const {
        // state
        name,
        email,
        password,
        setPassword,
        setPassword2,
        password2,
        button,
        status,
        show,
    
        // functions
        HandleName,
        HandleEmail,
        handleCreate,
        clearForm,
      } = useContext(MyContext);

//     const [show, setShow]           = React.useState(true);
//     const [name, setName]           = React.useState('');
//     const [email, setEmail]         = React.useState('');
//     const [password, setPassword]   = React.useState('');
//     const [password2, setPassword2] = React.useState('');
//     const [button, setButton]       = React.useState(true);
//     const [status, setStatus]       = React.useState('');

//     // const ctx = React.useContext(UserContext);  
  
//     // -------------------ALERTAS -----------------------------------
//     function AlertName() {Swal.fire({
//         title: 'Alerta de Nombre',
//         text: 'OPS!!!!, debes escribir tu Nombe de Usuario, recuerda!!',
//         icon: 'warning',
//         confirmButtonText: 'OK'
//       });
//     }

//     function AlertEmail() {Swal.fire({
//         title: 'Alerta de Email',
//         text: 'OPS!!!!, Debes escribir un Email correctamente. Recuerda que debe ser del tipo alguntexto@proveedoremail.com!!!',
//         icon: 'warning',
//         confirmButtonText: 'OK'
//       });
//     }

//     function AlertPass() {Swal.fire({
//         title: 'Alerta de Password',
//         text: 'HEY!!!! Tu Pasword debe ser seguro, Recuerdas!!!. Minimo 8 caracteres ',
//         icon: 'warning',
//         confirmButtonText: 'OK'
//       });
//     }

//     function AlertPass2() {Swal.fire({
//       title: 'Alerta de Password',
//       text: 'Porfavor revisa tu constraseña de confirmación ',
//       icon: 'warning',
//       confirmButtonText: 'OK'
//     });
//   }

//     function CuentaCreada() {Swal.fire({
//         title: 'SUUUPER!!',
//         text: 'Ya has creado tu Cuenta',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       });
//     }


// // ------------VALIDACIONES DE CAMPOS INPUT-----------------------------------------------

//     function validate1(field){
//         if (!field) {
//            AlertName();
//           return false;
//           }
//           return true;
//     }

//     function validate2(field, label){
//         var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
//         var esValido = expReg.test(field);

//         if (!esValido == true) {
//             AlertEmail();
//             return false;
//         } else {
//             // AlertEmail2();
//             return true;
//         };
//     };       

//     function validate3(field, label){
//         if (!field) {
//         AlertPass()
//           return false;
//         }
//         return true;
//     }
// // --------------------------------------------------------

 
// // --------------------COMPROVACION DE VALIDACIONES Y CREACCION DE CUENTA----
//     function handleCreate(){
// console.log(`password es ${password} y password2 es ${password2}`);

//         if (!validate1(name, 'name'))           return;
//         if (!validate2(email, 'email'))         return;
//         if (password.length<8)                  return validate3();
//         if (password == password2){
//           if (!validate3(password, 'password'))   return;
//         }else{
//           setStatus('Las contraseñas ingresadas debe ser iguales!!!!');
//           AlertPass2();
//           return;
//         };
//         setStatus('');
//       console.log(name,email,password);
//     //   ctx.users.push({name,email,password,balance:0});
//       CuentaCreada();
//       setShow(false);
//     }    
// //   -------------limpieza de fomrulario una vez creada la cuenta exitosa-------
//     function clearForm(){
//       setName(''); 
//       setEmail('');
//       setPassword('');
//       setPassword2('');
//       setStatus('');
//       setShow(true);
//       setButton(true)
//     }

// // ---------habilitacion o deshabilitacion de boton "Create Account"--------------
//     function HandleName (e){
//         if(e.currentTarget.value.length>0){
//             setName(e.currentTarget.value);
//             setButton(false)
//         } else { 
//             setName(e.currentTarget.value);
//             setButton(true)
//           }
//         }

//     function HandleEmail (e){
//         if(e.currentTarget.value.length>0){
//             setEmail(e.currentTarget.value);
//             setButton(false);
//         } else { 
//             setEmail(e.currentTarget.value);
//             setButton(true)
//           }
//         }

// // --------------------------------------------

    return (

      <Card
        bgcolor="light"
        txtcolor="primary"
        header="CREAR CUENTA"
        title={(<img src={createaccounticon} className="img-fluid" alt="Responsive"/>)}
        
        status={status}
        body={show ? (  
                <>
                Nombre de Usuario<br/>
                <input type="input" className="form-control" id="Nombre de Usuario" placeholder="Ingresa tu Nombre" value={name} onChange={HandleName} /><br/>

                Direccion de Email<br/>
                <input type="input" className="form-control" id="email" placeholder="Ingresa tu Email" value={email} onChange={HandleEmail}/><br/>

                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Crea tu Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>

                <input type="password" className="form-control" id="confirmPass" placeholder="Confirma tu password" value={password2} onChange={e => setPassword2(e.currentTarget.value)}/><br/>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-outline-success" onClick={handleCreate} disabled={button}>Crear tu Cuenta</button>
                </div>
                </>
              ):(
                  
                <>
                <h5>CREACIÓN EXITOSA</h5>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-outline-dark"  onClick={clearForm}>Crear otra cuenta</button>
                </div>
                </>
              )}
      />
    )
  }

  export default CreateAccount;