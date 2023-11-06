package IFSUL_CLASS.sistemas_distribuidos.chat_P2P;

// import java.rmi.server.UnicastRemoteObject;
import java.rmi.*;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.*;
import java.util.Scanner;
import java.io.*;

public class server extends UnicastRemoteObject implements Iserver {
    private Iclient client;
    protected server() throws RemoteException { //Esto es para evitar obtener throws, esto se debe a que se inicializa un objeto remoto
        try {
            LocateRegistry.createRegistry(Registry.REGISTRY_PORT);
            Naming.bind("rmi://127.0.0.1/ObjetoRemoto", this); //this es la referencia del objeto remoto 
            
            Scanner reader = new Scanner(System.in);

            while(true) {
                String str = reader.nextLine();
                client.enviaMsg(str);
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
    public static void main(String args[]) {
        try {
            server server = new server();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
    @Override
    public void enviaParaServidor(String str) throws RemoteException {
        System.out.println(str);
    }
    @Override
    public void enviaRefParaServidor(Iclient client) throws RemoteException {
        this.client = client;
    }
}