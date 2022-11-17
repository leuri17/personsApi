package com.example.personsApi.repositories;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public class PersonRepository extends JpaRepository<Person, UUID> {

}
