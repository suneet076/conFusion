import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
const DISHES : Dish[] = [
  {
    id:"0",
    name:'Uthappizza',
    image:'assets/images/uthappizza.png',
    category:'mains',
    featured:true,
    label:'Hot',
    price:'4.99',
    description:'A unique Combination of Indian Uthappam and Italian pizza',
    comments:[]
  },
  {
  id:"1",
  name:'Zucchipakoda',
  image:'assets/images/zucchipakoda.png',
  category:'appetizer',
  featured:false,
  label:'',
  price:'1.99',
  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter ',
  comments:[]
},
{
  id:"2",
  name:'Vadonut',
  image:'assets/images/vadonut.png',
  category:'appetizer',
  featured:false,
  label:'New',
  price:'1.99',
  description:'A quintessential ConFusion experience , is it a vada or is it a donut?',
  comments:[]
},
{
  id:"3",
  name:'ElaiCheese Cake',
  image:'assets/images/elaicheesecake.png',
  category:'dessert',
  featured:false,
  label:'',
  price:'2.99',
  description:'A quintessential ConFusion experience , is it a vada or is it a donut?',
  comments:[]
}
];
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes=DISHES;
  selectedDish=DISHES[0];
  constructor() { }
  
  ngOnInit(): void {
  }

}
