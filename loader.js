export function load_component(component_path, component_query){
    $(document).ready(function() {
        $(component_query).load('http://localhost/GUI_ROBOT_CONTROL_PANEL/' + component_path);
    });
}
export function load_css(css_path){
    $(document).ready(function() {
        $('head').append('<link rel="stylesheet" type="text/css" href="'+css_path+'">');
    });
}
