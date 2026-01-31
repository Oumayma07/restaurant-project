package com.restaurant.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "contact")
public class Contact {

    @Id
    private String id;

    private String name;
    private String email;
    private String type; // AVIS / RECLAMATION / CONTACT
    private int rating;   // seulement si type = AVIS
    private String message;
    private boolean approved = false; // pour admin valider les avis

    public Contact() {}

    // getters et setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public boolean isApproved() { return approved; }
    public void setApproved(boolean approved) { this.approved = approved; }
}
