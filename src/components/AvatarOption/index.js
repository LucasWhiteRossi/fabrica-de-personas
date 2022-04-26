export function AvatarOption(props){
    return (
        <div class='col text-center'>
        <input name={props.name} type="radio" name="imgbackground" id={props.id} class="d-none imgbgchk" value={props.value}/>
        <label for={props.id}>
        <img src={props.image} alt={props.description?props.description:"avatar photo"}/>
        <div class="tick_container">
            <div class="tick"><i class="fa fa-check"></i></div>
        </div>
        </label>
</div>);
}