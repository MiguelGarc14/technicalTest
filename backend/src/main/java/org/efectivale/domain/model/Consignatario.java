package org.efectivale.domain.model;

import lombok.Data;

@Data
public class Consignatario {

    private Integer consignatarioId;
    private String nombre;
    private Integer clienteId;
}