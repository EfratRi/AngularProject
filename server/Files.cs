using System.IO;
using System.Text.Json;
using fileInterface;
namespace FileSersrvice
{
    public class Files:Ifile
    {
          public string filePath { get; set; }
     public Files()
    {
        //this.filePath = Path.Combine(Environment.CurrentDirectory, "File", "file.txt");
    }

    public void WriteMessage<T>(T message,string path)
    {
        if (File.Exists(path))
        {
            File.AppendAllText(path, $"{message}");
        }
    }

    public List<T> Read<T>(string path){
        string []data_str;
        List<T> l=new List<T>();
        if(File.Exists(path)){
            data_str=File.ReadAllLines(path);
            for(int i=1;i<data_str.Length;i++){
                T ?r=JsonSerializer.Deserialize<T>(data_str[i]);
                if(r!=null)
                    l.Add(r);
            }
        }
        return l;
    }
     public void AddItem<T>(T item,string path){
        if(File.Exists(path)){
            string json = File.ReadAllText(path);
            var TList = JsonSerializer.Deserialize<List<T>>(json);
            TList.Add(item);
            json=JsonSerializer.Serialize(TList);
           File.WriteAllText(path,$"{json}");
        }
        }
        public void RemoveItem<T>(T item,string path){
        if(File.Exists(path)){
            string json = File.ReadAllText(path);
            var TList = JsonSerializer.Deserialize<List<T>>(json);
            TList.Remove(item);
            json=JsonSerializer.Serialize(TList);
           File.WriteAllText(path,$"{json}");
        }
        }
     public List<T> GetAll<T>(string path)
        {
            if(File.Exists(path)){
                string json = File.ReadAllText(path);
                var TList = JsonSerializer.Deserialize<List<T>>(json);
                if (TList != null)
                    return TList;
                return default(List<T>); 
            }
            return null;
            
        }
    }
}