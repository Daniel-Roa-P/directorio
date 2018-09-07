/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Logica;

/**
 *
 * @author Estudiantes
 */
public class Proveedor extends Usuario {

    @Override
    public void setProducto(String producto) {
        this.producto=producto;
    }

    @Override
    public String getProducto() {
        return producto;
    }
    
}
