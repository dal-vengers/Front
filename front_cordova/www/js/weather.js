function load_data(){
    $.ajax({
        type:"GET",
        url :ENDPOINT+"/weather",
        success:function(res){
            $('#weather').text(res["result"][0]);
            $('#pm').text(res["result"][3]);
            $('#temp').text(res["result"][1]);
            $('#hum').text(res["result"][2]);
        },
        fail:function(err){
            console.log(err);
        }
    })
}
load_data();

