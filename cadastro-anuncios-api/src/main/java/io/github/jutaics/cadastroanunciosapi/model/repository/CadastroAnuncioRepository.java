package io.github.jutaics.cadastroanunciosapi.model.repository;

import io.github.jutaics.cadastroanunciosapi.model.entity.CadastroAnuncio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CadastroAnuncioRepository extends JpaRepository<CadastroAnuncio, Integer> {

}
