package com.projetas.veiculos.model;


import javax.persistence.*;

@Entity
@Table(name = "veiculo")
public class Veiculo {

    @Id
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

   // @NotNull
   @Column(name = "marca")
    private String marca;

//  //  @NotNull
//  @Column(name = "modelo")
//    private String modelo;
//
//  //  @NotNull
//  @Column(name = "cor")
//    private String cor;
//
// //   @NotNull
// @Column(name = "ano")
//    private String ano;
//
////    @NotNull
//@Column(name = "preco")
//    private BigDecimal preco;
//
//    @Column(name = "descricao")
//    private String descricao;
//
// //   @NotNull
// @Column(name = "novo")
//    private boolean novo;

//    @NotNull
//    private Date dataCadastro;
//
//    @NotNull
//    private Date dataAtualizacao;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

//    public String getModelo() {
//        return modelo;
//    }
//
//    public void setModelo(String modelo) {
//        this.modelo = modelo;
//    }
//
//    public String getCor() {
//        return cor;
//    }
//
//    public void setCor(String cor) {
//        this.cor = cor;
//    }
//
//    public String getAno() {
//        return ano;
//    }
//
//    public void setAno(String ano) {
//        this.ano = ano;
//    }
//
//    public BigDecimal getPreco() {
//        return preco;
//    }
//
//    public void setPreco(BigDecimal preco) {
//        this.preco = preco;
//    }
//
//    public String getDescricao() {
//        return descricao;
//    }
//
//    public void setDescricao(String descricao) {
//        this.descricao = descricao;
//    }
//
//    public boolean isNovo() {
//        return novo;
//    }
//
//    public void setNovo(boolean novo) {
//        this.novo = novo;
//    }


}
