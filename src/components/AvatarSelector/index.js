import './style.modules.css'
import { AvatarOption } from '../AvatarOption';
import wm1 from "../../assets/avatars/wm1.jpg"
import wm2 from "../../assets/avatars/wm2.jpg"
import wm3 from "../../assets/avatars/wm3.jpg"
import wm4 from "../../assets/avatars/wm4.jpg"
import wm5 from "../../assets/avatars/wm5.jpg"
import wm6 from "../../assets/avatars/wm6.jpg"
import wm7 from "../../assets/avatars/wm7.jpg"
import wm8 from "../../assets/avatars/wm8.jpg"
import bm1 from "../../assets/avatars/bm1.jpg"
import bm2 from "../../assets/avatars/bm2.jpg"
import bm3 from "../../assets/avatars/bm3.jpg"
import bm4 from "../../assets/avatars/bm4.jpg"
import bm5 from "../../assets/avatars/bm5.jpg"
import bm6 from "../../assets/avatars/bm6.jpg"
import bm7 from "../../assets/avatars/bm7.jpg"
import bm8 from "../../assets/avatars/bm8.jpg"
import bf1 from "../../assets/avatars/bf1.jpg"
import bf2 from "../../assets/avatars/bf2.jpg"
import bf3 from "../../assets/avatars/bf3.jpg"
import bf4 from "../../assets/avatars/bf4.jpg"
import bf5 from "../../assets/avatars/bf5.jpg"
import bf6 from "../../assets/avatars/bf6.jpg"
import bf7 from "../../assets/avatars/bf7.jpg"
import bf8 from "../../assets/avatars/bf8.jpg"
import wf1 from "../../assets/avatars/wf1.jpg"
import wf2 from "../../assets/avatars/wf2.jpg"
import wf3 from "../../assets/avatars/wf3.jpg"
import wf4 from "../../assets/avatars/wf4.jpg"
import wf5 from "../../assets/avatars/wf5.jpg"
import wf6 from "../../assets/avatars/wf6.jpg"
import wf7 from "../../assets/avatars/wf7.jpg"
import wf8 from "../../assets/avatars/wf8.jpg"
import lf1 from "../../assets/avatars/lf1.jpg"
import lf2 from "../../assets/avatars/lf2.jpg"
import lf3 from "../../assets/avatars/lf3.jpg"
import lf4 from "../../assets/avatars/lf4.jpg"
import lf5 from "../../assets/avatars/lf5.jpg"
import lf6 from "../../assets/avatars/lf6.jpg"
import lf7 from "../../assets/avatars/lf7.jpg"
import lf8 from "../../assets/avatars/lf8.jpg"
import lm1 from "../../assets/avatars/lm1.jpg"
import lm2 from "../../assets/avatars/lm2.jpg"
import lm3 from "../../assets/avatars/lm3.jpg"
import lm4 from "../../assets/avatars/lm4.jpg"
import lm5 from "../../assets/avatars/lm5.jpg"
import lm6 from "../../assets/avatars/lm6.jpg"
import lm7 from "../../assets/avatars/lm7.jpg"
import lm8 from "../../assets/avatars/lm8.jpg"
export function AvatarSelector(props){
    return (
        <div class="container parent">
            <div class="row">
                <AvatarOption id="img1" image={bf1} description="Image 1" value={props.value} name={props.name}/>
                <AvatarOption id="img2" image={bf2} description="Image 2" value={props.value} name={props.name}/> 
                <AvatarOption id="img3" image={bf3} description="Image 3" value={props.value} name={props.name}/>
                <AvatarOption id="img4" image={bf4} description="Image 4" value={props.value} name={props.name}/>
                <AvatarOption id="img5" image={bf5} description="Image 5" value={props.value} name={props.name}/>
                <AvatarOption id="img6" image={bf6} description="Image 6" value={props.value} name={props.name}/> 
                <AvatarOption id="img7" image={bf7} description="Image 7" value={props.value} name={props.name}/>
                <AvatarOption id="img8" image={bf8} description="Image 8" value={props.value} name={props.name}/>
            </div>
            <div class="row">
                <AvatarOption id="img9" image={lf1} description="Image 9" value={props.value} name={props.name}/>
                <AvatarOption id="img10" image={lf2} description="Image 10" value={props.value} name={props.name}/> 
                <AvatarOption id="img11" image={lf3} description="Image 11" value={props.value} name={props.name}/>
                <AvatarOption id="img12" image={lf4} description="Image 12" value={props.value} name={props.name}/>
                <AvatarOption id="img13" image={lf5} description="Image 13" value={props.value} name={props.name}/>
                <AvatarOption id="img14" image={lf6} description="Image 14" value={props.value} name={props.name}/> 
                <AvatarOption id="img15" image={lf7} description="Image 15" value={props.value} name={props.name}/>
                <AvatarOption id="img16" image={lf8} description="Image 16" value={props.value} name={props.name}/>
            </div>
            <div class="row">
                <AvatarOption id="img17" image={wf1} description="Image 17" value={props.value} name={props.name}/>
                <AvatarOption id="img18" image={wf2} description="Image 18" value={props.value} name={props.name}/> 
                <AvatarOption id="img19" image={wf3} description="Image 19" value={props.value} name={props.name}/>
                <AvatarOption id="img20" image={wf4} description="Image 20" value={props.value} name={props.name}/>
                <AvatarOption id="img21" image={wf5} description="Image 21" value={props.value} name={props.name}/>
                <AvatarOption id="img22" image={wf6} description="Image 22" value={props.value} name={props.name}/> 
                <AvatarOption id="img23" image={wf7} description="Image 23" value={props.value} name={props.name}/>
                <AvatarOption id="img24" image={wf8} description="Image 24" value={props.value} name={props.name}/>
            </div>
            <div class="row">
                <AvatarOption id="img25" image={bm1} description="Image 25" value={props.value} name={props.name}/>
                <AvatarOption id="img26" image={bm2} description="Image 26" value={props.value} name={props.name}/> 
                <AvatarOption id="img27" image={bm3} description="Image 27" value={props.value} name={props.name}/>
                <AvatarOption id="img28" image={bm4} description="Image 28" value={props.value} name={props.name}/>
                <AvatarOption id="img29" image={bm5} description="Image 29" value={props.value} name={props.name}/>
                <AvatarOption id="img30" image={bm6} description="Image 30" value={props.value} name={props.name}/> 
                <AvatarOption id="img31" image={bm7} description="Image 31" value={props.value} name={props.name}/>
                <AvatarOption id="img32" image={bm8} description="Image 32" value={props.value} name={props.name}/>
            </div>
            <div class="row">
                <AvatarOption id="img33" image={lm1} description="Image 33" value={props.value} name={props.name}/>
                <AvatarOption id="img34" image={lm2} description="Image 34" value={props.value} name={props.name}/> 
                <AvatarOption id="img35" image={lm3} description="Image 35" value={props.value} name={props.name}/>
                <AvatarOption id="img36" image={lm4} description="Image 36" value={props.value} name={props.name}/>
                <AvatarOption id="img37" image={lm5} description="Image 37" value={props.value} name={props.name}/>
                <AvatarOption id="img38" image={lm6} description="Image 38" value={props.value} name={props.name}/> 
                <AvatarOption id="img39" image={lm7} description="Image 39" value={props.value} name={props.name}/>
                <AvatarOption id="img40" image={lm8} description="Image 40" value={props.value} name={props.name}/>
            </div>
            <div class="row">
                <AvatarOption id="img41" image={wm1} description="Image 41" value={props.value} name={props.name}/>
                <AvatarOption id="img42" image={wm2} description="Image 42" value={props.value} name={props.name}/> 
                <AvatarOption id="img43" image={wm3} description="Image 43" value={props.value} name={props.name}/>
                <AvatarOption id="img44" image={wm4} description="Image 44" value={props.value} name={props.name}/>
                <AvatarOption id="img45" image={wm5} description="Image 45" value={props.value} name={props.name}/>
                <AvatarOption id="img46" image={wm6} description="Image 46" value={props.value} name={props.name}/> 
                <AvatarOption id="img47" image={wm7} description="Image 47" value={props.value} name={props.name}/>
                <AvatarOption id="img48" image={wm8} description="Image 48" value={props.value} name={props.name}/>
            </div>
        </div>
    );
}