using fileInterface;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using model;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace volunteers.controllers;

[ApiController]
[Route("api/[controller]")]
public class VolunteersController:ControllerBase{
    Ifile file;
    string path = Path.Combine(Environment.CurrentDirectory, "File", "volunteers.json");
    private static readonly List<Volunteer> volunteers=new List<Volunteer>(){
        new Volunteer(){name="Avi",id="147",phone="0527489653",days=new bool[5]},
        new Volunteer(){name="Dani",id="855",phone="0527489653",days=new bool[5]}
    };
    // private Volunteer[] volunteers=new volunteer[2];
    // volunteers[0]= new Volunteer(name="Avi",id="147",phone="0527489653",days=new bool[5]);
    // volunteers[1]=new Volunteer(name="Dani",id="855",phone="0527489653",days=new bool[5]);

    public VolunteersController(Ifile f){
        file=f;
    }
    [HttpGet]
    // public List<Volunteer> Get(){
    //     var v=file.GetAll(path);
    //     List<Volunteer> vol =new List<Volunteer>();
    //     vol=v;
    //     return vol;
    // }
    public Volunteer[] Get(){
        var size=volunteers.Count();
        Volunteer [] v=new Volunteer[size];
        int i=0;
       foreach(var vol in volunteers){
            v[i++]=vol;
       }
        return v;
    // return volunteers;
    }

    [HttpPut("{id}")]
    public Volunteer [] Put(int id,[FromBody]Volunteer volunteer){
        foreach(var v in volunteers){
            if (v.id==volunteer.id){
                Console.WriteLine("from server:"+v);
                // v=volunteer;
            }
        }
        var size=volunteers.Count();
        Volunteer [] v1=new Volunteer[size];
        int i=0;
       foreach(var vol in volunteers){
            v1[i++]=vol;
       }
        return v1;
    }

}