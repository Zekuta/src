package IFSUL_CLASS.sistemas_distribuidos.chat_P2P;

// import java.rmi.server.UnicastRemoteObject;
import java.rmi.*;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.*;
import java.util.Scanner;
import java.io.*;

public class client extends UnicastRemoteObject implements Iclient {
    //se precisa una referencia para guardar el dato que viene del servidor, para eso creamos el Iserver server
    private Iserver server;
    public client() throws RemoteException {
        try {
            //se precisa una referencia para guardar el dato que viene del servidor
            server = (Iserver) Naming.lookup("rmi://127.0.0.1/ObjetoRemoto"); 
            server.enviaRefParaServidor(this);

            Scanner reader = new Scanner(System.in);

            while(true) {
                String str = reader.nextLine();
                server.enviaParaServidor(str);
            }
        } catch(Exception e){
            e.printStackTrace();
        }
    }

    public void enviaMsg(String str) throws RemoteException {
        System.out.println(str);
    }

    public static void main(String args[]) {
        try {
            client client = new client();
        } catch(Exception e){
            e.printStackTrace();
        }
    }
}
