package br.edu.iftm.imbMary.controller;

import br.edu.iftm.imbMary.domain.Visitor;
import br.edu.iftm.imbMary.repository.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public ResponseEntity<Visitor> newVisitor(@RequestBody @Valid Visitor newVisitor){
        return ResponseEntity.status(HttpStatus.OK).body(visitorRepository.save(newVisitor));
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> validaCamposObrigatorios(MethodArgumentNotValidException ex){
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
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