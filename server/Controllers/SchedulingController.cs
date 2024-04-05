using fileInterface;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using service;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace scheduling.controllers;

[ApiController]
[Route("api/[controller]")]
public class SchedulingController:ControllerBase{
    [HttpGet]
    public string[] Get(){
        return SchedulingService.GetAll();
    }
    [HttpPut]
    public string[] Put([FromBody]string[] days){
        return SchedulingService.Update(days);
    }
}