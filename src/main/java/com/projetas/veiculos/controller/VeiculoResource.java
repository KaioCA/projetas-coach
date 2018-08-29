package com.projetas.veiculos.controller;

import com.projetas.veiculos.repository.VeiculoRepository;
import com.projetas.veiculos.model.Veiculo;
import com.projetas.veiculos.service.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/veiculos")
public class VeiculoResource {

    VeiculoRepository veiculoRepository;

    VeiculoService veiculoService;



    @Autowired
    public VeiculoResource(VeiculoService veiculoService){
        this.veiculoService = veiculoService;
    }

    @GetMapping("/{id}")
    public Optional<Veiculo> buscar(@PathVariable Long id) {
        return veiculoRepository.findById(id);
    }

    @GetMapping
    public List<Veiculo> searchVeiculo() {
        return veiculoService.searchVeiculo();
    }

    @PostMapping()
    public Veiculo saveVeiculo(@RequestBody Veiculo veiculo) {
        return veiculoService.save(veiculo);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        veiculoRepository.deleteById(id);
   }

}
