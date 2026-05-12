import { useEffect, useState } from "react";

import api from "../../api/api";

function ConsignatarioTable() {

    const [consignatarios, setConsignatarios] = useState([]);

    useEffect(() => {

        cargar();

    }, []);

    const cargar = async () => {

        try {

            const response = await api.get(
                "/consignatarios"
            );

            console.log(response.data);

            setConsignatarios(
                response.data
            );

        } catch (error) {

            console.error(error);
        }
    };

    return (

        <div className="card p-4 shadow-sm">

            <h4 className="mb-3">
                Lista de Consignatarios
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
                            <th>Cliente ID</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            consignatarios.map(
                                consignatario => (

                                    <tr
                                        key={consignatario.consignatarioId}
                                    >
                                        <td>
                                            {consignatario.consignatarioId}
                                        </td>

                                        <td>
                                            {consignatario.nombre}
                                        </td>

                                        <td>
                                            {consignatario.clienteId}
                                        </td>
                                    </tr>
                                ))
                        }

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default ConsignatarioTable;