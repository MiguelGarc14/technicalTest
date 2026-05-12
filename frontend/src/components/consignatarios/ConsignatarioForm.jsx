import {useState} from "react";
import api from "../../api/api";

function ConsignatarioForm() {

    const [nombre, setNombre] = useState("");

    const [clienteId, setClienteId] = useState("");

    const guardar = async (e) => {

        e.preventDefault();

        if(nombre.trim().length < 3){

            alert(
                "El nombre debe tener mínimo 3 caracteres"
            );

            return;
        }

        if(!clienteId || isNaN(clienteId)){

            alert(
                "Cliente ID inválido"
            );

            return;
        }

        try {

            await api.post(
                "/consignatarios",
                {
                    nombre,
                    clienteId: parseInt(clienteId)
                }
            );

            setNombre("");

            setClienteId("");

            window.location.reload();

        } catch (error) {

            console.error(error);

            alert(
                "Error al guardar consignatario"
            );
        }
    };

    return (

        <form
            onSubmit={guardar}
            className="card p-3 mb-4 shadow-sm"
        >

            <input
                type="text"
                className="form-control mb-2"
                placeholder="Nombre"
                value={nombre}
                onChange={(e)=>
                    setNombre(e.target.value)
                }
            />

            <input
                type="number"
                className="form-control mb-2"
                placeholder="Cliente ID"
                value={clienteId}
                onChange={(e)=>
                    setClienteId(e.target.value)
                }
            />

            <button
                className="btn btn-efectivale"
            >
                Guardar
            </button>
        </form>
    );
}

export default ConsignatarioForm;