package io.github.jutaics.cadastroanunciosapi.model.api.rest;

import io.github.jutaics.cadastroanunciosapi.model.entity.CadastroAnuncio;
import io.github.jutaics.cadastroanunciosapi.model.repository.CadastroAnuncioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/anuncios")
@RequiredArgsConstructor
public class CadastroAnuncioController {

    private final CadastroAnuncioRepository cadastroAnuncioRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CadastroAnuncio save(@RequestBody CadastroAnuncio cadastroAnuncio) {
        return cadastroAnuncioRepository.save(cadastroAnuncio);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id) {
        cadastroAnuncioRepository.deleteById(id);
    }

    @GetMapping
    public List<CadastroAnuncio> list() {
        return cadastroAnuncioRepository.findAll();
    }

}
