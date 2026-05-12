package org.efectivale.domain.repository;

import org.efectivale.domain.model.Cliente;

import java.util.List;

public interface ClienteRepository {

    List<Cliente> listar();

    void guardar(Cliente cliente);
}