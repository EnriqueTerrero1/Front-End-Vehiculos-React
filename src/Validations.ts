import * as Yup from 'yup';

function configureValidations(){
    Yup.addMethod(Yup.string, 'primeraLetraMayuscula',function(){
        return this.test('primeraletramayuscula',
        "La primera letra debe de ser mayuscula",function(value){
            if(value && value?.length>0){
                const primeraLetra = value?.substring(0,1);
                return primeraLetra ===primeraLetra?.toUpperCase();
            }
            return true;
        })
    })
}

export default configureValidations;