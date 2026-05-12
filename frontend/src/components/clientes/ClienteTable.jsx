import { useEffect, useState } from "react";
import api from "../../api/api";

function ClienteTable() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {

        cargar();

    }, []);

    const cargar = async () => {

        const response = await api.get("/clientes");

        setClientes(response.data);
    };

    return (



        <div className="card p-4 shadow-sm">

            <h4 className="mb-3">
                Últimos Clientes
            </h4>

            <div
                style={{
                    maxHeight: "300px",
                    overflowY: "auto"
                }}
            >

                <table className="table table-striped">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            clientes.map(cliente => (

                                <tr key={cliente.id}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.telefono}</td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default ClienteTable;