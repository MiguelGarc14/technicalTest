-- =========================================
-- TABLAS
-- =========================================

CREATE TABLE cliente (

    id SERIAL,

    activo BOOLEAN NOT NULL DEFAULT TRUE,

    nombre VARCHAR(100) NOT NULL,

    telefono VARCHAR(100) NOT NULL,

    fechacreacion TIMESTAMPTZ(3) NOT NULL DEFAULT NOW(),

    fechamodificacion TIMESTAMPTZ(3) NOT NULL DEFAULT NOW(),

    CONSTRAINT cliente_pkey
        PRIMARY KEY (id)

);

CREATE TABLE consignatario (

    clienteid INTEGER NOT NULL,

    consignatarioid SERIAL,

    activo BOOLEAN NOT NULL DEFAULT TRUE,

    nombre VARCHAR(100) NOT NULL,

    fechacreacion TIMESTAMPTZ(3) NOT NULL DEFAULT NOW(),

    fechamodificacion TIMESTAMPTZ(3) NOT NULL DEFAULT NOW(),

    CONSTRAINT consignatario_pkey
        PRIMARY KEY (clienteid, consignatarioid),

    CONSTRAINT consignatario_clienteid_fk
        FOREIGN KEY (clienteid)
        REFERENCES cliente(id)

);

-- =========================================
-- FUNCTIONS
-- =========================================

CREATE OR REPLACE FUNCTION fn_listar_clientes()
RETURNS TABLE(
    id INTEGER,
    activo BOOLEAN,
    nombre VARCHAR,
    telefono VARCHAR,
    fechacreacion TIMESTAMPTZ,
    fechamodificacion TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN

    RETURN QUERY

    SELECT
        c.id,
        c.activo,
        c.nombre,
        c.telefono,
        c.fechacreacion,
        c.fechamodificacion
    FROM cliente c
    ORDER BY c.id DESC
    LIMIT 5;

END;
$$;

CREATE OR REPLACE FUNCTION fn_listar_consignatarios()
RETURNS TABLE(
    consignatarioid INTEGER,
    clienteid INTEGER,
    activo BOOLEAN,
    nombre VARCHAR,
    fechacreacion TIMESTAMPTZ,
    fechamodificacion TIMESTAMPTZ
)
LANGUAGE plpgsql
AS $$
BEGIN

    RETURN QUERY

    SELECT
        c.consignatarioid,
        c.clienteid,
        c.activo,
        c.nombre,
        c.fechacreacion,
        c.fechamodificacion
    FROM consignatario c
    ORDER BY c.clienteid, c.consignatarioid DESC
    LIMIT 5;

END;
$$;

-- =========================================
-- PROCEDURES
-- =========================================

CREATE OR REPLACE PROCEDURE sp_guardar_cliente(
    p_nombre VARCHAR,
    p_telefono VARCHAR
)
LANGUAGE plpgsql
AS $$
BEGIN

    INSERT INTO cliente (
        nombre,
        telefono
    )
    VALUES (
        p_nombre,
        p_telefono
    );

END;
$$;

CREATE OR REPLACE PROCEDURE sp_guardar_consignatario(
    p_nombre VARCHAR,
    p_clienteid INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN

    -- Validar existencia del cliente
    IF NOT EXISTS (
        SELECT 1
        FROM cliente
        WHERE id = p_clienteid
    ) THEN

        RAISE EXCEPTION
            'El cliente con id % no existe',
            p_clienteid;

    END IF;

    INSERT INTO consignatario (
        nombre,
        clienteid
    )
    VALUES (
        p_nombre,
        p_clienteid
    );

END;
$$;