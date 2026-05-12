package org.efectivale.infrastructure.persistence;

import lombok.RequiredArgsConstructor;
import org.efectivale.domain.model.Cliente;
import org.efectivale.domain.repository.ClienteRepository;
import org.efectivale.infrastructure.persistence.mapper.ClienteRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ClienteJdbcRepository implements ClienteRepository {

    private final JdbcTemplate jdbcTemplate;

    @Override
    public List<Cliente> listar() {

        return jdbcTemplate.query(
                "SELECT id, nombre ,telefono FROM fn_listar_clientes()",
                new ClienteRowMapper()
        );
    }

    @Override
    public void guardar(Cliente cliente) {

        jdbcTemplate.execute(
                String.format(
                        "CALL sp_guardar_cliente('%s','%s')",
                        cliente.getNombre(),
                        cliente.getTelefono()
                )
        );
    }
}