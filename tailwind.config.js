/** @type {import('tailwindcss').Config} */

const plugin =  require('tailwindcss/plugin');

const  rotateY = plugin(function({ addUtilities }){
     addUtilities  ({
         '.rotate-y-180':{
           transform: "rotateY(180deg)"
         },

         '.-rotate-y-180':{
          transform: "rotateY(-180deg)"
        }

     })
})

module.exports = {
  mode :'jit',
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary" : "#3D294C",
        "color-primary-light" : "#020726",
        "color-primary-dark" : "#010417",
        "color-secondary" : "#38bdf8",
        "color-gray" : "#333",
        "color-white" : "#fff",
        "color-blob" : "#A427DF",
      }
    },
    container:{
      center:true,
      padding:{
        DEFUALT:'20px',
        md: "50px"
      }
    }
  },
  plugins: [rotateY],
}

