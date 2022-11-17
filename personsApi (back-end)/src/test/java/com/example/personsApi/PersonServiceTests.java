package com.example.personsApi;

import com.example.personsApi.models.Person;
import com.example.personsApi.services.PersonService;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

@SpringBootTest
public class PersonServiceTests {

    @Autowired
    private PersonService service;

    @Test
    void GetAllPersons_ReturnAListOfPerson_WhenCalled() {
        List<Person> personList = service.getAllPersons();
    }

    @Test
    void CreatePerson_CreatesANewPerson_WhenUsingValidData() {
        int initialPersonsCount = service.getAllPersons().size();
        Person person = new Person("personName", "personLastName", "personPhone", "personEmail");
        Person createdPerson = service.createPerson(person);
        int finalPersonsCount = service.getAllPersons().size();

        Assert.notNull(createdPerson, "The created person is not null");
        Assert.notNull(createdPerson.getId(), "An ID is generated for the user");
        Assert.isTrue(initialPersonsCount + 1 == finalPersonsCount, "The count of Person is incremented by one");
    }

    @Test
    void CreatePerson_ReturnsNull_WhenUsingInvalidData() {
        int initialPersonsCount = service.getAllPersons().size();
        Person person = new Person();
        Person createdPerson = service.createPerson(person);
        int finalPersonsCount = service.getAllPersons().size();

        Assert.isNull(createdPerson, "The created person is null");
        Assert.isTrue(initialPersonsCount == finalPersonsCount, "The count of Person is not incremented");
    }
}
