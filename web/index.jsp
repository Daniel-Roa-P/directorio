<%-- 
    Document   : newjsp
    Created on : 6/09/2018, 10:31:13 AM
    Author     : Estudiantes
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>
        <title>Formulario</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="Paso_Cadenas.js" language='JavaScript1.2'></script>
        <link type="text/css" rel="stylesheet" href="EstiloIndex.css"/>
        <title> otra pagina mas </title>
    </head>
    <body onload="mostrar()">
		
		<form id="frmTest" name="frmTest" action="ServletCliente" method="get">		

		<table id="tabla" border="3">

			<tr id="col10">
				<td colspan ="3">
				<h1 id="h0">Fomulario</h1>
				</td>
			</tr>
			
			<tr>
				<td id="col11">
				
				<h1 id="h1">* Nombre</h1>
				
				</td>
				<td id="col21">
				
				<input type="text" id="Nombre" name="Nombre"></input>
			
				</td>
				
			
				<td rowspan="4" id="img">
				<img src="https://static.savings-united.com/shop/18640/logo/Ofertas_Walmart_Buen_Fin._200x200.png"></img>
				</td>
			</tr>
			

			<tr>
				<td id="col12">
				
				<h1 id="h2">* Apellido</h1>
				
				</td>
				<td id="col22">
				
				<input type="text" id="Apellido" name="Apellido"></input>
				
				</td>
			</tr>

			<tr>
				<td id="col13">
				
				<h1 id="h3">* Direccion</h1>
				
				</td>
				<td id="col23">
				<h6>Cll: <input type="text" id="Cll" name="Cll"></input> Kr: <input type="text" id="Kr" name="Kr"></input></h6>
				
				</td>
			</tr>

			<tr>
				<td id="col14">
				
				<h1 id="h4">* Telefono</h1>
				
				</td>
				<td id="col24">
				
				<input type="text" id="Telefono" name="Telefono"></input>
				
				</td>
			</tr>

			<tr id="col5">
				<td>
				
				<h1>* Tipo de contacto</h1></td>
               			 	<td>

                			<select tabindex="3" id="Tipo_c" name="Tipo_c" onclick="mostrar()">
                			<option value="">Seleccione una opcion</option>
                			<option value="cliente">cliente</option>
                			<option value="proveedor">proveedor</option>

                			</select>
                	</td>
                        
			<td>
				<h6 id="p" name="p">*Producto:<input type="text" id="Producto" name="Producto"></input></h6>
			</td>			

			<tr>

			<tr id="col6">

				<td><h1> Comentarios: </h1></td>
				<td colspan ="2"><textarea id="area" name="area"></textarea></td>

			</tr>

				<td id="boton" colspan ="3">
				
				<h5>*Obligatorio</h5>
                                <input type="button" value="guardar" onclick="validar()"/>

				</td>

		</table>
		</form>
		
	</body>
</html>
