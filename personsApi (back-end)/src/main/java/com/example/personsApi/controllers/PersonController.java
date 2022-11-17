package com.example.personsApi.controllers;


import com.example.personsApi.models.Person;
import com.example.personsApi.services.PersonService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {

    @Autowired
    PersonService service;

    @GetMapping("/person")
    @CrossOrigin
    public ResponseEntity<List<Object>> getAllPersons() {
        List<Person> persons = null;
        HttpStatus status = null;
        try {
            persons = service.getAllPersons();
            status = HttpStatus.OK;
        } catch (Exception e) {
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity(persons, status);
    }

    @PostMapping("/person")
    @CrossOrigin
    public ResponseEntity<Person> createPerson(@RequestBody Person person) {
        HttpStatus code = null;

            try {
                service.createPerson(person);
                code = HttpStatus.CREATED;
            } catch (Exception e) {
                code = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        return new ResponseEntity(person, code);
    }


}
