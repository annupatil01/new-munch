import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const Chocolate = ({name,emoji})=>{


    return (<>
    <h1>{name}-{emoji}</h1>
    <hr/>
    </>)
}

root.render(<>
 <h1>**All Chocolates**</h1>
 
 <Chocolate name="Munch" emoji="🍫"/>
 <Chocolate name="Kitkat" emoji="🫔"/>
 <Chocolate name="5star" emoji="⭐"/>
 <Chocolate name="Icecream" emoji="🍦"/>
 </>)
