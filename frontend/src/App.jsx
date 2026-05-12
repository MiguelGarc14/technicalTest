import { useEffect, useState } from "react";

import api from "./api/api";

import ClienteForm from "./components/clientes/ClienteForm";
import ClienteTable from "./components/clientes/ClienteTable";

import ConsignatarioForm from "./components/consignatarios/ConsignatarioForm";
import ConsignatarioTable from "./components/consignatarios/ConsignatarioTable";

function App() {

    const [clientes, setClientes] =
        useState([]);

    const [consignatarios,
        setConsignatarios] =
        useState([]);

    useEffect(() => {

        cargarClientes();

        cargarConsignatarios();

    }, []);

    const cargarClientes =
        async () => {

        try {

            const response =
                await api.get(
                    "/clientes"
                );

            setClientes(
                response.data
            );

        } catch (error) {

            console.error(error);
        }
    };

    const cargarConsignatarios =
        async () => {

        try {

            const response =
                await api.get(
                    "/consignatarios"
                );

            setConsignatarios(
                response.data
            );

        } catch (error) {

            console.error(error);
        }
    };

    return (

        <div className="app-banner text-center container-fluid mt-4">

            <h1 className="mb-4 text-center">
                EFECTIVALE SYSTEM
            </h1>

            <div className="row g-4 align-items-stretch">

                {/* CLIENTES */}

                <div className="col-12 col-lg-6 d-flex">

                    <div
                        className="
                            card
                            shadow-sm
                            p-4
                            w-100
                            h-100
                        "
                    >

                        <h3 className="mb-3">
                            Clientes
                        </h3>

                        <ClienteForm
                            recargar={
                                cargarClientes
                            }
                        />

                        <ClienteTable
                            clientes={clientes}
                        />

                    </div>

                </div>

                {/* CONSIGNATARIOS */}

                <div className="col-12 col-lg-6 d-flex">

                    <div
                        className="
                            card
                            shadow-sm
                            p-4
                            w-100
                            h-100
                        "
                    >

                        <h3 className="mb-3">
                            Consignatarios
                        </h3>

                        <ConsignatarioForm
                            recargar={
                                cargarConsignatarios
                            }
                        />

                        <ConsignatarioTable
                            consignatarios={
                                consignatarios
                            }
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}

export default App;