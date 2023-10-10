<?php



/*
$idClientes = 'mae_regimen.codigo,mae_grupo_poblacional.codigo_reporte_altocosto,adm_mae_pacientes.primer_nombre,adm_mae_pacientes.segundo_nombre
,adm_mae_pacientes.primer_apellido,adm_mae_pacientes.segundo_apellido,mae_tipo_documento.abreviatura,adm_mae_pacientes.documento,adm_mae_pacientes.fecha_nacimiento
,mae_sexos.abreviatura,mae_grupo_cultural.codigo_reporte_altocosto,adm_mae_pacientes.direccion,adm_mae_pacientes.telefono,mae_municipios.codigo';

$arr = explode(",",$idClientes);
$cadena='';
foreach ( $arr as $key => $value ){
    //var_dump( $arr[$key]  );
    
    if(preg_match_all("/[.]+(|.|^\_\-])+(fecha|created|updated)/", $value)){
        echo "<br> $key: FECHA";
        echo "<br>";
        var_dump( $value );
        /* $idClientes .= ' CONVERT(VARCHAR,'.$value.',23),'; */
        /*$cadena .= "CONVERT(VARCHAR,$value,23)+'|'+";
        echo "<br>";
        echo "<br>";*/
    /*} else if(preg_match_all("/[.]+(|.|^\_\-])+(codigo|telefono|celular)/", $value)){
        echo "<br> $key CODIGO";
        echo "<br>";
        var_dump( $value );
        $cadena .= "CONVERT(VARCHAR,$value)+'|'+";
        echo "<br>";
        echo "<br>";
    }else{
        $cadena .= $value."+'|'+";
    }
}

$CENDA_CORTAR = "+";
$length = strlen($cadena);
var_dump( $length );
echo "<br>";
$estado = strpos($cadena, $CENDA_CORTAR, $length);
var_dump( $estado );
if($estado == false ){
    $cadena = substr($cadena, 0,$length-5);
}
echo "<br>";
var_dump( $cadena );

echo "<br><br>";
echo "<br> ESPECTATIVA <br><br>";
var_dump("mae_regimen.codigo+'|'+CONVERT(VARCHAR,mae_grupo_poblacional.codigo_reporte_altocosto)+'|'+adm_mae_pacientes.primer_nombre+'|'+adm_mae_pacientes.primer_nombre
+'|'+adm_mae_pacientes.segundo_nombre+'|'+adm_mae_pacientes.primer_apellido+'|'+adm_mae_pacientes.segundo_apellido+'|'+mae_tipo_documento.abreviatura+'|'+adm_mae_pacientes.documento+'|'+CONVERT(VARCHAR,adm_mae_pacientes.fecha_nacimiento, 23)
+'|'+mae_sexos.abreviatura+'|'+CONVERT(VARCHAR,mae_grupo_cultural.codigo_reporte_altocosto)+'|'+adm_mae_pacientes.direccion+'|'+adm_mae_pacientes.telefono+'|'+CONVERT(VARCHAR,mae_municipios.codigo");
echo "<br>";
echo "<br>";
*/


/* $text = 'mae_regimen.codigo,mae_grupo_poblacional.codigo_reporte_altocosto, adm_mae_pacientes.primer_nombre,adm_mae_pacientes.segundo_nombre,adm_mae_pacientes.primer_apellido,adm_mae_pacientes.segundo_apellido,mae_tipo_documento.abreviatura,adm_mae_pacientes.documento,adm_mae_pacientes.fecha_nacimiento,mae_sexos.abreviatura,mae_grupo_cultural.codigo_reporte_altocosto,adm_mae_pacientes.direccion,adm_mae_pacientes.telefono,mae_municipios.codigo';

$arr = explode(",",$text);
$coma = '';
$cadena = '';
foreach ( $arr as $value ){

    $cadena .= $coma."'$value'";
    $coma = ',';
}
var_dump( $cadena ); */

