import Card from "./card";
import bank from "./logos/bank.png"

function Home(){
    return(

        <Card
            bgcolor="warning"
            txtcolor="danger"
            header=""
            title="Bienvenido a BadBank"
            text="Tu Banco al servicio del Hackeo"
            body={(<img src={bank} className="img-fluid" alt="Responsive" />)}
        />
    );
}       
export default Home;
