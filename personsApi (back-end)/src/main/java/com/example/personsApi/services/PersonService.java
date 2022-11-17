package com.example.personsApi.services;


import com.example.personsApi.models.Person;
import com.example.personsApi.repositories.PersonRepository;
import java.util.List;
import java.util.UUID;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    PersonRepository repo;


    public Person createPerson(Person person) {
        try {
            Person savedPerson = repo.save(person);
            return savedPerson;
        } catch (Exception e) {
            return null;
        }
    }


    public List<Person> getAllPersons() {
       return repo.findAll();
    }

    @Transactional
    public Person getPersonById(String id){
        return repo.findById(UUID.fromString("id")).get();
    }



}
