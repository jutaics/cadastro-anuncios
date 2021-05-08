package io.github.jutaics.cadastroanunciosapi;

import io.github.jutaics.cadastroanunciosapi.model.entity.CadastroAnuncio;
import io.github.jutaics.cadastroanunciosapi.model.repository.CadastroAnuncioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.ZonedDateTime;

@SpringBootApplication
public class CadastroAnunciosApiApplication {

    @Bean
    // teste de persitência
    public CommandLineRunner commandLineRunner(
            @Autowired CadastroAnuncioRepository repository) {

        String dtInicial = "2012-02-22T02:06:58.147Z";
        String dtFinal = "2012-02-22T02:06:58.147Z";
        ZonedDateTime dtInicio = ZonedDateTime.parse(dtInicial);
        ZonedDateTime dtTermino = ZonedDateTime.parse(dtFinal);

        return args -> {
            CadastroAnuncio cadastroAnuncio = new CadastroAnuncio();
            cadastroAnuncio.setNomeAnuncio("Insinuante Fantástico");
            cadastroAnuncio.setCliente("Lojas Insinuante");
            cadastroAnuncio.setDtInicio(LocalDate.from(dtInicio));
            cadastroAnuncio.setDtTermino(LocalDate.from(dtTermino));
            cadastroAnuncio.setInvestimentoPorDia(3.8);
            repository.save(cadastroAnuncio);
        };

    }

    public static void main(String[] args) {

        SpringApplication.run(CadastroAnunciosApiApplication.class, args);

    }

}
