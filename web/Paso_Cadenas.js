function validar(){

	var tel=1;
	var nom=1;
	var ap=1;
	var cll=1;
	var kr=1;
	var k=0;	
	var papel=1;
	var pro=1;

	while(k===0){	

        

	if(document.getElementById("Tipo_c").value===""){

		document.getElementById("Tipo_c").value=prompt('el contacto debe ser un cliente o un proveedor');
		
                if(document.getElementById("Tipo_c").value==="proveedor"){

                    document.getElementById("Producto").value=prompt('el Producto no puede estar vacio y/o solo puede contener letras');
                    
                }

	}else {

		papel=0;	

	}

	if(document.getElementById("Nombre").value==="" || (/^([0-9])*$/.test(document.getElementById("Nombre").value))){

		document.getElementById("Nombre").value=prompt('el Nombre no puede estar vacio y/o solo puede contener letras');

	}else{
		nom=0;
	}
	
	
	if(document.getElementById("Apellido").value==="" || (/^([0-9])*$/.test(document.getElementById("Apellido").value)) || 15>document.getElementById("Apellido").value || 100<document.getElementById("Apellido").value){

		document.getElementById("Apellido").value=prompt('el Apellido no puede estar vacio y/o solo puede contener letras');
		
	}else{
		ap=0;
	}		
	
	
	if(document.getElementById("Cll").value==="" || !(/^([0-9])*$/.test(document.getElementById("Cll").value)) || 0>document.getElementById("Cll").value || 101<document.getElementById("Cll").value){

		document.getElementById("Cll").value=prompt('la calle no puede estar vacio y/o debe ser un numero entre el 1 a 100 positivo');
		
	}else{
		cll=0;
	}

	if(document.getElementById("Kr").value==="" || !(/^([0-9])*$/.test(document.getElementById("Kr").value)) || 0>document.getElementById("Kr").value || 101<document.getElementById("Kr").value){

		document.getElementById("Kr").value=prompt('la carrera no puede estar vacio y/o debe ser un numero entre el 1 a 100 positivo');
		
	}else{
		kr=0;
	}			

	if(document.getElementById("Telefono").value==="" || !(/^([0-9])*$/.test(document.getElementById("Telefono").value)) || 1000000>document.getElementById("Telefono").value || 9999999<document.getElementById("Telefono").value){

		document.getElementById("Telefono").value=prompt('el Telefono no puede estar vacio y/o debe ser un numero de 7 digitos positivo');
		
	}else{
		tel=0;
	}

	if((document.getElementById("Producto").value==="" || (/^([0-9])*$/.test(document.getElementById("Producto").value)))&& document.getElementById("Tipo_c").value==="proovedor"){

		document.getElementById("Producto").value=prompt('el Producto no puede estar vacio y/o solo puede contener letras');
	
	}else{

		pro=0;	

	}

	if(cll===0 && kr===0 && tel===0 && ap===0 && nom===0 && papel===0 && pro===0){
		
		k=1;

	}
	
    }
    
    if(document.getElementById("Tipo_c").value==="proveedor"){
                    
                document.getElementById("frmTest").action="recibirProveedor";
                document.frmTest.submit();
    }else if(document.getElementById("Tipo_c").value==="cliente"){
        
                document.getElementById("frmTest").action="ServletRecibir";
                document.getElementById("frmTest").submit();
    }
    
    
    
}

function mostrar(){
	
	var valor=document.getElementById("Tipo_c").value;

	if(valor==="proveedor"){
		document.getElementById("Producto").style.visibility = "visible"; 
		document.getElementById("p").style.visibility = "visible";
	}else{
		document.getElementById("Producto").style.visibility = "hidden";
		document.getElementById("p").style.visibility = "hidden"; 
	}

}

