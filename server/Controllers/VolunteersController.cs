using fileInterface;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using model;
using service;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace volunteers.controllers;

[ApiController]
[Route("api/[controller]")]
public class VolunteersController:ControllerBase{
    Ifile file;
    string path = Path.Combine(Environment.CurrentDirectory, "File", "volunteers.json");
    private  Volunteer[] volunteers=new Volunteer[2]{
        new Volunteer{name="Avi",id="147",phone="0527489653",days=new bool[5]},
        new Volunteer{name="Dani",id="855",phone="0527489653",days=new bool[5]}
        // new Volunteer{id=3,first_name="shosh",last_name="kkk",days_work=new bool[5]}
    };
    static VolunteersController(){
    //  Volunteer[] volunteers=new Volunteer[2]{
    //     new Volunteer{name="Avi",id="147",phone="0527489653",days=new bool[5]},
    //     new Volunteer{name="Dani",id="855",phone="0527489653",days=new bool[5]}
    //     // new Volunteer{id=3,first_name="shosh",last_name="kkk",days_work=new bool[5]}
    // };
    }
    [HttpGet]
    public Volunteer[] Get(){
        return VolunteerService.GetAll();
    }
    [HttpGet("byId/{id}")]
    public Volunteer? GetById(string id){
        return VolunteerService.GetById(id);
    }
    [HttpPut]
    public Volunteer [] Put([FromBody]Volunteer volunteer){
        return VolunteerService.update(volunteer);
    }
}