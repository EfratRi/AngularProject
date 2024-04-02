using fileInterface;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using model;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace scheduling.controllers;

[ApiController]
[Route("api/[controller]")]
public class SchedulingController:ControllerBase{
    // Ifile file;
    // string path = Path.Combine(Environment.CurrentDirectory, "File", "volunteers.json");
    // public VolunteersController(Ifile f){
    //     file=f;
    // }

    private int[] days={0,0,0,0,0};

    [HttpGet]
    public int[] Get(){
        return days;
    }
    [HttpPut("{day}")]
    public int[] Put(int day,[FromBody]int id){
        days[day]=id;
        return days;
    }
    
}