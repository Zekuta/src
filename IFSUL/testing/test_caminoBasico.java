import java.util.*;
public class test_caminoBasico {

	public static void main(String[] args) {
		Scanner read = new Scanner(System.in);
		int numero;
		
/*1*/		System.out.print("Infome un número entre 10 y 100: "); numero=read.nextInt(); //Se pide un valor al usuario entre 10 y 100
/*2*/		if(numero<10 || numero>100) { //Verifica si el número seleccionado está entre los valores pedidos
/*3*/			while(numero<10 || numero>100) { //Mientras el número seleccionado esté fuera de los valores pedidos, se cumplirá el lazo de debajo
/*4*/				System.out.println("Escriba un numero válido: "); numero=read.nextInt(); //Se actualiza el valor de el número, para luego verificar si está dentro de los parámetros establecidos de entre 10 y 100
/*4*/			}
/*4*/		}
/*5*/		while(numero!=36) { //Mientras el número seleccionado no sea 36, se aplicará el lazo de debajo
/*6*/			if(numero<36) { //Si el número es menor a 36, se cumple la condición de debajo
/*7*/				numero=numero+1; //Suma +1 al número seleccionado hasta que este sea 36 
/*7*/			}
/*8*/			else { //Si el número es mayor a 36, se cumple la condición de debajo
/*8*/				numero=numero-1; //Resta -1 al número seleccionado hasta que este sea 36
/*8*/			}
/*8*/		}
/*9*/		System.out.println(numero); //Muestra el número seleccionado modificado, el cual debe de ser 36
        read.close();
	}
}