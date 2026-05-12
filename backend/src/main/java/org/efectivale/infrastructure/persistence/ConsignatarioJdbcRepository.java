package org.efectivale.infrastructure.persistence;

import lombok.RequiredArgsConstructor;
import org.efectivale.domain.model.Consignatario;
import org.efectivale.domain.repository.ConsignatarioRepository;
import org.efectivale.infrastructure.persistence.mapper.ConsignatarioRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ConsignatarioJdbcRepository
        implements ConsignatarioRepository {

    private final JdbcTemplate jdbcTemplate;

    @Override
    public List<Consignatario> listar() {

        return jdbcTemplate.query(
                "SELECT * FROM fn_listar_consignatarios()",
                new ConsignatarioRowMapper()
        );
    }

    @Override
    public void guardar(
            Consignatario consignatario
    ) {

        jdbcTemplate.update(
                "CALL sp_guardar_consignatario(?, ?)",
                consignatario.getNombre(),
                consignatario.getClienteId()
        );
    }
}