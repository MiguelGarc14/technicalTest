package org.efectivale.application.service;

import lombok.RequiredArgsConstructor;
import org.efectivale.domain.model.Consignatario;
import org.efectivale.domain.repository.ConsignatarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ConsignatarioService {

    private final ConsignatarioRepository repository;

    public List<Consignatario> listar() {
        return repository.listar();
    }

    public void guardar(Consignatario consignatario) {

        validar(consignatario);

        repository.guardar(consignatario);
    }

    private void validar(Consignatario consignatario) {

        if (consignatario.getNombre() == null
                || consignatario.getNombre().trim().length() < 3) {

            throw new RuntimeException(
                    "El nombre del consignatario debe tener mínimo 3 caracteres"
            );
        }

        if (consignatario.getClienteId() == null
                || consignatario.getClienteId() <= 0) {

            throw new RuntimeException(
                    "El clienteId es obligatorio"
            );
        }
    }
}