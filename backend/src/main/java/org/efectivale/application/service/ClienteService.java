package org.efectivale.application.service;

import lombok.RequiredArgsConstructor;
import org.efectivale.domain.model.Cliente;
import org.efectivale.domain.repository.ClienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final ClienteRepository repository;

    public List<Cliente> listar() {
        return repository.listar();
    }

    public void guardar(Cliente cliente) {

        if (cliente.getNombre() == null || cliente.getNombre().length() < 3) {
            throw new RuntimeException("Nombre inválido");
        }

        repository.guardar(cliente);
    }
}