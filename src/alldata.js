import React, { useContext } from "react";
import { MyContext } from "./globalcontext";
import Card from "./card";


function Alldata() {



    const {
        // state
        users,
        name,
        email,
        password,
        depositArr,
        withdrawArr,
        
        // status
       } = useContext(MyContext);

       const f = new Intl.NumberFormat(
        'es-CL', 
            {
                style: 'currency',
                currency: 'USD',
            });


    return(
    <>
        {users.map((user) => (

                    <Card
                        bgcolor="primary"
                        header="CUENTAS CREADAS"
                        body={(  
                            <>
                            <h6 key={name}>Nombre de Usuario : {user.name}</h6>
                            <h6 key={email}>Email : {user.email}</h6>
                            <h6 key={password}>Password : {user.password}</h6>
                            <h6>------------------</h6>
                            </>
                        )}
                    />

        ))}

        {depositArr.map((amount) => (
            
                    <Card
                        bgcolor="success"
                        header="REGISTRO DE DEPOSITO"
                        body={(  
                            <>
                            <h6>Deposito : {f.format(amount.deposit)}</h6>
                            <h6>------------------</h6>
                            </>
                        )}
                    />

        ))}

        {withdrawArr.map((value) => (
                    
                    <Card
                        bgcolor="danger"
                        header="REGISTRO DE RETIRO"
                        body={(  
                            <>
                            <h6>Deposito : {f.format(value.withdraw)}</h6>
                            <h6>------------------</h6>
                            </>
                        )}
                    />

        ))}

    </>
    );
}


export default Alldata;
