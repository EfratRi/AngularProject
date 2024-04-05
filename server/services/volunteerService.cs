using model;
namespace service;
public class VolunteerService{
    private static Volunteer[] volunteers=new Volunteer[8]{
        new Volunteer{name="Avi",id="147",phone="0527489653",days=new bool[5]},
        new Volunteer{name="Dani",id="855",phone="0527489653",days=new bool[5]},
        new Volunteer{name="Rami",id="669",phone="0527489653",days=new bool[5]},
        new Volunteer{name="Miki",id="321",phone="0527489653",days=new bool[5]},
        new Volunteer{name="Ron",id="970",phone="0527489653",days=new bool[5]},
        new Volunteer{name="Nati",id="557",phone="0527489653",days=new bool[5]},
        new Volunteer{name="Yossi",id="357",phone="0527489653",days=new bool[5]},
        new Volunteer{name="Levi",id="741",phone="0527489653",days=new bool[5]}
    };

    public static Volunteer[] GetAll()=>volunteers;
    public static Volunteer GetById(string id){
        for(int i=0;i<8;i++){
            if(volunteers[i].id==id){
                Console.WriteLine("succsess");
                return volunteers[i];
            }
        }
        return null;
    }
    public static Volunteer[] update(Volunteer volunteer){
        for(int i=0;i<8;i++){
            if(volunteers[i].id==volunteer.id){
                Console.WriteLine("succsess");
                for(int j=0;j<5;j++)
                    volunteers[i].days[j]=volunteer.days[j];
            }
        }
        return volunteers;
    }
    }
