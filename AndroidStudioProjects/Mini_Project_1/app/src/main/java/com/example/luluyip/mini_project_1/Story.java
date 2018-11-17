package com.example.luluyip.mini_project_1;

/**
 * Created by luluyip on 13/11/2018.
 */

public class Story {
    private String description;
    private String title;
    private String date;
    private String score;
    private String location;
    private String image;

    private int imageView;

    public Story(){}

    public Story(String sth){
        this.title = sth;
    }

    public Story(String title, String location, int imageView){
        this.title = title;
        this.location = location;
        this.imageView = imageView;
    }

    public Story(String title, String date, String description, String location, int imageView, String score){
        this.description = description;
        this.title = title;
        this.date = date;
        this.score = score;
        this.location = location;
        this.imageView = imageView;
    }

    public String getTitle(){
        return this.title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getDate(){
        return this.date;
    }

    public void setDate(String date){
        this.date = date;
    }

    public String getDescription(){
        return this.description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public String getLocation(){
        return this.location;
    }

    public void setLocation(String location){
        this.location = location;
    }

    public String getImage(){
        return this.image;
    }

    public void setImage(String image){
        this.image = image;
    }

    public String getScore(){
        return this.score;
    }

    public void setScore(String score){
        this.score = score;
    }

    public int getImageView() {return this.imageView;}

    public void setImageView(int imageView){this.imageView = imageView;}

}
