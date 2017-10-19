import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  title : string = 'app works!';
  temp : number = 0 ;
  temp_coll : number[] = [] ;
  median : string = '';
  memleft : number = 0;
  MAXIMIUM : number = 8;
  recordTemperature(data : number) : void{
    
    //alert('From click : ' + data);
    if(data > -50 && data < 50){
    
        if(this.temp_coll.length == this.MAXIMIUM){
          alert('Processing limit exceeded.[Limit is ' + MAXIMIUM + ']');
        }else{
          
    
            this.temp_coll[this.temp_coll.length] = parseInt(data) ;
            this.temp = 0;
            this.getCurrentMedian();
            
            this.memleft = this.temp_coll.length;
        }
    }else{
      this.temp = 0;
      alert('tempreture reading should be more than -50 and less than 50');
    }
    
  }
  
  getCurrentMedian() : number {
    
    this.temp_coll.sort( function(a,b) {return a - b;} );
    
    let center = Math.floor(this.temp_coll.length/2);
    
    if(this.temp_coll.length % 2)
        this.median = this.temp_coll[center];
    else{
      
      
      let val = parseInt(this.temp_coll[center-1]) + parseInt(this.temp_coll[center]);
      let new_median = val / 2;
      
      this.median = new_median;
    }
    if(isNaN(this.median)){
      this.median = undefined;
    }
    
    return this.median;
    
  }
  
}
