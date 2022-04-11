class Medicamento {
   constructor(nome, valor){
      this.nomeMedicamento = nome;
      this.valorMedicamento = valor;
   }

   apresentarValorMedicamento (idadeCliente){

      var valor = this.valorMedicamento;
      
      if (idadeCliente >= 60, idadeCliente <= 70){
         var percentual = 20/100;
         console.log(valor + ' ' + percentual + ' ' + (valor * percentual));

      } else if (idadeCliente >= 71, idadeCliente <= 80){
         var percentual = 30/100;
         console.log(valor + ' ' + percentual + ' ' + (valor * percentual));

      } else if (idadeCliente > 80){
         var percentual = 50/100;
         console.log(valor + ' ' + percentual + ' ' + (valor * percentual));

      } else {
         console.log("valor normal: " + this.valorMedicamento)
      }
   }
}

const medicamento = new Medicamento("dipirona", 100);
medicamento.apresentarValorMedicamento(81);