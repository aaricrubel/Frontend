import{R as e,a as o}from"./vendor.cd7509fb.js";function a({props:o}){return e.createElement("div",{className:"card"},e.createElement("h2",null,o.food),e.createElement("h3",null,"You have consumed ",o.calorie," cals today"))}var r=[{food:"Pizza",calorie:56},{food:"Burger",calorie:69},{food:"Coke",calorie:500},{food:"Browne",calorie:180},{food:"Fried Rice",calorie:90},{food:"Lassania",calorie:200},{food:"Pani Puri",calorie:10}];function l(){return e.createElement("div",{className:"App"},e.createElement("h1",null,"Calorie Read Only"),e.createElement("div",{className:"container"},r.map(((o,r)=>e.createElement(a,{props:o,key:r})))))}o.render(e.createElement(e.StrictMode,null,e.createElement(l,null)),document.getElementById("root"));