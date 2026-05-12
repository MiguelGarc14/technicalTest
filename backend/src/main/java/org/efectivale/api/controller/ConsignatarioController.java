package org.efectivale.api.controller;

import lombok.RequiredArgsConstructor;
import org.efectivale.application.service.ConsignatarioService;
import org.efectivale.domain.model.Consignatario;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consignatarios")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ConsignatarioController {

    private final ConsignatarioService service;

    @GetMapping
    public List<Consignatario> listar() {
        
        return service.listar();
        
    }

    @PostMapping
    public void guardar(
            @RequestBody Consignatario consignatario
    ) {

        service.guardar(consignatario);
    }
}