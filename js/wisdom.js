const app = Vue.createApp({
    data(){
        return{
            text1:"There are ways to keep going with pride and dignity even when hope cannot rationally be measured.",
            text2:"To Survive and Recover from Any Abuse Is a Healing That We Can All Achieve.",
            text3:"If we have the willpower and desire to create something, we have to wait patiently to see the results as they grow, day by day.",
            text4:"First find yourself, then look for the world.",
            text5:"If our heart and soul are always optimistic, our thoughts and feelings will only lead us to positive actions ."
        };
    },
    methods:{
        wisdomWord(){
            const nom = Math.floor((Math.random() * 5) + 1);
            // return nom;
            if(nom==1){
                return this.text1;
            }
            else if(nom==2){
                return this.text2;
            }else if(nom==3){
                return this.text3;
            }else if(nom==4){
                return this.text4;
            }
            else{
                return this.text5;
            }
        }
    }
});
app.mount('#wisdom');