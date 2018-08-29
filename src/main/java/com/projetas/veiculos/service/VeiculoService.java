package com.projetas.veiculos.service;

import com.projetas.veiculos.model.Veiculo;
import com.projetas.veiculos.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class VeiculoService {

    @Autowired
    public VeiculoRepository veiculoRepository;


    public Veiculo save(@RequestBody Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    public List<Veiculo> searchVeiculo() {
        return veiculoRepository.findAll();
    }
}
