package br.edu.iftm.imbMary.controller;

import br.edu.iftm.imbMary.domain.Visitor;
import br.edu.iftm.imbMary.repository.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class VisitorController {

    @Autowired
    VisitorRepository visitorRepository;

    @GetMapping("/visitor")
    public ResponseEntity<List<Visitor>> allVisitors(){
        return ResponseEntity.status(HttpStatus.OK).body(visitorRepository.findAll());
    }

    @GetMapping("/visitor/{id}")
    public ResponseEntity<Visitor> getVisitor(@PathVariable("id") Long id){
        return ResponseEntity.status(HttpStatus.OK).body(visitorRepository.findById(id).orElseThrow(RuntimeException::new));
    }

    @PostMapping("/visitor")
    public ResponseEntity<Visitor> newVisitor(@RequestBody Visitor newVisitor){
        return ResponseEntity.status(HttpStatus.OK).body(visitorRepository.save(newVisitor));
    }

    @PutMapping("/visitor/{id}")
    public ResponseEntity<Visitor> updateVisitor(@PathVariable("id") Long id, @RequestBody Visitor visitor){
        visitor.setId(id);
        return ResponseEntity.status(HttpStatus.OK).body(visitorRepository.save(visitor));
    }

    public ResponseEntity<Visitor> deleteVisitor(@PathVariable("id") Long id){
        visitorRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
