package IFSUL_CLASS.sistemas_distribuidos.chat_P2P;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Iserver extends Remote {
    //primer metodo
    public void enviaParaServidor(String str) throws RemoteException;
     //para el cliente pasar su propia referencia para el servidor para que el servidor pueda mandar su referencia despues
    public void enviaRefParaServidor(Iclient client) throws RemoteException;
}
