package org.efectivale.api.controller;

import lombok.RequiredArgsConstructor;
import org.efectivale.application.service.ClienteService;
import org.efectivale.domain.model.Cliente;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ClienteController {

    private final ClienteService service;

    @GetMapping
    public List<Cliente> listar() {
        return service.listar();
    }

    @PostMapping
    public void guardar(@RequestBody Cliente cliente) {
        service.guardar(cliente);
    }
}