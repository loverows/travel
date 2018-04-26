export default {
    changeCity(ctx,city){
      ctx.city = city;
      localStorage.city = city
      try {
        if(localStorage.city){
          localStorage.city = city
        }
      } catch(e){}
    }
}
