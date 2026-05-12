package org.efectivale.infrastructure.persistence.mapper;

import org.efectivale.domain.model.Consignatario;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ConsignatarioRowMapper
        implements RowMapper<Consignatario> {

    @Override
    public Consignatario mapRow(
            ResultSet rs,
            int rowNum
    ) throws SQLException {

        Consignatario consignatario = new Consignatario();

        consignatario.setConsignatarioId(
                rs.getInt("consignatarioid")
        );

        consignatario.setNombre(
                rs.getString("nombre")
        );

        consignatario.setClienteId(
                rs.getInt("clienteid")
        );

        return consignatario;
    }
}