/* $cadena = "";
$text2 = '154,157,160,161,164,167,170,173,176,179,180,182,184,186,188,190';
$arr = explode(",",$text2);
foreach ( $arr as $key => $value ){
    $key++;
    $cadena .= " WHEN hc_historia_pregunta.id=".$value." THEN ". $key." \n <br>";
}
var_dump( $cadena ); 
// $pregunta = str_replace($letraRemplazar,"and", $pregunta);
*/
$arr_pre_divicion = [];
//$letraRemplazar = array("y","o");
$cadena = "";
$codigo = "1,2";
$pregunta = "= 2022-09-01 y = 2022-11-18, = 2022-11-18 y = 2022-11-30";
$arr_codigo = explode(",",$codigo);
$arr_pregunta = explode(",",$pregunta);

$t_campo = "datetime2";
$cod_f = 23;
$arr1 = [];
$arr2 = [];
$campo = "created_at";

//var_dump( $arr_pregunta  );
//$cadena .=" WHEN convert (FLOAT,minu.valor) >=  0 and convert (FLOAT, minu.valor) < 2.6 THEN 0 \n";

foreach ($arr_pregunta as $key => $value) {
    array_push($arr_pre_divicion, explode("y", $value) );
}
var_dump( $arr_pre_divicion );
if( count($arr_codigo) == count($arr_pregunta) ){
    if($t_campo == null || $t_campo == ""){
        foreach ($arr_codigo as $key => $codigo) { $cadena .=" WHEN convert (FLOAT,minu.valor) {$arr_pre_divicion[$key][0]} and convert (FLOAT, minu.valor)  {$arr_pre_divicion[$key][1]} THEN $codigo <br>"; }
    }elseif($t_campo == "datetime2"){
        /* foreach ($arr_pre_divicion as $key => $value) { */
        foreach($arr_codigo as $key => $codigo) {
            //print_r($arr_pre_divicion[$key]);
            $argu_1 =  $arr_pre_divicion[$key][0];
            $argu_2 =  $arr_pre_divicion[$key][1];
            /* print_r($argu_1);
            print_r($argu_2); */
            $arr1 = explode(" ",trim($argu_1));
            $arr2 = explode(" ",trim($argu_2));
            echo "\n <br>";
            print_r($arr1[1]);
            echo "\n <br>";
            print_r($arr2[1]);
            echo "\n <br>";
            $cadena .=" WHEN minu.$campo BETWEEN  '$arr1[1]' and '$arr2[1]' THEN $codigo \n";  
        }
        // foreach ($arr_codigo as $key => $codigo) {
		// 	//$cadena .=" WHEN CONVERT(NVARCHAR,minu.$campo, $cod_f ) {$arr_pre_divicion[$key][0]} and CONVERT(NVARCHAR, minu.$campo, $cod_f ) {$arr_pre_divicion[$key][1]} THEN $codigo \n";
        //     //$cadena .=" WHEN CONVERT(NVARCHAR,minu.valor, $cod_f) {$arr1[0]} CONVERT(NVARCHAR,{$arr1[1]}, $cod_f)  and CONVERT(NVARCHAR, minu.valor, $cod_f ) {$arr2[0]} CONVERT(NVARCHAR,{$arr2[1]}, $cod_f) THEN $codigo \n";
        //     $cadena .=" WHEN minu.$campo BETWEEN  '$arr1[1]' and '$arr2[1]' THEN $codigo \n";
        // }
    }
}
var_dump($cadena);
/* foreach ($arr_codigo as  $value) {
    var_dump( $value );
} */

