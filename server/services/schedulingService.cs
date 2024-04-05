using model;
namespace service;
public class SchedulingService{
    private static string[] days={"0","0","0","0","0"};
    
    public static string[] GetAll()=>days;
    public static string[] Update(string[] d){
        for(int i=0;i<5;i++){
            if(d[i]!=null){              
                days[i]=d[i];
            }
        }
        return days;
    }
    }
