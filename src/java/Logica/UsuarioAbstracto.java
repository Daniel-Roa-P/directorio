package Logica;

public abstract class UsuarioAbstracto {
    
    private String nombre;
    private String apellido;
    private int calle;
    private int carrera;
    private int telefono;
    private String tipo_c;
    private String comentario;
    public String producto;
    
    public void setNombre(String nombre){
        this.nombre=nombre;
    }
    
    public String getNombre(){
        return nombre;
    
    }
    
    public void setApellido(String apellido){
        this.apellido=apellido;
    }
    
    public String getApellido(){
        return apellido;
    
    }
    
    public void setTipo_c(String tipo_c){
        this.tipo_c=tipo_c;
    }
    
    public String getTipo_c(){
        return tipo_c;
    
    }
    
    public void setComentario(String comentario){
        this.comentario=comentario;
    }
    
    public String getComentario(){
        return comentario;
    
    }
    
    public abstract void setProducto(String producto);
    public abstract String getProducto();
    
    public void setCalle(int calle){
        this.calle=calle;
    }
    
    public int getCalle(){
        return calle;
    
    }
    
    public void setCarrera(int carrera){
        this.carrera=carrera;
    }
    
    public int getCarrera(){
        return carrera;
    
    }
    
    public void setTelefono(int telefono){
        this.telefono=telefono;
    }
    
    public int getTelefono(){
        return telefono;
    
    }
    
}
