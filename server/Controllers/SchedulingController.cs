using fileInterface;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using model;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace scheduling.controllers;

[ApiController]
[Route("api/[controller]")]
public class SchedulingController:ControllerBase{
    
    private string[] days={"147","741","855","557","669"};

    [HttpGet]
    public string[] Get(){
        return days;
    }
    [HttpPut("{day}")]
    public string[] Put(int day,[FromBody]string id){
        days[day]=id;
        return days;
    }
}