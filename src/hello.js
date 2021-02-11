import React from 'react';

function Hello({name , color , isSpecial}){
   return (
      <div style={
         {color}
      }>
         {isSpecial && 123}   
         안녕하세요 {name}
      </div>

   );
}

Hello.defaultProps={
   name : "Tom"
 }

export default Hello;