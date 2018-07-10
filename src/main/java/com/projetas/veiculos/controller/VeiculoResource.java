package com.projetas.veiculos.controller;

import com.projetas.veiculos.Repository.VeiculoRepository;
import com.projetas.veiculos.model.Veiculo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/veiculos")
public class VeiculoResource {

    VeiculoRepository veiculoRepository;

    @Autowired
    public VeiculoResource(VeiculoRepository veiculoRepository){
        this.veiculoRepository = veiculoRepository;
    }

    @GetMapping("/{id}")
    public Optional<Veiculo> buscar(@PathVariable Long id) {
        return veiculoRepository.findById(id);
    }

    @GetMapping
    public List<Veiculo> pesquisar() {
        return veiculoRepository.findAll();
    }

    @PostMapping()
    public Veiculo salvar(@RequestBody Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        veiculoRepository.deleteById(id);
   }

}