function estructura_select_para_profesionales(String $ids, String $codigos = null)
{
	try{
		$cadena = "";
		$arr = explode(",",$ids);
        if($codigos == null){
            foreach ( $arr as $key => $value ){
                $key++;
                $cadena .= " WHEN hc_folio.id_especialidad=".$value." THEN ". $key." \n";
            }
            return $cadena;
        }else{
            $arr_codigos = explode(",",$codigos);
            if( count($arr_codigos) == count($arr) ){
                foreach($arr_codigos as $key => $codigo) {
                    $cadena .= " WHEN hc_folio.id_especialidad=".$arr[$key]." THEN ". $codigo." \n";
                }
                return $cadena;
            }else{
                echo "No son iguales los dos array";
            }
        }
	} catch (\Throwable $e) {
		return " WHEN 2+2=3 THEN 1 \n";
	}
}

echo "<br><br>";

$str =  estructura_select_para_profesionales('28,260','5,8');

echo $str;


echo "<br> ============================================================================================== <br> <br>";

echo "select stuff( STUFF('333|222|111', charindex('|','333|222|111',1) ,1 , '-') , charindex('|',STUFF('333|222|111', charindex('|','333|222|111',1) ,1 , '-'), 1), 1 ,'-' )";

echo "<br><br> ================================= for acomulativo ================================================= <br> ";

$contador = 3;
$complete = "STUFF('333|222|111', charindex('|','333|222|111',1) ,1 , '-')";

$start="STUFF(,";
$end="";
$concat = '';


function Comentado($cantidad)
	{
        $variable="333|222|111";
        $cambio='-';
        //$variable="STRING_AGG ( CONVERT ( VARCHAR ( 255 ), x.respuesta ), '|' ) WITHIN GROUP ( ORDER BY x.respuesta DESC )";
        $acumulador="STRING_AGG ( CONVERT ( VARCHAR ( 255 ), x.respuesta ), '|' ) WITHIN GROUP ( ORDER BY x.respuesta DESC )"; 
        for ($i=1; $i <$cantidad ; $i++) { 
            $estructura="STUFF($acumulador, charindex('|',$acumulador,1) ,1 , '$cambio')";
            $acumulador=$estructura;
        }
        $acumulador="left($variable, charindex('|',$acumulador,1)-1)";
		return $acumulador;
}

var_dump( Comentado(4) );



echo "<br>";
echo "<br>";
echo "=================================================== <br>";


echo substr( (String) getdate()[0],-6)."\n";

echo "<br>";
var_dump(date("Y-m-d H:i:s"));

echo "<br>";
$today = getdate();
var_dump($today);
echo "<br>";
var_dump(date("y").$today["mon"].$today["hours"].$today["hours"].$today["seconds"]);

echo "<br>";
echo "<br>";
$vari2 = substr((String) microtime(true),-2);

echo $vari2;


echo "<br>";
echo "<br>";

var_dump( substr((String) date("m"), -1));


echo rand(1, 20), "\n";


echo "===========PRUEBA \n";

echo "======= EJERCICIO 1 ========== \n";

function segmentos($n=2){
    $contador=36;
    $hra_ini=strtotime('00:00:00');
    for ($i=1;$i<=$n;$i++){
        $hra_ini=strtotime("+1 second",$hra_ini);
        $cadena_env=date ('H:i:s' , $hra_ini);
        $contador+=peso($cadena_env);
    }
    return $contador;
}

function peso($cadena='00:00:00'){
    $pon = Array(6,2,5,5,4,5,6,3,7,5);
    $contador=0;
    $cadena=str_split($cadena);
    for($i=0; $i<sizeof($cadena);$i++){
        if($cadena[$i]!=':'){
             $contador+=$pon[$cadena[$i]];
        }
    }
    return $contador; 
}

var_dump( segmentos(60) );

echo "======= EJERCICIO 2 ========== \n";

function cadena($str="abcabcbb"){
    return sizeof(array_unique(str_split($str)));
}

var_dump(cadena("bbbbbbb"));

echo "======= EJERCICIO 3 ========== \n";

function sePuede($str1="compromiso", $str2="piso"){
    $arr = str_split($str2);
    for($i=0; $i<sizeof($arr);$i++){
        if(!str_contains($str1, $arr[$i])){
            return false;
        }
    }
    return true;
}

var_dump(sePuede("programacion", "juego"));
