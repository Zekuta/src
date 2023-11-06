package IFSUL_CLASS.sistemas_distribuidos.chat_P2P;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Iclient extends Remote {

    public void enviaMsg(String str) throws RemoteException;

}
