namespace fileInterface;
public interface Ifile
    {
         void WriteMessage<T>(T message,string path);
         List<T>Read<T>(string path);
          void AddItem<T>(T item,string path);
          List<T> GetAll<T>(string path);

    }