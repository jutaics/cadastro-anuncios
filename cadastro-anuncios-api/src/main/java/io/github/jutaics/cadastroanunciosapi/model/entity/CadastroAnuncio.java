package io.github.jutaics.cadastroanunciosapi.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter@Setter
@NoArgsConstructor
public class CadastroAnuncio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_anuncio", unique = true)
    private Integer id;

    @Column(nullable = false, length = 150)
    private String nomeAnuncio;

    @Column(nullable = false, length = 100)
    private String cliente;

    @Column(name = "dt_inicio", nullable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate dtInicio;

    @Column(name = "dt_termino", nullable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate dtTermino;

    @Column(name = "investimento_por_dia", nullable = false)
    private double investimentoPorDia;

}

