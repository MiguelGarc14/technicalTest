package org.efectivale.domain.repository;

import org.efectivale.domain.model.Consignatario;

import java.util.List;

public interface ConsignatarioRepository {

    List<Consignatario> listar();

    void guardar(Consignatario consignatario);
}