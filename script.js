function createTable(){
    var tab=document.getElementById('tabulka');
    var num_rows = document.getElementById('y').value;
    var num_cols = document.getElementById('x').value;
    var theader = '<table class="table table-bordered" border="1">\n';
    var tbody = '';
    for( var i=0; i<=num_rows;i++)
    {
        tbody += '<tr>';
        for( var j=0; j<=num_cols;j++)
        {
            if(j==0 && i==0){
                tbody += '<td>';
                tbody += '</td>'
            }
            else if(j==0){
                tbody += '<td>';
                tbody += 'Y= ' + i;
                tbody += '</td>'
            }
            else if(i==0){
                tbody += '<td>';
                tbody += 'X= ' + j;
                tbody += '</td>'
            }
            else{
            tbody += '<td>';
            tbody += i*j;
            tbody += '</td>'}
        }
        tbody += '</tr>\n';
    }

    var tfooter = '</table>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
    tab.style.visibility="visible";
}

function closewind(){
    var tab=document.getElementById('tabulka');
    tab.style.visibility="hidden";
}

function checkNumx(){
    let par=document.getElementById('paragraf');
    let ix=document.getElementById('x');
    let yp=document.getElementById('sec');
    let sh=document.getElementById('Show');
    let num1=document.getElementById('x').value;
    if(num1<10 && num1>0){
        yp.style.visibility="visible";
        par.style.visibility="hidden";
        ix.style.border="solid black 1px";
    }else if(num1>9 || num1<1){
        sh.style.visibility="hidden";
        yp.style.visibility="hidden";
        ix.style.border="solid red 2px";
        par.style.visibility="visible";
        par.style.color="red";
    }
}

function checkNumy(){
    let par=document.getElementById('paragraf');
    let sh=document.getElementById('Show');
    let num2=document.getElementById('y').value;
    let yp=document.getElementById('y');
    if(num2<10 && num2>0){
        sh.style.visibility="visible";
        par.style.visibility="hidden";
        yp.style.border="solid black 1px";
    }
    else if(num2>9 || num2<1){
        sh.style.visibility="hidden";
        yp.style.border="solid red 2px";
        par.style.visibility="visible";
        par.style.color="red";
    }
}