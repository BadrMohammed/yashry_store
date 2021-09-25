(this.webpackJsonpyashry_store=this.webpackJsonpyashry_store||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"general",(function(){return G})),a.d(r,"fetchCategories",(function(){return B})),a.d(r,"fetchProducts",(function(){return z}));var n=a(0),c=a.n(n),l=a(48),s=a.n(l),i=(a(92),a(93),a(31)),o=a(32),d=a(34),u=a(33),j=a(36),p=a(58),f=a(40),m="UPDATE_CATEGORIES_PROPS",g="MERGE_CATEGORIES_PROPS",h="DELETE_CATEGORIES_PROPS",b="CLEAR_CATEGORIES_STATE",x="UPDATE_PRODUCTS_PROPS",O="MERGE_PRODUCTS_PROPS",v="DELETE_PRODUCTS_PROPS",y="CLEAR_PRODUCTS_STATE",_=a(51),N=a.n(_),C=function(e,t){for(var a=e,r=0;r<t.payload.length;r++)a=N.a.set(a,t.payload[r].prop,t.payload[r].value);return a},E=function(e,t){for(var a=e,r=0;r<t.payload.length;r++)a=N.a.merge(a,t.payload[r].prop,t.payload[r].value);return a},R=function(e,t){for(var a=e,r=0;r<t.payload.length;r++)a=N.a.delete(a,t.payload[r].prop);return a},P={data:{items:null,isLoading:!1}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return C(e,t);case g:return E(e,t);case h:return R(e,t);case b:return P;default:return e}},w={data:{items:null,isLoading:!1,filters:{categoryId:null,price:[0,0],ratings:[],colors:[]},current_page:1,new_color:"",price_range:null},default_colors:["red","blue","green","white","black"]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return C(e,t);case O:return E(e,t);case v:return R(e,t);case y:return w;default:return e}},D=Object(j.b)({CategoryR:T,ProductR:S}),L=a(150),I=a(149),k=a(144),A=a(1),U=function(){return Object(A.jsx)("div",{children:Object(A.jsx)(k.a,{className:"header center",light:!0,children:Object(A.jsx)("p",{className:"text-center",children:"yashry store"})})})},F=a(145),M=function(e){var t=e.category,a=e.general,r=e.categoryId;return Object(A.jsx)(F.a,{className:"category_card",style:{border:r===t.id?"1px solid #4d9ee5":null},onClick:function(e){e.preventDefault(),a([{prop:"data.filters.categoryId",value:t.id},{prop:"data.current_page",value:1}],x)},children:Object(A.jsxs)("div",{className:"page_container center",children:[Object(A.jsx)("img",{src:t.image,style:{borderRadius:"5px",width:"100px",height:"100px"},className:"full_image img-fluid",alt:"img"}),Object(A.jsx)("div",{className:"category_container_name",children:Object(A.jsxs)("p",{children:[" Category ",t.name]})})]})})},G=function(e,t){return{type:t,payload:e}},X=a(75),V=a.n(X),W=function(){return V.a.create({baseURL:"https://test-api.edfa3ly.io",headers:{contentType:"application/json"}})},B=function(){return function(e){e({type:m,payload:[{prop:"data.isLoading",value:!0}]}),W().get("/category").then((function(t){200===t.status&&e({type:m,payload:[{prop:"data.items",value:t.data}]}),e({type:m,payload:[{prop:"data.isLoading",value:!1}]})})).catch((function(t){console.log(t),e({type:m,payload:[{prop:"data.isLoading",value:!1}]})})).finally()}},J=a(16),z=function(){return function(e){e({type:x,payload:[{prop:"data.isLoading",value:!0}]}),W().get("/product").then((function(t){if(200===t.status){var a=t.data.map((function(e){return e.price}));e({type:x,payload:[{prop:"data.price_range",value:[0,Math.max.apply(Math,Object(J.a)(a))]},{prop:"data.items",value:t.data}]})}e({type:x,payload:[{prop:"data.isLoading",value:!1}]})})).catch((function(t){e({type:x,payload:[{prop:"data.isLoading",value:!1}]}),console.log(t)})).finally()}},$=a(167);function q(e){var t=e.width,a=e.height;return Object(A.jsx)($.a,{variant:"rectangular",width:t,height:a})}var H=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).renderCategories=function(){var t=e.props,a=t.data,r=t.general,n=t.categoryId;if(null!==a.items&&a.items.length>0)return a.items.map((function(e,t){return Object(A.jsx)(I.a,{className:"center mt-4",children:Object(A.jsx)(M,{category:e,general:r,categoryId:n})},t)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCategories()}},{key:"render",value:function(){var e=this.props.data;return Object(A.jsx)("div",{children:Object(A.jsx)(F.a,{className:"card_item ml-5 mr-5",children:Object(A.jsxs)(L.a,{className:"mb-4",children:[Object(A.jsx)(I.a,{xl:12,className:"mt-4 ml-5",children:Object(A.jsx)("h5",{className:"black_color ml-3 mr-3",children:"Choose one of our categories from below"})}),!0===e.isLoading?Object(A.jsx)(A.Fragment,{children:[1,2,3,4,5].map((function(e){return Object(A.jsx)(I.a,{className:"center mt-4",children:Object(A.jsx)(q,{width:"130px",height:"130px"})},e)}))}):this.renderCategories()]})})})}}]),a}(n.Component),K=Object(f.b)((function(e){var t=e.CategoryR,a=e.ProductR;return{data:t.data,categoryId:a.data.filters.categoryId}}),r)(H),Q=a(164),Y=function(e){var t=e.product;return Object(A.jsxs)(F.a,{className:"product_card card_item",children:[Object(A.jsx)("div",{children:Object(A.jsx)("img",{src:t.image,className:"full_image",alt:"img",style:{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}})}),Object(A.jsx)("div",{className:"text-center mt-2",children:Object(A.jsx)("span",{style:{fontWeight:"bold"},children:t.name})}),Object(A.jsx)("div",{className:"text-center mt-2",children:Object(A.jsx)(Q.a,{name:"simple-controlled",value:t.rating,readOnly:!0})}),Object(A.jsx)("div",{className:"text-center mt-1 mb-2",children:Object(A.jsx)("span",{children:t.currency+" "+t.price})})]})},Z=a(153),ee=a(154),te=a(155),ae=a(156),re=a(157),ne=a(158),ce=a(162),le=a(78),se=a(168),ie=a(165),oe=a(163),de=a(60),ue=function(e,t,a,r){function n(){a([{prop:e,value:t}],O)}a([{prop:"data.current_page",value:1}],x),0===r.length?n():r.find((function(e){return e===t}))?a([{prop:e+"."+r.indexOf(t)}],v):n()},je=function(e,t,a){return Object(A.jsx)(L.a,{style:{marginInline:"1"},children:Object(A.jsx)(I.a,{children:Object(A.jsxs)("div",{className:"alignItem flex",children:[Object(A.jsx)("span",{style:{cursor:"pointer"},onClick:function(r){r.preventDefault(),ue("data.filters.ratings",e,a,t)},children:Object(A.jsx)(Q.a,{name:"simple-controlled",value:e,readOnly:!0})}),void 0===t.find((function(t){return t===e}))?null:Object(A.jsx)(de.a,{color:"blue"})]})})})},pe=function(e,t,a,r){return Object(A.jsx)(le.a,{className:"form-control input_style",id:"input-example",name:"input-name",value:t,placeholder:a,decimalsLimit:2,onValueChange:function(t){return r([{prop:e,value:t},{prop:"data.current_page",value:1}],x)},suffix:" $ "})},fe=function(e){return Object(A.jsx)(L.a,{className:"ml-1 mr-1",children:Object(A.jsx)(I.a,{xl:12,lg:12,md:12,sm:12,xs:12,className:"flex alignItem",children:Object(A.jsxs)("div",{onClick:function(t){return e(t)},className:"clear_container",children:[Object(A.jsx)(de.b,{color:"red",style:{cursor:"pointer"}}),Object(A.jsx)("span",{style:{cursor:"pointer",fontWeight:"bold"},children:"clear"})]})})})},me=function(e){var t=e.data,a=e.general;return Object(A.jsx)(Z.a,{children:Object(A.jsxs)(ee.a,{children:[Object(A.jsxs)(L.a,{className:"ml-1 mr-1",children:[Object(A.jsx)("p",{style:{fontWeight:"bold"},children:"Price Range"}),Object(A.jsx)(I.a,{xl:6,lg:6,md:12,sm:12,xs:12,className:"mt-1",children:pe("data.filters.price.0",t.filters.price[0],"From",a)}),Object(A.jsx)(I.a,{xl:6,lg:6,md:12,sm:12,xs:12,className:"mt-1",children:pe("data.filters.price.1",t.filters.price[1],"To",a)})]}),Object(A.jsx)(L.a,{className:"ml-1 mr-1",children:Object(A.jsx)(I.a,{xl:12,lg:12,md:12,sm:12,xs:12,className:"mt-2",children:Object(A.jsx)(ce.a,{getAriaLabel:function(){return"Price range"},value:t.filters.price,min:0,max:null===t.price_range?1e3:t.price_range[1],onChange:function(e,t){a([{prop:"data.filters.price",value:t},{prop:"data.current_page",value:1}],x)},valueLabelDisplay:"auto",getAriaValueText:function(e){return"".concat(e,"\xb0C")}})})}),0===t.filters.price[0]&&0===t.filters.price[1]?null:fe((function(e){e.preventDefault(),a([{prop:"data.filters.price",value:[0,0]},{prop:"data.current_page",value:1}],x)}))]})})},ge=function(e){var t=e.data,a=e.general,r=e.default_colors;return Object(A.jsxs)(te.a,{children:[Object(A.jsxs)(L.a,{className:"ml-1 mr-1",children:[Object(A.jsx)("p",{style:{fontWeight:"bold"},children:"Color"}),Object(A.jsx)(I.a,{xl:12,lg:12,md:12,sm:12,xs:12,children:Object(A.jsxs)("div",{className:"flex alignItem",children:[Object(A.jsx)(ae.a,{className:"input_style",placeholder:"Color",value:t.new_color,onChange:function(e){return a([{prop:"data.new_color",value:e.target.value}],x)}}),""!==t.new_color?Object(A.jsx)(re.a,{className:"add_btn",onClick:function(e){return function(e){e.preventDefault(),void 0===r.find((function(e){return e===t.new_color}))&&a([{prop:"default_colors",value:t.new_color}],O)}(e)},children:"save"}):null]})})]}),r.map((function(e,r){return function(e,t,a,r){return Object(A.jsx)(L.a,{className:"ml-1 mr-1",children:Object(A.jsx)(I.a,{xl:12,lg:12,md:12,sm:12,xs:12,className:"checkbox_container",children:Object(A.jsx)(se.a,{children:Object(A.jsx)(ie.a,{control:Object(A.jsx)(oe.a,{onChange:function(t){return ue("data.filters.colors",e,a,r)},checked:void 0!==r.find((function(t){return t===e}))}),label:e})})})},t)}(e,r,a,t.filters.colors)})),0===t.filters.colors.length?null:fe((function(e){e.preventDefault(),a([{prop:"data.new_color",value:""},{prop:"data.filters.colors",value:[]},{prop:"data.current_page",value:1},{prop:"data.default_colors",value:["red","blue","green","white","black"]}],x)}))]})},he=function(e){var t=e.data,a=e.general;return Object(A.jsxs)(ne.a,{children:[Object(A.jsx)("p",{className:"ml-3 mr-3 mt-3",style:{fontWeight:"bold"},children:"Aveage Rating"}),je(5,t.filters.ratings,a),je(4,t.filters.ratings,a),je(3,t.filters.ratings,a),je(2,t.filters.ratings,a),je(1,t.filters.ratings,a),0===t.filters.ratings.length?null:fe((function(e){e.preventDefault(),a([{prop:"data.filters.ratings",value:[]},{prop:"data.current_page",value:1}],x)}))]})},be=function(e){var t=e.data,a=e.general,r=e.default_colors;return Object(A.jsxs)(F.a,{className:"card_filter_container card_item",children:[Object(A.jsx)(me,{data:t,general:a}),Object(A.jsx)(ge,{default_colors:r,data:t,general:a}),Object(A.jsx)(he,{data:t,general:a})]})},xe=a(161),Oe=a(159);function ve(e){var t=e.pages,a=e.data,r=e.general;return Object(A.jsx)(Oe.a,{spacing:2,children:Object(A.jsx)(xe.a,{count:t.length,page:a.current_page,onChange:function(e,t){r([{prop:"data.current_page",value:t}],x)},variant:"outlined",shape:"rounded"})})}a(80);var ye=function(e){var t,a,r,n=[];for(t=0,a=e.length;t<a;t+=6)r=e.slice(t,t+6),n.push(r),1;return n},_e=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).renderProducts=function(){var t=e.props,a=t.data,r=t.general;if(null!==a.items){if(!(a.items.length>0&&null!==a.filters.categoryId))return Object(A.jsx)("div",{className:"page_container center",children:Object(A.jsx)("h1",{style:{fontSize:"40px"},children:" Choose Category"})});var n=a.items.filter((function(e){return e.categoryId===a.filters.categoryId}));if(a.filters.ratings.length>0&&(n=n.filter((function(e){return a.filters.ratings.find((function(t){return t===e.rating}))}))),0===a.filters.price[0]&&0===a.filters.price[1]||(n=n.filter((function(e){return e.price>=a.filters.price[0]&&e.price<=a.filters.price[1]}))),a.filters.colors.length>0&&(n=n.filter((function(e){return a.filters.colors.find((function(t){return t===e.color}))}))),n.length>0){var c=ye(n);try{return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(L.a,{children:c[a.current_page-1].map((function(e){return Object(A.jsx)(I.a,{xl:4,lg:4,className:"mt-4",md:6,sm:6,xs:12,children:Object(A.jsx)(Y,{product:e})},e.id)}))}),Object(A.jsx)(L.a,{children:Object(A.jsx)(I.a,{className:"mt-5 mb-1 center",xl:12,lg:12,md:12,sm:12,xs:12,children:Object(A.jsx)(ve,{pages:c,data:a,general:r})})})]})}catch(l){}}}},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){var e=this.props,t=e.general,a=e.data,r=e.default_colors;return Object(A.jsx)("div",{className:"ml-5 mb-5 mr-5",children:Object(A.jsxs)(L.a,{children:[Object(A.jsx)(I.a,{xl:3,lg:3,md:6,sm:12,xs:12,className:"mt-4",children:Object(A.jsx)(be,{general:t,data:a,default_colors:r})}),Object(A.jsx)(I.a,{xl:9,lg:9,md:6,sm:12,xs:12,children:!0===a.isLoading?Object(A.jsx)(L.a,{children:[1,2,3,4,5,6].map((function(e){return Object(A.jsx)(I.a,{xl:4,lg:4,className:"mt-4",md:6,sm:6,xs:12,children:Object(A.jsx)(q,{width:"250px",height:"250px"})},e)}))}):this.renderProducts()})]})})}}]),a}(n.Component),Ne=Object(f.b)((function(e){var t=e.ProductR;return{data:t.data,default_colors:t.default_colors}}),r)(_e),Ce=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(A.jsxs)("div",{className:"page_container",children:[Object(A.jsx)(L.a,{children:Object(A.jsx)(I.a,{xl:12,lg:12,md:12,sm:12,xs:12,children:Object(A.jsx)(U,{})})}),Object(A.jsx)("h1",{className:"text-center mt-3 black_color",children:"Our e-commerce store"}),Object(A.jsx)(L.a,{children:Object(A.jsx)(I.a,{xl:12,lg:12,md:12,sm:12,xs:12,children:Object(A.jsx)(K,{})})}),Object(A.jsx)(L.a,{className:"mt-4",children:Object(A.jsx)(I.a,{xl:12,lg:12,md:12,sm:12,xs:12,children:Object(A.jsx)(Ne,{})})})]})}}]),a}(n.Component),Ee=(a(116),Object(j.d)(D,{},window.__REDUX_DEVTOOLS_EXTENSION__?Object(j.c)(Object(j.a)(p.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()):Object(j.c)(Object(j.a)(p.a)))),Re=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(A.jsx)(f.a,{store:Ee,children:Object(A.jsx)(Ce,{})})}}]),a}(n.Component),Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,169)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),r(e),n(e),c(e),l(e)}))};s.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(Re,{})}),document.getElementById("root")),Pe()},92:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.16932304.chunk.js.map