package br.edu.iftm.imbMary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.iftm.imbMary.domain.Visitor;


public interface VisitorRepository extends JpaRepository<Visitor, Long> {

}
