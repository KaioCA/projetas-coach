package com.projetas.veiculos.Repository;

import com.projetas.veiculos.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;


public interface VeiculoRepository  extends JpaRepository<Veiculo, Long> {

}
