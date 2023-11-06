import java.rmi.Naming;
import java.rmi.Remote;
import java.rmi.RemoteException;
import java.util.Scanner;
import java.rmi.Naming;
import java.rmi.Remote;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.util.Scanner;
import java.rmi.Remote;
import java.rmi.RemoteException;
import java.rmi.*;
import java.rmi.server.*;
import java.rmi.registry.*;
import java.io.*;


public class Client extends UnicastRemoteObject implements IClient{
	private IServer server;
	public Client() throws RemoteException{
		try{
			this.server = (IServer) Naming.lookup("rmi://127.0.0.1/RefObjetoRemoto");
			this.server.enviarRefClient(this);
			Scanner s = new Scanner(System.in);
			while(true){
				String stringg = s.nextLine();
				server.enviarMsg(stringg);
			}

		}
		catch(Exception e){

		}
		
	}
	public static void main(String args[]){
		//leitura do teclado
		try{
			Client client = new Client();	
		}
		catch(Exception e){
			
		}
		
	}
	public void enviarMsg(String s) throws RemoteException{
		System.out.println(s);
	}
}