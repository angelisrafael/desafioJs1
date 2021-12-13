window.onload = function(){

    
    let arrayProdutos = [
        {produto:'Mamão', preco:4.4},
        {produto:'Laranja', preco:2.2},
        {produto:'Manga', preco:2.6},
        {produto:'Melão', preco:4.2},
        {produto:'Melancia', preco:6.8}
    ]
   

    const cesta = document.querySelector("#cestaDoCliente");
    const valorTotal = document.querySelector("#mostraTotalCompra");
    const listaDeProdutos = document.querySelector("#produtos");
    

    (()=>{
        let arrayDaListona = [];
        let arrayDaCesta = [];


        let valorf=0.0;
        for( let produtoDoArray of arrayProdutos){
            let produtosListados = document.createElement('li');
            for(listap in produtoDoArray){
                if(listap =='preco'){
                    listaDeProdutos.appendChild(produtosListados).setAttribute('data-preco', produtoDoArray[listap]);                    
                }else{
                    arrayDaListona.push(`${produtoDoArray[listap]}`);
                    //console.log(arrayDaListona)
                    listaDeProdutos.appendChild(produtosListados).textContent = `${produtoDoArray[listap]}`;
                }
                
            }
            //console.log(produtoDoArray[listap]);

            const produtoListadoCesta = document.createElement('li');
            

            function calcula(){
                
                produtosListados.addEventListener('click', function(){
                    console.log(produtoDoArray);
                    //console.log(arrayDaCesta[0]);
                    //console.log(arrayDaCesta);
                    let jaFoiClicado = false;
                    
                    for(let produtocl of arrayDaCesta){
                        if(produtocl === produtoDoArray.produto){
                            jaFoiClicado = true;
                        }       
                        console.log('slaa', produtocl); 
                        console.log('aoao', produtoDoArray.produto);    
                    }
                    console.log(jaFoiClicado);
                    if(!jaFoiClicado){                   
                        cesta.appendChild(produtoListadoCesta).setAttribute('data-preco', produtoDoArray.preco);
                        //console.log(cesta);
                        valorf += produtoDoArray.preco
                                        
                        
                        arrayDaCesta.push(`${produtoDoArray.produto}`);
                        cesta.appendChild(produtoListadoCesta).textContent = `${produtoDoArray.produto}`;
                                    
                    }else{
                        alert('não e possível selecionar mais de uma vez!');
                    }   
                                        
                    valorTotal.value = valorf.toFixed(2);
                })
            
            }

            calcula();

            function removerprod(){
                produtoListadoCesta.addEventListener('click', function(){
                    let indexin;

                            produtoListadoCesta.remove();   
                            valorf -= produtoDoArray.preco;
                            indexin = arrayDaCesta.indexOf(produtoDoArray.produto);
                            arrayDaCesta.splice(indexin,1);      
                                
                    valorTotal.value = valorf.toFixed(2);
                })
            }
            removerprod();
        
        }
        
    })(arrayProdutos)


    

































    //----------------------

            // const dataSetProd = document.createElement('li');
            // listali.addEventListener('click', function(){

                
            //     for(listap in pro){
            //         if(listap=='preco'){  
                    
            //             listacomprei.appendChild(dataSetProd).setAttribute('data-preco', pro[listap]);
                        
            //             // do {
            //                  valorf += pro[listap];
            //             // } while (pro[listap] != listap.listacomprei);
                        
            //         }else{
                        
            //             listacomprei.appendChild(dataSetProd).textContent = `${pro[listap]}`;
                        
            //         }
                    
            //     }
            //     //valorfinal.value = valorf.toFixed(2);
            //     valorfinal.value=parseFloat(Number(valorf)).toFixed(2);

            // })

            //-------------------------
            
            // dataSetProd.addEventListener('click', function(){
            //     valorf -= pro[listap];
            //     valorfinal.value = valorf.toFixed(2);
            //     //listacomprei.remove();

            //     for(listap in pro){
            //         if(listap=='produto'){
            //             dataSetProd.remove();
            //         }
            //     }
    
            // })

    
    

















































    

    

    // const prod1 = document.querySelector("#mamaoProduto");

    // const prod2 = document.querySelector("#laranjaProduto");

    // const prod3 = document.querySelector("#mangaProduto");

    // const prod4 = document.querySelector("#melaoProduto");

    // const prod5 = document.querySelector("#melanciaProduto");

  
  
  
  
  
  
  
    // listaprod.addEventListener('click', function(){
    //      let valorf=0;
    //     for( let pro of osprodutos){
    //         const listali = document.createElement('li');
    //         for(listap in pro){
    //             if(listap =='preco' && pro.add){
    //                 listacomprei.appendChild(listali).setAttribute('data-preco', pro[listap]);
    //                 valorf += pro[listap];
    //             }else{
    //                 listacomprei.appendChild(listali).textContent = `${pro[listap]}`;
    //             }
    //         }
    //         console.log(pro[listap]);
    //     }
    //     valorfinal.value = valorf.toFixed(2);

    //  })    





















    // prod2.addEventListener('click', function(){
    //     let dataSetProd = prod2.dataset.codigoproduto;
    //     valorfinal.value= (Number(valorfinal.value) + parseFloat(Number(dataSetProd))).toFixed(2);
    //     console.log(dataSetProd);

    //     dataSetProd = document.createElement('li');
    //     listacomprei.appendChild(dataSetProd).textContent = "Laranja";

    // })    

    // prod3.addEventListener('click', function(){
    //     let dataSetProd = prod3.dataset.codigoproduto;
    //     valorfinal.value= (Number(valorfinal.value) + parseFloat(Number(dataSetProd))).toFixed(2);
    //     console.log(dataSetProd);

    //     dataSetProd = document.createElement('li');
    //     listacomprei.appendChild(dataSetProd).textContent = "Manga";

    // })    

    // prod4.addEventListener('click', function(){
    //     let dataSetProd = prod4.dataset.codigoproduto;
    //     valorfinal.value= (Number(valorfinal.value) + parseFloat(Number(dataSetProd))).toFixed(2);
    //     console.log(dataSetProd);

    //     dataSetProd = document.createElement('li');
    //     listacomprei.appendChild(dataSetProd).textContent = "Melão";

    // })    

    // prod5.addEventListener('click', function(){
    //     let dataSetProd = prod5.dataset.codigoproduto;
    //     valorfinal.value= (Number(valorfinal.value) + parseFloat(Number(dataSetProd))).toFixed(2);
    //     console.log(dataSetProd);

    //     dataSetProd = document.createElement('li');
    //     listacomprei.appendChild(dataSetProd).textContent = "Melancia";

    // })
}

