import {useState} from "react";
import api from "../../api/api";
import "../../styles/app.css";

function ClienteForm() {

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");

    const guardar = async (e) => {

        e.preventDefault();

        if(nombre.trim().length < 3){
            alert("Nombre inválido");
            return;
        }

        console.log("VALIDANDO TELEFONO");
        const telefonoRegex = /^[0-9]{10}$/;

        if(!telefonoRegex.test(telefono)){
            alert("El teléfono debe contener exactamente 10 dígitos numéricos");
            return;
        }

        try {

        await api.post("/clientes", {
            nombre,
            telefono
        });

        window.location.reload();
    } catch (error) {
        console.error(error);

        alert("Error al guardar cliente, contacte a soporte");
    }
    
    };

    return (

        <form onSubmit={guardar} 
        className="card p-3 mb-4 shadow-sm">

            <input
                className="form-control mb-2"
                placeholder="Nombre"
                onChange={(e)=>setNombre(e.target.value)}
            />

            <input
                className="form-control mb-2"
                placeholder="Telefono"
                onChange={(e)=>setTelefono(e.target.value)}
            />

            <button className="btn btn-efectivale">
                Registrar
            </button>
        </form>
    );
}

export default ClienteForm;